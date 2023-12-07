const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

async function readFile(filePath) {
  try {
    const data = await readFileAsync(filePath, 'utf8');
    return data;
  } catch (error) {
    throw new Error(`Error reading file: ${error.message}`);
  }
}

readFile('example.txt')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });