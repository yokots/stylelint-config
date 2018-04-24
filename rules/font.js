module.exports = {
  "rules": {
    // 使用数字表示字体粗细， 400 = normal，700 = bold
    "font-weight-notation": ["numeric", {
      "ignore": ["relative"]
    }],
    // 除了关键字的字体名称都加引号 inherit, serif, sans-serif, cursive, fantasy, monospace
    "font-family-name-quotes": "always-unless-keyword",
    // 不允许重复的字体名称
    "font-family-no-duplicate-names": true,
    // 不允许缺少通用字体名称（上述关键字）
    // "font-family-no-missing-generic-family-keyword": true,
  }
  }
