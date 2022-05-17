//inside dom html content is in this format
 
// var obj={
//     header:{
//         div:{
//             h1:'hii',
//             h2:'hello'
//         },
//         div:{
//             p:'para',
//         }
//     },
//     main:{
//         div:{
//             h1:'redf',
//             h2:'uirg'
//         },
//         div:{
//             p:'para',
//         }
//     },
//     footer:{
//         div:{
//             h1:'poiu',
//             h2:'gfth'
//         }
//     }
// }

//window.document;
//document
//DOM-document object model

//bOM-browser object model
//window.history-to store tab history

//window.location-details of current page url
//reload,page change

//window.console.log('jyd');
//window.alert('welcome to xyz...');

//var ret=window.alert('are you single...');
//console.log(ret);

// if(ret){
//     console.log('you can visit this page');
// }
// else{
//     console.log('you cannot visit this page');
// }

// var ret2=window.prompt('Enter your name....');
// console.log(ret2);

//localStorage and sessionStorage-temporary Storage of data in browser.

//innerWidth  and innerHeight
//window.screen;

//window.navigator-browser technical details;

//window.document
//properties and methods

let movie_name=document.getElementById('movie_name');
console.log(movie_name);
//movie_name='ghtukk';

document.getElementById('movie_name').innerHTML='Badshah';
//hw find difference between innerHTML,innerText,textcontent.

// document.getElementById('movie_name').innerText='xxx';
// document.getElementById('movie_name').textContent='update';


//window.onload(ClipboardEvent);

let cast=document.getElementsByClassName('cast');
let paras=document.getElementsByClassName('p');

console.log(cast);
console.log(paras);

console.log(cast[0].innerHTML);
console.log(cast[1].innerHTML);

//console.log(paras[0].innerHTML);
//console.log(paras[1].innerHTML);

var movies_name=document.querySelector('.movie #movie_name');
var  movies_cast=document.querySelectorAll('.movie span');

console.log(movies_name);
console.log(movies_cast);

document.querySelectorAll('.movie span')[0].innerHTML='ms abc';

//innerHTML/innerText/textContent - Access /Write content inside any element.

// -------------------------------------------------------------------------------------------------

//creation of elements

// 1.div creation

{/*<div>My Name</div>*/}

let temp_div=document.createElement('div');
console.log(temp_div);
//creation of empty div element

temp_div.innerHTML="---------My Name----------------";
console.log(temp_div);

let temp_parent_div=document.getElementsByClassName('movie'[0]);
console.log(temp_parent_div);
//temp_parent_div.appendChild(temp_div);

/* 
    <div class="travel">
    <ul>
        <li>Car</li>
        <li>Bike</li>
    </ul>
    </div>
*/

let temp_div_list=document.createElement('div');
temp_div_list.setAttribute('class','travel');

let temp_ul_list=document.createElement('ul');

let temp_li_1_list=document.createElement('li');
temp_li_1_list.innerHTML='Car';
temp_ul_list.appendChild(temp_li_1_list);

let temp_li_2_list=document.createElement('li');
temp_li_2_list.innerHTML='Bike';
temp_ul_list.appendChild(temp_li_2_list);

temp_div_list.appendChild(temp_ul_list);
console.log(temp_div_list);

let body_temp=document.getElementsByTagName('body')[0];
body_temp.appendChild(temp_div_list);

//Append - appendChild,append,removeChild,replaceChild.

//hw - use forloop for multiple li creation.

//Jquery - do not used - $

document.getElementById('movie_name').style.color='red';
//act like inline css

document.getElementById('tagline').getAttribute('class');
//HW - create element of img type and add image to it and display in movie element.

let temp=document.querySelector('.movie');
temp.childNodes;
temp.children;

//DOM Event Methods - click,blur,change,hover,focus,focusin,focusout,select,scroll,mouseover,keyUp,keydown,keypress,touch,slide.

//inline function in html.

//DOM Event - Object
//event.target

function display_name(event){
    console.log(event);
    console.log(event.target);
    //alert('My Name is Prerana.');
}

function display_name_input(){
    let temp=document.getElementById('your name').value;
    console.log(temp);
    //alert('My Name is -'+temp);
}

function select_fn(){
    console.log('selected...');
}

function temp_fn(event){
    console.log(event.target);
    console.log(event.target.innerHTML);
   
}

//hw - how to read checkbox,radio.

//add event listener
//event propogation
//gelegation
//localstorage
//validation
//regex

//var iframe_temp=document.getElementById('iframe_temp');
// console.log(iframe_temp);
// iframe_temp.contentWindow.document

function fn_button_temp_1(){
    console.log('test............');
}

function fn_button_temp_2(){
    console.log('test 2............');
}

let button_temp_1=document.getElementById("button_temp_1");
button_temp_1.addEventListener('click',fn_button_temp_1);
button_temp_1.addEventListener('click',fn_button_temp_2);