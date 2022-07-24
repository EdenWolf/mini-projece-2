const { getRestaurantsData } = require("./getRestaurantsData");
const {
  findAndRemove10bisDuplicates,
  findDuplicates,
  handleCheckedDuplicates,
  removeDuplicates,
} = require("./restaurantsLocationFilter");
const { getMenuesData } = require("./getMenuesData");
const { filterLocal } = require("./keyWordsFilter");
const { getAllCommonWords } = require("./dataCalculation");
const { addPricaRanges } = require("./fixCalculatedData");
const { printAll } = require("./printFinalInfo");
const {
  sortByCountAll,
  sortByCountDietaryRestrictions,
} = require("./sortWords");
const fs = require("fs");
// Read from files
const duplicatesFile = fs.readFileSync("../JSON Files/duplicatesToRemove.json");
const duplicatesData = JSON.parse(duplicatesFile);
const legalDuplicatesFile = fs.readFileSync("../JSON Files/legalPairs.json");
const legalDuplicates = JSON.parse(legalDuplicatesFile);
const _10bisFile = fs.readFileSync(`../JSON Files/10bisRestaurantsData.json`);
const _10bisData = JSON.parse(_10bisFile);
const woltFile = fs.readFileSync(`../JSON Files/WoltRestaurantsData.json`);
const woltData = JSON.parse(woltFile);
const duplicatesToCheckFile = fs.readFileSync(`../JSON Files/duplicates.json`);
const duplicatesToCheck = JSON.parse(duplicatesToCheckFile);

// 1 - Get restaurants data
// getRestaurantsData("Wolt");
// getRestaurantsData("10bis");

// 2 - Filter restaurants

// 10bis duplicates
// findAndRemove10bisDuplicates(_10bisData);
// // Find duplicates between 10bis and wolt
// findDuplicates(duplicatesData, legalDuplicates, _10bisData, woltData);
// // Handle checked duplicates
// handleCheckedDuplicates(duplicatesData, legalDuplicates, duplicatesToCheck);
// // Remove duplicates from woltRestaurantsData
// removeDuplicates(duplicatesData, _10bisData, woltData);

// 3 - Get menues
// Get all the menues
// getMenuesData("Wolt", true);
// getMenuesData("10bis", true);
// Ignore menues we already have
// getMenuesData("Wolt", false);
// getMenuesData("10bis", false);

// 4 - Filter vegan / vegeterian again if needed

filterLocal();

// 5 - Calculate Data

getAllCommonWords();
addPricaRanges();

// 6 - Sort

sortByCountAll();
sortByCountDietaryRestrictions();

// 7 - Print importent information

printAll();
