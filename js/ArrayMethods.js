//Array Methods
var arr=[1,2,3,4,5];

//push() =>insert element at the last position
arr.push(6);
console.log(arr);

//pop() =>delete ele from the last.
arr.pop();
console.log(arr);

var arr2=[11,22,33,44,55];

//unshift() => insert ele at the beginning
arr2.unshift(77);
console.log(arr2);

//shif() => delete ele at the beginning
arr2.shift();
console.log(arr2);

//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(arr.includes(222));

//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(arr.indexOf(2));

//array concatination
//1. using spread operator.

console.log([...arr,...arr2]);

console.log(typeof([...arr,...arr2]));

//2.using inbuild method 
console.log(arr.concat(arr2));

//in case of numbres it does not works fine.
let unsorted_arr=[4,1,66,2,333,77];
console.log(unsorted_arr.sort());

let unsorted_arr2=['4','1','66','2','333','77'];
console.log(unsorted_arr2.sort());

let unsorted_arr3=['pravin','prathmesh','rupesh','vighnesh'];
console.log(unsorted_arr3.sort());

//arrayfill() => filled the attay from start index to the end index.(but it includes start index element and not include end index ele)i.e. end index ele is not modified. 
//modified till index end index-1 position.
//i.e. start index is inclusuve and end index is exclusive.

let arr_fill=[22,44,66,88,110];
console.log(arr_fill.fill('abc',1,4));

//slice()=> returns the modified new array starting from start index to end index(end index not include).
//not modify the existing array returns the new copy of array.
let arr_slice=['a','b','c','d','e'];
console.log(arr_slice.slice(2,4));

//reverse the existing array.
console.log(arr_slice.reverse());

//replace-cut and insert.
let arr_splice=[21,22,32,43,54,56];
console.log(arr_splice.splice(1,3,1,2,3));
//1=start,3=end,1,2,3=new values.
console.log(arr_splice);

var arr_num = [2,44,555,1,7777,3,88];

let re_arr_num = arr_num.sort((a,b) => b-a);
console.log(arr_num);
console.log(re_arr_num);
