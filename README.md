# @modyqyw/eslint-config

An ESLint shareable config for javascript and typescript.

## Usage

- Install the config.

```sh
# for javascript
npm i eslint@~6.8.0 @modyqyw/eslint-config@~1.4.0 -D
# for typescript
npm i eslint@~6.8.0 @modyqyw/eslint-config@~1.4.0 typescript@~3.9.0 @typescript-eslint/eslint-plugin@~2.34.0 @typescript-eslint/parser@~2.34.0 -D
```

For yarn, run scripts below.

```sh
# for javascript
yarn add eslint@~6.8.0 @modyqyw/eslint-config@~1.4.0 -D
# for typescript
yarn add eslint@~6.8.0 @modyqyw/eslint-config@~1.4.0 typescript@~3.9.0 @typescript-eslint/eslint-plugin@~2.34.0 @typescript-eslint/parser@~2.34.0 -D
```

- Add `tsconfig.json` into the project root if you use typescript.

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
- Set up `Settings.json`. Then `F1 => Format Document` => `F1 => File: Save`.

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
    "*.wxs": "javascriptreact",
    "*.wxss": "css",
    "*.axml": "html",
    "*.sjs": "javascriptreact",
    "*.acss": "css",
    "*.wpy": "html",
    "*.json": "jsonc",
    "*.nvue": "vue",
    "*.ux": "vue"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  }
}
```

## More Config

- [@modyqyw/eslint-config-vue](https://github.com/Millcloud/eslint-config-vue)
- [@modyqyw/eslint-config-vue-ts](https://github.com/Millcloud/eslint-config-vue-ts)
- [@modyqyw/eslint-config-react](https://github.com/Millcloud/eslint-config-react)

## License

[MIT](./LICENSE)

Copyright (c) 2020-present Millcloud
