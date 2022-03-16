matrix = height = width = newMatrix = counter = counterMax = 0;
// character = 1;
character = String.fromCharCode(9608);

function cleanIslands(data) {
    counterMax = 0;
    matrix = data;
    height = data.length - 1;
    width = data[0].length - 1;
    const blankLine = Array( width + 1 ).fill(0);
    newMatrix = Array( height + 1).fill( null ).map( ()=> Array.from(blankLine) );

    matrix.forEach((line, indexY) => {
        
        line.forEach((value, indexX) => {
            if ( ( indexY == 0 || indexY == height || indexX == 0 || indexX == width ) && value == 1 ) {
                newMatrix[indexY][indexX] = character;
                counter = 0;

                recursive(indexY, indexX);
                
                counterMax = Math.max(counter, counterMax);
            }
        });

    });
    return newMatrix;
}

function recursive(testY, testX) {
    const sides = [
        [0,1], [0,-1], [1,0], [-1,0]
    ];

    sides.forEach(([offsetY, offsetX]) => {
        const y = testY - offsetY;
        const x = testX - offsetX;
        if ( x < 0 || y < 0 || x > width || y > height || matrix[y][x] == 0 || newMatrix[y][x] == character ) {
            return;
        };
        newMatrix[y][x] = character;
        counter++;
        recursive(y, x);
    });
    return;
}