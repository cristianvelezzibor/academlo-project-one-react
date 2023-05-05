export const getRandomNumber = (number) => {
  let randomDecimal = Math.random();
  return Math.round(randomDecimal * number);
};
