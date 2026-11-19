import { Marked, Renderer } from 'marked';
import type { TocItem } from './schema';

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function highlightCode(code: string, lang: string): string {
  const escaped = escapeHtml(code);
  if (!lang || lang === 'text' || lang === 'plaintext') {
    return escaped;
  }

  return escaped
    .replace(
      /(\/\/[^\n]*|#[^\n]*|\/\*[\s\S]*?\*\/)/g,
      '<span class="token-comment">$1</span>'
    )
    .replace(
      /(&quot;.*?&quot;|&#39;.*?&#39;|`[^`]*`)/g,
      '<span class="token-string">$1</span>'
    )
    .replace(
      /\b(const|let|var|function|return|async|await|import|export|from|type|interface|class|extends|implements|new|if|else|for|while|switch|case|break|continue|try|catch|finally|default|pub|fn|struct|enum|impl|match|use|mod|crate|where)\b/g,
      '<span class="token-keyword">$1</span>'
    )
    .replace(
      /\b(true|false|null|undefined|NaN|Infinity|Self|Some|None|Ok|Err)\b/g,
      '<span class="token-boolean">$1</span>'
    )
    .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="token-number">$1</span>');
}

export function renderMarkdown(markdown: string): {
  html: string;
  toc: TocItem[];
} {
  const toc: TocItem[] = [];
  const usedIds = new Map<string, number>();

  const renderer = new Renderer();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  renderer.image = ({ href, title, text }) => {
    const resolvedHref =
      href && href.startsWith('/') && !href.startsWith('//') && basePath
        ? `${basePath}${href}`
        : href;
    const titleAttr = title ? ` title="${escapeHtml(title)}"` : '';
    return `<img src="${escapeHtml(resolvedHref)}" alt="${escapeHtml(text || '')}"${titleAttr} />`;
  };

  renderer.heading = ({ text, depth }) => {
    const cleanText = text.replace(/<[^>]*>/g, '').replace(/`/g, '');
    let id = slugifyHeading(cleanText);
    const count = usedIds.get(id) ?? 0;
    usedIds.set(id, count + 1);
    if (count > 0) {
      id = `${id}-${count}`;
    }

    if (depth === 2 || depth === 3) {
      toc.push({
        id,
        text: cleanText,
        level: depth as 2 | 3,
      });
    }

    const parsedInline = markedInstance.parseInline(text) as string;
    return `<h${depth} id="${id}" class="scroll-mt-24">
      <a href="#${id}" class="no-underline hover:underline">${parsedInline}</a>
    </h${depth}>`;
  };

  renderer.code = ({ text, lang }) => {
    const language = (lang || 'text').trim();
    const highlighted = highlightCode(text, language);
    const encodedRaw = Buffer.from(text, 'utf-8').toString('base64');

    return `<div class="code-block-wrapper my-6 rounded-md overflow-hidden border border-line bg-[#0B1324] text-[#EDF2FA]">
      <div class="flex items-center justify-between px-4 py-2 bg-[#111C33] border-b border-[#1E2E4D] text-xs font-mono text-[#889AB8]">
        <span class="uppercase tracking-wider text-[#B8C6DC]">${escapeHtml(language)}</span>
        <button type="button" class="copy-code-btn inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#1E2E4D] hover:bg-[#2A3F66] text-[#EDF2FA] transition-colors cursor-pointer" data-code="${encodedRaw}" aria-label="Copy code to clipboard">
          <span class="copy-label">Copy</span>
        </button>
      </div>
      <pre class="!m-0 !p-4 overflow-x-auto text-sm leading-relaxed font-mono bg-transparent"><code class="language-${escapeHtml(language)}">${highlighted}</code></pre>
    </div>`;
  };

  const markedInstance = new Marked({
    gfm: true,
    breaks: false,
    renderer,
  });

  const html = markedInstance.parse(markdown) as string;
  return { html, toc };
}

export function calculateReadingTime(content: string): string {
  const words = content
    .replace(/```[\s\S]*?```/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}
