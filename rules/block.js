module.exports = {
  // 禁止空的代码块
  "block-no-empty": true,
  // 多行的规则块之前保留一个空行
  "rule-empty-line-before": ["always-multi-line", {
    "except": ["first-nested"],
    "ignore": ["after-comment"]
  }],
  // 右大括号之前不需要空行
  "block-closing-brace-empty-line-before": "never",
  // 右大括号之后另起一行
  "block-closing-brace-newline-after": "always",
  // 多行声明时右大括号单独一行
  "block-closing-brace-newline-before": "always-multi-line",
  // 单行块的右大括号之前需要一个空格
  "block-closing-brace-space-before": "always-single-line",
  // 单行块左大括号之后需要一个空格
  "block-opening-brace-space-after": "always-single-lien",
  // 多行声明时左大括号之后另起一行
  "block-opening-brace-newline-after": "always-multi-line",
  // 左大括号之前需要一个空格
  "block-opening-brace-space-before": "always",

  // 右大括号之后的空格
  // "block-closing-brace-space-after": string
  // 左大括号之前的是否另起一行和空白
  // "block-opening-brace-newline-before": string
}
