/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: {
          DEFAULT: 'hsl(var(--border))',
          light: 'var(--border-light)',
          black: 'var(--border-black)',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: {
          DEFAULT: 'hsl(var(--background))',
          light: 'var(--background-light)',
          black: 'var(--background-black)',
        },
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        /* Portfolio theme (from styled-components defaultTheme) */
        main: {
          primary: 'hsl(var(--main-primary))',
          secondary: 'hsl(var(--main-secondary))',
        },
        text: {
          main: 'hsl(var(--text-main))',
          heading: 'hsl(var(--text-heading))',
        },
        /* Portfolio grays */
        gray: {
          50: 'var(--gray-50)',
          200: 'var(--gray-200)',
          800: 'var(--gray-800)',
        },
        level: {
          1: 'hsl(var(--level-1))',
          2: 'hsl(var(--level-2))',
          3: 'hsl(var(--level-3))',
          reforco: 'hsl(var(--level-reforco))',
        },
        status: {
          completed: 'hsl(var(--status-completed))',
          available: 'hsl(var(--status-available))',
          blocked: 'hsl(var(--status-blocked))',
          recommended: 'hsl(var(--status-recommended))',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Open Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Portfolio: heading
        'heading-small': ['1.2rem', { lineHeight: '1.2' }],
        'heading-regular': ['3.2rem', { lineHeight: '1.1' }],
        'heading-large': ['4.8rem', { lineHeight: '1.1' }],
        'heading-huge': ['7rem', { lineHeight: '1' }],
        // Portfolio: main text
        'main-xsmall': ['1.2rem', { lineHeight: '1.5' }],
        'main-small': ['1.4rem', { lineHeight: '1.5' }],
        'main-medium': ['1.6rem', { lineHeight: '1.5' }],
        'main-large': ['1.8rem', { lineHeight: '1.5' }],
        'main-xlarge': ['2.4rem', { lineHeight: '1.4' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      zIndex: {
        base: '10',
        overlay: '20',
        menu: '30',
        modal: '40',
        'always-on-top': '50',
      },
      transitionDuration: {
        default: '300ms',
        fast: '100ms',
      },
      transitionTimingFunction: {
        default: 'ease-in-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
