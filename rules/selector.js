module.exports = {
  "rules": {
    // 禁用选择器前缀
    "selector-no-vendor-prefix": true,
    // 伪类选择器用小写
    "selector-pseudo-class-case": "lower",
    // 伪元素选择器小写
    "selector-pseudo-element-case": "lower",
    // 元素选择器用小写
    "selector-type-case": "lower",
    // 禁止不正确的伪类选择器
    "selector-pseudo-class-no-unknown": [true, {
      "ignorePseudoClasses": ["global", "local"]
    }],
    // 禁用不正确的伪元素选择器
    "selector-pseudo-element-no-unknown": true,
    // 禁用不正确的元素选择器
    "selector-type-no-unknown": [true, {
      "ignore": ["custom-elements"]
    }],
    // 伪元素选择器用两个冒号
    "selector-pseudo-element-colon-notation": "double",
    // 属性选择器需要引号
    "selector-attribute-quotes": "always",
    // 禁止通过元素限定选择器
    "selector-no-qualifying-type": [true, {
      "ignore": ["attribute"]
    }],
    // 禁止重复的选择器
    "no-duplicate-selectors": [true, {
      "disallowInList": false
    }],
    // 低权重的选择器放在前面
    "no-descending-specificity": [true, {
      "ignore": ["selectors-within-list"]
    }],

    // ID 选择器模式
    "selector-id-pattern": "^([a-z]-?)+[a-z]$",
    // class 选择器模式
    "selector-class-pattern": ["^([a-z]-?)+[a-z]$", {
      "resolveNestedSelectors": true
    }],

    // 禁止通用选择器
    "selector-max-universal": 0,
    // 复合选择器最多嵌套三层
    "selector-max-compound-selectors": 3,
    // 一个选择规则中最多有一个 ID 选择器
    "selector-max-id": 1,
    // 一个选择规则中最多有三个类选择器
    "selector-max-class": 3,
    // 一个选择规则中最多有两个个元素选择器
    "selector-max-type": [2, {
      "ignore": ["next-sibling"]
    }],
    // 一个选择规则中最多有一个属性选择器
    "selector-max-attribute": 1,
    // 一个选择规则中最多有两个联合选择器
    "selector-max-combinators": 2,
    // 一个选择规则中最多有两个伪类选择器
    "selector-max-pseudo-class": 2,

     // 选择器组之间禁止多余的空行
    "selector-max-empty-lines": 0,
    // 后代选择器仅有一个空格
    "selector-descendant-combinator-no-non-space": true,
    // 属性选择器方括号之间不需要空格
    "selector-attribute-brackets-space-inside": "never",
    // 属性选择器操作符之后不需要空格
    "selector-attribute-operator-space-after": "never",
    // 属性选择器操作符之前不需要空格
    "selector-attribute-operator-space-before": "never",
    // 关系选择符之后有一个空格
    "selector-combinator-space-after": "always",
    // 关系选择符之前有一个空格
    "selector-combinator-space-before": "always",
    // 伪类选择器小括号之内不要空格
    "selector-pseudo-class-parentheses-space-inside": "never",

    // 多行选择器组逗号之后另起一行
    "selector-list-comma-newline-after": "always-multi-line",
    // 多行选择器组逗号与选择器保持在一行
    "selector-list-comma-newline-before": "never-multi-line",
    // 单选择器组逗号之后有一个空格
    "selector-list-comma-space-after": "always-single-line",
    // 选择器组逗号之前没有空格
    "selector-list-comma-space-before": "never",

    // 动画名称模式
    "keyframes-name-pattern": "^([a-z]-?)+[a-z]$",

    // https://stylelint.io/user-guide/rules/selector-max-specificity/
    // "selector-max-specificity": string,
    // 嵌套规则
    // "selector-nested-pattern": regex|string
    // 选择器黑名单
    // "selector-disallowed-lis": array|string|regex,
    // 属性选择器黑名单
    // "selector-attribute-operator-disallowed-list": array|string|regex,
    // 属性选择器操作符黑名单
    // "selector-attribute-operator-disallowed-list": array|string,
    // 属性选择器操作符白名单
    // "selector-attribute-operator-allowed-list": array|string,
    // 伪类选择器黑名单
    // "selector-pseudo-class-disallowed-list": array|string,
    // 伪类选择器白名单
    // "selector-pseudo-class-allowed-list": array|string,
    // 伪元素选择器黑名单
    // "selector-pseudo-element-disallowed-list": array|string,
    // 伪元素选择器白名单
    // "selector-pseudo-element-allowed-list": array|string,
  }
}
