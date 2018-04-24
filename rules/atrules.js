module.exports = {
  "rules": {
    // 禁止错误的 at-rule
    "at-rule-no-unknown": null,
    // 禁止供应商前缀
    "at-rule-no-vendor-prefix": true,
    // at-rule 小写
    "at-rule-name-case": "lower",

    // at-rule 之前加一个空行
    "at-rule-empty-line-before": ["always", {
      "except": ["blockless-after-same-name-blockless", "first-nested"],
      "ignore": ["after-comment"],
      "ignoreAtRules": ["else"]
    }],
    // 有多行的规则时 at-rule name 之后加一个空行
    "at-rule-name-newline-after": "always-multi-line",
    // 单行时 at-rule name 之后保留一个空格
    "at-rule-name-space-after": "always-single-line",
    // 分号之后另起一行
    "at-rule-semicolon-newline-after": "always",
    // 分号之前没有空格
    "at-rule-semicolon-space-before": "never",

    // at-rule 黑名单
    // "at-rule-blacklist": array|string
    // at-rule 白名单
    // "at-rule-whitelist": array|string
  }
}
