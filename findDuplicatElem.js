const arr = [1, 4, 4, 56, 8, 7, 8, 8];

var newarr = [];
var duplicatElem = arr.filter((elm, index, array) => {
  console.log(array, array.indexOf(elm), "asdsdf");
  //   return array.indexOf(elm) !== index;
});
newarr.push(duplicatElem);
var eventElem = arr.filter((elm) => {
  return elm % 2 === 0;
});

console.log(newarr);
