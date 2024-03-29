module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
      {
        "env": {
          "node": true
        },
        "files": [
          ".eslintrc.{js,cjs}"
        ],
        "parserOptions": {
          "sourceType": "script"
        }
      }
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "rules": {
      "semi": "off",
      "@typescript-eslint/semi": "off",
      "@typescript-eslint/space-before-function-paren": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "object-property-newline": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/quotes": "off",
    },
    "ignorePatterns": [".eslintrc.js", "webpack-*.config.js"]
    }
  