module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  darkMode: "class",
  safelist: [
    {
      pattern: /(bg|text|border)-(background|card|text-primary|text-secondary|border)-(light|dark)/,
      variants: ['dark'],
    },
    'bg-background-light',
    'dark:bg-background-dark',
    'bg-card-light',
    'dark:bg-card-dark',
    'text-text-primary-light',
    'dark:text-text-primary-dark',
    'text-text-secondary-light',
    'dark:text-text-secondary-dark',
    'bg-border-light',
    'dark:bg-border-dark',
    'border-border-light',
    'dark:border-border-dark',
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          DEFAULT: "#2563eb",
          hover: "#1d4ed8"
        },
        "background-light": "#f8f9fa",
        "background-dark": "#0d1117",
        "card-light": "#ffffff",
        "card-dark": "#161b22",
        "text-primary-light": "#1f2937",
        "text-primary-dark": "#e5e7eb",
        "text-secondary-light": "#4b5563",
        "text-secondary-dark": "#9ca3af",
        "border-light": "#e5e7eb",
        "border-dark": "#30363d",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "full": "9999px"
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
      }
    },
  },

  plugins: [
    require('flowbite/plugin')
  ]
}