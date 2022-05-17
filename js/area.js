var a=5;
function area(len,type) {
    var area;
    if(type == 'circle'){
        area=Math.PI *len *len;
    }
    else if(type == 'square') {
        area=len *len;
    }
    return area;
}
console.log(area(a,'circle'));
console.log(area(6,'square'));