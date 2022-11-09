const mainContent = document.getElementById("content")

export function createHeader(){

    const header = document.createElement("header")
    const headerHolder = document.createElement("div")
    const leftHeader = document.createElement("div")

    const home = document.createElement("a")
    const menu = document.createElement("a")
    const about = document.createElement("a")

    home.innerHTML = "Home"
    menu.innerHTML = "Menu"
    about.innerHTML = "About"

    leftHeader.classList.add("left-header")

    leftHeader.appendChild(home)
    leftHeader.appendChild(menu)
    leftHeader.appendChild(about)

    headerHolder.appendChild(leftHeader)
    header.appendChild(headerHolder)

    mainContent.appendChild(header)

}

