
/* Loads the games sqaures on to the board */
document.addEventListener("DOMContentLoaded",function(){
    var sqaures= Array.from(document.querySelectorAll("#board div"));
    sqaures.forEach(div=> div.className="square");
    sqaures.forEach(div=>div.id="")

    var gameState = Array(9).fill(null);
    var player= "X";

    

    /* Exercise 2 */
    for (const item of sqaures){
        item.addEventListener("click", function(){
            if (item.textContent==""){
                item.textContent= player;
                item.classList.add(player);
                gameState[sqaures.indexOf(item)]=player;
                console.log(gameState);
                
                if (winner(player,gameState)){
                   let status= document.getElementById("status");
                   status.innerHTML= `<i>Congratulations! ${player} is the winner</i>`;
                   status.classList.add("you-won");   
                }
                player= player== "X"? "O": "X";
                
            }
        

        })
    }
    /*Exercise 3 */
    for (const item of sqaures){
        item.addEventListener("mouseover",function(){
            item.classList.add("hover");
    
        })

        item.addEventListener("mouseout", function(){
            item.classList.remove("hover");
        })
    }

    let restart= document.getElementsByTagName("button")[0];
    restart.addEventListener("click",function(){
        gameState=Array(9).fill(null);
        sqaures.forEach(div=> div.className="square");
        sqaures.forEach(div=>div.textContent="");
        let status= document.getElementById("status");
        status.innerHTML="Move your mouse over a square and click to play an X or an O.";
        status.className="status";
}) 

});

const winningCombinations =[
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]  ] // Diagonals

function winner(player,list){
    return winningCombinations.some(c=> c.every(idx=>list[idx]==player))
}










