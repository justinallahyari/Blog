import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        ink: {
          DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)',
          muted: 'rgb(var(--color-ink-muted) / <alpha-value>)',
          subtle: 'rgb(var(--color-ink-subtle) / <alpha-value>)',
        },
        line: 'rgb(var(--color-line) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          hover: 'rgb(var(--color-accent-hover) / <alpha-value>)',
          soft: 'rgb(var(--color-accent-soft) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'var(--font-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            '--tw-prose-body': 'rgb(var(--color-ink-muted))',
            '--tw-prose-headings': 'rgb(var(--color-ink))',
            '--tw-prose-lead': 'rgb(var(--color-ink-muted))',
            '--tw-prose-links': 'rgb(var(--color-accent))',
            '--tw-prose-bold': 'rgb(var(--color-ink))',
            '--tw-prose-counters': 'rgb(var(--color-accent))',
            '--tw-prose-bullets': 'rgb(var(--color-accent))',
            '--tw-prose-hr': 'rgb(var(--color-line))',
            '--tw-prose-quotes': 'rgb(var(--color-ink))',
            '--tw-prose-quote-borders': 'rgb(var(--color-accent))',
            '--tw-prose-code': 'rgb(var(--color-ink))',
            fontSize: '1.03125rem',
            lineHeight: '1.8',
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            h2: {
              marginTop: '2em',
              marginBottom: '0.75em',
              letterSpacing: '-0.015em',
            },
            h3: {
              marginTop: '1.6em',
              marginBottom: '0.6em',
            },
            li: {
              marginTop: '0.45em',
              marginBottom: '0.45em',
            },
            a: {
              textDecorationColor: 'rgb(var(--color-accent) / 0.45)',
              textUnderlineOffset: '4px',
              fontWeight: '500',
            },
            'a:hover': {
              color: 'rgb(var(--color-accent-hover))',
              textDecorationColor: 'rgb(var(--color-accent-hover))',
            },
            code: {
              backgroundColor: 'rgb(var(--color-accent-soft))',
              padding: '0.15em 0.35em',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
