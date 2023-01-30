var romanToInt = function(s) {
    let number =0;
    let last='';
    let dict = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    for(x of s){
        if(dict[last]<dict[x]){
            number+=dict[x]-dict[last]*2;
        }
        else{
            number+=dict[x];
        }
        last=x;
    }
    return number;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));