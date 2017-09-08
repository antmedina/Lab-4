//create color array
var RYGB=["red","yellow","blue","green"];

//created button
document.addEventListener("DOMContentLoaded",function(){
    var btn =document.createElement("button");
    var btnText= document.createTextNode("Add Square");
    btn.appendChild(btnText);
    document.body.appendChild(btn);
//add event
    btn.addEventListener("click",addSquare);
//template for squares
    // var square = document.createElement('div');
    // square.className = 'square';
    // document.body.appendChild(square);
//create function for addSquare
    function addSquare(){
        var squares=document.createElement("div");
        squares.className="squares";
        squares.id=existingSquares;
        var existingSquares = document.getElementsByClassName('squares').length;
        
        document.body.appendChild(squares);
    }
})
