/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
	content: ['./src/**/*.{html,js}'],
	daisyui: {
		themes: ['bumblebee'],
	},
	theme: {
		container: { screen: {} },
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
