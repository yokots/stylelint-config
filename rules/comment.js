module.exports = {
  // 禁止空注释
  "comment-no-empty": true,
  // 禁止不正确的双斜线注释
  "no-invalid-double-slash-comments": true,
   // /* comment */
  "comment-whitespace-inside": "always",
   // 注释之前加一个空行
  "comment-empty-line-before": ["always", {
    "except": ["first-nested"],
    "ignore": ["after-comment", "stylelint-commands"]
  }],
  // 注释黑名单
  // "comment-word-blacklist": array|string
}
