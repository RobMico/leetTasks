var intToRoman = function (num) {
    let romanDict={
        0:{//100x
            '1':'C',
            '2':'CC',
            '3':'CCC',
            '4':'CD',
            '5':'D',
            '6':'DC',
            '7':'DCC',
            '8':'DCCC',
            '9':'CM',
            '0':''
        },
        1:{//10x
            '1':'X',
            '2':'XX',
            '3':'XXX',
            '4':'XL',
            '5':'L',
            '6':'LX',
            '7':'LXX',
            '8':'LXXX',
            '9':'XC',
            '0':''
        },
        2:{//1x
            '1':'I',
            '2':'II',
            '3':'III',
            '4':'IV',
            '5':'V',
            '6':'VI',
            '7':'VII',
            '8':'VIII',
            '9':'IX',
            '0':''
        }
    }
    let tmp = Math.floor(num/1000), res = 'M'.repeat(tmp);
    let arr = Array.from('000' + num).slice(-3);
    for(let i=0;i<3;i++)
    {
        res+=romanDict[i][arr[i]];
    }
    return res;
};


console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));