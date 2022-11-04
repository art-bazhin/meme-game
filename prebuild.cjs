const { rmSync } = require('fs');
const { cpSync } = require('fs-extra');

const handler = (e) => {
  if (e) console.error(e);
};

rmSync('./dist', { recursive: true, force: true }, handler);
cpSync('./src/assets/', './dist/static/', { recursive: true }, handler);
