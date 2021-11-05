module.exports = {
  "rules": {
    // 函数名字小写
    "function-name-case": "lower",
    // 多行函数禁止相邻空行
    "function-max-empty-lines": 0,
    // 多个函数之间需要一个空格
    "function-whitespace-after": "always",
     // calc 函数的数学操作符两边应有空格
    "function-calc-no-unspaced-operator": true,
    // https://stylelint.io/user-guide/rules/function-comma-newline-after/
    "function-comma-newline-after": "always-multi-line",
    // 逗号之前不需要空格
    "function-comma-space-before": "never",
    // 在单行内，逗号之后需要一个空格
    "function-comma-space-after": "always-single-line",
    // https://stylelint.io/user-guide/rules/function-parentheses-newline-inside/
    "function-parentheses-newline-inside": "always-multi-line",
    // https://stylelint.io/user-guide/rules/function-parentheses-space-inside/
    "function-parentheses-space-inside": "never-single-line",
    // 禁止渐变函数中不标准的方向值，to top not top
    "function-linear-gradient-no-nonstandard-direction": true,
    // url函数的地址不需要加引号 https://stackoverflow.com/questions/2168855/is-quoting-the-value-of-url-really-necessary
    "function-url-quotes": "always",

    // https://stylelint.io/user-guide/rules/function-comma-newline-before/
    // "function-comma-newline-before": string,
    // 禁用 scheme-relative url
    // "function-url-no-scheme-relative": true,
    // url scheme 白名单
    // "function-url-scheme-allowed-list": array|string ,
    // url scheme 黑名单
    // "function-url-scheme-disallowed-list": array|string ,
    // 函数黑名单
    // "function-disallowed-list": array|string,
    // 函数白名单
    // "function-allowed-list": array|string,
  }
}
