//functions
function hello(name){
    return "hello "+name;
}
console.log(hello("pratham"));

//anonymous function 
let mul = function(a,b) { return a*b;};

console.log(mul(2,2));

//arrow function
let add = (a,b) => a+b;

console.log(add(2,3));

//hoisting
console.log(div(6,3));

function div(a,b){
    return a/b;
}

//scope
let x=50; // global scope variable

function test(){
    let y=40; //local scope variable 
    console.log(x,y); // 50,40
}
test();
console.log(x); // 50
//console.log(y); //error : y is not defined 

//array list

const car=["saab","volvo","BMW"];

console.log(car);

// push for adding element at last
car.push("suzuki");

console.log(car);

//pop for removing last element
car.pop();

console.log(car);

//accesing particular element using index
console.log(car[2]);

//unshift for adding element at start
car.unshift("Audi");
console.log(car);

//length for finding length of array
console.log(car.length);

//creating empty array
const fruits=[]
fruits[0]="Banana";
//print <1 empty item> due to no value at 1st index
fruits[2]="Mango";

console.log(fruits);

//defining array using new keyword
const num= new Array(
    1,
    2,
    3,
    4
)

console.log(num);

//converting array into string
const strf=fruits.toString();
console.log(strf); //Banana,,Mango

//Displaying array using json

let text=JSON.stringify(car);

console.log(text);

//forEach for traversing at each element

car.forEach(n=> console.log(n));

//map for change every item with new array
const mapp= num.map(n => n**2);
console.log(mapp);

//filter keep only items that pass a test
const age= num.filter(n => n%2===0);
console.log(age);

//find get the first item that matches
const f=num.find(n => n>3);
console.log(f);

//reduce combine all item into one value
const total=num.reduce((sum,n) => sum+n,0);
console.log(total);

