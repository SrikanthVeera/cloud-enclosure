/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serifHeading: ["Playfair Display", "Georgia", "serif"] // if you use Playfair
      },
      colors: {
        brand: {
          DEFAULT: "#0ea5a4",
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      backgroundColor: {
        'primary': '#ffffff',
        'secondary': '#f9fafb',
        'tertiary': '#f3f4f6',
      }
    },
  },
  plugins: [],
};
