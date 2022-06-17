const fs = require("fs");
const { getRestaurantsData } = require("./getRestaurantsData");

// get the restaurants from the data
async function getRestaurants() {
  const data = await getRestaurantsData("Wolt");

  const sections = data.map((item) => item.data.sections[1]);

  const items = [].concat.apply(
    [],
    sections.map((section) => section.items)
  );

  const myData = items.map((item) => ({
    track_id: item.track_id,
    title: item.title,
    filters: item.filtering.filters[0].values,
    image: item.image.url,
    address: item.venue.address,
    location: item.venue.location,
    name: item.venue.name,
  }));

  let restaurants = JSON.stringify(myData);
  fs.writeFileSync("../JSON Files/WoltRestaurantsData.json", restaurants);
}

getRestaurants();
