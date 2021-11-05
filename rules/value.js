module.exports = {
  "rules": {
    // 小写的属性值
    "value-keyword-case": "lower",
    // 值不要有浏览器厂商前缀
    "value-no-vendor-prefix": true,

    // 可以简写的属性值不要要冗余值 {margin: 1px 1px 1px 1px;} => {margin: 1px}
    "shorthand-property-no-redundant-values": true,

    // 多个值多行时逗号之后另起一行
    "value-list-comma-newline-after": "always-multi-line",
    // 多个值在一行时逗号之后需要一个空格
    "value-list-comma-space-after": "always-single-line",
    // 多个值逗号之前禁止空格
    "value-list-comma-space-before": "never",
    // 多个值多行时禁止空行
    "value-list-max-empty-lines": 0,

    // Grid 布局中禁止非法的 areas 属性值
    "named-grid-areas-no-invalid": true,

    // 多个值多行时逗号之前是否另起一行
    // "value-list-comma-newline-before": string,
  }
}
