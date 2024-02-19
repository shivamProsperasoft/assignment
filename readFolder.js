const fs = require("fs");
const path = require("path");

async function readFilesInBatches(folderPath, batchSize) {
  try {
    const filesQueue = [];
    const filesAndDirs = await fs.promises.readdir(folderPath);

    for (const item of filesAndDirs) {
      const itemPath = path.join(folderPath, item);

      if ((await fs.promises.stat(itemPath)).isFile()) {
        filesQueue.push(itemPath);

        if (filesQueue.length === batchSize) {
          await processFiles(filesQueue);
          filesQueue.length = 0;
        }
      } else if ((await fs.promises.stat(itemPath)).isDirectory()) {
        await readFilesInBatches(itemPath, batchSize);
      }
    }

    if (filesQueue.length > 0) {
      await processFiles(filesQueue);
    }
  } catch (error) {
    console.error("Error reading files:", error);
  }
}

async function processFiles(files) {
  files.forEach((file) => {
    const readFile = fs.readFileSync(file, "utf-8");
    console.log(readFile);
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));
}

const rootFolderPath = "./txtFiles";
const batchSize = 3;
readFilesInBatches(rootFolderPath, batchSize);
