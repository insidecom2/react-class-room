const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@layout': 'src/layout',
        '@pages': 'src/pages',
        '@routes': 'src/routes'
    })(config);

    return config;
};