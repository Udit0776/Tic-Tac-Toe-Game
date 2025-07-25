let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBut = document.querySelector("#new-But");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let currentPlayer = document.querySelector(".current");

let turnX = true; // player X turn will be first default
// let turnO = false;

const winPatterns = [[0,1,2],
[0,3,6], 
[0,4,8], 
[1,4,7], 
[2,5,8],
[2,4,6],
[3,4,5], 
[6,7,8]];
 
// display the current player turn
const showCurrentPlayer = (player) => {
    currentPlayer.innerText = `Player ${player} Turn :-`;
}


// adding event listner for all the boxes
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("button is clicked");
        if(turnX){
            box.innerText = "X";
            turnX = false;
            showCurrentPlayer("X");
        } else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;    // to disable the box it help that no one change the button current value by again clicking it 

        // 🧠 Show next player after turn switch
        showCurrentPlayer(turnX ? "X" : "O");

        // setTimeout(checkWinner, 100);


        // creating the separate function that help to track who win the game
        checkWinner();
    });
});

const disableBox =() => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBox =() => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    // msg = console.log("Congratulation, Winner is Player X");
    msg.innerText = `Congratulation, Winner is Player ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        // console.log(pos1Val, pos2Val, pos3Val);

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // if(pos1Val === "X"){
                //     console.log("Congratulation, Winner is Player X");
                //     // box.disabled = true;
                // } else{
                //     console.log("Congratulation, Winner is Player O");
                //     // console.log("Player O is Winner!");
                // }
                showWinner(pos1Val);
            }
        }
    }
}

const resetGame = () => {
    turnX = true;
    enableBox();
    msgContainer.classList.add("hide");
}

newGameBut.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);