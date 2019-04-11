const familyArray = [{
    name: "Anjali",
    age: 23,
    gender: "Female"
},
{
    name: "Shreeya",
    age: 22,
    gender: "Female"
},
{
    name: "Krushna",
    age: 21,
    gender: "Male"
},
{
    name: "Harshvardhan",
    age: 19,
    gender: "Male"
},
{
    name: "Shantanu",
    age: 18,
    gender: "Male"
},
{
    name: "Shruti",
    age: 17,
    gender: "Female"
},
{
    name: "Gayatri",
    age: 15,
    gender: "Female"
},
{
    name: "Mrunal",
    age: 14,
    gender: "Female"
},
{
    name: "Sarvesh",
    age: 10,
    gender: "Male"
},
{
    name: "Arjun",
    age: 4,
    gender: "Male"
}];

const formTable = (familyArray) => {
    // basic way
    // const names=[];
    // familyArray.forEach(function(item){
    //     names.push(item.name);
    // });
    const names = familyArray.map(item => item.name);
    document.getElementById("list").innerHTML = names;
};

formTable(familyArray);

const monitorCount = (rows, columns) => rows * columns;

const costOfMonitors = (rows, columns) => monitorCount(5, 4) * 200;
