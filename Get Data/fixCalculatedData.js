const fs = require("fs");

function addPricaRanges() {
  // low = 0 - 30
  // medium = 30 - 50
  // high = 50+
  const file = fs.readFileSync(`../JSON Files/calculatedWordsData.json`);
  const data = JSON.parse(file);
  //   console.log(data);

  const lowPrices = ["0 - 10", "10 - 20", "20 - 30"];
  const mediumPrices = ["30 - 40", "40 - 50"];

  let newData = {};
  let count = 0;

  const dataSize = Object.keys(data).length;

  for (const word in data) {
    count++;
    console.log(`addPricaRanges: ${Math.trunc((count / dataSize) * 100)}%`);

    const highPrices = [];

    for (const restaurantPrice in data[word].restaurantPrice) {
      if (
        !lowPrices.includes(restaurantPrice) &&
        !mediumPrices.includes(restaurantPrice)
      ) {
        highPrices.push(restaurantPrice);
      }
    }

    const sumFunc = (prev, price) =>
      data[word].restaurantPrice[price]
        ? prev + data[word].restaurantPrice[price]
        : prev + 0;

    newData = {
      ...newData,
      [word]: {
        ...data[word],
        priceRange: {
          low: lowPrices.reduce(sumFunc, 0),
          medium: mediumPrices.reduce(sumFunc, 0),
          high: highPrices.reduce(sumFunc, 0),
        },
      },
    };
  }

  const jsonData = JSON.stringify(newData);
  fs.writeFileSync(`../JSON Files/fixedCalculatedWordsData.json`, jsonData);
}

function getCollectionUnion(data, word, otherWord, collectionName) {
  let union = {};
  for (const item in data[word][collectionName]) {
    if (data[otherWord][collectionName][item]) {
      // if in both
      union = {
        ...union,
        [item]:
          data[word][collectionName][item] +
          data[otherWord][collectionName][item],
      };
    } else {
      // if only in word
      union = { ...union, [item]: data[word][collectionName][item] };
    }
  }
  for (const item in data[otherWord][collectionName]) {
    // if only in otherWord
    if (!data[word][collectionName][item]) {
      union = { ...union, [item]: data[otherWord][collectionName][item] };
    }
  }
  return union;
}

// this function is not good, maybe in the future we can fix it
function fixDuplicatedWords() {
  const file = fs.readFileSync(`../JSON Files/fixedCalculatedWordsData.json`);
  const data = JSON.parse(file);
  let newData = {};
  let count = 0;
  const dataSize = Object.keys(data).length;

  for (const word in data) {
    count++;
    console.log(`fixDuplicatedWords: ${Math.trunc((count / dataSize) * 100)}%`);
    let found = false;
    let newWord = word[0] === "ה" || word[0] === "ו" ? word.substring(1) : word;
    newWord =
      newWord[newWord.length - 1] === "ם" && newWord[newWord.length - 2] === "י"
        ? newWord.substring(0, newWord.length - 2)
        : newWord;
    newWord = newWord.replace(/\"/g, "").replace(/\'/g, "");

    for (const otherWord in data) {
      if (otherWord === newWord) {
        // if we found a duplicate
        found = true;
        newData = {
          ...newData,
          [newWord]: {
            count: data[word].count + data[otherWord].count,
            city: getCollectionUnion(data, word, otherWord, "city"),
            filters: getCollectionUnion(data, word, otherWord, "filters"),
            price: getCollectionUnion(data, word, otherWord, "price"),
            restaurantPrice: getCollectionUnion(
              data,
              word,
              otherWord,
              "restaurantPrice"
            ),
            inName: data[word].inName + data[otherWord].inName,
            inDescription:
              data[word].inDescription + data[otherWord].inDescription,
            vegan: data[word].vegan + data[otherWord].vegan,
            vegetarian: data[word].vegetarian + data[otherWord].vegetarian,
            notVegetarian:
              data[word].notVegetarian + data[otherWord].notVegetarian,
            priceRange: getCollectionUnion(data, word, otherWord, "priceRange"),
          },
        };
      }
    }
    if (!found) {
      // if there is no duplicate
      newData = { ...newData, word: data[word] };
    }
  }

  const jsonData = JSON.stringify(newData);
  fs.writeFileSync(`../JSON Files/fixedCalculatedWordsData.json`, jsonData);
}

module.exports = { addPricaRanges, fixDuplicatedWords };
