module.exports = {
  "rules": {
    // 禁用错误的媒体属性
    "media-feature-name-no-unknown": true,
    // 小写的媒体属性 max-width
    "media-feature-name-case": "lower",
    // 禁止媒体属性供应商前缀
    "media-feature-name-no-vendor-prefix": true,

    // 媒体属性分号之后保留一个空格
    "media-feature-colon-space-after": "always",
    // 媒体属性分号以前禁止空格
    "media-feature-colon-space-before": "never",
    // 媒体查询括号内没有空格
    "media-feature-parentheses-space-inside": "never",
    // 媒体查询操作符之后保留一个空格
    "media-feature-range-operator-space-after": "always",
    // 媒体查询操作符之前保留一个空格
    "media-feature-range-operator-space-before": "always",

    // 媒体查询列表逗号分隔符后另起一行
    "media-query-list-comma-newline-after": "always-multi-line",
    // 媒体查询多行列表逗号之前不换行
    "media-query-list-comma-newline-before": "never-multi-line",
    // 媒体查询单行的列表逗号之后保留一个空格
    "media-query-list-comma-space-after": "always-single-line",
    // 媒体查询单行的列表逗号之前无空格
    "media-query-list-comma-space-before": "never",

    // 自定义媒体查询模式
    // "custom-media-pattern：" regex|string,
    // 媒体属性黑名单
    // media-feature-name-disallowed-list: array|string|regex ,
    // 媒体属性白名单
    // media-feature-name-allowed-list: array|string|regex,
    // 媒体属性值白名单
    // "media-feature-name-value-allowed-list":
  }
}
