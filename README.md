# Style Guide

## 参考

1. [idiomatic-css](https://github.com/necolas/idiomatic-css)
2. [mdo's Code Guide](http://codeguide.co/#css)
3. [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#CSS)
4. [Stylelint Rules](https://stylelint.io/user-guide/rules/)
5. [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

## Usage

- ```npm install stylelint @gago/stylelint-config -D```

- 在项目根目录下新建 .stylelintrc.json

  ```json
  {
    "extends": ["@gago/stylelint-config"],
    "rules": {
      // 覆盖默认规则
    },
    "ignoreFiles": [
      "node_modules/**/*.css",
      "/* your ignore files */"
    ]
  }
  ```
- ```npx stylelint src/**/*.css``` （npx 仅可在 npm 5.2 之上适用）

# 强烈建议

  > 每个人在自己的工程中配置 pre-commit 钩子，在提交代码之前进行检查

  * [husky](https://github.com/typicode/husky) 用 node 配置钩子
  * [lint-staged](https://github.com/okonet/lint-staged) 只检查将要提交的代码
  * [commitlint](https://github.com/marionebl/commitlint) 检查 commit 规范

  配置完后类似于以下这个样子

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -e $GIT_PARAMS"
  }
},
"commitlint": {
  "extends": ["@commitlint/config-conventional"]
},
"lint-staged": {
  "*.css": "stylelint"
},
```
