
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let check = board[i].some((el, index) => el !== '.' && board[i].indexOf(el) != index);
        if (check) {
            return false;
        }
        let arr = [];
        check = board.some((el) => {
            if (el[i] !== '.') {
                if (arr.includes(el[i])) {
                    return true;
                }
                arr.push(el[i])
                return false;
            }
        });
        if (check) {
            return false;
        }
        arr = [], x = i % 3, y = Math.floor(i / 3);
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                let el = board[y * 3 + j][x * 3 + k];
                if (el != '.') {
                    if (arr.includes(el)) {
                        return false;
                    }
                    arr.push(el);
                }
            }
        }
    }
    return true;
};


// console.log(isValidSudoku([
//     [".", ".", "1", ".", ".", ".", ".", ".", "."],
//     [".", "1", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."]]));

console.log(isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));
console.log(isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));