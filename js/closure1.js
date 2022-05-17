// function fn_outer_normal () {
//     var a_outer = 5;
//       function fn_inner() {
//         var b_outer = 10;
//         console.log(b_outer, a_outer);
//         return b_outer;
//       }
//       fn_inner();
//   }
  
//   function fn_outer() {
//       var a_outer = 5;
//     console.log(a_outer);
//         function fn_inner() {
//           var b_outer = 10;
//           console.log('line no 16 - ', b_outer, a_outer);
//         }
//         return fn_inner;
//   }
  
  /* console.log(fn_outer()); */
  
 // let return_fn = fn_outer(); //function expression
  /* return_fn = function fn_inner() {
        var b_outer = 10;
        console.log(b_outer, a_outer);
      } */
  /* console.log(a_outer); */
  //return_fn();
  /* console.log(a_outer); */
  /* console.log('line no 25 - ', return_fn()); */
  
  
  /* fn_outer()(); */
  

function outer(){
  var name="prerana";
  function inner(){
    alert(name);
  }
  return inner;
}
var myfun=outer();
myfun();



// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
  