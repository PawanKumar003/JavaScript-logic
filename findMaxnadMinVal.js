// find max number and min number by reduce function

const arrNumber = [3, 445, 66, 2, 78, 998];
const get_max_number = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre > cur ? pre : cur;
  });
};

const get_min_number = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre < cur ? pre : cur;
  });
};

// console.log(get_max_number(arrNumber), "max");
// console.log(get_min_number(arrNumber), "min");

// use Math.max and Math.min funtion for get max and min value

const firstLarge = Math.max(...arrNumber);
const firstMin = Math.min(...arrNumber);

// console.log(firstLarge, firstMin, "maxxx");

// get max and min number from array with custom code
var maxNumner = arrNumber[0];

for (let i = 0; i < arrNumber.length; i++) {
  if (maxNumner < arrNumber[i]) {
    maxNumner = arrNumber[i];
  }
}

var minNumber = arrNumber[0];

for (let i = 0; i < arrNumber.length; i++) {
  if (minNumber > arrNumber[i]) {
    minNumber = arrNumber[i];
  }
}

// console.log(maxNumner, "max cus");
// console.log(minNumber, "min cus");

const arr = [3, 445, 66, 2, 78, 78, 3, 998, 3];

const getmax = arr.reduce((pre, cur) => {
  return pre > cur ? pre : cur;
});

// console.log(getmax, "ddd");
