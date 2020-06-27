document.getElementById("burger-menu").addEventListener("click", showAside);
document.getElementById("closeMenu").addEventListener("click", hideAside);
function showAside(){
    document.getElementById("aside").style.display="block";
    document.getElementById("main").style.width="90vw";
    document.getElementById("burger-menu").style.display="none";
    document.getElementById("closeMenu").style.display="grid";
}
function hideAside(){
    document.getElementById("aside").style.display="none";
    document.getElementById("main").style.width="100vw";
    document.getElementById("burger-menu").style.display="grid";
    document.getElementById("closeMenu").style.display="none";
}
