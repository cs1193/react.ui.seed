const configuration = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '>5%']
    }
  }
};

module.exports = configuration;
