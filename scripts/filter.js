function getUrlVars() { //https://html-online.com/articles/get-url-parameters-javascript/
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function ArticleSelector(list){
    var articles = document.getElementsByClassName("article-textleft");
    for (var i = 0; i < articles.length; i++) {
        var elt = articles[i];

        elt.style.display = 'none';
        for (var key in list) {
            if (elt.classList.contains(key)) {
                elt.style.display = 'block';
                break;
            }
        }
    }
}

function CheckboxSelector(list){
    var articles = document.getElementsByClassName("filterbox");
    for (var i = 0; i < articles.length; i++) {
        var elt = articles[i];

        elt.checked = false;
        for (var key in list) {
            if (elt.getAttribute("name") === key) {
                elt.checked = true;
                break;
            }
        }
    }
}

var taglist = getUrlVars();
if(Object.keys(taglist).length != 0) {
    ArticleSelector(taglist);
}
CheckboxSelector(taglist);
