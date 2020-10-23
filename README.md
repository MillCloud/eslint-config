# @modyqyw/eslint-config

An ESLint shareable config for JavaScript/TypeScript/React/ReactNative/Taro/Vue2/Vue3/UniApp projects.

## Usage

### JavaScript

```sh
npm i -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0
# or
# yarn add -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0
```

```js
// {PROJECT_DIR}/.eslintrc.js
module.exports = {
  extends: ["@modyqyw"],
};
```

### TypeScript

```sh
npm i -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0 @typescript-eslint/parser@~4.5.0 @typescript-eslint/eslint-plugin@~4.5.0 typescript@~4.0.0
# or
# yarn add -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0 @typescript-eslint/parser@~4.5.0 @typescript-eslint/eslint-plugin@~4.5.0 typescript@~4.0.0
```

```js
// {PROJECT_DIR}/.eslintrc.js
module.exports = {
  extends: ["@modyqyw"],
};
```

### React / ReactNative / Taro3 + JavaScript

```sh
npm i -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0
# or
# yarn add -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0
```

```js
// {PROJECT_DIR}/.eslintrc.js
module.exports = {
  extends: ["@modyqyw/eslint-config/react"],
};
```

### React / ReactNative / Taro3 + TypeScript

```sh
npm i -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0 @typescript-eslint/parser@~4.5.0 @typescript-eslint/eslint-plugin@~4.5.0 typescript@~4.0.0
# or
# yarn add -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0 @typescript-eslint/parser@~4.5.0 @typescript-eslint/eslint-plugin@~4.5.0 typescript@~4.0.0
```

```js
// {PROJECT_DIR}/.eslintrc.js
module.exports = {
  extends: ["@modyqyw/eslint-config/react"],
};
```

### Vue2 / UniApp + JavaScript

```sh
npm i -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0
# or
# yarn add -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0
```

```js
// {PROJECT_DIR}/.eslintrc.js
module.exports = {
  extends: ["@modyqyw/eslint-config/vue2"],
};
```

### Vue2 / UniApp + TypeScript

```sh
npm i -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0 @typescript-eslint/parser@~4.5.0 @typescript-eslint/eslint-plugin@~4.5.0 typescript@~4.0.0
# or
# yarn add -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0 @typescript-eslint/parser@~4.5.0 @typescript-eslint/eslint-plugin@~4.5.0 typescript@~4.0.0
```

```js
// {PROJECT_DIR}/.eslintrc.js
module.exports = {
  extends: ["@modyqyw/eslint-config/vue2-typescript"],
};
```

### Vue3 + JavaScript

```sh
npm i -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0
# or
# yarn add -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0
```

```js
// {PROJECT_DIR}/.eslintrc.js
module.exports = {
  extends: ["@modyqyw/eslint-config/vue3"],
};
```

### Vue3 + TypeScript

```sh
npm i -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0 @typescript-eslint/parser@~4.5.0 @typescript-eslint/eslint-plugin@~4.5.0 typescript@~4.0.0
# or
# yarn add -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0 @typescript-eslint/parser@~4.5.0 @typescript-eslint/eslint-plugin@~4.5.0 typescript@~4.0.0
```

```js
// {PROJECT_DIR}/.eslintrc.js
module.exports = {
  extends: ["@modyqyw/eslint-config/vue3-typescript"],
};
```

### VSCode

- Install plugins.
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Set up `Settings.json`. Then `F1 => Format Document` => `F1 => File: Save`.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue"
  ],
  "files.eol": "\n",
  "files.associations": {
    "*.wxml": "html",
    "*.wxs": "javascript",
    "*.wxss": "css",
    "*.axml": "html",
    "*.sjs": "javascript",
    "*.acss": "css",
    "*.swan": "html",
    "*.ttml": "html",
    "*.ttss": "css",
    "*.jxml": "html",
    "*.jxss": "css",
    "*.wpy": "vue",
    "*.nvue": "vue",
    "*.ux": "vue"
  }
}
```

## More Configs

- [@modyqyw/prettier-config](https://github.com/MillCloud/prettier-config#readme)
- [@modyqyw/eslint-config](https://github.com/MillCloud/eslint-config#readme)
- [@modyqyw/stylelint-config](https://github.com/MillCloud/stylelint-config#readme)

## License

[MIT](./LICENSE)

Copyright (c) 2020-present MillCloud
