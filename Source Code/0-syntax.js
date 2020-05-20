// I'm comment



const firstName = "Aman"

const lastName = 'Singour'

const age = 20

const greet = "Good Morning"

const arr = [
    function() {   console.log(greet) },
    firstName, lastName, age
]

for (let i = 0 ; i< arr.length ; i++){
    if(i == 0)
        console.log(arr[i]());
    
    else console.log(arr[i]);
}


console.log(greet);




/// ...........................
var x = 9

console.log(typeof(x));


 x = { }

// console.log(typeof(x))

 x = []

// console.log(typeof(x))


x  = true

console.log(typeof(x));
