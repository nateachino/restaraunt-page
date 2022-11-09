import { createHeader } from "./header";

const mainContent = document.getElementById("content")
var page = 12


const home = document.getElementById("home-button")
const menu = document.getElementById("menu-button")
const about = document.getElementById("about-button")


home.addEventListener("click", ()=>{
    console.log("123")
    if(page != 1){
        removeAllChildNodes(mainContent)
    }
})

function removeAllChildNodes(nodeList){
    while (nodeList.firstChild){
        nodeList.removeChild(nodeList.firstChild);
    }
}