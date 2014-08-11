//VARIABLES
var TL = document.getElementById('TL'),
    TM = document.getElementById('TM'),
    TR = document.getElementById('TR'),
    ML = document.getElementById('ML'),
    MM = document.getElementById('MM'),
    MR = document.getElementById('MR'),
    BL = document.getElementById('BL'),
    BM = document.getElementById('BM'),
    BR = document.getElementById('BR');
var cells = [[TL, TM, TR], [ML, MM, MR], [BL, BM, BR]];
var startBox = document.getElementById('start');
var n = 1,
    one = '',
    two = '',
    game = "notOver",
    turn = '',
    colorOne = 'teal',
    colorTwo = 'coral';
var cell1 = 0,
    cell2 = 0,
    cell3 = 0,
    cell4 = 0,
    cell5 = 0,
    cell6 = 0,
    cell7 = 0,
    cell8 = 0,
    cell9 = 0;

//GAME PLAY     
function start() {
    startBox.innerHTML = "<b>Player 1: <input maxlength='1' type='text' name='player1' id='player1' value=''> Player 2: <input maxlength='1' type='text' name='player2' id='player2' value=''></b><button id='beginGame' onclick='beginGame()'>Let's Go!</button>";
}
   
function beginGame() {
    one = document.getElementById('player1').value.toUpperCase();
    two = document.getElementById('player2').value.toUpperCase(); 
    game = "notOver";
    turn = "";
    n = 1;
    cell1 = 0; 
    cell2 = 0;
    cell3 = 0;
    cell4 = 0;
    cell5 = 0;
    cell6 = 0;
    cell7 = 0;
    cell8 = 0;
    cell9 = 0;
    for (var i = 0; i < cells.length; i++) {
        cells[i][0].innerHTML = ""; 
        cells[i][1].innerHTML = "";
        cells[i][2].innerHTML = "";
    }
    turnOne();
}

//TURNS
function turnOne() {
    startBox.innerHTML = "<p id='gameDirections'>It's " + one + "'s turn!</p>";
    startBox.style.color = colorOne;
    turn = one;
    n = 1;
    color = colorOne;
}

function turnTwo() {
    startBox.innerHTML = "<p id='gameDirections'>It's " + two + "'s turn!</p>";
    startBox.style.color = colorTwo;
    turn = two;
    n = 2;
    color = colorTwo;
}

//MARK CELL
function nextPlay() {
    switch (n) {
        case 2:
            turnOne();
            break;
        case 1:
            turnTwo();
            break;
    }
}

//CHECK COORDINATES
function changeCell(currentCell) {
    currentCell.innerHTML = turn;
    currentCell.style.color = color;
    check_for_win();
    if (game == "notOver") {
        nextPlay();
    }
}

function check_coords(e) {
    var x = e.clientX,
        y = e.clientY;
    console.log(x, y);    
    if (game == "notOver") {
        if (x > 28 && x < 330 && y > 192 && y < 482) {
            if (cell1 == 0) {
                cell1 = 1;
                changeCell(TL);
            }
        } else if (x > 336 && x < 638 && y > 192 && y < 482) {
            if (cell2 == 0) {
                cell2 = 1;
                changeCell(TM);
            }
        } else if (x > 648 && x < 948 && y > 192 && y < 482) {
            if (cell3 == 0) {
                cell3 = 1;
                changeCell(TR);                
            }
        } else if (x > 28 && x < 330 && y > 494 && y < 784) {
            if (cell4 == 0) {
                changeCell(ML);
                cell4 = 1;
            }
        } else if (x > 336 && x < 638 && y > 494 && y < 784) {
            if (cell5 == 0) {
                cell5 = 1;
                changeCell(MM);
            }
        } else if (x > 648 && x < 948 && y > 494 && y < 784) {
            if (cell6 == 0) {
                cell6 = 1;
                changeCell(MR);
            }
        } else if (x > 28 && x < 330 && y > 792 && y < 1088) {
            if (cell7 == 0) {
                cell7 = 1;
                changeCell(BL);
            }
        } else if (x > 336 && x < 638 && y > 792 && y < 1088) {
            if (cell8 == 0) {
                cell8 = 1;
                changeCell(BM);
            }
        } else if (x > 648 && x < 948 && y > 792 && y < 1088) {
            if (cell9 == 0) {
                cell9 = 1;
                changeCell(BR);
            }
        }
    }
}

//CHECK FOR WIN
function gameOver() {
    startBox.innerHTML = "<p id='gameWinner'>" + turn + " wins!!!<br><button id='playAgain' onclick='start()'>Play Again</button></p>";
    startBox.style.color = color;
    game = "over";
}

function gameTie() {
    startBox.innerHTML = "<p id='gameWinner'>It's a TIE!<br><button id='playAgain' onclick='start()'>Play Again</button></p>";
    startBox.style.color = "black";
    game = "over";
}

function check_for_win() {
    if (cells[0][0].innerHTML == cells[1][1].innerHTML && cells[0][0].innerHTML == cells[2][2].innerHTML && cells[0][0].innerHTML != "") {
        gameOver();
    } else if (cells[2][0].innerHTML == cells[1][1].innerHTML && cells[2][0].innerHTML == cells[0][2].innerHTML && cells[1][1].innerHTML != "") {
        gameOver();
    } else {
        for (var i = 0; i <= 2; i++) {
            if (cells[i][0].innerHTML == cells[i][1].innerHTML && cells[i][0]. innerHTML == cells[i][2].innerHTML && cells[i][0].innerHTML != "") {
                gameOver();
                break;
            } else if (cells[0][i].innerHTML == cells[1][i].innerHTML && cells[0][i].innerHTML == cells[2][i].innerHTML && cells[0][i].innerHTML != "") {
                gameOver();
                break;
            } else if (cell1 == 1 && cell2 == 1 && cell3 == 1 && cell4 == 1 && cell5 == 1 && cell6 == 1 && cell7 == 1 && cell8 == 1 && cell9 == 1) {
                gameTie();
                break;
            }
        }
    }
}
