let arrayCombination = (arr1, arr2) => {
    let res = new Array(arr1.length * arr2.length);
    let counter = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            res[counter] = arr1[i] + arr2[j];
            counter++;
        }
    }
    return res;
}

var letterCombinations = function (digits) {
    if (!digits) {
        return [];
    }
    let leterDict = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }
    let res;
    for (let x of digits) {
        if (!res) {
            res = leterDict[x];
        }
        else {
            res = arrayCombination(res, leterDict[x]);
        }
    }
    return res;
};

console.log(letterCombinations("23"));
console.log(letterCombinations("439"));
console.log(letterCombinations(""));