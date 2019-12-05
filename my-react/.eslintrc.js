/*
 * @Author: renlei
 * @Date: 2019-11-22 17:04:20
 * @LastEditors: renlei
 * @LastEditTime: 2019-12-05 17:48:29
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
    "no-console": "off",
    "linebreak-style": "off",
    "react/destructuring-assignment": "off",
    "no-plusplus": "off",
    "react/button-has-type": "off",
    "react/no-unused-state": "off",
    "react/sort-comp": "off",
    "react/no-access-state-in-setstate":"off",
    "react/prefer-stateless-function": "off",
    "no-param-reassign":"off",
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', 'jsx'] }]
  }
}
