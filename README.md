# Node.js Directory Lister

This is a simple Node.js CLI tool that lists the contents of a directory with formatted output, including file size, last modified date, and type (file or directory). It uses modern JavaScript features like async/await and ES modules.

## Features

- Lists files and directories in a specified folder
- Displays:
  - File name (blue)
  - File size in bytes (green)
  - Last modified date (yellow)
  - Type (directory `d` or file `-`)
- Gracefully handles errors
- Uses colorful output via [`picocolors`](https://github.com/alexeyraspopov/picocolors)

## Usage

```bash
node index.js [folder]
```

- `folder`: Optional. The path to the directory you want to list. Defaults to the current directory (`.`).

### Example

```bash
node index.js ./my-folder
```

Output:

```
d src                 	     4096  4/18/2025
- README.md           	      512  4/17/2025
```

## Installation

1. Clone the repository or copy the script.
2. Install dependencies:

```bash
npm install picocolors
```

3. Run the script using Node.js.

## Notes

- This script uses the Node.js built-in `fs/promises` module to read file stats asynchronously.
- It assumes you're using a recent version of Node.js that supports ES modules (`"type": "module"` in `package.json` or `.mjs` extension).
