var popupcookie = checkCookie("popup_seen","false");
if (popupcookie == "false") {
    setCookie("popup_seen","true");
    var popup = document.getElementById("disclaimer_popup");
    popup.classList.toggle("show");
}
