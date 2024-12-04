//normal function
function add (x,y){
    return x + y
};

// arrow function
const add1 = (x,y)=>{
    return x + y
}

//another  arrow function
const add2 = (x,y)=>( x + y)

function multiply (x,y, z){
    return x * y * z
}

console.log(add(2, 7));
console.log(multiply(45, 9, 7));
console.log(add1(6, 9))
console.log(add2(9, 8))
