// const txt= document.getElementById("h1_t");
// //const btn= document.getElementsById("btnn");

// txt.innerHTML = `world`;

// function col(){
//     txt.style.backgroundColor="gray";
// }
// //const colorchange = btn.addEventListener("click" ,() => col());

// document.querySelector("#btnn").addEventListener("click",()=>{
//     txt.style.color = "red";
// });

//form dom
// let input=document.querySelector("#f_name");
// const form_btn=document.querySelector("#f_btn");
// const pr_name=document.querySelector("#p_name");

// form_btn.addEventListener("click",() => {
//     let name = input.value;
//     pr_name.textContent = `Hello ${name}`;
// });

//local-storage
localStorage.setItem("theme","dark");

const theme = localStorage.getItem("theme");

console.log(theme);

const n_arr = ["blue","green","black"];

const n_items=JSON.stringify(n_arr)

const js = localStorage.setItem("colors",n_items);

const parse_arr = JSON.parse(localStorage.getItem("colors")) || []



console.log(parse_arr);