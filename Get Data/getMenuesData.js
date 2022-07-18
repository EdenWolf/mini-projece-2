var fs = require("fs");
const { getData } = require("./getRestaurantsData");
const { getWoltRestaurantUrl, getWoltMenuItems } = require("./getWoltMenues");
const {
  get10bisRestaurantUrl,
  get10bisMenuItems,
} = require("./get10bisMenues");

function getRestaurantsData(sourceName) {
  const restaurantsFile = fs.readFileSync(
    `../JSON Files/${sourceName}RestaurantsData.json`
  );
  let restaurantsData = JSON.parse(restaurantsFile);

  ///
  restaurantsData = [
    restaurantsData[0],
    restaurantsData[1],
    restaurantsData[2],
  ];
  ///

  return restaurantsData;
}

async function getMenuesData(sourceName) {
  const restaurantsData = getRestaurantsData(sourceName);

  console.log("number of restaurants:");
  console.log(restaurantsData.length);

  const data = [];

  await Promise.all(
    restaurantsData.map(async (restaurant) => {
      const url = eval(`get${sourceName}RestaurantUrl(restaurant)`);

      const result = await getData(url);
      // await delay(1000);
      if (result) {
        const menuData = result.data;

        const formattedMenuItems = eval(`get${sourceName}MenuItems(menuData)`);
        console.log(formattedMenuItems.length);

        const resData = { ...restaurant, menu: formattedMenuItems };

        data.push(resData);
      }
    })
  );

  const jsonData = JSON.stringify(data);
  fs.writeFileSync(`../JSON Files/${sourceName}MenuesData.json`, jsonData);
}

module.exports = { getMenuesData, getRestaurantsData };
