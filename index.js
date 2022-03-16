// Generating array filled with 0 and 1 randomly
data = generateMatrix(200, 100);

// For recursive test, generate matrix fully filled with '1', using third parameter true
// - Max 21,100 for recursive function: cleanIslands
// - No problem for large values using non-recursive function: cleanIslandsNoRecursive
// Example: data = generateMatrix(21, 100, true); 

let result;
console.time('Time');

// result = cleanIslands(data);              // For test recursive
result = cleanIslandsNoRecursive(data);    // For test no recursive

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
function generateMatrix(x, y, fill = false) {
    for (let index = 0; index < y; index++) {
        newMatrix = Array( y ).fill( null ).map( ()=> rand(x, fill) );
    }
    return newMatrix;
}

function rand(x, fill) {
    let limit = 0.45;
    if (fill) limit = 0;
    let newLine = [];
    for (let index = 0; index < x; index++) {
        oneZero = (Math.random() > limit) ? 1 : 0;
        newLine.push( oneZero );
    }
    return newLine;
}