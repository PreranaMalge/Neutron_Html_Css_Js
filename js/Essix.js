// destructuring


let obj={
    name: 'Prerana',
    addr: 'xyz'
}
console.log(obj.name);
console.log(obj['name']);

console.log(obj.addr);

let obj_name_temp_local={
    name: 'prerana',
    addr: 'xyz',
    name2: 'sss',
    addr2:'erd',
    name3: 'was',
    addr3: 'poi'
}
// obj_name_temp_local.name;
// obj_name_temp_local.addr;
// obj_name_temp_local.name1;
// obj_name_temp_local.addr1;


//destructuring format
let {name,addr}= obj_name_temp_local;
console.log(name);
console.log(addr);


//template literal/string literal
let name2='prerana';
let company='ns';
console.log(name2 +  ' works at '   +company);
console.log(`${name2} works at ${company} `);//sl

console.log(`Father's name`);


//default parameter

function mul(num1,num2=1){
    return num1*num2;
}
console.log(mul(2));

//rest and spread operator  =>... known as rest and spread oerator.


let arr=[11,22,33,44,55];
console.log(arr);
console.log(arr[0]);

//if i want to access all the elements in array but not as array then,
//used spread operator(...)

console.log(...arr); //spread operator.


//rest operator
function sum(...name){
    console.log(name);
}
sum(1,2,3); //giving elements as array.

//this concepts are used in call,apply,bind.



