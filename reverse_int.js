MAX_INTEGER = 2147483647;
MIN_INTEGER = -2147483648;

var reverse = function(x) {
    if(x<0)
    {
        let res = -1*Number(Array.from(x*-1+'').reverse().join(''));
        if(res>MAX_INTEGER||res<MIN_INTEGER)
        {
            return 0;
        }
        return res;
    }
    else{
        let res = Number(Array.from(x+'').reverse().join(''));
        if(res>MAX_INTEGER||res<MIN_INTEGER)
        {
            return 0;
        }
        return res;
    }
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));