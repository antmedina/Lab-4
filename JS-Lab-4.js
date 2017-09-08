//created button
document.addEventListener("DOMContentLoaded" , function(){
    var btn =document.createElement("button");
    var btnText = document.createTextNode("Add Square");
    btn.appendChild(btnText);
    document.body.appendChild(btn);
//add event
    btn.addEventListener("click" , addSquare);

//template for squares
    // var square = document.createElement('div');
    // square.className = 'square';
    // document.body.appendChild(square);

//create function for addSquare
    function addSquare(){
         var existingSquares = document.getElementsByClassName('squares').length;
        var squares = document.createElement("div");
        squares.className = "squares";
        squares.id=existingSquares;
       
 
 //create eventListeners for squares       
        squares.addEventListener("click" , randoColor);
        squares.addEventListener("dblclick" , removeNeighbor);
        squares.addEventListener("mouseover" , showNum);
        squares.addEventListener("mouseleave" , removeNum);

        document.body.appendChild(squares);
    }
// //create function randoColor
    function randoColor(event){
        var RYGB=["red","yellow","blue","green"];
        var randoColor = Math.floor(Math.random()*RYGB.length);
        div.style.backgroundColor = randoColor;
     };

//create showNum/removeNum functions
    function showNum() {
        var id = this.id;
        this.innerText = id;
    }
    function removeNum() {
        this.innerText = "";
    }
//removing neighbor
    function removeNeighbor() {
        var id = this.id;
        if (id % 2 === 0) {
        // if even, remove the square after
             if (this.nextSibling) {
                 this.nextSibling.remove();
             } else {
                 alert('There are no elements to the right to remove.');
             }
        } else {
        // if odd, remove the square before
             if (this.previousSibling) {
            this.previousSibling.remove();
             } else {
            alert('There are no elements to the left to remove.');
             }
            //  if (id===0){
                
            //  }
        }
     }
})
