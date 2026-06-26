/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface": "var(--surface)",
        "surface-container": "var(--surface-container)",
        "surface-container-low": "var(--surface-container-low)",
        "surface-container-lowest": "var(--surface-container-lowest)",
        "inverse-surface": "var(--inverse-surface)",
        "background": "var(--background)",
        
        "primary": "var(--primary)",
        "on-primary": "var(--on-primary)",
        "primary-fixed": "var(--primary-fixed)",
        "on-primary-fixed": "var(--on-primary-fixed)",
        
        "secondary": "var(--secondary)",
        "on-secondary": "var(--on-secondary)",
        "secondary-container": "var(--secondary-container)",
        "on-secondary-container": "var(--on-secondary-container)",
        
        "error": "var(--error)",
        "error-container": "var(--error-container)",
        "on-error-container": "var(--on-error-container)",
        
        "on-background": "var(--on-background)",
        "on-surface": "var(--on-surface)",
        "on-surface-variant": "var(--on-surface-variant)",
        
        "outline": "var(--outline)",
        "outline-variant": "var(--outline-variant)",
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "16px",
        "2xl": "24px",
        "full": "9999px"
      },
      boxShadow: {
        'sm': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 4px 16px -4px rgba(0, 0, 0, 0.02)',
        'md': '0 4px 12px -4px rgba(0, 0, 0, 0.08), 0 8px 24px -8px rgba(0, 0, 0, 0.03)',
        'lg': '0 8px 24px -8px rgba(0, 0, 0, 0.12), 0 16px 48px -16px rgba(0, 0, 0, 0.04)',
        'xl': '0 12px 32px -12px rgba(0, 0, 0, 0.16), 0 24px 64px -24px rgba(0, 0, 0, 0.06)',
      },
      fontFamily: {
        "body-md": ["Inter", "sans-serif"],
        "data-mono": ["Inter", "sans-serif"],
        "headline-md": ["Inter", "sans-serif"],
        "headline-lg": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "title-lg": ["Inter", "sans-serif"],
        "display-lg": ["Inter", "sans-serif"],
        "headline-lg-mobile": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
