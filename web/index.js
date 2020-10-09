function changeText() {
    var textDiv = document.getElementById("text")
    // textDiv.innerText = "<h1>Hello SCU!</h1>";
    textDiv.innerHTML = "<h1>Hello SCU!</h1>";
    textDiv.style.color = "blue";
}

function show() {
    var input = document.getElementById("input-test");
    var textDiv = document.getElementById("text")
    textDiv.innerText = input.value;
}

function appendImg() {
    var img = document.createElement("img");
    img.id = "img";
    img.src = "images/1.jpg";

    var textDiv = document.getElementById("test-span")
    textDiv.appendChild(img);
}

function removeImg() {
    var textDiv = document.getElementById("test-span")
    var img = document.getElementById("img")
    textDiv.removeChild(img)
}

function addTR() {
    var table = document.getElementById("test-table");

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = "5";
    var td2 = document.createElement("td");
    td2.innerText = "6";
    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
}