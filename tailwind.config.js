/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "16px",
				sm: "24px",
				md: "32px",
			},
		},
		extend: {
			fontFamily: {
				satoshi: ["Satoshi", "sans-serif"],
			},

			backgroundImage: {
				"table-gradient": "linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",

				"table-gradient-left": "linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
			},
			colors: {
				// Brand Colors
				"brand-primary": "#4C17ED",
				"brand-primary-light": "#F3F1FE",
				"brand-primary-dark": "#4110D5",

				// Neutral Colors
				neutral: "#E5E5E5",
				"neutral-lighter": "#FAFAFA",
				"neutral-light": "#F5F5F5",
				"neutral-dark": "#525252",
				"neutral-darker": "#171717",

				// Border Colors
				border: "#D4D4D4",
				"border-light": "#E5E5E5",
				"border-primary-light": "#B7A9F9",
				"border-dark": "#171717",
				"border-medium": "#D2D0D8",
				"border-error-light": "#FCA5A5",

				// Text Colors
				primary: "#171717",
				secondary: "#3D3A46",
				soft: "#737373",
				"error-text": "#DC2626",
				// Error & Success
				success: "#16A34A",
				error: "#EF4444",
				light: "#9E9AAC",
				warning: "#D97706",

				// Background Colors
				"bg-neutral-lighter": "#FAF9FB",
				"bg-neutral-light": "#F5F4F6",
				"bg-neutral": "#E4E2E8",
				"bg-neutral-dark": "#4E4A5A",
				"bg-neutral-darker": "#161519",
				"bg-primary": "#4C17ED",
				"bg-primary-extra-light": "#F3F1FE",
				"bg-primary-light": "#D7D0FB",
				"bg-primary-dark": "#4110D5",
				"bg-error": "#EF4444",
				"bg-error-light": "#FECACA",
				"bg-error-lighter": "#FEE2E2",
				"bg-error-dark": "#B91C1C",
				"bg-success-light": "#DCFCE7",
				"bg-success": "#22C55E",
				"bg-success-dark": "#15803D",
				"bg-warning-light": "#FEF3C7",
				"bg-warning": "#F59E0B",
				"bg-warning-dark": "#B45309",
			},
			spacing: {
				"2xs": "4px",
				xs: "8px",
				sm: "12px",
				md: "16px",
				lg: "24px",
				xl: "32px",
				"2xl": "48px",
				"3xl": "64px",
				"4xl": "80px",
				"5xl": "112px",
				"6xl": "144px",
				"7xl": "208px",
				"8xl": "240px",
			},
			boxShadow: {
				xs: "0px 1px 3px rgba(23, 23, 23, 0.05)",
				sm: "0px 2px 4px rgba(23, 23, 23, 0.10)",
				md: "0px 4px 16px rgba(23, 23, 23, 0.08)",
				lg: "0px 8px 32px rgba(23, 23, 23, 0.3)",
			},
			borderRadius: {
				md: "4px",
				lg: "16px",
			},
			keyframes: {
				"fade-in": {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
				"slide-in-x": {
					from: {
						transform: "translateX(-100%)",
					},
					to: {
						transform: "translateX(0)",
					},
				},
				"slide-out-x": {
					from: {
						transform: "translateX(0)",
					},
					to: {
						transform: "translateX(-100%)",
					},
				},
			},
			animation: {
				fadeIn: "fade-in .3s ease",
				slideInX: "slide-in-x .3s ease",
				slideOutX: "slide-out-x .3s ease",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
}
