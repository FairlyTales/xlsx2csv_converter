const fs = require('fs');
const path = require('path');

const inputFolder = path.join(__dirname, '/input/');
const outputFolder = path.join(__dirname, '/output/');

fs.readdir(inputFolder, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    if (file !== '.gitignore') {
      const srcFilePath = path.join(inputFolder, file);

      fs.unlink(srcFilePath, (err) => {
        if (err) throw err;
      })
    }

    console.log('All files in input folder deleted');
  });
});

fs.readdir(outputFolder, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    if (file !== '.gitignore') {
      const srcFilePath = path.join(outputFolder, file);

      fs.unlink(srcFilePath, (err) => {
        if (err) throw err;
      })
    }

    console.log('All files in output folder deleted');
  });
});

