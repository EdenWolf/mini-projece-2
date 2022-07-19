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

async function getMenuesData(sourceName, filter) {
  const files = fs.readdirSync("../JSON Files/RestaurantsData/");
  const fileNames = files.map((file) => file.replace(".json", ""));
  console.log(fileNames);
  const restaurantsData = getRestaurantsData(sourceName);

  console.log("number of restaurants:");
  console.log(restaurantsData.length);

  await Promise.all(
    restaurantsData.map(async (restaurant) => {
      if (filter || !fileNames.includes(restaurant.track_id)) {
        const url = eval(`get${sourceName}RestaurantUrl(restaurant)`);

        const result = await getData(url);
        // await delay(1000);
        if (result) {
          const menuData = result.data;

          const formattedMenuItems = eval(
            `get${sourceName}MenuItems(menuData)`
          );
          console.log(formattedMenuItems.length);

          const resData = { ...restaurant, menu: formattedMenuItems };

          const jsonData = JSON.stringify(resData);
          fs.writeFileSync(
            `../JSON Files/RestaurantsData/${restaurant.track_id}.json`,
            jsonData
          );
        }
      }
    })
  );
}

module.exports = { getMenuesData, getRestaurantsData };
