const { cpSync, rmSync } = require('fs');

const handler = (e) => {
  if (e) console.error(e);
};

rmSync('./dist', { recursive: true }, handler);
cpSync('./src/assets/', './dist/static/', { recursive: true }, handler);
