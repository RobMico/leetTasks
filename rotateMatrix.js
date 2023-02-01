var rotate = function (matrix) {
    for (let i = 0; i < Math.ceil(matrix.length / 2); i++) {
        let opI = matrix.length - i - 1;
        let tmp, tmp2;

        for (let j = i; j < matrix[i].length-1-i; j++) {
            let opJ = matrix[i].length - j - 1;

            //[i, j] => [j, length-i]
            tmp = matrix[j][opI];
            matrix[j][opI] = matrix[i][j];

            //[j, length-i] => [length-i, length-j]
            tmp2 = matrix[opI][opJ];
            matrix[opI][opJ] = tmp;
            //tmp = tmp2;

            //[length-i, length-j] => [length-j, i]
            tmp = matrix[opJ][i];
            matrix[opJ][i] = tmp2;
            //tmp=tmp2;

            //[length-j, i]=>[i, j]
            matrix[i][j] = tmp;
        }
    }
    return matrix;
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]));

//[ 5,  1,  9,  11],          [ 15, 13, 9, 5 ],            
//[ 2,  4,  8,  10],          [ 2, 3, 4, 1 ],
//[ 13, 3,  6,  7],           [ 12, 6, 8, 7 ],
//[ 15, 14, 12, 16]           [ 16, 14, 10, 11 ]

//[ 15,  13,  2,  5 ], 
//[ 14,  3,  4,  1 ], 
//[ 12, 6,  8,  9 ], 
//[ 16, 7, 10, 11 ]


//123       741     141     181     
//456       852     452     852
//789       963     763     923

//781
//654
//923

//[1, 0] = [0, 1]

//[i][j]        [i][length-j]


//[length-i][j] [length-i][length-j]


//123       .21(3)  .21(9)  .21(7)  721
//456       456     456     456     456
//789       789     783     983     983

//[i, j]=>[j, i]    [0, 1]=>[1, 1]
//[1, 0]=>[0, 1]





//00            00=length;length
//1234      5151
//5678      6262
//1234      7373
//5678      8484


//[ 15, 14, 1, 5 ],
//[ 13, 3, 4, 2 ],
//[ 7, 6, 8, 10 ],
//[ 16, 12, 9, 11 ]

//i=1, j=0

//[1, 0] => [0, length-1]
//[i, j] => [j, length-i]

//[0, length-1] => [length-1, length-0]
//[j, length-i] => [length-i, length-j]

//[length-1, length-0] => [length-0, 1]
//[length-i, length-j] => [length-j, i]

//[length-0, 1]=>[1, 0]
//[length-j, i]=>[i, j]

//1 2 3 4 5
//1 2 3 4 5
//1 2 3 4 5
//1 2 3 4 5
//1 2 3 4 5




//[i, j] => [j, length-i]
//[j, length-i] => [length-i, length-j]
//[length-i, length-j] => [length-j, i]
//[length-j, i]=>[i, j]


//i=0, j=1
//[0,1] =>[1, 1]     2=>6(6)
//[1,1] =>[2, 1]     6=>8(8)

//123
//456
//789
