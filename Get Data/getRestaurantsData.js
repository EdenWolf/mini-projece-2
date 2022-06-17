const axios = require("axios").default;
const fs = require("fs");

// get data from url
async function getData(url) {
  try {
    return await axios.get(url);
  } catch (error) {
    console.log(error.codes);
  }
}

// get the data from the urls array
async function getAllData(urls) {
  const data = [];

  await Promise.all(
    urls.map(async (url) => await getData(url).then((res) => data.push(res)))
  );

  return data;
}

async function getRestaurantsData(sourceName) {
  // Get urls file
  const urlsFile = fs.readFileSync("../JSON Files/urls.json");

  const urls = JSON.parse(urlsFile)[sourceName];

  const data = await getAllData(urls);

  return data;
}

module.exports = { getRestaurantsData, getData };
