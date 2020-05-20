var x = 005

var str_x = String(x)

var str_age = "20"

var num_age = Number(str_age)

console.log("Explicit");
console.log(x, typeof(x));
console.log(str_x, typeof(str_x));
console.log(str_age, typeof(str_age));
console.log(num_age, typeof(num_age));

// == vs ===
console.log("\n");

console.log(( x == str_x ));
console.log(( x === str_x ));