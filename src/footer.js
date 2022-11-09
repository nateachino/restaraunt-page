const mainContent = document.getElementById("content")

export function createFooter(){
    const footer = document.createElement("footer")
    const gitHubLink = document.createElement("a")
    const gitHubIcon = document.createElement('img')

    gitHubLink.target = "_blank"
    gitHubLink.href = "https://github.com/nateachino"
    gitHubLink.innerHTML = "github.com/nateachino"

    gitHubIcon.src = "/src/GitHub-Mark-32px.png"


    footer.append(gitHubLink, gitHubIcon)
    mainContent.append(footer)
}