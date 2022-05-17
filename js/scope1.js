var a=5;
var c=7;
d=77;

function abc() {
    var b=6;
    c=10;
    var d=55;
    console.log(a);             //5
    console.log(b);             //6
    console.log(c);             //10
}
abc();
d=77;
abc();
console.log(a);                 //5
// console.log(b);                 //not defined
console.log(c);                 //10