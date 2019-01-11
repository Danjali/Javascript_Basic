let a;
let b = a;
b = 123;
console.log(a);// it will be undefined
console.log(b);// it will print 123

let string1 = "Hey,";
let string2 = "hello!"
console.log(string1 + string2); // it will concatenate the strings and print Hey,hello!
console.log(string1 - string2); // NaN

//type coercion 
console.log(undefined - null); // NaN
console.log(null + 4); // 4
console.log(null - 7);     // -7
console.log('abc' + null); // abcnull
console.log(20 + 'abc');   // 20abc
console.log(9 + true);     // 10
