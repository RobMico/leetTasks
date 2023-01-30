var isValid = function(s) {
    let openingBrackets = ['(', '{', '['];
    let closingBrackets = [')', '}', ']'];
    let stack = ["default"];
    
    for(let x of s)
    {
        let i = openingBrackets.indexOf(x);
        if(i>=0){
            stack.push(closingBrackets[i]);
        }
        else if(x==stack[stack.length-1]){
            stack.pop();
        }
        else if(closingBrackets.includes(x)){
            return false;
        }
    }
    if(stack.length>1)
    {
        return false;
    }
    return true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));