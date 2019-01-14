let a;
let b = a;
b = 123;
// console.log(a);// it will be undefined
// console.log(b);// it will print 123

let string1 = "Hey,";
let string2 = "hello!"
//document.getElementById("list").innerHTML = string1;

var familyArray=[
 { name:"Anjali",
   age: 23,
   gender:"Female"
 },
 { name:"Shreeya",
   age: 22,
   gender:"Female"
 },
 { name:"Krushna",
   age: 21,
   gender:"Male"
 },
 { name:"Harshvardhan",
   age: 19,
   gender:"Male"
 },
 { name:"Shantanu",
   age: 18,
   gender:"Male"
 },
 { name:"Shruti",
   age: 17,
   gender:"Female"
 },
 { name:"Gayatri",
   age: 15,
   gender:"Female"
 },
 { name:"Mrunal",
   age: 14,
   gender:"Female"
 },
 { name:"Sarvesh",
   age: 10,
   gender:"Male"
 },
 { name:"Arjun",
   age: 4,
   gender:"Male"
 }
];

function formTable(familyArray) {
 // basic way
 //const names=[];
 // familyArray.forEach(function(item){
 //     names.push(item.name);
 // });
 const names = familyArray.map(item => item.name)
 document.getElementById("list").innerHTML = names;
};

formTable(familyArray);


function monitorCount(rows, columns) {
 return rows * columns;
}

function costOfMonitors (rows, columns){
 return monitorCount(5, 4)*200;
}

// console.log(string1 + string2); // it will concatenate the strings and print Hey,hello!
// console.log(string1 - string2); // NaN

//type coercion
// console.log(undefined - null); // NaN
// console.log(null + 4); // 4
// console.log(null - 7);     // -7
// console.log('abc' + null); // abcnull
// console.log(20 + 'abc');   // 20abc
// console.log(9 + true);     // 10
