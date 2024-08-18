export const getLastTwoDigits = (number = "") => {
  return number?.toString()?.slice(-2);
};

export const getMaxLengthForIndex = (index) => {
  if (index >= 9 && index <= 18) return 4;
  if (index >= 19 && index <= 21) return 3;
  if (index >= 22 && index <= 25) return 2;

  return 5;
};
