const arr = [1, 4, 4, 56, 8, 7, 8, 8];

var newarr = [];

// get duplicate and unique value
var duplicatElem = arr.filter((elm, index, array) => {
  return array.indexOf(elm) !== index;
});

// get some value to push in new array
newarr.push(duplicatElem);
var eventElem = arr.filter((elm) => {
  return elm % 2 === 0;
});

// sort method remove duplicate array ane return unique value
const get_duplicate_value = Array.from(new Set(arr));

// remove array value which anywhere in array
const remove_one_element_in_array = arr.indexOf(7);
if (remove_one_element_in_array > -1) {
  arr.splice(remove_one_element_in_array, 1);
}

console.log(arr);
