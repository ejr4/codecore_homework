// this is the first week's homework assignment
// any number of string arguments taken from command line will be returned in boxes
let args = process.argv.slice(2);

// main function
function boxit (strArr) {
    // determine longest string length
    let stringLengths = [];

    for (let element of strArr) {
        stringLengths.push(element.length);
    }
    let maxLength = Math.max(...stringLengths);

    // pad strings with spaces
    let paddedStrArr = [];
    for (let element of strArr) {
        paddedStrArr.push(element + ' '.repeat(maxLength-element.length));
    }

    /// final drawing:
    let returnString ='';
    // top border:
    returnString += drawTopBorder(maxLength) + "\n";
    // middle elements and borders
    for (let i=0;i < paddedStrArr.length -1; i++){
        returnString += drawBarsAround(paddedStrArr[i]) + "\n";
        returnString += drawMiddleBorder(maxLength) + "\n";
    }
    // last element and bottom border
    returnString += drawBarsAround(paddedStrArr[paddedStrArr.length -1]) + "\n";
    returnString += drawBottomBorder(maxLength);

    return returnString;
}

// support functions:
function drawLine(num){
    return ("\u2501".repeat(num));
}
function drawTopBorder(num){
    return (topLeft + drawLine(num) + topRight);
}
function drawBottomBorder(num){
    return (bottomLeft + drawLine(num) + bottomRight);
}
function drawMiddleBorder(num){
    return (leftT + drawLine(num) + rightT);
}
function drawBarsAround(str){
    return (vert + str +  vert);
}

/// unicode for this program
let midline     = "\u2501";
let topRight    = "\u2513";
let topLeft     = "\u250f";
let bottomRight = "\u251b";
let bottomLeft  = "\u2517";
let leftT       = "\u2523";
let rightT      = "\u252b";
let vert        = "\u2503";

console.log(boxit(args));  /// print output //   END