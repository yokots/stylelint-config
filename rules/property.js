module.exports = {
  "rules": {
    // 小写的属性名
    "property-case": "lower",
    // 禁止不正确的属性名
    "property-no-unknown": true,
    // 属性名前不要有浏览器厂商前缀
    "property-no-vendor-prefix": true,

    // 禁止重复的属性声明
    "declaration-block-no-duplicate-properties": [true, {
      "ignore": ["consecutive-duplicates-with-different-values"]
    }],
    // 禁止短属性覆盖长属性
    "declaration-block-no-shorthand-property-overrides": true,
    // 禁止可以简写的属性写成多个长属性 (应该交给 clean css 等工具来做)
    // "declaration-block-no-redundant-longhand-properties": true,

    // 自定义属性之前需要一个空行
    "custom-property-empty-line-before": ["always", {
      "except": ["after-custom-property", "first-nested"],
      "ignore": ["after-comment", "inside-single-line-block"]
    }],
    // 自定义属性的模式
    // "custom-property-pattern": regex|string

    // "property-blacklist": array|string // 属性名黑名单
    // "property-whitelist": array|string // 属性名白名单
  }
}
