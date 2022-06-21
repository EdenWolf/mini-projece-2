// get the restaurants from the data
async function get10bisFormattedRestaurants(data) {
  const formattedData = [];

  data.forEach((cityData) => {
    const city = cityData.city;

    const restaurantsList = cityData.data.Data.restaurantsList;

    formattedData.push(
      ...restaurantsList.map((item) => ({
        track_id: `${item.restaurantId}`,
        filters: item.restaurantCuisineKeysList,
        image: item.profileImageUrl,
        address: item.restaurantAddress,
        location: [item.longitude, item.latitude],
        name:
          item.restaurantName ||
          item.localizationNames.he ||
          item.localizationNames.en,
        city,
      }))
    );
  });

  return formattedData;
}

module.exports = { get10bisFormattedRestaurants };
