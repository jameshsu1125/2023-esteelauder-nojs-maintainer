/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
	content: ['./src/**/*.{html,js}'],
	daisyui: {
		themes: ['bumblebee'],
	},
	theme: {
		screens: {
			xl: '1366px',
		},
		container: { screen: {} },
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
