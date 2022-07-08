const { getRestaurantsData } = require("./getRestaurantsData");
const {
  findAndRemove10bisDuplicates,
  findDuplicates,
  handleCheckedDuplicates,
  removeDuplicates,
} = require("./restaurantsLocationFilter");

// 1 - Get restaurants data
// getRestaurantsData("Wolt");
// getRestaurantsData("10bis");

// 2 - Filter restaurants

// 10bis duplicates
findAndRemove10bisDuplicates();
// Find duplicates between 10bis and wolt
findDuplicates();
// Handle checked duplicates
handleCheckedDuplicates();
// Remove duplicates from woltRestaurantsData
removeDuplicates();
// Find duplicates between 10bis and wolt - again to update the file
findDuplicates();

// 3 - Get menues
