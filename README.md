# xlsx2csv_converter

Small script for converting xslx files to csv files.

## How to use

1. Run `npm install` in the console, you can also use any other package manager of your choice.

2. Place xlsx file in the `\input` folder.

3. Run `npm start` to convert file from xslx to csv. It will be saved to the `\output` folder.

4. Copy or move the csv file from the `\output` folder to the desired location.

5. Run `npm clean` to remove all files from both folders.

## Notes

.gitignore files in the `\input` and the `\output` folders are for git to track these directories so that they could be uploaded to the github. 

Parser converts only first sheet of the xlsx file.

Empty cells will be excluded from the resulting csv file.
