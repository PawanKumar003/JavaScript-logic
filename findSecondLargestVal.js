// use Math.max function for get max value from array

const arrVal = [6, 8, 9, 7, 5];
const getSecondMaxNumber = (arr) => {
  const firstLargeNumber = Math.max(...arr);
  const index = arr.indexOf(firstLargeNumber);
  arr.splice(index, 1);
  const secondLargeNumber = Math.max(...arr);
  const index1 = arr.indexOf(secondLargeNumber);
  arr.splice(index1, 1);
  const thirdLargeNumber = Math.max(...arr);
  console.log(thirdLargeNumber);
  return thirdLargeNumber;
};

const getSecondMinNumber = (arr) => {
  const firstMinNumber = Math.min(...arr);
  const index = arr.indexOf(firstMinNumber);
  arr.splice(index, 1);
  const secondMinNumber = Math.min(...arr);
  const index1 = arr.indexOf(secondMinNumber);
  arr.splice(index1, 1);
  const thirdMinNumber = Math.min(...arr);
  console.log(thirdMinNumber);
  return thirdMinNumber;
};

console.log(getSecondMinNumber(arrVal), "use math max and min function");
