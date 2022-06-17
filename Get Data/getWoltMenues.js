const axios = require("axios").default;
var fs = require("fs");

const filterKeyWordsFile = fs.readFileSync("../JSON Files/filterKeyWords.json");
const keyWords = JSON.parse(filterKeyWordsFile);

// get data from url
async function getData(url) {
  try {
    return await axios.get(url);
  } catch (error) {
    console.log(error.codes);
  }
}

function getRestaurantsData() {
  const restaurantsFile = fs.readFileSync(
    "../JSON Files/woltRestaurantsData.json"
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

function getRestaurantUrl(restaurant) {
  const restaurantId = restaurant.track_id.replace("venue-", "");

  return `https://restaurant-api.wolt.com/v4/venues/slug/${restaurantId}/menu?unit_prices=true&show_weighted_items=true`;
}

function keyWordsFilter(menuItem) {
  const allKeyWords = keyWords.all;
  for (let i = 0; i < allKeyWords.length; i++) {
    if (
      menuItem.name.includes(allKeyWords[i]) ||
      menuItem.description.includes(allKeyWords[i])
    ) {
      //   console.log(word);
      return false;
    }
  }
  return true;
}

function filterVegan(menuItem) {
  const veganKeyWords = keyWords.vegan;
  const exceptions = keyWords.exceptions;
  for (let i = 0; i < veganKeyWords.length; i++) {
    if (
      menuItem.name.includes(veganKeyWords[i]) ||
      menuItem.description.includes(veganKeyWords[i])
    ) {
      const exp = exceptions[veganKeyWords[i]];
      let ignore = false;
      for (let j = 0; exp !== undefined && j < exp.length; j++) {
        if (
          menuItem.name.includes(exp[j]) ||
          menuItem.description.includes(exp[j])
        )
          ignore = true;
      }
      if (ignore) continue;
      return false;
    }
  }
  return true;
}

async function main() {
  const restaurantsData = getRestaurantsData();

  const data = [];

  await Promise.all(
    restaurantsData.map(async (restaurant) => {
      const url = getRestaurantUrl(restaurant);
      const result = await getData(url);
      const menuData = result.data;
      const menuItems = menuData.items.filter((item) => keyWordsFilter(item));

      console.log(menuData.items.length);
      console.log(menuItems.length);

      const formattedMenuItems = menuItems.map((item) => ({
        name: item.name,
        description: item.description,
        vegan: filterVegan(item),
        image: item.image,
      }));

      const resData = { ...restaurant, menu: formattedMenuItems };

      data.push(resData);
    })
  );

  let jsonData = JSON.stringify(data);
  fs.writeFileSync("../JSON Files/woltMenuesData.json", jsonData);
}

main();
