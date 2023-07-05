const wait = (n = 1) => {
  return new Promise((resolve, rej) => {
    setTimeout(resolve, 1000 * n);
  });
};

export { wait };
