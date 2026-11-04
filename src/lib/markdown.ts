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

/**
 * Lightweight zero-dependency syntax token colorizer for static HTML output.
 */
function highlightCode(code: string, lang: string): string {
  const escaped = escapeHtml(code);
  if (!lang || lang === 'text' || lang === 'plaintext') {
    return escaped;
  }

  return escaped
    // Comments
    .replace(
      /(\/\/[^\n]*|#[^\n]*|\/\*[\s\S]*?\*\/)/g,
      '<span class="token-comment">$1</span>'
    )
    // Strings
    .replace(
      /(&quot;.*?&quot;|&#39;.*?&#39;|`[^`]*`)/g,
      '<span class="token-string">$1</span>'
    )
    // Keywords
    .replace(
      /\b(const|let|var|function|return|async|await|import|export|from|type|interface|class|extends|implements|new|if|else|for|while|switch|case|break|continue|try|catch|finally|default|pub|fn|struct|enum|impl|match|use|mod|crate|where)\b/g,
      '<span class="token-keyword">$1</span>'
    )
    // Booleans & primitives
    .replace(
      /\b(true|false|null|undefined|NaN|Infinity|Self|Some|None|Ok|Err)\b/g,
      '<span class="token-boolean">$1</span>'
    )
    // Numbers
    .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="token-number">$1</span>');
}

export function renderMarkdown(markdown: string): {
  html: string;
  toc: TocItem[];
} {
  const toc: TocItem[] = [];
  const usedIds = new Map<string, number>();

  const renderer = new Renderer();

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
    return `<h${depth} id="${id}" class="scroll-mt-24 group relative">
      <a href="#${id}" class="no-underline hover:underline">${parsedInline}</a>
    </h${depth}>`;
  };

  renderer.code = ({ text, lang }) => {
    const language = (lang || 'text').trim();
    const highlighted = highlightCode(text, language);
    const encodedRaw = Buffer.from(text, 'utf-8').toString('base64');

    return `<div class="code-block-wrapper my-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-100 shadow-sm">
      <div class="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
        <span class="uppercase tracking-wider font-semibold text-slate-300">${escapeHtml(language)}</span>
        <button type="button" class="copy-code-btn inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer" data-code="${encodedRaw}" aria-label="Copy code to clipboard">
          <span class="copy-label">Copy code</span>
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

export function calculateReadingTime(content: string): {
  readingTime: string;
  readingMinutes: number;
} {
  const words = content
    .replace(/```[\s\S]*?```/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return {
    readingTime: `${minutes} min read`,
    readingMinutes: minutes,
  };
}
