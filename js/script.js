let inc = document.getElementById("inc");
let counter = document.getElementById("counter");
let dec = document.getElementById("dec"); 
inc.onclick = incClick;
dec.onclick = decClick;
let names = document.getElementById("names");
names.onmouseover = hover;
names.onmouseout = hoverLeave;

function incClick (){
counter.innerHTML++;
}   

function decClick(){
counter.innerHTML--;
}

function hover(e){
let name = e.target;
name.style.backgroundColor = "grey";
}

function hoverLeave(e) {
    let name =e.target;
    name.style.backgroundColor = "";
}

