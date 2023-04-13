/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		boxShadow: {
			sm: '0px 0px 12px 1px rgba(0, 0, 0, 0.2)',
			md: '0px 0px 15px 10px rgba(0, 0, 0, 0.2)'
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans', 'sans-serif']
			}
		}
	},
	plugins: []
};
