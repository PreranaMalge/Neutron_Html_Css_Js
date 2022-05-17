let india=document.getElementById('grandparent');
function fn_india(){
    console.log('function clicked for india...');
}
india.addEventListener('click',fn_india,false);



let up=document.getElementById('parent');
function fn_up(){
    console.log('function clicked for up');
}
up.addEventListener('click',fn_up,false);


let lko=document.getElementById('child');
function fn_lko(){
    console.log('function clicked for lko');
}
lko.addEventListener('click',fn_lko,false);