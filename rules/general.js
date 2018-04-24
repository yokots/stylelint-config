module.exports = {
  "rules": {
    // 两个空格缩进
    "indentation": 2,
    // 最多一个空行
    "max-empty-lines": 1,
    // 一行最多80个字符
    "max-line-length": [80, {
      "ignore": ["comments"]
    }],
    // 禁止空文件
    "no-empty-source": true,
    // 第一行禁止为空
    "no-empty-first-line": true,
    // 禁止行末空格
    "no-eol-whitespace": true,
     // 禁止多余的分号
    "no-extra-semicolons": true,
    // 文件以空行结束
    "no-missing-end-of-source-newline": true,
    // 最大嵌套深度
    "max-nesting-depth": [3, {
      "ignore": ["blockless-at-rules", "pseudo-classes"]
    }],
    // 禁止未定义的动画
    "no-unknown-animations": true,
    // 换行格式
    "linebreaks": "unix",
  }
}
