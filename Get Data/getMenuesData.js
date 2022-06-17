var fs = require("fs");
const { getData } = require("./getRestaurantsData");
const { getWoltRestaurantUrl, getWoltMenuItems } = require("./getWoltMenues");

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

  const data = [];

  await Promise.all(
    restaurantsData.map(async (restaurant) => {
      const url = eval(`get${sourceName}RestaurantUrl(restaurant)`);

      const result = await getData(url);
      const menuData = result.data;

      const formattedMenuItems = eval(`get${sourceName}MenuItems(menuData)`);

      const resData = { ...restaurant, menu: formattedMenuItems };

      data.push(resData);
    })
  );

  let jsonData = JSON.stringify(data);
  fs.writeFileSync(`../JSON Files/${sourceName}MenuesData.json`, jsonData);
}

getMenuesData("Wolt");

module.exports = { getMenuesData, getRestaurantsData };
