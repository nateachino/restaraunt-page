const mainContent = document.getElementById("content");

export function createMenu() {
  mainContent.style.height = "150vh";
  const menuWrapper = document.createElement("div");
  const menuHolder = document.createElement("div");

  const friesItem = document.createElement("div");
  const friesTitle = document.createElement("div");
  const friesInfo = document.createElement("div");

  const chickenItem = document.createElement("div");
  const chickenTitle = document.createElement("div");
  const chickenInfo = document.createElement("div");

  const burgerItem = document.createElement("div");
  const burgerTitle = document.createElement("div");
  const burgerInfo = document.createElement("div");

  const riceItem = document.createElement("div");
  const riceTitle = document.createElement("div");
  const riceInfo = document.createElement("div");

  mainContent.appendChild(menuWrapper);

  menuWrapper.appendChild(menuHolder);
  menuHolder.append(friesItem, chickenItem, burgerItem, riceItem);

  friesItem.append(friesTitle, friesInfo);
  chickenItem.append(chickenTitle, chickenInfo);
  burgerItem.append(burgerTitle, burgerInfo);
  riceItem.append(riceTitle, riceInfo);

  menuWrapper.classList.add("menu-wrapper");
  menuHolder.classList.add("menu-holder");

  friesItem.classList.add("menu-item");
  chickenItem.classList.add("menu-item");
  burgerItem.classList.add("menu-item");
  riceItem.classList.add("menu-item");

  friesTitle.classList.add("item-title");
  chickenTitle.classList.add("item-title");
  burgerTitle.classList.add("item-title");
  riceTitle.classList.add("item-title");

  friesInfo.classList.add("item-info");
  chickenInfo.classList.add("item-info");
  burgerInfo.classList.add("item-info");
  riceInfo.classList.add("item-info");

  friesTitle.innerHTML = "Fries";
  chickenTitle.innerHTML = "Chicken";
  burgerTitle.innerHTML = "Burger";
  riceTitle.innerHTML = "Rice";

  friesInfo.innerHTML =
    "French fries, chips, finger chips, french-fried potatoes, or simply fries, are batonnet or allumette-cut deep-fried potatoes of disputed origin from Belgium and France. They are prepared by cutting potatoes into even strips, drying them, and frying them, usually in a deep fryer.";

  chickenInfo.innerHTML =
    "The chicken is a domesticated junglefowl species, with attributes of wild species such as the grey and the Ceylon junglefowl that are originally from Southeastern Asia.";

  burgerInfo.innerHTML =
    "A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.";

  riceInfo.innerHTML =
    "Rice is the seed of the grass species Oryza sativa or less commonly Oryza glaberrima. The name wild rice is usually used for species of the genera Zizania and Porteresia, both wild and domesticated, although the term may also be used for primitive or uncultivated varieties of Oryza.";

  const menuItem = document.querySelectorAll(".menu-item");

  menuItem.forEach((element) => {
    const itemInfo = element.querySelector(".item-info");
    element.addEventListener("mouseover", () => {
      itemInfo.style.transform = "translateY(0)";
    });

    element.addEventListener("mouseout", () => {
      itemInfo.style.transform = "translateY(500px)";
    });
  });
}
