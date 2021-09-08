var script = document.getElementById("script");
var image = document.getElementById("image");
var sideNav = document.getElementById("nav");
var menu = document.getElementById("menu");
function nav() {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "image/close.png";
    }
    else {
        sideNav.style.right = "-250px";
        menu.src = "image/menu.png";
    }
}