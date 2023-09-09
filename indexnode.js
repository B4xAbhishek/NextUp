const fs = require('fs');
const path = require('path');

function remove3xFromFilename(filename) {
  return filename.replace(/@3x/g, '');
}

const directoryPath = './assets'; 
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach((file) => {
    const originalFilePath = path.join(directoryPath, file);
    const newFileName = remove3xFromFilename(file);
    const newFilePath = path.join(directoryPath, newFileName);

    fs.rename(originalFilePath, newFilePath, (renameErr) => {
      if (renameErr) {
        console.error(`Error renaming ${file}:`, renameErr);
      } else {
        console.log(`Renamed ${file} to ${newFileName}`);
      }
    });
  });
});
