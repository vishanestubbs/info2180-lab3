
/* Loads the games sqaures on to the board */

document.addEventListener("DOMContentLoaded",function(){
    const sqaures= document.querySelectorAll("#board div");
    sqaures.forEach(div=> div.className="square");
    var initial= "X";


    /* Exercise 2 */
    for (const item of sqaures){
        item.addEventListener("click", function(){
            if (item.textContent==""){
                item.textContent= initial;
                item.classList.add(initial);
                initial= initial== "X"? "O": "X";
                
                
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


});




