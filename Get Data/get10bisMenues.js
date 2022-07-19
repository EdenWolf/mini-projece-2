const { keyWordsFilter } = require("./keyWordsFilter");

function get10bisRestaurantUrl(restaurant) {
  const restaurantId = restaurant.track_id;

  return `https://tenbis-static.azureedge.net/restaurant-menu/${restaurantId}_he`;
}

function get10bisMenuItems(menuData) {
  const menuItems = menuData.categories
    ? menuData.categories
    : menuData.categoriesList; //.filter((item) => keyWordsFilter(item));

  const data = [];

  if (!menuData.categories) {
    menuItems.forEach((item) => data.push(...item.dishList));
  } else {
    menuItems.forEach((item) => data.push(...item.dishes));
  }

  return data.map((item) => ({
    name: item.name || item.dishName,
    description: item.description || item.dishDescription,
    price: item.price || item.dishPrice,
    vegan: keyWordsFilter(
      item.name || item.dishName,
      item.description || item.dishDescription,
      true
    ),
    vegetarian:
      keyWordsFilter(
        item.name || item.dishName,
        item.description || item.dishDescription,
        true
      ) ||
      keyWordsFilter(
        item.name || item.dishName,
        item.description || item.dishDescription,
        false
      ),
    image: item.imageUrl || item.dishImageUrl,
  }));
}

module.exports = { get10bisRestaurantUrl, get10bisMenuItems };
