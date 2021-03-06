module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  rules: {
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
};
