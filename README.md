# @modyqyw/eslint-config

An ESLint shareable config.

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

### React / Taro3 + JavaScript

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

### React / Taro3 + TypeScript

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

With npm

```sh
npm i -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0
```

With yarn

```sh
yarn add -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0
```

Set up `.eslintrc.js` in the root directory of your project.

```javascript
// .eslintrc.js
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

With npm

```sh
npm i -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0
```

With yarn

```sh
yarn add -D babel-eslint@~10.1.0 eslint@~7.11.0 @modyqyw/eslint-config@~1.9.0
```

Set up `.eslintrc.js` in the root directory of your project.

```javascript
// .eslintrc.js
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
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- Set up `Settings.json`. Then `F1 => Format Document` => `F1 => File: Save`.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "vue-html": "html"
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
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
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
