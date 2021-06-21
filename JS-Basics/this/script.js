
function checkThis() {
    console.log(this)
}

let obj = {
    a:10,
    b: "asgd",
    c: true,
    d : function () {
        console.log(this) //The 'this'keyword here will point to the object
    },
    e: {
        l: 20,
        m:'djsbfjb',
        n: function () {
            console.log(this)
        },
    },

}