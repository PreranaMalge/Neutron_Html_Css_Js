//function curry

function volume(length){
    function def(width){
        function lmn(height){
            console.log('temp_data');
            let volume = length * width * height;
            return volume;
        }
        return lmn;
    }
}

// console.log(volume(6)(7)(8));

// interview questions
// for(var i=0;i<10;i++){
//     console.log(i);
// }

// var x=3;
// var y="3";
// console.log(x-y);