
data = generateMatrix(200, 100); // max 20, 100 for recursive function

let result;
console.time('Time');

// for (let index = 0; index < 200; index++) {    // Used for performance test
    // result = cleanIslands(data);                    // For test recursive
    result = cleanIslandsNoRecursive(data);         // For test no recursive
// }

console.timeEnd('Time');
console.log('Max recursive counter usage:', counterMax);





// Show result in screen
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





// helper functions to generate the data
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