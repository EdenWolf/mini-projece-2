var fs = require("fs");
const { getRestaurantsData } = require("./getRestaurantsData");

// get the restaurants from the data
async function getRestaurants() {
  const data = await getRestaurantsData("10bis");

  const restaurantsList = [].concat.apply(
    [],
    data.map((item) => item.data.Data.restaurantsList)
  );

  const myData = restaurantsList.map((item) => ({
    track_id: `${item.restaurantId}`,
    title: item.localizationNames.he || item.localizationNames.en,
    filters: item.restaurantCuisineKeysList,
    image: item.profileImageUrl,
    address: item.restaurantAddress,
    location: [item.longitude, item.latitude],
    name: item.restaurantName,
  }));

  let restaurants = JSON.stringify(myData);
  fs.writeFileSync("../JSON Files/10bisRestaurantsData.json", restaurants);
}

getRestaurants();
