console.log(beta())
function alpha() {

    return "A"
}

function beta() { //Function is hoisted

    return "B"
}

let gamma=function() { //function not hoisted

    return "C"
}

console.log(gamma())

function area(height, width) {
    if (!width) { // typeof width=== 'undefined'
        return Math.PI *height*height
    }
    return height*width
}

console.log('area 3,4', area(3,4))
console.log('area 4', area(4))