export default (min = -1000000, max = 1000000) => {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};
