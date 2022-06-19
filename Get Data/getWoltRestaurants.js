// get the restaurants from the data
async function getWoltFormattedRestaurants(data) {
  const formattedData = [];

  data.forEach((restaurantData) => {
    const city = restaurantData.city;

    const sectionItems = restaurantData.data.sections[1].items;

    formattedData.push(
      ...sectionItems.map((item) => ({
        track_id: item.track_id,
        filters: item.filtering.filters[0].values,
        image: item.image.url,
        address: item.venue.address,
        location: item.venue.location,
        name: item.venue.name || item.title,
        city,
      }))
    );
  });

  return formattedData;
}

module.exports = { getWoltFormattedRestaurants };
