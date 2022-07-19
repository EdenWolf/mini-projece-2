const { keyWordsFilter } = require("./keyWordsFilter");

function getWoltRestaurantUrl(restaurant) {
  const restaurantId = restaurant.track_id.replace("venue-", "");

  return `https://restaurant-api.wolt.com/v4/venues/slug/${restaurantId}/menu?unit_prices=true&show_weighted_items=true`;
}

function getWoltMenuItems(menuData) {
  const menuItems = menuData.items;

  return menuItems.map((item) => ({
    name: item.name,
    description: item.description,
    price: item.baseprice / 100,
    vegan: keyWordsFilter(item.name, item.description, true),
    vegetarian:
      keyWordsFilter(item.name, item.description, true) ||
      keyWordsFilter(item.name, item.description, false),
    image: item.image,
  }));
}

module.exports = { getWoltRestaurantUrl, getWoltMenuItems };
