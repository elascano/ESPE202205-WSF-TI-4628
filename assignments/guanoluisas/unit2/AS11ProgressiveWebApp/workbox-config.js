module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,json,jpg}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};