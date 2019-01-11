// basic array functions
let temp = [1, 2, 3, 4, 5, 6];
//find odd number
const result= temp.filter(function(item, key) {
  return item % 2 !== 0;
});
document.getElementById("oddNum").innerHTML = result;

// multiply each num by 2
const multi = temp.map(function(item, key) {
  return item * 2;
});
document.getElementById("multiply").innerHTML = multi;

// calculate sum (reduce basic)
const sum = temp.reduce(function(item, key) {
  return item + key;
});
document.getElementById("add").innerHTML = sum;

// reduce with initial value
const sum2 = temp.reduce(function(item, key) {
  return item + key;
}, 0);

// map with string concatenation
const string = temp.map(function(item, key) {
  return `newVal ${item}`;
});
document.getElementById("str").innerHTML = string;


// Using ES6 arrow function
let temp2 = [1, 2, 3, 4, 5, 6];

// map with string concatenation
const temp4 = temp2.map(function(item, key) {
  return `newVal ${item}`;
});

//find odd number
const tempn = temp2.filter((item, key) => item % 2 !== 0);
document.getElementById("esoddNum").innerHTML = tempn;

// multiply each num by 2
const temp1 = temp2.map(item => item * 2 );
document.getElementById("esmulti").innerHTML = temp1;

// calculate sum (reduce basic)
const temp3 = temp2.reduce((item, key) => item + key);
document.getElementById("esSum").innerHTML = temp3;
