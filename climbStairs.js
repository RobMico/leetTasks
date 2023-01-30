var climbStairs = function(n) {
    let n1 = 0, n2 = 1, nextTerm;
    
    for (let i = 1; i <= n; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return n2;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));