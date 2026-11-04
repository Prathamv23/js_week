// //objects in js
// const car={
//     company:"tata",
//     model: 2015,
//     color:"white"
// };

// console.log(car);

// //add key
// car.weight="300 kg";

// //edit value
// car.model=2016;

// console.log(car);

// //delete key
// delete car.weight;

// console.log(car);

// //object can also hold functions

// const student = {
//     name:"pratham",
//     dept:"computer",
//     hello(){
//         console.log("hii, i'm "+this.name)
//     },
//     ispassed:true
// };
// student.hello();

// //nested objects
// const employee = [{
//     name:"vyas",
//     address:{
//         city:"surat",
//         pincode:395004
//     },
//     math:[
//         10,
//         20,
//         30
//     ]
// }];

// console.log(employee);

// //looping over objects and arrays

// for(const s in student){
//     console.log(s, student[s])
// }

// //looping over array
// for(const e of employee){
//     console.log(e.name)
// }

// //

// let count=0;
// const display = document.getElementById("#count");

// function update(){
//     display.textContent=count;
// }

// document.querySelector("#add").addEventListener("click",()=>{
//     count++;
//     update();
// });

// document.querySelector("#minus").addEventListener("click",()=>{
//     count--;
//     update();
// });

// document.querySelector("#reset").addEventListener("click",()=>{
//     count=0;
//     update();
// });

let count = 0;
const display = document.querySelector("#count");
const minusbtn=document.querySelector("#minus");
function update() {
display.textContent = count;

}
document.querySelector("#add").addEventListener("click", () => {
count++;
update();
});
document.querySelector("#minus").addEventListener("click", () => {
    if(count!=0){
        count--;
        update();
    }
});
document.querySelector("#reset").addEventListener("click", () => {
count = 0;
update();
});