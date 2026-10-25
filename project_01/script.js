let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let winnerText = document.querySelector("#winner-text");



let turn0 = true; // playerX, player0

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const checkWinner = () => {
    for (pattern of winPattern) {
        console.log( boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        if (boxes[pattern[0]].innerText === "0" && boxes[pattern[1]].innerText === "0" && boxes[pattern[2]].innerText === "0") {
            winnerText.innerText = "Player 0 Won";
            winnerText.style.color = "green";
            
        } else if (boxes[pattern[0]].innerText === "X" && boxes[pattern[1]].innerText === "X" && boxes[pattern[2]].innerText === "X") {
            winnerText.innerText = "Player X Won";
            winnerText.style.color = "red";
            
        }
    }
};

const resetGame = ()=>{
    window.location.reload();
};

resetBtn.addEventListener("click",(e)=>{
    resetGame();
})



boxes.forEach(box => {
    box.addEventListener("click", (e) => {
        console.log("clicked");
        if (turn0 === true) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

