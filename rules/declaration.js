module.exports = {
  // 禁止 !important
  "declaration-no-important": true,
  // 声明关键帧时禁用 !important 修饰符 https://stylelint.io/user-guide/rules/keyframe-declaration-no-important/
  "keyframe-declaration-no-important": true,
  // !important ! 之后没有空格
  "declaration-bang-space-after": "never",
  // !important ! 之前保留一个空格
  "declaration-bang-space-before": "always",

  // 分号之后属性值有多行时另起一行
  "declaration-colon-newline-after": "always-multi-line",
  // 分号之后单行属性值加一个空格
  "declaration-colon-space-after": "always-single-line",
  // 分号之前没有空格
  "declaration-colon-space-before": "never",
  // 声明之前的空行
  "declaration-empty-line-before": ["always", {
    "except": ["after-declaration", "first-nested"],
    "ignore": ["after-comment", "inside-single-line-break"]
  }],

  // 单行至多一个声明
  "declaration-block-single-line-max-declarations": 1,
  // 声明块最后一个声明需要分号结尾
  "declaration-block-trailing-semicolon": "always",
  // 多行声明分号之后需要换行
  "declaration-block-semicolon-newline-after": "always-multi-line",
  // 多行声明分号之前禁止换行
  "declaration-block-semicolon-newline-before": "never-multi-line",
  // 声明分号之后的空格，单行时需要
  "declaration-block-semicolon-space-after": "always-single-line",
  // 声明分号之前不需要空格
  "declaration-block-semicolon-space-before": "never",

  // 属性名和单位对黑名单
  // "declaration-property-unit-blacklist": object,
  // 属性名和单位对白名单
  // "declaration-property-unit-whitelist": object,
  // 键值位对黑名单
  // "declaration-property-value-blacklist": object,
  // 键值对对白名单
  // "declaration-property-value-whitelist": object,
}
