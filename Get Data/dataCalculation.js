var fs = require("fs");

function getPriceRange(price) {
  const min = Math.trunc(price / 10) * 10;
  return `${min} - ${min + 10}`;
}

function createNewWordData(fileData, menuItem, isInName) {
  return {
    count: 1,
    city: { [fileData.city]: 1 },
    filters: Object.assign(
      {},
      ...fileData.filters.map((filter) => ({ [filter]: 1 }))
    ),

    price: { [getPriceRange(menuItem.price)]: 1 },
    restaurantPrice: { [getPriceRange(fileData.priceAverage)]: 1 },
    inName: isInName ? 1 : 0,
    inDescription: isInName ? 0 : 1,
    vegan: menuItem.vegan ? 1 : 0,
    vegetarian: menuItem.vegetarian ? 1 : 0,
    notVegetarian: !menuItem.vegetarian ? 1 : 0,
  };
}

function updateWordData(word, newData, fileData, menuItem, isInName) {
  // update count
  newData[word].count++;
  // update city
  if (newData[word] && fileData && newData[word].city[fileData.city]) {
    newData[word].city[fileData.city]++;
  } else {
    newData[word].city = { ...newData[word].city, [fileData.city]: 1 };
  }
  // update filters
  fileData.filters.forEach((filter) => {
    if (newData[word].filters[filter]) {
      newData[word].filters[filter]++;
    } else {
      newData[word].filters = { ...newData[word].filters, [filter]: 1 };
    }
  });
  // update price
  if (newData[word].price[getPriceRange(menuItem.price)]) {
    newData[word].price[getPriceRange(menuItem.price)]++;
  } else {
    newData[word].price = {
      ...newData[word].price,
      [getPriceRange(menuItem.price)]: 1,
    };
  }
  // update restaurantPrice
  if (newData[word].restaurantPrice[getPriceRange(fileData.priceAverage)]) {
    newData[word].restaurantPrice[getPriceRange(fileData.priceAverage)]++;
  } else {
    newData[word].restaurantPrice = {
      ...newData[word].restaurantPrice,
      [getPriceRange(fileData.priceAverage)]: 1,
    };
  }
  if (isInName) {
    // update inName
    newData[word].inName++;
  } else {
    // update inDescription
    newData[word].inDescription++;
  }
  if (menuItem.vegan) {
    // update vegan and vegetaruan
    newData[word].vegan++;
    newData[word].vegetarian++;
  } else if (menuItem.vegetarian) {
    // update vegetarian
    newData[word].vegetarian++;
  } else {
    // update notVegetarian
    newData[word].notVegetarian++;
  }
}

function hasNumber(myString) {
  return /\d/.test(myString);
}

function getAllCommonWords() {
  const files = fs.readdirSync("../JSON Files/RestaurantsData/");
  const length = files.length;
  let done = 0;
  let newData = {};

  function handleSentence(sentence, fileData, menuItem, isInName) {
    if (sentence) {
      sentence.split(/[^a-zA-Zא-ת\'\"]/g).forEach((word) => {
        word = word.replace(/\"/g, "");
        word = word.replace(/\'/g, "");

        if (word.length >= 2 && !hasNumber(word)) {
          // if the word exists
          if (newData[word]) {
            updateWordData(word, newData, fileData, menuItem, isInName);
          } else {
            // if we need to create a new word
            newData = {
              ...newData,
              [word]: createNewWordData(fileData, menuItem, isInName),
            };
          }
        }
      });
    }
  }

  files.forEach((fileName) => {
    // example.forEach((fileName) => {
    try {
      const file = fs.readFileSync(`../JSON Files/RestaurantsData/${fileName}`);
      const fileData = JSON.parse(file);
      fileData.menu.forEach((menuItem) => {
        handleSentence(menuItem.name, fileData, menuItem, true);
        handleSentence(menuItem.description, fileData, menuItem, false);
      });
    } catch (error) {
      console.log(error);
    }
    done++;
    console.log(`getAllCommonWords: ${Math.trunc((done / length) * 100)}%`);
  });
  // Print to file
  const jsonData = JSON.stringify(newData);
  fs.writeFileSync(`../JSON Files/calculatedWordsData.json`, jsonData);
}

// function getCommonWordsByPrice() {}

// function getCommonWordsForVegan() {}

// function getCommonWordsByCity() {}
module.exports = { getAllCommonWords };
