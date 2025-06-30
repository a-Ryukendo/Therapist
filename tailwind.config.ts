import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#7B5FE8',
        'accent-shade': '#6a52cc',
        lilac: '#f7f4ff',
        'about-bg': '#FFF9FF',
        'services-end': '#f0f7ff',
        'testimonial-card-bg': '#fbf9ff',
        'testimonial-start': '#f5f0ff',
        'footer-bg': '#faf9ff',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-lora)', 'serif'],
      },
      backgroundImage: {
        'hero-bg': "url('/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config; 