const mainContent = document.getElementById("content");
const body = document.body;

export function createFooter() {
  const footer = document.createElement("footer");
  const gitHubLink = document.createElement("a");
  const gitHubIcon = document.createElement("img");

  gitHubLink.target = "_blank";
  gitHubLink.href = "https://github.com/nateachino";
  gitHubLink.innerHTML = "github.com/nateachino";

  gitHubIcon.src = "/src/assets/GitHub-Mark-32px.png";

  footer.append(gitHubLink, gitHubIcon);
  body.append(footer);
}
