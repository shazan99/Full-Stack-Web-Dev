function greet(name) {
    console.log('hello', name)
}

function createGreeter (greeting) {
    
    function greet(name) {
        //here we treat as if name is a function
        console.log(greeting, name())
    }

    return greet
}

function getName() {
    return document.getElementById('namebox').value
}

let g1 = createGreeter('Good morning')
let g2 = createGreeter('Good evening')

console.log( typeof g1)

console.log(greet('Shazan'))

console.log(g1('Shazan'))
console.log(g2('Shazan'))

