let inc = document.getElementById("inc");
let counter = document.getElementById("counter");
let dec = document.getElementById("dec");
inc.onclick = incClick;
dec.onclick = decClick;
names.onmouseover = hover;
names.onmouseout = hoverLeave;

let addName = document.getElementById("addName");
let nameInput = document.querySelector("#names input[type='text']");
let nameList = document.querySelector("#names ul");

addName.onclick = addNameToList;



function incClick() {
    let number = 0;
    number = Number(counter.innerHTML);
    counter.innerHTML = number + 10;
}


function decClick() {
    let number = 0;
    number = Number(counter.innerHTML);
    counter.innerHTML = number - 10;
}

function hover(e) {
    let name = e.target;
    if (e.target.tagName === 'li') {
        e.target.style.backgroundColor = "grey";
    }

}

function hoverLeave(e) {
    let name = e.target;
    name.style.backgroundColor = "";

}

function addNameToList(){
    let newname = nameInput.value;
    if (newname) {
        let newLi = document.createElement("li");
        newLi.textContent = newname;
        nameList.appendChild(newLi)
        nameInput.value = "";

    }
}
    


