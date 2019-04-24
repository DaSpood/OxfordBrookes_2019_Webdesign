function applyStyle(value) {
    var style = document.getElementById("pagestyle");
    if (value == "default") {
        style.setAttribute("href", "css/style.css");
    }
    else  {
        style.setAttribute("href", "css/alternate.css");
    }
}

function swapStyle() {
    var stylecookie = checkCookie("style","default");
    if (stylecookie == "default") {
        setCookie("stylecookie","alternate");
    }
    else {
        setCookie("stylecookie","default");
    }
    location.reload();
}

var stylecookie = checkCookie("style","default");
applyStyle(stylecookie);
