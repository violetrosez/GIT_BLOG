let flat = (arr) => {
  return arr.reduce((pre, cur) => {
    return Array.isArray(cur) ? pre.concat(flat(cur)) : pre.concat(cur);
  }, []);
};
console.log(flat([[[2], 3], 4, [5, 6]]));
