const sumAll = function(min,max) {
let sumNum = 0;
if (typeof(min) === 'string' || typeof(max) === 'string'){
    return 'ERROR';
}else{
for(let i = min; i<= max; i++){
sumNum += i;
}
return sumNum;
}
}

// Do not edit below this line
module.exports = sumAll;
