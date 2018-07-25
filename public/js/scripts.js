function loadBox() {
    var box = document.createElement("input");
    var add = document.getElementById("boxes");
    box.setAttribute("type", "text");
    box.setAttribute("name", "names[]");
    box.setAttribute("class", "name_box");
    box.setAttribute("placeholder", "Enter a name here");
    add.appendChild(box);
}

function addBox() {
    var box = document.createElement("input");
    var add = document.getElementById("boxes");
    box.setAttribute("type", "text");
    box.setAttribute("name", "names[]");
    box.setAttribute("class", "name_box");
    box.setAttribute("placeholder", "Enter a name here");
    add.appendChild(box);
}

function removeBox(){
    var badBox = document.getElementById("boxes");
    badBox.removeChild(badBox.lastChild);
}