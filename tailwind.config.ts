import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#05386B',
				offwhite: '#fed5b7',
				deepred: '#850101',
				golden: '#c6a53e',
				neogreen: '#5cdb95'
      },
      fontFamily: {
				display: ['Forum', 'serif'],
				sans: ['Noto-Sans-Japanese', 'sans-serif'],
				serif: ['Playfair-Display', 'serif']
			},
			backgroundImage: {
				darkhero: "url('@/public/assets/images/darker-background.jpg')",
				lighthero: "url('@/public/assets/images/lighter-background.jpg')",
				waterhero: "url('@/public/assets/images/watery-background.jpg')",
				multihero: "url('@/public/assets/images/sampler-background.jpg')"
			}
    },
  },
  plugins: [],
} satisfies Config;
