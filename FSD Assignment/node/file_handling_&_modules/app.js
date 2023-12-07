
const readFile = require('./readFile');
const modifyFile = require('./modifyFile');
const writeFile = require('./writeFile');

const inputFilePath = 'input.txt';
const outputFilePath = 'output.txt';

readFile(inputFilePath)
  .then((content) => {
    const modifiedContent = modifyFile(content);
    return writeFile(outputFilePath, modifiedContent);
  })
  .then(() => {
    console.log('File updated successfully!');
  })
  .catch((err) => {
    console.error('An error occurred:', err);
  });
  