/*
 * @Author: renlei
 * @Date: 2019-11-22 17:04:20
 * @LastEditors: renlei
 * @LastEditTime: 2019-11-22 17:39:31
 * @Description: 
 */
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: 'babel-eslint',
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'jsx-a11y'],
  rules: {
    "jsx-a11y/rule-name": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-console":"off",
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', 'jsx'] }]
  }
}
