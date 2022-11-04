const { rmSync } = require('fs');
const { copy } = require('fs-extra');

const handler = (e) => {
  if (e) console.error(e);
};

rmSync('./dist', { recursive: true, force: true }, handler);
copy('./src/assets/', './dist/static/', { recursive: true }, handler);
