const fs = require("fs");

function printAll() {
  printMostCommonWords();
}

function printMostCommonWords() {
  const files = [
    ["sortedByCount", "mostCommonWords"],
    ["sortedByCountNotVegetarian", "mostCommonWordsNotVegetarian"],
    ["sortedByCountVegan", "mostCommonWordsVegan"],
    ["sortedByCountVegetarian", "mostCommonWordsVegetarian"],
  ];

  files.forEach((fileSet) => {
    const file = fs.readFileSync(`../JSON Files/SortedData/${fileSet[0]}.json`);
    const data = JSON.parse(file);

    const text =
      "מילה\tכמות\tהעדפה דיאטטית\n" +
      data.reduce(
        (prev, curr) => `${prev}${curr[0]}\t${curr[1]}\t${curr[2]}\n`,
        ""
      );

    fs.writeFile(`../JSON Files/Final Data/${fileSet[1]}.txt`, text, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      //file written successfully
    });
  });
}

module.exports = { printAll };
