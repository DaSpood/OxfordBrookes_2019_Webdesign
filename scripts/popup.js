function togglePopup(value) {
    var popup = document.getElementById("disclaimer_popup");
    popup.style.display = value;
}

var popupcookie = checkCookie("popup_seen","false");
if (popupcookie == "false") {
    setCookie("popup_seen","true");
    togglePopup('block');
}
else {
    togglePopup('none');
}
