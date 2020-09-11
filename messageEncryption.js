/*
You and your friends are all fans of the hit TV show ThroneWorld and like to discuss it on social media. Unfortunately, some of your friends don't watch every new episode the minute it comes out. Out of consideration for them you would like to obfuscate your status updates so as to keep them spoiler-free.

You settle on a route cipher, which is a type of transposition cipher. Given a message and integers r and c, to compute the route encryption of the message:

Write out the message row-wise in a grid with r rows and c columns
then read the message column-wise.

You are guaranteed that r * c == len(message).

Your task is to write a function that, given a message, r, and c, returns the route encryption of the message.

Example:

message = "One does not simply walk into Mordor", r = 6, c = 6

O n e   d o
e s   n o t
  s i m p l
y   w a l k
  i n t o  
M o r d o r

-> "Oe y Mnss ioe iwnr nmatddoploootlk r"

Other examples:

message = "1.21 gigawatts!", r = 5, c = 3
1 . 2
1   g
i g a
w a t
t s !

-> "11iwt. gas2gat!"

message = "1.21 gigawatts!", r = 3, c = 5 -> "1ga.it2gt1as w!"

Complexity analysis:

n: the length of the message


*/
/*using special charaters

the product of the grid should equal the length of the entire message*/

/*
1) declare a grid for the entire matrix 

2) within the grid that use the new Array property to make a new array with c amount of elements in a loop that goes for r length

3) get each element from the message and place them in the correct location of the grid. use string or array methods based on the structure used.

loop through the grid by column and create a string with the encrypted message and return it.
*/

// Submitted karat code from line 60 - 86 (excluding lines 80-83)

const encryptMessage = (message, rowNum, colNum) => {
    if (rowNum * colNum !== message.length) return;

    let grid = [];
    let arrMessage = message.split('');
    let encryptedMessage = '';

    for (let i = 0; i < rowNum; i++) {
        grid.push(new Array(colNum));
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < colNum; j++) {
            grid[i][j] = arrMessage[j]
        }
        arrMessage.splice(0, colNum);
    }
    
    for (let i = 0; i < colNum; i++) {
        for (let j = 0; j < rowNum; j++) {
            encryptedMessage += grid[j][i];
        }
    }
    return console.log(encryptedMessage);
}
console.log('Submitted to company');
console.log('--------------------------------------', '\n' );
encryptMessage('This is a test', 2, 7); // 'T hai st eisst'
encryptMessage('One does not simply walk into Mordor', 6, 6); // 'Oe y Mnss ioe iwnr nmatddoploootlk r'
encryptMessage('1.21 gigawatts!', 5, 3); // '11iwt. gas2gat!'
console.log('\n' );



// Optimized cleaner code w/ multiple functions

// creates encryption grid
const makeGrid = (row, col) => {
    let chart = [];
    for (let i = 0; i < row; i++) {
        chart.push(new Array(col));
    }
    return chart;
}
// fills the grid with the initial message
const fillGrid = (message, grid, col) => {
    let arrMessage = message.split('');

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < col; j++) {
            grid[i][j] = arrMessage[j];
        }
        arrMessage.splice(0, col);
    }
    return grid;
}
// encrypts the message based on column of the grid
const encrypt = (grid, row, col) => {
    let newMessage = '';

    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            newMessage += grid[j][i];
        }
    }
    return newMessage;
}

const newEncryptMessage = (message, rowNum, colNum) => {

    if (rowNum * colNum !== message.length) return;

    let grid = makeGrid(rowNum, colNum);

    grid = fillGrid(message, grid, colNum);

    let encryptedMessage = encrypt(grid, rowNum, colNum);

    return console.log(encryptedMessage);
}

console.log('Not submitted to company');
console.log('--------------------------------------', '\n' );
newEncryptMessage('This is a test', 2, 7); // 'T hai st eisst'
newEncryptMessage('One does not simply walk into Mordor', 6, 6); // 'Oe y Mnss ioe iwnr nmatddoploootlk r'
newEncryptMessage('1.21 gigawatts!', 5, 3); // '11iwt. gas2gat!'