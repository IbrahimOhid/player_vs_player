// selector
const winnerNameEle = document.querySelector('#winnerName');
const winnerNumEle = document.querySelector('#winnerNum');
const playerOneNumEle = document.querySelector("#playerOneNum");
const playerTwoNumEle = document.querySelector("#playerTwoNum");
const inputNumEle = document.querySelector('#inputNum');
const submitBtnEle = document.querySelector('#submitBtn');
const resetBtnEle = document.querySelector('#resetBtn');
const playerOneBtnEle = document.querySelector('#playerOneBtn');
const playerTwoBtnEle = document.querySelector('#playerTwoBtn');


let winnerNum = 0;
let playerOneNum = 0;
let playerTwoNum = 0;
let gameOver = false;
let playerOneTurn = true;
let playerTwoTurn = false;

let randomNum = Math.floor(Math.random() * 6);
winnerNum = randomNum;

winnerNumEle.textContent = winnerNum;

function winingState(playerOneNum, playerTwoNum, winnerNum) {
    if (playerOneNum === winnerNum || playerTwoNum === winnerNum) {
        gameOver = true;
    }
}

function disableAllBtn(playerOneBtnEle, playerTwoBtnEle) {
    playerOneBtnEle.setAttribute('disabled', 'disabled');
    playerTwoBtnEle.setAttribute('disabled', 'disabled');
}

function resetAll() {
    playerOneNum = 0;
    playerTwoNum = 0;
    gameOver = false;

    playerOneNumEle.textContent = playerOneNum;
    playerTwoNumEle.textContent = playerTwoNum;
    winnerNameEle.textContent = ' ';
    playerOneBtnEle.removeAttribute('disabled');
    playerTwoBtnEle.removeAttribute('disabled');
}

function winnerNameInfo(playerOneNum, playerTwoNum, winnerNum){
    if(playerOneNum === winnerNum){
        winnerNameEle.textContent = 'Player One Win ✌';
    }

    if(playerTwoNum === winnerNum){
        winnerNameEle.textContent = 'Player Two Win ✌';
    }
}

// playerOneBtn addEventlistener 
playerOneBtnEle.addEventListener('click', (e) => {
    if (playerOneTurn) {
        playerOneNum++;
        playerOneNumEle.textContent = playerOneNum;
        winingState(playerOneNum, playerTwoNum, winnerNum);
        winnerNameInfo(playerOneNum, playerTwoNum, winnerNum);
        playerOneTurn = false;
        playerTwoTurn = true;
        playerOneBtnEle.setAttribute('disabled', 'disabled');
        playerTwoBtnEle.removeAttribute('disabled');
    }
    
    if (gameOver) {
        disableAllBtn(playerOneBtnEle, playerTwoBtnEle);
    }
})

// playerTowBtn addEventlistener 
playerTwoBtnEle.addEventListener('click', (e) => {
    if (playerTwoTurn) {
        playerTwoNum++;
        playerTwoNumEle.textContent = playerTwoNum;
        winingState(playerOneNum, playerTwoNum, winnerNum);
        winnerNameInfo(playerOneNum, playerTwoNum, winnerNum);
        playerTwoTurn = false;
        playerOneTurn = true;
        playerTwoBtnEle.setAttribute('disabled', 'disabled');
        playerOneBtnEle.removeAttribute('disabled');
        
    }
    if (gameOver) {
        disableAllBtn(playerOneBtnEle, playerTwoBtnEle);
    }
})

// form addEventListener
submitBtnEle.addEventListener('click', (e)=>{
    e.preventDefault();
    resetAll();
    let inputValue = +inputNumEle.value;
    winnerNum = inputValue;
    winnerNumEle.textContent = inputValue;
    inputNumEle.value = '';

})

// reset addEventListener
resetBtnEle.addEventListener('click', (e) => {
    resetAll()
})

