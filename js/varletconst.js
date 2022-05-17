// in javascript=>function,{},if else=>are treated as block.
//let has a block scope
//and var has a global scope.


//var variables created inside the block scope are accessible outside block.

//while let variables are accessible within block scope only.
    
var abc=5;
let def=6;
console.log(abc);           //5
console.log(def);           //6

{
    var abc_block=15;       
    let def_block=20;       

    console.log(abc_block);     //15
    console.log(def_block);      //20

}

console.log(abc);                  //5
console.log(def);                   //6
console.log(abc_block);              //15
console.log(def_block);             //notdefined

//const is exctly same as let ,but we can't change value of it.


var a = 5;
var a = 10;
//variable shadowing


var a = 5;
a = 10;
/* let a = 666; - not allowed */

let b = 5;
/* let b = 10; */
/* var b = 66665665; - not allowed */

