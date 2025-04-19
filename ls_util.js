import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import pc from "picocolors";

const folder = process.argv[2] ?? ".";
const { red, blue, yellow, green } = pc;

async function ls(folder) {
  let files;
  try {
    files = await readdir(folder);
  } catch (e) {
    console.error(red(`Could not read ${folder}`));
    process.exit(1);
  }

  const filePromises = files.map(async (file) => {
    const filePath = join(folder, file);
    let stats;
    try {
      stats = await stat(filePath); //info del file
    } catch (error) {
      console.error(`Error reading file from ${filePath}`);
      process.exit(1);
    }

    const isDir = stats.isDirectory();
    const fileType = isDir ? "d" : "-";
    const filesize = stats.size.toString();
    const filemodified = stats.mtime.toLocaleDateString();
    return `${fileType} ${blue(file.padEnd(20))} ${green(
      filesize.padStart(10)
    )} ${yellow(filemodified)}`;
  });

  const filesInfo = await Promise.all(filePromises);

  filesInfo.forEach((file) => console.log(file));
}

ls(folder);
