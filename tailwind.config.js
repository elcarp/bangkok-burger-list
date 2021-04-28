const colors = require('tailwindcss/colors')

module.exports = {
	theme: {
		screens: {
			sm: '569px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		fontFamily: {
			sans: ['Rubik', 'sans-serif'],
			serif: ['Spectral', 'serif'],
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
}
