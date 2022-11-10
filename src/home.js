const mainContent = document.getElementById("content");

export function createHomeContent() {
  console.log("home");
  mainContent.style.height = "150vh";
  const mainDiv = document.createElement("div");
  const imgWrapper = document.createElement("div");
  const leftText = document.createElement("div");
  const pizzaImage = document.createElement("img");
  const rightText = document.createElement("div");

  mainDiv.classList.add("main");
  imgWrapper.classList.add("img-wrapper");
  leftText.classList.add("left-text");
  rightText.classList.add("right-text");

  leftText.innerHTML = "The Best Food";
  rightText.innerHTML = "In New York!";
  pizzaImage.src = "../src/restlogo.png";

  imgWrapper.append(leftText, pizzaImage, rightText);
  mainDiv.appendChild(imgWrapper);
  mainContent.appendChild(mainDiv);

  mainContent.style.backgroundImage = "url('../src/food.gif')";
}
