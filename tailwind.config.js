/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				bg: "rgba(19, 19, 19, .8)",
				"rose-900": "rgba(321, 117, 229, 1)",
				"rose-hover": "rgba(321, 117,229,.9)",
				"rose-700": "rgba(184, 92, 183, .82)",
				"gry-500": "rgba(0, 0, 0, .32)",
				"gry-100": "rgba(150, 150, 150, .04)",
                "border-c": "#323232"
			},
		},
	},
	plugins: [],
};
