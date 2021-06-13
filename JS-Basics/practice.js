let a=10;
console.log(a);  

let b=[1,2,3,4,5];
console.log(b);

console.log('Hello World');

//js -> variables, arrays, func, loops, classes, objects

c=20; //global variable
var d=30; //function scope
let e=50; //block scope

/*
function fun() {

    let a=5;
    if(a==5){
        var f=10;
        console.log("Inside", f);
    }
    console.log("Outside", f);
}

fun();

square_root(10)


function square_root(n) {
    console.log("In first SQRT fn")
   // console.log(Math.sqrt(n));
    return 0;
}

//Function Hoisting

var sqrt_n = function() {
    console.log("In second SQRT fn")
    return 0
}
sqrt_n(10)

*/

//Arrays

let arr=["Apple", "Mango", "kiwi"]
console.log(arr)

for(let i=0; i<5;i++){
    console.log(arr[i])
}

arr.push("Banana") //Insert at back
arr.pop() //Remove from last
arr.shift() //remove from front
arr.unshift("Orange") //insert at front
arr.indexOf("Orange") //finds the index of element

if(a[0]=="Apple") {
    console.log("Apple");
}

else{
    console.log("No it is ", arr[0])
}
