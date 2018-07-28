function loadBox() {
    var box = document.createElement("input");
    var add = document.getElementById("box");
    box.setAttribute("type", "text");
    box.setAttribute("name", "names[]");
    box.setAttribute("class", "name_box");
    box.setAttribute("placeholder", "Enter a name here");
    add.appendChild(box);
}

function addBox() {
    var add = document.getElementById("boxes");
    var numBox = document.getElementById("numBoxes").value;
    for (i=1;i<numBox;i++){
        var box = document.createElement("input");
        box.setAttribute("type", "text");
        box.setAttribute("name", "names[]");
        box.setAttribute("class", "name_box");
        box.setAttribute("placeholder", "Enter a name here");
        add.appendChild(box);
    };
}

function removeBox(){
    var badBox = document.getElementById("boxes");
    badBox.removeChild(badBox.lastChild);
}

function removeAllBoxes(){
    var boxes = document.getElementById("boxes");
    while(boxes.hasChildNodes()){
        boxes.removeChild(boxes.lastChild);
    };
};
