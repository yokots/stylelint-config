# Style Guide

## 参考

1. [idiomatic-css](https://github.com/necolas/idiomatic-css)
2. [mdo's Code Guide](http://codeguide.co/#css)
3. [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#CSS)
4. [Stylelint Rules](https://stylelint.io/user-guide/rules/)
5. [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
6. [Sass Guidelines](https://sass-guidelin.es/) ([中文](https://sass-guidelin.es/zh/))
7. [stylelint-scss](https://github.com/stylelint-scss/stylelint-scss)

## Usage

-
  ```bash
  npm install stylelint @yokots/stylelint-config -D
  ```

- 在项目根目录下新建 .stylelintrc.json

  ```json
  {
    "extends": ["@yokots/stylelint-config"], // lint css
    // "extends": ["@yokots/stylelint-config/scss"], // lint scss
    "rules": {
      // 覆盖默认规则
    },
    "ignoreFiles": [
      "node_modules/**/*.css",
      "node_modules/**/*.scss",
      "dist/**/*.css"
      "/* your ignore files */"
    ]
  }
  ```
-
  ```bash
  npx stylelint src/**/*.css
  ```
