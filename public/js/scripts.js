function loadBox() {
    var box = document.createElement("input");
    var add = document.getElementById("boxes");
    box.setAttribute("type", "text");
    box.setAttribute("name", "names[]");
    box.setAttribute("class", "name_box");
    box.setAttribute("placeholder", "Enter a name here");
    box.addEventListener("keydown", addBox, true);
    add.appendChild(box);
}

function addBox() {
    this.removeEventListener("keydown", addBox, true);
    var box = document.createElement("input");
    var add = document.getElementById("boxes");
    box.setAttribute("type", "text");
    box.setAttribute("name", "names[]");
    box.setAttribute("class", "name_box");
    box.setAttribute("placeholder", "Enter a name here");
    box.addEventListener("keydown", addBox, true);
    add.appendChild(box);
}