var bold = false;

function fancify() {
    document.getElementById("txt").style.fontSize = "24px";
}

function bolden() {
    if (bold) {
        document.getElementById("txt").style.fontWeight = "normal";
        document.getElementById("txt").style.color = "black";
        document.getElementById("txt").style.textDecoration = "none";
        bold = false;
    }
    else {
        document.getElementById("txt").style.fontWeight = "bold";
        document.getElementById("txt").style.color = "blue";
        document.getElementById("txt").style.textDecoration = "underline";
        bold = true;
    }   
}

function moo() {
    let textArea = document.getElementById("txt");
    textArea.style.textTransform = "uppercase";
    let msg = textArea.value;
    let parts = msg.split(".");
    msg = parts.join("-Moo.");
    textArea.value = msg;
}