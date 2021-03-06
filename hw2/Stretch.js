/// codecore homework 2 stretch.
/// use:  `node stretch.js 'T4,5-f3-r-f5-l-f6-r-f5-l'`   for example.
// almost there: april 27
const args = process.argv.slice(2);
const instructionString = args[0];

const log = console.log;
class Turtle {
 
    constructor (x=0, y=0, dir = 1, mapW = 10, mapH = 10){
        if ( (x > mapW -1 ) || (y > mapH -1) || mapW < 1 || mapH < 1 || x < 0 || y<0 ) {
            console.error ("invalid turtle position or map dimensions,, try again");
            return;
        }
        this.dir    = (( dir % 4 ) + 4 ) % 4;  /// directions are modulo 4
        this.x      = x;
        this.y      = y;
        this.mapW   = mapW;
        this.mapH   = mapH;
        this.turtleMap = new turtleMap ( mapW, mapH );
    }
/// log turtle's current position and direction
    status () {
        console.log ('dir ' + this.dir + ', y ' + this.y + ', x ' + this.x );
    }

    right () {
        this.dir = ((( this.dir + 1) % 4 ) + 4 ) % 4;
        return this;
    }
    left () {
        this.dir = ((( this.dir - 1) % 4 ) + 4 ) % 4;
        return this;
    }
    forward (n=1) {
            switch( this.dir ) {
                case 1:
                    this.goEast(n);
                    return this; 
                    break;    
                case 2:
                    this.goSouth(n);
                    return this;
                    break;
                case 3:
                    this.goWest(n);
                    return this;
                    break;    
                case 0:
                    this.goNorth(n);
                    return this;    
                    break;
                default:
                console.error('forward switch fall-through');
                return this;
        }
    }
    goEast(n) {
        let netMovement = Math.min( n, this.mapW - 1 - this.x  );
            for(let i = this.x; i <= this.x + netMovement; i++ ) {
            this.turtleMap[this.y][i] = 1;
        }
        this.x += netMovement;
    }
    goSouth(n) {
        let netMovement = Math.min( n, this.mapH - 1 - this.y  );
        for(let i = this.y; i <= this.y + netMovement; i++ ) {
            this.turtleMap[i][this.x] = 1;
        }
        this.y += netMovement;        
    }
    goWest(n) {
        let netMovement = Math.min(n, this.x  );
            for(let i = this.x; i >= this.x - netMovement; i-- ) {
            this.turtleMap[this.y][i] = 1;
        }
        this.x -= netMovement;
    }
    goNorth(n) {
        let netMovement = Math.min(n, this.y  );
            for(let i = this.y; i >= this.y - netMovement; i-- ) {
            this.turtleMap[i][this.x] = 1;
        }
        this.y -= netMovement;        
    }
// show where the turtle has traveled
    print() {
        console.log( mapPrint (this.turtleMap) );
    }
}
// create grid on which turtle moves
const turtleMap = function (mapW, mapH){
    return zero2D (mapW, mapH);
}
function zero2D(width, height) {
    var array = [], row = [];
    while (width--) row.push(0);
    while (height--) array.push(row.slice());
    return array;
}

function mapPrint(arr) {
      let outStr = '';
      let mapH = arr.length;
      let mapW = arr[0].length;
      for (let i = 0; i < mapH; i++) {
        for (let j = 0; j < mapW; j++) {
            outStr += (arr[i][j] === 0 ? '   ' : ' • ' );
        }
        outStr += '\n';
    }
    return outStr;
}


function stringToTurtle (instructionString) {
    let instructionArr = instructionString.split('-');

    let Tom = new Turtle();
        for (element of instructionArr) {     
        switch (element[0]) { //based on first letter
            case 'T':
            Tom.x = parseInt(element[1]);
            Tom.y = parseInt(element[3]);
            log(parseInt(element[1]));
            log('t case');
            break;
            case 'f':
            log(parseInt(element[1]));
            Tom.forward( (element.length > 1) ? parseInt(element[1]) : 0 );
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

stringToTurtle(instructionString);
