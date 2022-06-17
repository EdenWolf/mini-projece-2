var fs = require("fs");

function keyWordsFilter(menuItem, veganFilter) {
  const filterKeyWordsFile = fs.readFileSync(
    "../JSON Files/filterKeyWords.json"
  );
  const keyWordsData = JSON.parse(filterKeyWordsFile);
  const keyWords = veganFilter ? keyWordsData.vegan : keyWordsData.all;
  const exceptions = veganFilter
    ? keyWordsData.veganExceptions
    : keyWordsData.allExceptions;
  for (let i = 0; i < keyWords.length; i++) {
    if (
      menuItem.name.includes(keyWords[i]) ||
      menuItem.description.includes(keyWords[i])
    ) {
      const exp = exceptions[keyWords[i]];
      let ignore = false;
      for (let j = 0; exp !== undefined && j < exp.length; j++) {
        if (
          menuItem.name.includes(exp[j]) ||
          menuItem.description.includes(exp[j])
        ) {
          ignore = true;
        }
      }
      if (ignore) continue;
      return false;
    }
  }
  return true;
}

module.exports = { keyWordsFilter };
