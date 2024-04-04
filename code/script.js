const menu = document.querySelector(".hamburger-menu");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click",function(){
    if(menu.style.display == "flex"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "flex";
    }
});