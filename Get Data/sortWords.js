var fs = require("fs");

function sortByCountAll() {
  const calculatedDataFile = fs.readFileSync(
    `../JSON Files/calculatedWordsData.json`
  );
  const calculatedData = JSON.parse(calculatedDataFile);
  let sortable = [];

  for (var word in calculatedData) {
    sortable.push([word, calculatedData[word].count]);
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  // console.log(sortable);

  const jsonData = JSON.stringify(sortable);
  fs.writeFileSync(`../JSON Files/SortedData/sortedByCount.json`, jsonData);
}

// function sortByCountVegan() {
//     const calculatedDataFile = fs.readFileSync(
//         `../JSON Files/calculatedWordsData.json`
//       );
//       const calculatedData = JSON.parse(calculatedDataFile).filter(item => );
//       let sortable = [];

//       for (var word in calculatedData) {
//         sortable.push([word, calculatedData[word].count]);
//       }

//       sortable.sort(function (a, b) {
//         return b[1] - a[1];
//       });

//       console.log(sortable);

//       const jsonData = JSON.stringify(sortable);
//       fs.writeFileSync(`../JSON Files/SortedData/sortedByCount.json`, jsonData);
//     }
// }

module.exports = { sortByCountAll };
