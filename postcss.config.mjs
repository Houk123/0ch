const config = {
  plugins: {
    "postcss-import": {},
    "postcss-mixins": {},
    "postcss-functions": {
      functions: {
        pxToRem: (px) => `${px / 16}rem`,
      },
    },
    "postcss-custom-properties": {
      preserve: false,
    },
    "postcss-nested": {},
    "cssnano": {},
    "autoprefixer": {},
    "postcss-preset-env": {
      stage: 1,
      features: {
        'nesting-rules': false
      }
    }
  },
};

export default config;
