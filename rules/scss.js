module.exports = {
  "rules": {
    // 复写 CSS 的一些规则
    "at-rule-no-unknown": null,
    "at-rule-empty-line-before": ["always", {
      "except": ["blockless-after-same-name-blockless", "first-nested"],
      "ignore": ["after-comment"],
      "ignoreAtRules": ["else"]
    }],
    "block-closing-brace-newline-after": ["always", {
      "ignoreAtRules": ["if", "else"]
    }],
    "no-invalid-double-slash-comments": null,
    "comment-no-empty": null,
    "no-invalid-position-at-import-rule": [true, {
      "ignoreAtRules": ["use"],
    }],

    "scss/at-each-key-value-single-line": true,
    // 覆写 stylelint 的规则，添加 scss 自有的 at rule
    "scss/at-rule-no-unknown": true,

    // if else 的空白规则
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-if-closing-brace-space-after": "always-intermediate",
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-closing-brace-space-after": "always-intermediate",
    "scss/at-else-empty-line-before": "never",
    "scss/at-else-if-parentheses-space-before": "always",

    "scss/at-if-no-null": true,

    // extend 需要占位符来使生成的 css 文件更小
    "scss/at-extend-no-missing-placeholder": true,

    // 函数不需要传参数的名字
    "scss/at-function-named-arguments": "never",
    // 函数后的括号之前不需要空格
    "scss/at-function-parentheses-space-before": "never",
    // "scss/at-function-pattern" regex | string;

    // import scss 文件时不需要前置的下划线
    "scss/at-import-no-partial-leading-underscore": true,
    // "scss/at-import-partial-extension-blacklist": []
    // "scss/at-import-partial-extension-whitelist": []

    // include 空的 mixin 也要加括号
    "scss/at-mixin-argumentless-call-parentheses": "always",
    // mixin 不需要穿参数的名字
    "scss/at-mixin-named-arguments": "never",
    // mixin 括号之前不需要空格
    "scss/at-mixin-parentheses-space-before": "never",
    // "scss/at-mixin-pattern": regex | string

    "scss/dollar-variable-first-in-block": [true, {
      "ignore": ["comments", "imports"],
      "except": ["root"]
    }],
    "scss/dollar-variable-colon-newline-after": "always-multi-line",
    "scss/dollar-variable-colon-space-after": "always-single-line",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-empty-line-before": ["always", {
      "except": ["first-nested", "after-dollar-variable"],
      "ignore": ["after-comment", "inside-single-line-block"]
    }],
    "scss/dollar-variable-empty-line-after": ["always", {
      "except": ["last-nested", "before-dollar-variable"],
      "ignore": ["before-comment", "inside-single-line-block"]
    }],
    "scss/dollar-variable-no-missing-interpolation": true,
    // "scss/dollar-variable-default": [true, {
    //   "ignore": ["local"]
    // }],
    // "scss/dollar-variable-pattern": regex | string

    // "scss/percent-placeholder-pattern": regex | string

    "scss/comment-no-empty": true,
    "scss/double-slash-comment-empty-line-before": ["always", {
      "except": ["first-nested"],
      "ignore": ["between-comments", "stylelint-commands", "inside-block"]
    }],
    "scss/double-slash-comment-whitespace-inside": "always",
    // "scss/double-slash-comment-inline": "always"

    // "scss/declaration-nested-properties": ["always", {
    //   except: ["only-of-namespace"]
    // }],
    "scss/declaration-nested-properties-no-divided-groups": true,

    // "scss/media-feature-value-dollar-variable": "always",

    "scss/operator-no-newline-after": true,
    "scss/operator-no-newline-before": true,
    "scss/operator-no-unspaced": true,

    // "scss/partial-no-import": true,

    "scss/selector-no-redundant-nesting-selector": true,

    "scss/function-quote-no-quoted-strings-inside": true,
    "scss/function-unquote-no-unquoted-strings-inside": true,

    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dimension-no-non-numeric-values/README.md
    "scss/dimension-no-non-numeric-values": true,

    "scss/no-duplicate-mixins": true,
    "scss/no-duplicate-dollar-variables": true,
    // 禁止使用 SCSS 的全局方法， 使用 @use
    "scss/no-global-function-names": true,
  }
}
