//demo task  Counter app (+ /-/ Reset)
// let count=0
// const counter=document.querySelector("#countt");

// const addbtn= document.querySelector("#add");
// const minusbtn= document.querySelector("#minus");
// const resetbtn= document.querySelector("#reset");

// function update(){
//    counter.innerHTML = count;
// }

// addbtn.addEventListener("click",()=>{
//     count++;
//     update();
// });

// minusbtn.addEventListener("click",() => {
//     count--;
//     update();
// });

// resetbtn.addEventListener("click", () => {
//     count=0;
//     update();
// });

//task-1 On button click, change the heading color (red, then blue, then green).

// let t1_count = 0;
// let head = document.getElementById("heading");
// const t1_btn = document.getElementById("task-1");

// t1_btn.addEventListener("click",()=>{
//     t1_count++;
//     if (t1_count===1){
//         head.style.color = "red";
//     }
//     else if(t1_count===2){
//         head.style.color="blue";
//     }
//     else if(t1_count===3){
//         head.style.color="green";
//         t1_count=0;
//     }
//     else{
//         head.style.color="black";
//     }
// });

//task-2 Type your name in an input, click a button, and show "Hello, name!" below.
// let input=document.querySelector("#f_name");
// const p_btn = document.querySelector("#n_btn") ;
// const display = document.querySelector("#p_name");

// p_btn.addEventListener("click",() => {
//     const name = input.value;
//     display.textContent = `Hello ${name}`;
// });

//task-3  In the Counter, do not let the number go below 0.
// let count = 0;
// const display = document.querySelector("#countt");
// const minusbtn=document.querySelector("#minus");
// function update() {
//     display.textContent = count;

// }
// document.querySelector("#add").addEventListener("click", () => {
//         count++;
//         update();
// });
// document.querySelector("#minus").addEventListener("click", () => {
//     if(count!=0){
//         count--;
//         update();
//     }
// });
// document.querySelector("#reset").addEventListener("click", () => {
//         count = 0;
//         update();
// });

//task-4 Form validation: name (not empty), email (contains @ ), password (more than 6 characters). Show red error text for each mistake.
const name_n = document.querySelector("#name");
const email = document.querySelector("#mail");
const password = document.querySelector("#pass");
const sub = document.querySelector("#sb_btn");


const form = document.querySelector("#myform")

form.addEventListener("submit",(e) => {
    e.preventDefault();
    const error = document.querySelector("#err");
    const name = name_n.value;
    const emaill = email.value;
    const pass = password.value;

    if(!name){
        error.textContent = "Error:- Enter name!!";
    }
    else if(!emaill.includes("@")){
        error.textContent = "Error:- Enter valid email";
    }
    else if(pass.length < 6){
        error.textContent = "Error:- Password length should be atleast 6";
    }
    else{
        error.textContent = "";
        alert("Form submitted");
    }

} );

//task-5

// localStorage.setItem("theme","dark");
// localStorage.setItem("count",1);
// const tg_btn=document.getElementById("toggle");

// tg_btn.addEventListener("click",() => {
//     if(localStorage.getItem("count")==0){
//         localStorage.setItem("theme","light");
//         localStorage.setItem("count",1);
//     }
//     else if(localStorage.getItem("count")==1){
//         localStorage.setItem("theme","dark");
//         localStorage.setItem("count",0);
//     }
//    document.body.style.backgroundColor = localStorage.getItem("theme") == "dark" ? "black" : "white";
    
// } );

//task-6



