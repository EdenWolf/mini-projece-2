const axios = require("axios").default;
var fs = require("fs");
const { keyWordsFilter } = require("./keyWordsFilter");

function getWoltRestaurantUrl(restaurant) {
  const restaurantId = restaurant.track_id.replace("venue-", "");

  return `https://restaurant-api.wolt.com/v4/venues/slug/${restaurantId}/menu?unit_prices=true&show_weighted_items=true`;
}

function getWoltMenuItems(menuData) {
  const menuItems = menuData.items.filter((item) => keyWordsFilter(item));

  return menuItems.map((item) => ({
    name: item.name,
    description: item.description,
    vegan: keyWordsFilter(item, true),
    image: item.image,
  }));
}

module.exports = { getWoltRestaurantUrl, getWoltMenuItems };
