# @modyqyw/eslint-config

An ESLint shareable config for javascript and typescript.

## Usage

- Install the config.

```sh
# for javascript
npm i eslint@~7.7.0 @modyqyw/eslint-config@~1.7.0 -D
# for typescript
npm i eslint@~7.7.0 @modyqyw/eslint-config@~1.7.0 typescript@~4.0.0 @typescript-eslint/eslint-plugin@~3.10.0 @typescript-eslint/parser@~3.10.0 -D
```

For yarn, run scripts below.

```sh
# for javascript
yarn add eslint@~7.7.0 @modyqyw/eslint-config@~1.7.0 -D
# for typescript
yarn add eslint@~7.7.0 @modyqyw/eslint-config@~1.7.0 typescript@~4.0.0 @typescript-eslint/eslint-plugin@~3.10.0 @typescript-eslint/parser@~3.10.0 -D
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
    "json": "jsonc",
    "vue-html": "html"
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
    "*.swan": "html",
    "*.ttml": "html",
    "*.ttss": "css",
    "*.jxml": "html",
    "*.jxss": "css",
    "*.wpy": "vue",
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

- [@modyqyw/eslint-config-vue](https://github.com/MillCloud/eslint-config-vue)
- [@modyqyw/eslint-config-vue-ts](https://github.com/MillCloud/eslint-config-vue-ts)
- [@modyqyw/eslint-config-react](https://github.com/MillCloud/eslint-config-react)

## License

[MIT](./LICENSE)

Copyright (c) 2020-present MillCloud
