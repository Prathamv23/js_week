//demo task
const students = [
{ name: "Pratham", marks: 88 },
{ name: "Rohan", marks: 92 },
{ name: "Manthan", marks: 98 }
];

const highest=students.reduce((best,s) => s.marks > best.marks ? s : best);

console.log("The Highest marks is "+highest.marks+" "+highest.name)

const total=students.reduce((sum,n) => sum+n.marks,0)

const average =  total/students.length;

console.log(average);

//task-1  Make a product object (name, price, stock). Then change price and add a new key brand .
const product={
    name:"Mouse",
    price:200,
    stock:5000
};

console.log(product);

product.price=300;
product.brand="Logitech";

console.log(product);

//task-2 Make an object about yourself (name, age, hobbies array, address object). Use destructuring to get name and city
const personal={
    name:"Pratham",
    age:21,
    hobbies:[
        "Cycling",
        "Reading",
        "Travelling",
    ],
    address:{
        city:"Surat",
        town:"Adajan",
        pincode:395004
    }
}

const {name,age}=personal;
console.log(name,age);

//task-3  Merge {a:1, b:2} and {c:3, d:4} using spread.
let f_1={a:1},f_2={b:2},s_1={c:3},s_2={d:4};

let f_join={...f_1,...f_2};
let s_join={...s_1,...s_2};

console.log(f_join,s_join);

//task-4 From the users array below, make a list of all names (map) and get users who live in Surat (filter).
const users=[
    {
        name:"Pratham",
        city:"surat",
        salary:25000
    },
    {
        name:"Miral",
        city:"maroli",
        salary:20000
    },
    {
        name:"Rohan",
        city:"vadodara",
        salary:18000
    },
    {
        name:"Bhagya",
        city:"surat",
        salary:29000
    },

];

const names=users.map(n => n.name);
const city=users.filter(n => n.city === "surat");

console.log(names);
console.log(city);

//task-5  Use JSON.stringify on an object, then JSON.parse it, and check the data is the same.
const products=[{
    name:"Mouse",
    price:200,
    stock:5000
},
{
    name:"Monitor",
    price:300,
    stock:5000
}];

let strfy=JSON.stringify(products);
console.log(strfy);
console.log(typeof(strfy))

const obj=JSON.parse(strfy);
console.log(obj);
console.log(typeof obj)

if(strfy===obj.value){
    console.log("same");
}
else{
    console.log("Not same");
}

//task-6  Find the youngest user in users .
const users_n = [
{ name: "Ravi", age: 22, city: "Surat" },
{ name: "Meera", age: 25, city: "Mumbai" },
{ name: "Amit", age: 19, city: "Surat" },
{ name: "Neha", age: 28, city: "Pune" }
];

const young=users_n.reduce((y,n)=> n.age<y.age ? n : y)

console.log(young)

//task-7 Sort employees by salary (high to low) and find the total salary. (Hint: [...employees].sort((a, b) => b.salary - a.salary) )
const employeess = [
{ name: "A", salary: 30000 },
{ name: "B", salary: 50000 },
{ name: "C", salary: 40000 }
];

const sal=[...employeess].sort((a,b) => b.salary - a.salary)
const total_sal=employeess.reduce((sum,n) => sum+n.salary,0)

console.log(sal);
console.log(total_sal);

//task-8  Group users by city: { Surat: [...], Mumbai: [...], Pune: [...] } . (Hint: reduce and {} )
