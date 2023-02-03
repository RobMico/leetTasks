var simplifyPath = function (path) {
    const commandsArr = path.split('/').filter(e => e);
    let stack = [];
    for (let x of commandsArr) {
        if (x === '..') {
            stack.pop();
            continue;
        }
        if (x === '.') {
            continue;
        }
        stack.push(x);
    }
    return '/'+stack.join('/');
};

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//foo/"));