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

function filterNotFood(menuItemName, menuItemDescription, kindOfFilter) {
  const filterKeyWordsFile = fs.readFileSync(
    "../JSON Files/filterKeyWords.json"
  );
  const keyWordsData = JSON.parse(filterKeyWordsFile);
  const keyWords =
    kindOfFilter === "notFood" ? keyWordsData.notFood : keyWordsData.drinks;
  for (let i = 0; i < keyWords.length; i++) {
    if (
      (menuItemName && menuItemName.includes(keyWords[i])) ||
      (menuItemDescription && menuItemDescription.includes(keyWords[i]))
    ) {
      return true;
    }
  }
  return false;
}

function filterLocal() {
  const files = fs.readdirSync("../JSON Files/RestaurantsData/");
  let count = 0;
  const dataSize = files.length;
  files.forEach((fileName) => {
    count++;
    console.log(`filterLocal: ${Math.trunc((count / dataSize) * 100)}%`);
    try {
      const file = fs.readFileSync(`../JSON Files/RestaurantsData/${fileName}`);
      const fileData = JSON.parse(file);
      let skip = 0;
      const average =
        fileData.menu.reduce((sum, item) => {
          if (item.price) {
            return sum + item.price;
          }
          skip++;
          return sum;
        }, 0) /
        (fileData.menu.length - skip);
      const newData = {
        ...fileData,
        priceAverage: average,
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
          notFood: filterNotFood(
            menuItem.name,
            menuItem.description,
            "notFood"
          ),
          drinks: filterNotFood(menuItem.name, menuItem.description, "drinks"),
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
