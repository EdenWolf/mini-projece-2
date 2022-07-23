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

  // ///
  // restaurantsData = [
  //   restaurantsData[0],
  //   restaurantsData[1],
  //   restaurantsData[2],
  // ];
  // ///

  return restaurantsData;
}

async function getMenuesData(sourceName, filter) {
  for (let i = 0; i < 1; i++) {
    const files = fs.readdirSync("../JSON Files/RestaurantsData/");
    const fileNames = files.map((file) => file.replace(".json", ""));
    const restaurantsData = getRestaurantsData(sourceName);

    let failedCounter = 0;

    await Promise.all(
      restaurantsData.map(async (restaurant) => {
        if (filter || !fileNames.includes(restaurant.track_id)) {
          const url = eval(`get${sourceName}RestaurantUrl(restaurant)`);

          const result = await getData(url);
          if (result) {
            const menuData = result.data;

            const formattedMenuItems = eval(
              `get${sourceName}MenuItems(menuData)`
            );
            const priceAverage =
              formattedMenuItems.reduce(
                (sum, item) => sum + (item.price ? item.price : 0),
                0
              ) / formattedMenuItems.length;

            const resData = {
              ...restaurant,
              priceAverage,
              menu: formattedMenuItems,
            };

            const jsonData = JSON.stringify(resData);
            fs.writeFileSync(
              `../JSON Files/RestaurantsData/${restaurant.track_id}.json`,
              jsonData
            );
          } else {
            failedCounter++;
          }
        }
      })
    );

    console.log("failed: " + failedCounter);
  }
}

module.exports = { getMenuesData, getRestaurantsData };
