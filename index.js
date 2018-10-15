module.exports = {
    extends: [
	    './rules/'
    ].map(require.resolve),
        parserOptions: {
        ecmaVersion: 5,
    },
    env: {
        'node': true,
        'browser': true
    },
    rules: {
        'strict': ['error', 'never']
    }
};
