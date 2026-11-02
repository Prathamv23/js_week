// console.log("Hello javascript");

// //variables lesson practice
// let x=2
// const pi=3.14;
// console.log("x value "+x);
// x=10;
// console.log("x value now is "+x)
// console.log("pi value "+pi);

// //datatypes lesson practice
// let a=10;
// const b=10.5;
// str="hello world";
// let st=true;

// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof str)
// console.log(typeof st)

//operators

// //arithmetic
// let x=10;
// let y=5;
// let z="15"
// console.log(x+y+" "+z)


// //Assignment
// x=5
// x**=y
// console.log(x)

// //comparison
// x=15
// n=(x==z)
// console.log(n)
// n=(x===z)
// console.log(n)

// //logical & conditional
// a=true
// b=false

// if(a && a)
// {
//     console.log("true")
// }
// else{
//     console.log("false")
// }

// if( b || b){
//     console.log("true")
// }
// else{
//     console.log("false")
// }

//conditonal with else if
let marks=100;

if(marks >= 90)
{
    console.log("passed with distiction")
}
else if(marks>=33)
{
    console.log("passed")
}
else{
    console.log("Failed")
}

//switch condition
let day=10;

switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("Not any day");
        break;
}

//loops

//for loop
// let n=10;
// for(let i = 0; i<=n;i++){
//     console.log(i/2)
// }

let n=5;

for(let i=0;i<=n;i++){
    let rowstr="";
    for(let j=0;j<i;j++)
    {
        rowstr+="*"
    }
    console.log(rowstr);
}

