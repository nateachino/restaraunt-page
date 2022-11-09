import { createHomeContent } from "./home";
import { createFooter } from "./footer";

const mainContent = document.getElementById("content")
var page = 12
createHomeContent()
createFooter()

const home = document.getElementById("home-button")
const menu = document.getElementById("menu-button")
const about = document.getElementById("about-button")


home.addEventListener("click", ()=>{
    console.log("123")
    if(page != 1){
        removeAllChildNodes(mainContent)
        createHomeContent()
        createFooter()
    }
})

function removeAllChildNodes(nodeList){
    while (nodeList.firstChild){
        nodeList.removeChild(nodeList.firstChild);
    }
}