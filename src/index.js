import { createHomeContent } from "./pages/home";
import { createFooter } from "./pages/footer";
import { createMenu } from "./pages/menu";
import { createContact } from "./pages/contact";
import "./style.css";

const mainContent = document.getElementById("content");
var page = 1;
removeAllChildNodes(mainContent);
createHomeContent();
createFooter();

const home = document.getElementById("home-button");
const menu = document.getElementById("menu-button");
const contact = document.getElementById("contact-button");

home.addEventListener("click", () => {
  if (page != 1) {
    removeAllChildNodes(mainContent);
    createHomeContent();
    page = 1;
  }
});

menu.addEventListener("click", () => {
  if (page != 2) {
    removeAllChildNodes(mainContent);
    createMenu();
    page = 2;
  }
});

contact.addEventListener("click", () => {
  if (page != 3) {
    removeAllChildNodes(mainContent);
    createContact();
    page = 3;
  }
});

function removeAllChildNodes(nodeList) {
  while (nodeList.firstChild) {
    nodeList.removeChild(nodeList.firstChild);
    mainContent.style.backgroundImage = "";
  }
}
