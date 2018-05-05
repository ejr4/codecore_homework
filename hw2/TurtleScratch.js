/// this file contains functions which convert a string such as 'T4,4-f5-r-f3-l'
/// into instructions to move the Turtle as in the main file TurtleMain.js
/// as of April 26, declarations such as 'new Turtle...' do not work within the context used, such as with 'eval'.     e.g.  "Tom is not defined"


const instructionString = process.argv.slice(2);
console.log(instructionString);

function arrToTurtleExec (instructionString) {
    let instructionArr = instructionString.split('-');

    let Tom = new Turtle();
        for (element of arr) {     
        switch (element[0]) { //based on first letter
            case 't':
            Tom.x = parseInt(element[1]);
            Tom.y = parseInt(element[3]);
            log(parseInt(element[1]));
            log('t case');
            break;
            case 'f':
            log(parseInt(element[1]));
            Tom.forward(parseInt(element[1]));
            break;
            case 'r':
            Tom.right();
            break;
            case 'l':
            Tom.left();
            break;
            default:
            console.error('fall-through alert');
        }
    }
    Tom.print();
    return;

}

// let t1 = `t5,5-f10-r-f5`;
// let t2 = stringToTurtleArr(t1);
// arrToTurtleExec(t2);