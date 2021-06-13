//Object oriented programming in JS

//allows to create objects without defining the class
//One of the methods to create JSON


//Another way
function Fruit(taste,color) {
    this.color = color;
    this.taste = taste;
}

//new Keyword
let mango = new Fruit("Sweet", "yellow");
let orange = new Fruit("sour", "orange");

//first way
var apple = {
    taste: "Sweet",
    color:"red",
}

//Class Keyword
class FruitClass{
    constructor(taste,color){
        this.color = color;
        this.taste = taste;
    }
};

let kiwi = new Fruit("sour", "green");

//Class Expression

let FruitClass2 = class{
    constructor(taste,color){
        this.color = color
        this.taste= taste
    }
};

let kiwi2 = new FruitClass2("sour", "green")

/*
var bird = {
   x:100,
   y:20,
   color:"blue",
   eggs:[1,2,3,4],

   fly:function() {
       console.log("Bird is flying", this.x,this.y)
   }
};

//FOr loop
for(let i=0; i<bird.eggs.length;i++) {
    console.log(bird.eggs[i]);
}

//For Each Loop 

bird.eggs.forEach(function(val,idx){
    console.log(idx,val);
})
*/