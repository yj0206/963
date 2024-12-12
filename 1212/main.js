const boardSize = 15;
const board = document.getElementById('board');
const restartButton = document.getElementById('restart');
let boardArray = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));

function drawBoard() {
    board.innerHTML = '';
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('board-cell');
            cell.addEventListener('click', () => placeStone(i, j));
            board.appendChild(cell);
        }
    }
}

function placeStone(i, j) {
    if (boardArray[i][j] === null) {
        boardArray[i][j] = 'x'; // Assuming 'x' is the player's mark
        const cell = document.querySelector(`.board-cell:nth-child(${j * boardSize + i + 1})`);
        cell.textContent = 'X';
    }
    // Check for win condition and update game state
}

function restartGame() {
    boardArray = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));
    drawBoard();
}

restartButton.addEventListener('click', restartGame);

drawBoard();