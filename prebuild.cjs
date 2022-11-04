const { copyFileSync, rmSync } = require('fs');

const handler = (e) => {
  if (e) console.error(e);
};

rmSync('./dist', { recursive: true, force: true }, handler);
copyFileSync('./src/assets/', './dist/static/', { recursive: true }, handler);
