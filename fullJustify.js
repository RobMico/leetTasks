var createLine = (arr, width) => {
    if (arr.length === 1) {
        return arr[0] + ' '.repeat((width - arr[0].length));
    }
    let generalLen = arr.reduce((a, b) => a + b.length, 0), totalSpaceCount = width - generalLen;
    let spaceRange = Math.floor(totalSpaceCount / (arr.length - 1)), additionalSpaces = totalSpaceCount - spaceRange * (arr.length - 1);

    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (additionalSpaces > 0) {
            res += ' '.repeat(spaceRange + 1) + arr[i];
            additionalSpaces--;
        }
        else {
            res += ' '.repeat(spaceRange) + arr[i];
        }
    }
    //console.log("res", res.length);
    return res;
    //console.log(generalLen, totalSpaceCount, spaceRange, additionalSpaces);
}
var fullJustify = function (words, maxWidth) {
    let res=[], startIndex = -1, lastlength = 0;
    for (let i = 0; i < words.length; i++) {
        if (startIndex > -1) {
            if (words[i].length + lastlength + 1 <= maxWidth) {
                lastlength += words[i].length + 1;
                continue;
            }
            else {
                let tmp = words.slice(startIndex, i)
                res.push(createLine(tmp, maxWidth));
                startIndex = i;
                lastlength = words[i].length;
            }
        }
        else {
            startIndex = i;
            lastlength = words[i].length;
        }
    }
    res.push(createLine([words.slice(startIndex, words.length).join(' ')], maxWidth));
    return res;
};


//console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16), '\n');
//console.log(fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16), '\n');
console.log(fullJustify(["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"], 20));




// Line 62 in solution.js
//              throw new TypeError(__serialize__(ret) + " is not valid value for the expected return type list<string>");
//              ^
// TypeError: "This    is    an\nexample  of text\njustification." is not valid value for the expected return type list<string>
//     Line 62: Char 20 in solution.js (Object.<anonymous>)
//     Line 16: Char 8 in runner.js (Object.runner)
//     Line 46: Char 26 in solution.js (Object.<anonymous>)
//     at Module._compile (node:internal/modules/cjs/loader:1101:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47