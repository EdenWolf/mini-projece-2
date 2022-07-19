const axios = require("axios").default;
const fs = require("fs");
const { getWoltFormattedRestaurants } = require("./getWoltRestaurants");
const { get10bisFormattedRestaurants } = require("./get10bisRestaurants");

// get data from url
async function getData(url) {
  try {
    return await axios.get(url);
  } catch (error) {
    // console.log(error.codes);
  }
}

// get the data from the urls array
async function getAllData(urlsList) {
  const data = [];

  await Promise.all(
    urlsList.map(
      async (item) =>
        await getData(item.url).then((res) =>
          data.push({ ...res, city: item.city })
        )
    )
  );

  return data;
}

async function getRestaurantsData(sourceName) {
  // Get urls file
  const urlsFile = fs.readFileSync("../JSON Files/urls.json");

  const urlsList = JSON.parse(urlsFile)[sourceName];

  const data = await getAllData(urlsList);

  const formattedData = await eval(
    `get${sourceName}FormattedRestaurants(data)`
  );

  const restaurants = JSON.stringify(formattedData);
  fs.writeFileSync(
    `../JSON Files/${sourceName}RestaurantsData.json`,
    restaurants
  );

  console.log(`Number of ${sourceName} restaurants:`);
  console.log(formattedData.length);
}

module.exports = { getRestaurantsData, getData };
