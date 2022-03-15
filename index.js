let data = [
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [1,1,1,0,0,1,0,1,0,0,0,0,0,1,0],
    [0,0,1,0,0,1,1,1,0,0,1,1,0,0,0],
    [0,0,1,0,0,0,1,0,1,0,1,0,0,0,0],
    [0,0,0,0,1,1,0,0,1,1,1,1,1,1,1],
    [0,1,1,1,0,1,1,0,1,0,0,0,0,1,0],
    [0,1,0,1,0,1,0,0,0,1,1,0,1,1,0],
    [0,0,1,0,0,1,0,1,0,0,0,1,0,0,0],
    [1,1,1,0,0,1,0,1,1,0,0,1,1,1,1],
    [0,1,0,1,0,1,0,0,0,0,0,0,1,0,0],
    [0,0,1,0,0,1,0,0,0,0,1,0,0,1,1],
    [0,1,1,1,0,1,0,0,0,0,1,1,0,1,0],
    [0,0,1,0,0,1,0,0,0,0,0,0,0,1,0],
];

let dataExpec = [
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [1,1,1,0,0,1,0,1,0,0,0,0,0,0,0],
    [0,0,1,0,0,1,1,1,0,0,1,1,0,0,0],
    [0,0,1,0,0,0,1,0,1,0,1,0,0,0,0],
    [0,0,0,0,1,1,0,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,1,1,0,1,0,0,0,0,1,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,1,1,0],
    [0,0,1,0,0,1,0,0,0,0,0,1,0,0,0],
    [1,1,1,0,0,1,0,0,0,0,0,1,1,1,1],
    [0,1,0,0,0,1,0,0,0,0,0,0,1,0,0],
    [0,0,1,0,0,1,0,0,0,0,0,0,0,1,1],
    [0,1,1,1,0,1,0,0,0,0,0,0,0,1,0],
    [0,0,1,0,0,1,0,0,0,0,0,0,0,1,0],
];

function generateMatrix(x, y) {
    for (let index = 0; index < y; index++) {
        newMatrix = Array( y ).fill( null ).map( ()=> rand(x) );
    }
    return newMatrix;
}

function rand(x) {
    let newLine = [];
    for (let index = 0; index < x; index++) {
        oneZero = (Math.random() > 0.45) ? 1 : 0;
        newLine.push( oneZero );
    }
    return newLine;
}

data = generateMatrix(200, 100);

let result;
console.time('Time');
// for (let index = 0; index < 20000; index++) {
    // result = cleanIslands(data) ;
    result = cleanIslandsNoRecursive(data) ;
// }
console.timeEnd('Time');
console.log('counter', counterMax);


// console.log( "Result: ", JSON.stringify(result) == JSON.stringify(dataExpec) );
// console.table(result);
// console.table(dataExpec);

divResult = document.getElementById('result');
divData = document.getElementById('data');

resultShow = result.map( (e)=>{
    return e.join('');
}).join("<br>");

dataShow = data.map( (e)=>{
    return e.join('');
}).join("<br>");

divResult.insertAdjacentHTML("beforeend", resultShow);
divData.insertAdjacentHTML("beforeend", dataShow);