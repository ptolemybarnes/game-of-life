module.exports = {
  extends: 'airbnb-base',
  plugins: [
    'jest',
  ],
  {
    "rules": {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/valid-expect": "error"
    }
  },
  {
  "env": {
    "jest/globals": true
  }
};
