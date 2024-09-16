/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "360px",
			md: "768",
			lg: "1024",
		},

		extend: {
			maxWidth: {
				"screen-sm": "400px",
				"screen-md": "768px",
				"screen-lg": "1024px",
			},
			colors: {
				main: {
					lowest: "#ffffff",
					lower: "#f5f5f5",
					low: "#e6e6e6",
					medium: "#37475a",
					high: "#232f3e",
					higher: "#131921",
					highest: "#000000",
				},
				brand: {
					primary: "#ff9900",
					grey: "#6f7373",
				},
				info: {
					lower: "#c8f3fa",
					low: "#66aab6",
					medium: "#007185",
					high: "#005a6a",
					higher: "#004450",
				},
				danger: {
					lowest: "#fad0c8",
					low: "#e06d88",
					medium: "#cc0c39",
					high: "#a30a2e",
				},
				button: {
					default: {
						background: "#ff9900",
						border: "#e58a00",
					},
					hover: {
						background: "#ffb84d",
						border: "#d17a00",
					},
					active: {
						background: "#ff9900",
						border: "#007185",
					},
				},
				transparency: {
					invisible: "#00000000",
					mask: "##0000000a",
					overlay: "#00000099",
				},
			},
			opacity: {
				invisible: "100",
				mask: ".40",
				overlay: ".60",
			},
			dropShadow: {
				dropdown: "0 2px 4px 0 rgba(0,0,0,0.13)",
			},
		},
		plugins: [],
		safelist: ["tag-choice", "tag-new", "tag-best-seller", "tag-flash"],
	},
};
