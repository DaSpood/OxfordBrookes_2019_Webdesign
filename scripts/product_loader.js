function GetUrlVars() { //https://html-online.com/articles/get-url-parameters-javascript/
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function LoadPage(product) {
    var img = document.getElementById("product_img");
    var name = document.getElementById("product_name");
    var desc1 = document.getElementById("p1");
    var desc2 = document.getElementById("p2");
    var desc3 = document.getElementById("p3");
    var desc4 = document.getElementById("p4");
    var price = document.getElementById("product_price");
    var cat = document.getElementById("product_category");
    var size = document.getElementById("product_size");
    var diam = document.getElementById("product_diameter");
    var quant = document.getElementById("product_quantity");
    var avail = document.getElementById("product_availability");

    var imgsrc;
    var imgalt;
    var nametext;
    var desctext1;
    var desctext2;
    var desctext3;
    var desctext4;
    var pricetext;
    var cattext;
    var sizetext;
    var diamtext;
    var quanttext;
    var availtext;

    // Here comes the best part !
    switch(product) {
        case "modern_red":
            console.log('product : modern_red');
            imgsrc = "img/products/modern_red.jpg";
            imgalt = "Modern Red";
            nametext = document.createTextNode("Modern Red");
            desctext1 = document.createTextNode("Large plate in a contemporary Moroccan pattern.");
            desctext2 = document.createTextNode("Hand crafted in Safi on Morocco's Atlantic coast, these large plates and bowls are as useful as they are beautiful.");
            desctext3 = document.createTextNode("The perfect size for a centre fruit bow, great for serving a large salad or rice. Each one unique and bringing a true taste of Moroccan culture to your home.");
            desctext4 = document.createTextNode("They make an ideal gift.");
            pricetext = document.createTextNode("£30.00 per item");
            cattext = document.createTextNode("Plates and Bowls");
            sizetext = document.createTextNode("Large");
            diamtext = document.createTextNode("N/A");
            quanttext = document.createTextNode("1");
            availtext = document.createTextNode("Available");
        break;
        case "blue_bowl":
            console.log('product : blue_bowl');
            imgsrc = "img/products/blue_bowl.jpg";
            imgalt = "Blue Bowl";
            nametext = document.createTextNode("Blue Bowl");
            desctext1 = document.createTextNode("Traditional Moroccan large bowl in blue and white.");
            desctext2 = document.createTextNode("These bowls are hand crafted in Safi on the Atlantic coast of Moroccan and individually decorated so each one is unique.");
            desctext3 = document.createTextNode("");
            desctext4 = document.createTextNode("");
            pricetext = document.createTextNode("£25.00");
            cattext = document.createTextNode("Bowls");
            sizetext = document.createTextNode("Large");
            diamtext = document.createTextNode("N/A");
            quanttext = document.createTextNode("1");
            availtext = document.createTextNode("Available");
        break;
        case "large_blue_plate":
            console.log('product : large_blue_plate');
            imgsrc = "img/products/large_blue_plate.jpg";
            imgalt = "Large Blue Plate";
            nametext = document.createTextNode("Large Blue Plate");
            desctext1 = document.createTextNode("Large plate in a traditional Moroccan blue and white pattern.");
            desctext2 = document.createTextNode("Hand crafted in Safi on Morocco's Atlantic coast these large plates are as useful as they are beautiful.");
            desctext3 = document.createTextNode("The perfect size for a centre fruit bow, great for serving a large salad or rice. Each one unique and bringing a true taste of Moroccan culture to your home.");
            desctext4 = document.createTextNode("They make an ideal gift.");
            pricetext = document.createTextNode("£35.00");
            cattext = document.createTextNode("Plates");
            sizetext = document.createTextNode("Large");
            diamtext = document.createTextNode("N/A");
            quanttext = document.createTextNode("1");
            availtext = document.createTextNode("Available");
        break;
        case "green_platter":
            console.log('product : green_platter');
            imgsrc = "img/products/green_platter.jpg";
            imgalt = "Green Platter";
            nametext = document.createTextNode("Green Platter");
            desctext1 = document.createTextNode("Large hand painted Moroccan platter in a traditional design.");
            desctext2 = document.createTextNode("Hand made in Fez in Morocco, 'these lovely large platters are as useful as they are beautiful.");
            desctext3 = document.createTextNode("The ideal size for a the centre of the table, great for serving a fruit, large salads or rice. Each one is hand painted and unique and bringing a true taste of Moroccan culture to your home.");
            desctext4 = document.createTextNode("They make the perfect gift.");
            pricetext = document.createTextNode("£45.00");
            cattext = document.createTextNode("Platters");
            sizetext = document.createTextNode("Large");
            diamtext = document.createTextNode("40cm");
            quanttext = document.createTextNode("1");
            availtext = document.createTextNode("Available");
        break;
        case "yellow_bowl_and_plate":
            console.log('product : yellow_bowl_and_plate');
            imgsrc = "img/products/yellow_bowl_and_plate.jpg";
            imgalt = "Yellow Bowl And Plate";
            nametext = document.createTextNode("Yellow Bowl And Plate");
            desctext1 = document.createTextNode("Traditional Moroccan medium bowl and plate in yellow.");
            desctext2 = document.createTextNode("These bowls are hand crafted in Safi on the Atlantic coast of Moroccan and individually decorated so each one is unique.");
            desctext3 = document.createTextNode("They make stunning gifts, bring a touch of Moroccan culture and individuality to your home");
            desctext4 = document.createTextNode("");
            pricetext = document.createTextNode("£35.00 per item");
            cattext = document.createTextNode("Plates and Bowls");
            sizetext = document.createTextNode("Medium");
            diamtext = document.createTextNode("20cm");
            quanttext = document.createTextNode("1");
            availtext = document.createTextNode("Available");
        break;
        case "orange_bowls":
            console.log('product : orange_bowls');
            imgsrc = "img/products/orange_small_bowls.jpg";
            imgalt = "Orange Bowls";
            nametext = document.createTextNode("Orange Bowls");
            desctext1 = document.createTextNode("Traditional Moroccan olive bowl in orange and white.");
            desctext2 = document.createTextNode("These bowls are hand crafted in Safi on the Atlantic coast of Moroccan and individually decorated so each one is unique.");
            desctext3 = document.createTextNode("Ideal as great for soup, dips and crisps.");
            desctext4 = document.createTextNode("");
            pricetext = document.createTextNode("£20.00");
            cattext = document.createTextNode("Bowls");
            sizetext = document.createTextNode("Small");
            diamtext = document.createTextNode("N/A");
            quanttext = document.createTextNode("2");
            availtext = document.createTextNode("Available");
        break;
        case "tagine":
            console.log('product : tagine');
            imgsrc = "img/products/tagine.jpg";
            imgalt = "Tagine";
            nametext = document.createTextNode("Tagine");
            desctext1 = document.createTextNode("Large traditional Moroccan terracotta tagine.");
            desctext2 = document.createTextNode("Can be used on the hob with care, suitable for the oven but not the dishwasher. Perfect with a brazier.");
            desctext3 = document.createTextNode("Requires a heat diffuser, for using on the hob. See bottom of the page.");
            desctext4 = document.createTextNode("Recreate classic Moroccan tagines with the large tagine.");
            pricetext = document.createTextNode("TBA");
            cattext = document.createTextNode("Tagines");
            sizetext = document.createTextNode("Large");
            diamtext = document.createTextNode("N/A");
            quanttext = document.createTextNode("1");
            availtext = document.createTextNode("Not available");
        break;
        case "flower_platter":
            console.log('product : flower_platter');
            imgsrc = "img/products/flower_platter.jpg";
            imgalt = "Flower Platter";
            nametext = document.createTextNode("Flower Platter");
            desctext1 = document.createTextNode("Large hand painted Moroccan platter in a traditional design.");
            desctext2 = document.createTextNode("Hand made in Fez in Morocco, these lovely large platters are as useful as they are beautiful.");
            desctext3 = document.createTextNode("The ideal size for the centre of the table, great for serving a fruit, large salads or rice. Each one is hand painted and unique and bringing a true taste of Moroccan culture to your home.");
            desctext4 = document.createTextNode("They make the perfect gift.");
            pricetext = document.createTextNode("£40.00");
            cattext = document.createTextNode("Platters");
            sizetext = document.createTextNode("Large");
            diamtext = document.createTextNode("N/A");
            quanttext = document.createTextNode("1");
            availtext = document.createTextNode("Available");
        break;
        case "tea_glasses":
            console.log('product : tea_glasses');
            imgsrc = "img/products/tea_glasses.jpg";
            imgalt = "Tea Glasses And Tray";
            nametext = document.createTextNode("Tea Glasses And Tea Tray");
            desctext1 = document.createTextNode("Set of six tea glasses with a different colour pattern. Large silver coloured engraved tea tray.");
            desctext2 = document.createTextNode("Perfect for serving mint tea. Not dishwasher safe");
            desctext3 = document.createTextNode("");
            desctext4 = document.createTextNode("");
            pricetext = document.createTextNode("£40.00");
            cattext = document.createTextNode("Glasses");
            sizetext = document.createTextNode("N/A");
            diamtext = document.createTextNode("N/A");
            quanttext = document.createTextNode("6 glasses, 1 tray");
            availtext = document.createTextNode("Available");
        break;
        case "terracotta_bowl":
            console.log('product : terracotta_bowl');
            imgsrc = "img/products/teracotta_bowl.jpg";
            imgalt = "Terracotta Bowl";
            nametext = document.createTextNode("Terracotta Bowl");
            desctext1 = document.createTextNode("Large hand painted Moroccan terracotta rim bowl in a traditional design.");
            desctext2 = document.createTextNode("Hand made in Fez in Morocco, 'these lovely large platters are as useful as they are beautiful.");
            desctext3 = document.createTextNode("The ideal size for a the centre of the table, great for serving a fruit, large salads or rice. Each one is hand painted and unique and bringing a true taste of Moroccan culture to your home.");
            desctext4 = document.createTextNode("They make the perfect gift.");
            pricetext = document.createTextNode("£10.00");
            cattext = document.createTextNode("Bowls");
            sizetext = document.createTextNode("Large");
            diamtext = document.createTextNode("N/A");
            quanttext = document.createTextNode("1");
            availtext = document.createTextNode("Available");
        break;
        case "flower_bowl":
            console.log('product : flower_bowl');
            imgsrc = "img/products/flower_dish.jpg";
            imgalt = "Flower Bowl";
            nametext = document.createTextNode("Flower Bowl");
            desctext1 = document.createTextNode("Traditional Moroccan medium bowl in blue and white.");
            desctext2 = document.createTextNode("These bowls are hand crafted in Safi on the Atlantic coast of Moroccan and individually decorated so each one is unique.");
            desctext3 = document.createTextNode("They make the perfect gift.");
            desctext4 = document.createTextNode("");
            pricetext = document.createTextNode("£10.00");
            cattext = document.createTextNode("Bowls");
            sizetext = document.createTextNode("Medium");
            diamtext = document.createTextNode("N/A");
            quanttext = document.createTextNode("1");
            availtext = document.createTextNode("Available");
        break;
        case "skyblue_bowl":
            console.log('product : skyblue_bowl');
            imgsrc = "img/products/skyblue_bowl.jpg";
            imgalt = "Skyblue Bowl";
            nametext = document.createTextNode("Skyblue Bowl");
            desctext1 = document.createTextNode("Traditional Moroccan medium bowl in shades of blue.");
            desctext2 = document.createTextNode("These bowls are hand crafted in Safi on the Atlantic coast of Moroccan and individually decorated so each one is unique.");
            desctext3 = document.createTextNode("They make the perfect gift.");
            desctext4 = document.createTextNode("");
            pricetext = document.createTextNode("£20.00");
            cattext = document.createTextNode("Bowls");
            sizetext = document.createTextNode("Medium");
            diamtext = document.createTextNode("N/A");
            quanttext = document.createTextNode("1");
            availtext = document.createTextNode("Available");
        break;
        case "olive_bowls":
            console.log('product : olive_bowls');
            imgsrc = "img/products/olive_bowls.jpg";
            imgalt = "Olive Bowls";
            nametext = document.createTextNode("Olive Bowls");
            desctext1 = document.createTextNode("Traditional Moroccan olive bowl in different colours.");
            desctext2 = document.createTextNode("These bowls are hand crafted in Safi on the Atlantic coast of Moroccan and individually decorated so each one is unique.");
            desctext3 = document.createTextNode("Ideal as great for soup, dips and crisps.");
            desctext4 = document.createTextNode("");
            pricetext = document.createTextNode("£20.00");
            cattext = document.createTextNode("Bowls");
            sizetext = document.createTextNode("Small");
            diamtext = document.createTextNode("N/A");
            quanttext = document.createTextNode("2");
            availtext = document.createTextNode("Available");
        break;
        case "pink_bowl":
            console.log('product : pink_bowl');
            imgsrc = "img/products/pink_bowl.jpg";
            imgalt = "Pink Bowl";
            nametext = document.createTextNode("Pink Bowl");
            desctext1 = document.createTextNode("Traditional Moroccan medium bowl in pink.");
            desctext2 = document.createTextNode("These bowls are hand crafted in Safi on the Atlantic coast of Moroccan and individually decorated so each one is unique.");
            desctext3 = document.createTextNode("Ideal as great for soup, dips and crisps.");
            desctext4 = document.createTextNode("");
            pricetext = document.createTextNode("£20.00");
            cattext = document.createTextNode("Bowls");
            sizetext = document.createTextNode("Medium");
            diamtext = document.createTextNode("N/A");
            quanttext = document.createTextNode("1");
            availtext = document.createTextNode("Available");
        break;
        case "jugs":
            console.log('product : jugs');
            imgsrc = "img/products/jugs.jpg";
            imgalt = "Jugs";
            nametext = document.createTextNode("Jugs");
            desctext1 = document.createTextNode("Hand painted Moroccan terracotta jugs in a traditional design.");
            desctext2 = document.createTextNode("Hand made in Fez in Morocco, these lovely large platters are as useful as they are beautiful.");
            desctext3 = document.createTextNode("The ideal size for the centre of the table, great for serving a juice. Each one is hand painted and unique and bringing a true taste of Moroccan culture to your home.");
            desctext4 = document.createTextNode("They make the perfect gift.");
            pricetext = document.createTextNode("£10.00 per item");
            cattext = document.createTextNode("Jugs");
            sizetext = document.createTextNode("N/A");
            diamtext = document.createTextNode("N/A");
            quanttext = document.createTextNode("1");
            availtext = document.createTextNode("Available");
        break;
        default:
            console.log('no product selected : defaulting to tagine');
            imgsrc = "img/products/tagine.jpg";
            imgalt = "Tagine";
            nametext = document.createTextNode("Tagine");
            desctext1 = document.createTextNode("Large traditional Moroccan terracotta tagine.");
            desctext2 = document.createTextNode("Can be used on the hob with care, suitable for the oven but not the dishwasher. Perfect with a brazier.");
            desctext3 = document.createTextNode("Requires a heat diffuser, for using on the hob. See bottom of the page.");
            desctext4 = document.createTextNode("Recreate classic Moroccan tagines with the large tagine.");
            pricetext = document.createTextNode("TBA");
            cattext = document.createTextNode("Tagines");
            sizetext = document.createTextNode("Large");
            diamtext = document.createTextNode("N/A");
            quanttext = document.createTextNode("1");
            availtext = document.createTextNode("Not available");
        break;
    }

    img.setAttribute("src",imgsrc);
    img.setAttribute("alt",imgalt);
    name.appendChild(nametext);
    desc1.appendChild(desctext1);
    desc2.appendChild(desctext2);
    desc3.appendChild(desctext3);
    desc4.appendChild(desctext4);
    price.appendChild(pricetext);
    cat.appendChild(cattext);
    size.appendChild(sizetext);
    diam.appendChild(diamtext);
    quant.appendChild(quanttext);
    avail.appendChild(availtext);
    document.title = "FiredBowl - " + imgalt;
}

var productID = GetUrlVars();
if(Object.keys(productID).length != 0) {
    LoadPage(productID["p"]);
}
else {
    LoadPage("404");
}
