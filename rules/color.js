module.exports = {
  "rules": {
    // 小写的16进制颜色
    "color-hex-case": "lower",
     // 简写的16进制颜色
    "color-hex-length": "short",
     // 不允许不合法的16进制颜色
    "color-no-invalid-hex": true,
    // rgba 颜色 alpha 值使用数字 0.5 而不是 50%
    "alpha-value-notation": "number",
    // 使用逗号分隔的颜色函数
    "color-function-notation": "legacy",
    // 色调单位使用"度(deg)"
    "hue-degree-notation": "angle",
     // 使用命名的颜色
    // "color-named": "always-where-possible"|"never",
    // 禁止使用16禁止颜色
    // "color-no-hex": true,
  }
}
