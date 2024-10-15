const xlsx = require('node-xlsx');
const fs = require('fs');
const path = require('path');

const inputFolder = path.join(__dirname, '/input/');
const outputFolder = path.join(__dirname, '/output/');

let csvString = '';

fs.readdir(inputFolder, (err, files) => {
  if (err) throw err;

  const xlsxFiles = files.filter((file) => {
    // ~ prefix is used by Excel to store temporary files
    return file.endsWith('.xlsx') && !file.startsWith('~');
  });

  xlsxFiles.forEach((file) => {
    const parsedXlsx = xlsx.parse(inputFolder + `/${file}`);

    // convert only the first sheet of the xlsx file since right now I need only the first sheet
    const sheet1 = parsedXlsx[0];
    const rows = sheet1.data;

    rows.forEach((row, index) => {
      let rowString = '';

      row.forEach((cell) => {
        const stringCell = String(cell);

        if (stringCell.includes(',') || stringCell.includes('"')) {
          rowString += `"${stringCell}"` + ',';
        } else {
          rowString += stringCell + ',';
        }
      });

      rowString += '\n';
      csvString += rowString;
    });
  });

  fs.writeFile(outputFolder + '/output.csv', csvString, (err) => {
    if (err) throw err;

    console.log('CSV file created');
  });
});