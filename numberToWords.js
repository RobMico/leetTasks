var numberToWords = function (num) {
    if(num==0)
    {
        return "Zero";
    }
    let dict = {
        full: {
            '10': 'Ten ',
            '11': 'Eleven ',
            '12': 'Twelve ',
            '13': 'Thirteen ',
            '14': 'Fourteen ',
            '15': 'Fifteen ',
            '16': 'Sixteen ',
            '17': 'Seventeen ',
            '18': 'Eighteen ',
            '19': 'Nineteen ',

        },
        one: {
            '1': 'One ',
            '2': 'Two ',
            '3': 'Three ',
            '4': 'Four ',
            '5': 'Five ',
            '6': 'Six ',
            '7': 'Seven ',
            '8': 'Eight ',
            '9': 'Nine ',
            '0': '',
        },
        tens: {
            '0': '',
            '1': 'Ten ',
            '2': 'Twenty ',
            '3': 'Thirty ',
            '4': 'Forty ',
            '5': 'Fifty ',
            '6': 'Sixty ',
            '7': 'Seventy ',
            '8': 'Eighty ',
            '9': 'Ninety ',
        },
        ranks: ['', 'Thousand ', 'Million ', 'Billion '],
        hundred: 'Hundred '
    }
    let res = '', arr = Array.from(num + '').reverse();
    for (let i = 0; i < arr.length + 2; i += 3) {
        let hundreds = arr[i + 2] || '0', tens = arr[i + 1] || '0', ones = arr[i] || '0';
        if (hundreds === '0' && tens === '0' && ones === '0') {
            continue;
        }
        if (tens == '1') {
            res = (hundreds !== '0' ? (dict.one[hundreds] + dict.hundred) : '') + dict.full[tens + ones] + dict.ranks[i / 3] + res;
        }
        else {
            res = (hundreds !== '0' ? (dict.one[hundreds] + dict.hundred) : '') + dict.tens[tens] + dict.one[ones] + dict.ranks[i / 3] + res;
        }
    }
    return res.slice(0, -1);
};

console.log(numberToWords(123));
console.log(numberToWords(12345));
console.log(numberToWords(1234567));