//demo task The cart has item prices. If the total is more than 500, give a 10% discount.

const cart=[200,300,400,100,50,60];

function total(total,value){
    return total+value;
}

const sum= cart.reduce(total,0);

console.log(sum);

function apply_discount(f_amount){
    if(f_amount>500){
        return f_amount - f_amount*0.10;
    }
    else{
        return f_amount;
    }

}
console.log("your total is "+apply_discount(sum));

//task-1 Write greet(name) that returns Hello, Ravi! .

function greet(name){
    return "Hello, "+name;
}

console.log(greet("Pratham"));

//task-2  In [4, 9, 2, 15, 7] , find the biggest and smallest number. 

const arr=[4,9,2,15,7];

const max= Math.max.apply(null,arr);

console.log(max);

const minimum = min_element(arr);

console.log(minimum);

function min_element(n){
    min=n[0];
    for(let i=0;i<n.length;i++){
        if (n[i] < min){
            min=n[i];
        }
    }
    return min;
}

//task-3 Use map to square every number in [1,2,3,4] .
const sq_num=[1,2,3,4]

const square=sq_num.map(n => n**2);

console.log(square);

//task-4  From ages = [12, 25, 17, 30, 18] , use filter to keep only 18 or above.

const ages=[12,25,17,30,18];

const young = ages.filter(n => { if(n>=18) return n} );

console.log(young);

//task-5 Reverse a string: "hello" becomes "olleh". 

let str="hello";

function reverse_str(str){

    let l_str=str.split("");

    left=0;
    right=l_str.length;

    while(left<right){
        temp=l_str[right];
        l_str[right]=l_str[left];
        l_str[left]=temp;

        left++;
        right--;
    }
     console.log(l_str)
    return l_str.join("");
}


console.log(reverse_str(str));

//task-6 Check for a palindrome (same when reversed, like "madam", "level"). Return true or false .

let p_str="madam";

let flag=false;

function palindrome(str){
    let split_str= str.split("");
    console.log(split_str);
    left=0;
    right=split_str.length-1;

    while(left<right){
        if(split_str[left]===split_str[right]){
            flag=true;
        }
        else{
            flag=false
        }
        right--;
        left++;
    }

    if(flag===true){
        return true;
    }
    else{
        return false;
    }
}

console.log(palindrome(p_str))

//task-7 Remove duplicates from [1, 2, 2, 3, 3, 3, 4] to get [1, 2, 3, 4] . 

const arr_dupli = [1,2,2,3,3,3,4];

let rm_dupli = new Set(arr_dupli);

console.log(rm_dupli);

//task-8 From [5, 12, 8, 3, 20] , keep the even numbers (filter), square them (map), and find their total (reduce). Chain all three methods.

const task_8 = [5,12,8,3,20];

function chain_three_method(num){

    const even = num.filter(n => {if (n%2===0) return n});
    console.log(even);

    const square = even.map(n => n**2);
    console.log(square);

    const total = square.reduce((sum,n)=> sum+n,0);
    console.log(total);

}

chain_three_method(task_8);

