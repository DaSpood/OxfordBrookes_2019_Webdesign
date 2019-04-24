function togglePopup() {
    var popup = document.getElementById("disclaimer_popup");
    popup.style.display = 'none';
    setCookie("popup_seen","true");
}

var popupcookie = checkCookie("popup_seen","false");
var popup = document.getElementById("disclaimer_popup");
if (popupcookie == "false") {
    popup.style.display = 'block';
}
else {
    popup.style.display = 'none';
}
