//create color array
var RYGB=["red","yellow","blue","green"];

//created button
document.addEventListener("DOMContentLoaded",function(){
    var btn =document.createElement("button");
    var btnText= document.createTextNode("Add Square");
    btn.appendChild(btnText);
    document.body.appendChild(btn);
})
//add click event    
btn.addEventListener("click",function(){
    var square = document.createElement('div');
    square.className = 'square';
    document.body.appendChild(square);
    
})
