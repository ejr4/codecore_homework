/// this file contains functions which convert a string such as 'T4,4-f5-r-f3-l'
/// into instructions to move the Turtle as in the main file TurtleMain.js
/// as of April 26, declarations such as 'new Turtle...' do not work within the context used, such as with 'eval'.     e.g.  "Tom is not defined"


function stringToTurtleArr (str) {
    return str.split('-');
}
let Tom = new Turtle();
function arrToTurtleExec (arr) {
    //let execArr = [];
    // const Tom = new Array();
    for (element of arr) {     
        switch (element[0]) { //based on first letter
            case 't':
            Tom.x = element[1];
            Tom.y = element[3];
            log('t case')
            break;
            case 'f':
            Tom.forward(element[1]);
            // break;
            // case 'r':
            // execArr.push(`Tom.right()`);
            // break;
            // case 'l':
            // execArr.push(`Tom.left()`);
            // break;
            default:
            // console.error('fall-through alert');
        }
    }
    return;

}

let t1 = `t5,5-f10-r-f5`;
let t2 = stringToTurtleArr(t1);
let t3 = arrToTurtleExec(t2);