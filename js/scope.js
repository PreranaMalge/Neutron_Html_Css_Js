var a=5;            //global scope
function abc(){
    var b=6;            //local scope

    console.log(a);     //5     =>global scope variables are accessible everywhere.

    console.log(b);     //6     =>local scope variables are accessible only within function.
}
abc();
console.log(a);         //5

console.log(b);         //not defined   =>because whenever fun invokation is done then only fun executes .