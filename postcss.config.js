const cssnano = require('cssnano');

module.exports = (ctx) => {
  return {
    plugins: [
      require('rfs'),
      require('autoprefixer'),
      ...(ctx.options.env === 'production'
        ? [
            cssnano({
              preset: 'default',
            }),
          ]
        : []),
    ],
  };
};
