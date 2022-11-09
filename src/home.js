const mainContent = document.getElementById("content")

export function createHomeContent(){
    const mainDiv = document.createElement("div")
    const imgWrapper = document.createElement("div")
    const leftText = document.createElement("div")
    const pizzaImage = document.createElement("img")
    const rightText = document.createElement("div")


    mainDiv.classList.add("main")
    imgWrapper.classList.add("img-wrapper")
    leftText.classList.add("left-text")
    rightText.classList.add("right-text")


    leftText.innerHTML = "The Best Pizza"
    rightText.innerHTML = "In New York!"
    pizzaImage.src = "../src/pizza-pic.jpeg"


    imgWrapper.append(leftText,pizzaImage,rightText)
    mainDiv.appendChild(imgWrapper)
    mainContent.appendChild(mainDiv)

    console.log("done")

}