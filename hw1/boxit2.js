// this is the first week's homework assignment
// any number of string arguments taken from command line will be returned in boxes

let log = console.log;

let args =process.argv.slice(2);

///// unicode for this program 

let midline="\u2501";
let topRight="\u2513";
let topLeft="\u250f";
let bottomRight="\u251b";
let bottomLeft="\u2517";
let leftT="\u2523";
let rightT="\u252b";
let vert="\u2503";

// main function

function boxit(strArr){
    // find overall length of boxes
    let stringLengths=[];
    for(let element of strArr){
        stringLengths.push(element.length);
    }
    let stringMax = Math.max(...stringLengths);
      
    /// creating string of boxed elements:
    let returnString ='';
    // top border:
    returnString += drawTopBorder(stringMax) + "\n";
    // middle elements and borders
    for (let i=0;i < strArr.length -1; i++){
        returnString += drawBarsAround(strArr[i],stringMax-strArr[i].length) + "\n";
        returnString += drawMiddleBorder(stringMax) + "\n";
    }
    // last element and bottom border
    returnString += drawBarsAround(strArr[strArr.length -1],stringMax-strArr[strArr.length -1].length) + "\n";
    returnString +=drawBottomBorder(stringMax);

    return returnString;
}

// support functions:
function drawLine(num){
    return("\u2501".repeat(num));
}
function drawTopBorder(num){
    return(topLeft + drawLine(num) + topRight);
}
function drawBottomBorder(num){
    return(bottomLeft + drawLine(num) + bottomRight);
}
function drawMiddleBorder(num){
    return(leftT + drawLine(num) + rightT);
}
function drawBarsAround(str,num){
    return(vert + str + ' '.repeat(num) + vert);
}

// debug line: 
log(boxit(args));