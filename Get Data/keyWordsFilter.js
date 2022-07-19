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
          (menuItemName && menuItemName.includes(exp[j])) ||
          (menuItemDescription && menuItemDescription.includes(exp[j]))
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

function filterLocal() {
  const files = fs.readdirSync("../JSON Files/RestaurantsData/");
  files.forEach((fileName) => {
    try {
      const file = fs.readFileSync(`../JSON Files/RestaurantsData/${fileName}`);
      const fileData = JSON.parse(file);
      const newData = {
        ...fileData,
        menu: fileData.menu.map((menuItem) => ({
          ...menuItem,
          vegan:
            keyWordsFilter(menuItem.name, menuItem.description, false) &&
            keyWordsFilter(menuItem.name, menuItem.description, true),
          vegetarian: keyWordsFilter(
            menuItem.name,
            menuItem.description,
            false
          ),
        })),
      };
      const jsonData = JSON.stringify(newData);
      fs.writeFileSync(`../JSON Files/RestaurantsData/${fileName}`, jsonData);
    } catch (error) {
      console.log(fileName);
    }
  });
}

module.exports = { keyWordsFilter, filterLocal };
