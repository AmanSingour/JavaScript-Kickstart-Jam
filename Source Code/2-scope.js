var x = "I'm var outside"

const con_x = "I'm Const outside"

let let_x = "I'm let outside"

function inside(){

    console.log("inside \n");
    var x = "I'm var inside"

    const con_x = "I'm Const inside"

    let let_x = "I'm let inside"

    x = "changed"


    console.log(x);
    console.log(con_x);
    console.log(let_x);
    console.log("\n");
}



inside()

    var x = "change"
    x = "again"

    console.log("outside \n");

    console.log(x);

    console.log(con_x);
    console.log(let_x);