var longestCommonPrefix = function (strs) {
    let last ='';
    if(!strs.length){return '';} 
    if(strs.length==1){return strs[0];} 
    for (let i = 0; ; i++) {
        for (let j=1;j<strs.length;j++) {
            if(!strs[j][i]||!strs[0][i])
            {
                return strs[0].slice(0, i);
            }
            if(strs[0][i]!=strs[j][i])
            {
                return strs[0].slice(0, i)
            }
        }
    }
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));