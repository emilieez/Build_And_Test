let newText = "CircleCI"

function showNewText() {
    document.getElementById('newText').innerHTML = newText;
    document.getElementById("clear-button").removeAttribute("style")
}

function clearText() {
    document.getElementById("newText").innerHTML = "";
    document.getElementById("clear-button").setAttribute("style", "display: none")
}

document.getElementById("main-button").addEventListener("click", showNewText)
document.getElementById("clear-button").addEventListener("click", clearText)