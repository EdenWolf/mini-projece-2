var fs = require("fs");

function sortByCountAll() {
  const calculatedDataFile = fs.readFileSync(
    `../JSON Files/fixedCalculatedWordsData.json`
  );
  const calculatedData = JSON.parse(calculatedDataFile);
  const sortedData = sortData(calculatedData, "count");

  const jsonData = JSON.stringify(sortedData);
  fs.writeFileSync(`../JSON Files/SortedData/sortedByCount.json`, jsonData);
}

function sortData(data, countProperty) {
  const keyWordsFile = fs.readFileSync(`../JSON Files/filterKeyWords.json`);
  const keyWords = JSON.parse(keyWordsFile);
  let sortedData = [];

  for (var word in data) {
    const diet = keyWords.all.includes(word)
      ? "מהחי"
      : keyWords.vegan.includes(word)
      ? "צמחוני"
      : "טבעוני";
    sortedData.push([word, data[word][countProperty], diet]);
  }

  sortedData.sort((a, b) => {
    return b[1] - a[1];
  });

  return sortedData;
}

function sortByCountDietaryRestrictions() {
  const calculatedDataFile = fs.readFileSync(
    `../JSON Files/fixedCalculatedWordsData.json`
  );
  const calculatedData = JSON.parse(calculatedDataFile);

  // Sort vegan
  const sortedDataVegan = sortData(calculatedData, "vegan");

  let jsonData = JSON.stringify(sortedDataVegan);
  fs.writeFileSync(
    `../JSON Files/SortedData/sortedByCountVegan.json`,
    jsonData
  );

  // Sort vegetarian
  const sortedDataVegetarian = sortData(calculatedData, "vegetarian");

  jsonData = JSON.stringify(sortedDataVegetarian);
  fs.writeFileSync(
    `../JSON Files/SortedData/sortedByCountVegetarian.json`,
    jsonData
  );

  //Sort not vegetarian
  const sortedDataNotVegetarian = sortData(calculatedData, "notVegetarian");

  jsonData = JSON.stringify(sortedDataNotVegetarian);
  fs.writeFileSync(
    `../JSON Files/SortedData/sortedByCountNotVegetarian.json`,
    jsonData
  );
}

module.exports = { sortByCountAll, sortByCountDietaryRestrictions };
