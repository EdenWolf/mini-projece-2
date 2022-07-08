const fs = require("fs");

function findDuplicates(duplicatesData, legalDuplicates, _10bisData, woltData) {
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
            isTheSame: "",
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
  // Write all the duplicates we found
  const jsonData = JSON.stringify(duplicates);
  fs.writeFileSync(`../JSON Files/duplicates.json`, jsonData);
}

function findAndRemove10bisDuplicates(_10bisData) {
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

function isInToRemove(toRemove, item) {
  let i = 0;
  while (toRemove.length > i) {
    if (
      item.track_id === toRemove[i].track_id &&
      item.location[0] === toRemove[i].location[0] &&
      item.location[1] === toRemove[i].location[1]
    ) {
      return true;
    }
    i++;
  }
  return false;
}

function removeDuplicates(duplicatesData, _10bisData, woltData) {
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

  console.log("need to remove:");
  console.log(toRemove.length);

  const woltNewData = woltData.filter((item) => !isInToRemove(toRemove, item));

  console.log("Wolt restaurants:");
  console.log(woltNewData.length);

  const jsonData = JSON.stringify(woltNewData);
  fs.writeFileSync(`../JSON Files/WoltRestaurantsData.json`, jsonData);
}

function handleCheckedDuplicates(
  duplicatesData,
  legalDuplicates,
  duplicatesToCheck
) {
  let newLegalPairs = legalDuplicates;
  let newDuplicatesToRemove = duplicatesData;

  duplicatesToCheck.forEach((dupSet) => {
    let i = 1;
    while (i < dupSet.length) {
      if (dupSet[i].isTheSame === "y" || dupSet[i].isTheSame === "Y") {
        // If the same
        newDuplicatesToRemove.Wolt.push([
          {
            track_id: dupSet[0].track_id,
            location: dupSet[0].location,
            name: dupSet[0].name,
          },
          {
            track_id: dupSet[i].track_id,
            location: dupSet[i].location,
            name: dupSet[i].name,
          },
        ]);
      } else if (dupSet[i].isTheSame === "n" || dupSet[i].isTheSame === "N") {
        // If not the same - needs to go to legalPairs
        if (newLegalPairs[dupSet[0].track_id]) {
          newLegalPairs[dupSet[0].track_id].push(dupSet[i].track_id);
        } else {
          newLegalPairs = {
            ...newLegalPairs,
            [dupSet[0].track_id]: [dupSet[i].track_id],
          };
        }
      }
      i++;
    }
  });

  // write changes to legalPairs.json
  const newLegalPairsData = JSON.stringify(newLegalPairs);
  fs.writeFileSync("../JSON Files/legalPairs.json", newLegalPairsData);
  // write changes to duplicatesToRemova.json
  const newDuplicatesToRemoveData = JSON.stringify(newDuplicatesToRemove);
  fs.writeFileSync(
    "../JSON Files/duplicatesToRemove.json",
    newDuplicatesToRemoveData
  );
}

// findAndRemove10bisDuplicates();
// findDuplicates();

// handleCheckedDuplicates();
// removeDuplicates();
// findDuplicates();

module.exports = {
  findAndRemove10bisDuplicates,
  findDuplicates,
  handleCheckedDuplicates,
  removeDuplicates,
};
