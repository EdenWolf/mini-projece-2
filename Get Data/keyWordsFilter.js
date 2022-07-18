var fs = require("fs");

function keyWordsFilter(menuItemName, menuItemDescription, veganFilter) {
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
      (menuItemName && menuItemName.includes(keyWords[i])) ||
      (menuItemDescription && menuItemDescription.includes(keyWords[i]))
    ) {
      const exp = exceptions[keyWords[i]];
      let ignore = false;
      for (let j = 0; exp !== undefined && j < exp.length; j++) {
        if (
          menuItemName.includes(exp[j]) ||
          menuItemDescription.includes(exp[j])
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
