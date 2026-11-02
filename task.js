// //demo task
// let num=22;

// if(num%2===0){
//     console.log("Number is even")
// }
// else{
//     console.log("number is odd")
// }

// //task-1 Store your name, age and city in variables. Print I am Ravi, 24 years old,from Surat
// const name="Pratham vyas";
// let age=21;
// let city="surat";

// console.log(`I am ${name}, ${age} years old, from ${city}`)

// //task-2  Take two numbers. Print their sum, difference, product and division.

// let a=12
// let b=6
// add=a+b;
// diff=a-b;
// prod=a*b;
// div=a/b;
// console.log(`The addition of a and b is ${add}, difference is ${diff}, product is ${prod} and division of ${div}`)


// //task-3 Given marks, print the grade: 90+ A, 75-89 B, 50-74 C, below 50 Fail.
// let marks=49;

// switch(marks>0){

//     case(marks>=90):
//         console.log("Your grade is A");
//         break;

//     case(marks>=75 && marks<=89):
//         console.log("Your grade is B");
//         break;

//     case(marks>=50 && marks<=74):
//         console.log("Your grade is C");
//         break;

//     case(marks<50):
//         console.log("Better luck next time!!");
//         break;

//     default:
//         console.log("Invalid Marks");
//         break;
// }

// //task-4 Print the multiplication table of 5 (5 x 1 = 5 ... 5 x 10 = 50)
// let number=5;

// for(let i=1;i<=10;i++){
//     let mul=5*i;
//     console.log(`5 x ${i} = ${mul}`)
// }

// //task-5 Print all numbers from 1 to 100 that are divisible by 5.
// for(let i=1;i<=100;i++){
//     if(i%5===0){
//         console.log(i);
//     }
// }

// //task-6 for 1 to 30, print "Fizz" if divisible by 3, "Buzz" if divisible by 5,"FizzBuzz" if both, otherwise the number.
// for(let i=1; i<=30;i++){
//     if(i%3===0 && i%5===0){
//         console.log("FizzBuzz");

//     }
//     else if(i%3===0){
//         console.log("Fizz");
//     }
//     else if(i%5===0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i)
//     }
// }

//task-7  Print all prime numbers from 1 to 50 
let start=1;
let end=50;

while(start<=end){
    let count=0;

    for(let i=1; i<=start;i++){
        if(start%i===0){
            count++;

        }

    }

    if(count === 2){
        console.log(start);
    }
    start++;
}

//task-8 Print this pyramid
n=5

for(let i=1; i<=5; i++){
    let patt="";
    for(let j=1; j<=i;j++){
        patt+="*";
    }
    console.log(patt);
}