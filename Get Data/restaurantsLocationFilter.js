const fs = require("fs");
const { delay } = require("lodash");

const woltFile = fs.readFileSync(`../JSON Files/WoltRestaurantsData.json`);
let woltData = JSON.parse(woltFile);

const _10bisFile = fs.readFileSync(`../JSON Files/10bisRestaurantsData.json`);
const _10bisData = JSON.parse(_10bisFile);

const legalDuplicatesFile = fs.readFileSync("../JSON Files/legalPairs.json");
const legalDuplicates = JSON.parse(legalDuplicatesFile);

const duplicatesFile = fs.readFileSync("../JSON Files/duplicatesToRemove.json");

const duplicatesData = JSON.parse(duplicatesFile);

function findDuplicates() {
  const duplicates = [];

  // between wolt and 10bis
  for (let i = 0; i < woltData.length; i++) {
    const thisDuplicates = [
      {
        track_id: woltData[i].track_id,
        location: woltData[i].location,
        name: woltData[i].name,
      },
    ];
    for (let j = 0; j < _10bisData.length; j++) {
      if (
        woltData[i].location[0] === _10bisData[j].location[0] &&
        woltData[i].location[1] === _10bisData[j].location[1] &&
        !legalDuplicates[woltData[i].track_id]?.includes(_10bisData[j].track_id)
      ) {
        const duplicateExist = duplicatesData.Wolt.filter(
          (item) =>
            (item[0].track_id === woltData[i].track_id &&
              item[1].track_id !== _10bisData[j].track_id) ||
            (item[0].track_id !== woltData[i].track_id &&
              item[1].track_id === _10bisData[j].track_id)
        );
        if (duplicateExist.length === 0) {
          thisDuplicates.push({
            track_id: _10bisData[j].track_id,
            location: _10bisData[j].location,
            name: _10bisData[j].name,
          });
        }
      }
    }
    if (thisDuplicates.length > 1) {
      duplicates.push(thisDuplicates);
    }
  }

  console.log("Number of duplicates:");
  console.log(duplicates.length);
  const jsonData = JSON.stringify(duplicates);
  fs.writeFileSync(`../JSON Files/duplicates.json`, jsonData);
}

function findAndRemove10bisDuplicates() {
  console.log("10bis restaurants before deleting duplicates:");
  console.log(_10bisData.length);

  for (let i = 0; i < _10bisData.length; i++) {
    for (let j = i + 1; j < _10bisData.length; j++) {
      if (
        _10bisData[i].track_id === _10bisData[j].track_id &&
        _10bisData[i].location[0] === _10bisData[j].location[0] &&
        _10bisData[i].location[1] === _10bisData[j].location[1]
      ) {
        _10bisData.splice(j, 1);
        j = i + 1;
      }
    }
  }

  console.log("10bis restaurants after deleteing duplicates:");
  console.log(_10bisData.length);

  const jsonData = JSON.stringify(_10bisData);
  fs.writeFileSync(`../JSON Files/10bisRestaurantsData.json`, jsonData);
}

function removeDuplicates() {
  const toRemove = [];

  duplicatesData.Wolt.forEach((element) => {
    const woltFiltered = woltData.filter(
      (item) =>
        item.track_id === element[0].track_id &&
        item.location[0] === element[0].location[0] &&
        item.location[1] === element[0].location[1]
    );

    const _10bisFiltered = _10bisData.filter(
      (item) =>
        item.track_id === element[1].track_id &&
        item.location[0] === element[1].location[0] &&
        item.location[1] === element[1].location[1]
    );

    if (woltFiltered.length > 0 && _10bisFiltered.length > 0) {
      toRemove.push(element[0]);
    }
  });

  console.log("Number of duplicates ");

  let i = 0;

  woltData = woltData.filter((item) => {
    const result = !(
      toRemove.length > i &&
      item.location[0] === toRemove[i].location[0] &&
      item.location[1] === toRemove[i].location[1]
    );
    if (!result) i++;
    return result;
  });

  console.log("Wolt restaurants:");
  console.log(woltData.length);

  const jsonData = JSON.stringify(woltData);
  fs.writeFileSync(`../JSON Files/WoltRestaurantsData.json`, jsonData);
}

// findAndRemove10bisDuplicates();
// findDuplicates();
// removeDuplicates();
// findDuplicates();
