let wid = window.innerWidth;
let navigation = document.querySelector("header");
let navBar = document.querySelector("nav");
let login = document.querySelector("#login");
let lista1 = document.querySelectorAll("#link1");
let lista2 = document.querySelectorAll("#link2");
let option = "open";
function menu(){
    if(wid<=800){
        let imgMenu = document.createElement("img");
        imgMenu.src="images/icon-menu.svg";
        imgMenu.id="menu";
        navigation.appendChild(imgMenu);
        let menuBar = document.createElement("div");
        menuBar.id="menuBar";
        navigation.appendChild(menuBar);
        imgMenu.addEventListener("click", openMenu);
        let links = document.querySelectorAll("header a");
        for(let i = 0;i<links.length;i++){
            menuBar.appendChild(links[i]);
        }
    }
}
function openMenu(){
    if(option=="open"){
        let imgMenu= document.getElementById("menu");
        imgMenu.src="images/icon-close-menu.svg";
        let menuBar = document.getElementById("menuBar");
        menuBar.style.display="flex";
        menuBar.style.gap="30px";
        menuBar.style.top="100px";
        menuBar.style.right="0px";
        option="close";
    }
    else if(option=="close"){
        let imgMenu= document.getElementById("menu");
        imgMenu.src="images/icon-menu.svg";
        let menuBar = document.getElementById("menuBar");
        menuBar.style.display="none";
        menuBar.style.right="-250px";
        option="open";
    }
}