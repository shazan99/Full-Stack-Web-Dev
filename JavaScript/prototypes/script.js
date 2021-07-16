let str = "Asdasd"               //3 level from null
let num = 233                    //3 level from null
let bool = true                  //3 level from null
let arr = [255,65,48,69,654]     //3 level from null
let obj = {a:10, b: 'asdasd'}    //2 level from null
let fun = function() { console.log('yay!: ')} //3 level from null

// if x and y are not primitive
// x==y : true <- what does this mean ?
// this means they are same object in memory

console.log('typeof String',typeof String)
console.log('typeof Object',typeof Object)
console.log('typeof Boolean',typeof Boolean)
console.log('typeof Number',typeof Number)
console.log('typeof Array',typeof Array)
console.log('typeof Function',typeof Function)

console.log("===Proto Chain===")
console.log(str.__proto__.__proto__ = obj.__proto__)
console.log(num.__proto__.__proto__ = obj.__proto__)
console.log(bool.__proto__.__proto__ = obj.__proto__)
console.log(arr.__proto__.__proto__ = obj.__proto__)
console.log(fun.__proto__.__proto__ = obj.__proto__)

//Everything indirectly inherits from the same thing that obj is inherited from
// i.e in JS, everything is essentially an object

console.log("====Prototypes===")
console.log(obj.__proto__ == Object.prototype)
console.log(str.__proto__ == String.prototype)
console.log(num.__proto__ == Number.prototype)
console.log(bool.__proto__ == Boolean.prototype)
console.log(arr.__proto__ == Array.prototype)

//String.prototype inherits from Object.prototype