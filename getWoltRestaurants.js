const axios = require("axios").default;
var fs = require("fs");

// URLs by cities from Wolt
const urls = [
  "https://restaurant-api.wolt.com/v1/pages/restaurants?lat=31.861934040036914&lon=34.73880889349573",
  "https://restaurant-api.wolt.com/v1/pages/restaurants?lat=31.8226123073281&lon=34.656207787820875",
  "https://restaurant-api.wolt.com/v1/pages/restaurants?lat=32.17538379893091&lon=34.89257605007606",
  "https://restaurant-api.wolt.com/v1/pages/restaurants?lat=31.902428004772347&lon=34.80746574626252",
  "https://restaurant-api.wolt.com/v1/pages/restaurants?lat=32.087236876497585&lon=34.78698525756491",
  "https://restaurant-api.wolt.com/v1/pages/restaurants?lat=32.30275178459601&lon=34.8626069423332",
  "https://restaurant-api.wolt.com/v1/pages/restaurants?lat=31.25049530861928&lon=34.79046992070812",
  "https://restaurant-api.wolt.com/v1/pages/restaurants?lat=32.79952296612683&lon=34.98459479897443",
  "https://restaurant-api.wolt.com/v1/pages/restaurants?lat=32.07116626318343&lon=34.87747231526427",
  "https://restaurant-api.wolt.com/v1/pages/restaurants?lat=32.458223691314956&lon=34.92813930894266",
  "https://restaurant-api.wolt.com/v1/pages/restaurants?lat=32.168344232767616&lon=34.83246849366997",
  "https://restaurant-api.wolt.com/v1/pages/restaurants?lat=31.771914195076675&lon=35.20696303876315",
  "https://restaurant-api.wolt.com/v1/pages/restaurants?lat=31.997324147971867&lon=34.780000379407966",
];

// get data from url
async function getData(url) {
  try {
    return await axios.get(url);
  } catch (error) {
    console.log(error.codes);
  }
}

// get the data from the urls array
async function getAllData() {
  const data = [];

  await Promise.all(
    urls.map(async (url) => await getData(url).then((res) => data.push(res)))
  );

  return data;
}

// get the restaurants from the data
async function getRestaurants() {
  const data = await getAllData();

  const sections = data.map((item) => item.data.sections[1]);

  const items = [].concat.apply(
    [],
    sections.map((section) => section.items)
  );

  const myData = items.map((item) => ({
    track_id: item.track_id,
    title: item.title,
    filters: item.filtering.filters[0].values,
    image: item.image,
    address: item.venue.address,
    location: item.venue.location,
    name: item.venue.name,
  }));

  let restaurants = JSON.stringify(myData);
  fs.writeFileSync("woltRestaurantsData.json", restaurants);
}

getRestaurants();
