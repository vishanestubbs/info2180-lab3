
/* Loads the games sqaures on to the board */

document.addEventListener("DOMContentLoaded",function(){
    const sqaures= document.querySelectorAll("#board div");
    sqaures.forEach(div=> div.className="square");
});

iti