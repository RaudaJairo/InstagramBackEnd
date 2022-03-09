const nanoid = (size = 21) => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  const id = [];
  let i;
  for (i = 0; i < size; i++) {
    id[i] = chars[0 | Math.random() * 62];
  }
  return id.join('');
};

module.exports = nanoid;