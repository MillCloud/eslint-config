# @modyqyw/eslint-config

An ESLint shareable config for javascript and typescript.

## Usage

- Install the config.

```sh
npm i eslint@~6.8.0 @modyqyw/eslint-config@~1.2.0 -D # for javascript
npm i eslint@~6.8.0 @modyqyw/eslint-config@~1.2.0 typescript@~3.8.0 -D # for typescript
```

For yarn, run scripts below.

```sh
yarn add eslint@~6.8.0 @modyqyw/eslint-config@~1.2.0 -D # for javascript
yarn add eslint@~6.8.0 @modyqyw/eslint-config@~1.2.0 typescript@~3.8.0 -D # for typescript
```

- Set up.

```js
// .eslintrc.js
module.exports = {
  extends: ["@modyqyw"],
};
```

## VSCode

- Install plugins.
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- Set up `Settings.json`. Then `F1` => `Format Document`(call vetur for `*.vue` files and prettier for other files) => Save File(call ESLint).

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact",
    "json": "jsonc"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "vue-html"
  ],
  "files.eol": "\n",
  "files.associations": {
    "*.js": "javascriptreact",
    "*.ts": "typescriptreact",
    "*.wxml": "html",
    "*.wxs": "javascript",
    "*.wxss": "css",
    "*.axml": "html",
    "*.sjs": "javascript",
    "*.acss": "css",
    "*.wpy": "html",
    "*.json": "jsonc",
    "*.nvue": "vue"
  },
  "vetur.format.defaultFormatterOptions": {
    "prettyhtml": {
      "wrapAttributes": true
    }
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  }
}
```

## More Config

- [@modyqyw/eslint-config-vue](https://github.com/Millcloud/eslint-config-vue)
- [@modyqyw/eslint-config-react](https://github.com/Millcloud/eslint-config-react)

## License

[MIT](./LICENSE)

Copyright (c) 2020-present Millcloud
