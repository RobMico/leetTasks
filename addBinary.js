var addBinary = function(a, b) {
    a = Array.from(a).reverse();
    b = Array.from(b).reverse();

    let stored_val=0, sum=[];
    for(let i=0;;i++)
    {
        if(!a[i]&&!b[i]&&stored_val===0)
        {
            return sum.reverse().join('');
        }
        let tmp = (a[i]==='1')+(b[i]==='1')+stored_val;
        if(tmp===3)
        {
            sum.push('1');
        }
        if(tmp===2)
        {
            sum.push('0');
            stored_val=1;
        }
        if(tmp===1)
        {
            sum.push('1');
            stored_val=0;
        }
        if(tmp===0)
        {
            sum.push('0');
        }
    }

};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("11111", "1"));