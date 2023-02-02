var spiralOrder = function (matrix) {
    if (matrix.length == 0) { return []; }
    let lenX = matrix[0].length, lenY = matrix.length, maxOffset = lenX>lenY?Math.ceil(lenY / 2):Math.ceil(lenX / 2);
    //let offX = Math.ceil(lenX / 2), offY = Math.ceil(lenY / 2), maxOffset = offX > offY ? offY : offX;
    let res = [];

    for (let offset = 0; offset < maxOffset; offset++) {
        for (let i = offset; i < lenX - offset; i++) {
            res.push(matrix[offset][i]);
        }

        for (let i = offset + 1; i < lenY - offset; i++) {// right line
            res.push(matrix[i][lenX - offset - 1]);
        }
        if (lenY - offset - 1 !== offset) {
            for (let i = lenX - offset - 2; i >= offset; i--) { //down line
                res.push(matrix[lenY - offset - 1][i]);
            }
        }

        if (lenX - offset - 1 !== offset) {
            for (let i = lenY - offset - 2; i > offset; i--) {  //left line
                res.push(matrix[i][offset]);
            }
        }
    }
    return res;
};

// console.log(spiralOrder([[1, 2, 3, 4]]));
// console.log(spiralOrder([[1], [2], [3], [4]]));
// console.log(spiralOrder([[7], [9], [6]]));
console.log(spiralOrder([[1, 2], [3, 4]]));
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));