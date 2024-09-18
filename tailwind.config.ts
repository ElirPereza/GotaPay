import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "15px",
		screens: {
		  "sm": "640px",
		  "md": "768px",
		  "lg": "960px",
		  "xl": "1200px",
		},
	  },
	  fontFamily: {
		primary: "var(--font-tt-norms-pro )",
	  },
    extend: {
		colors: {
			primary: '#1c2233',
			accent: {
			  DEFAULT: '#10b981',    // Verde neón más oscuro para hover // 
			},
			secondary: '#2b344f',  // 
		  },
    },
  },
  plugins: [require("tailwindcss-animate")],
}satisfies Config;
export default config;
