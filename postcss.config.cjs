//const postcssNested = require('postcss-nested')
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-preset-env'),
    require('postcss-nested'),
    require('postcss-custom-media'),
    !dev &&
      cssnano({
        preset: 'default',
      }),
  ],
};
