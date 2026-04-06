const container = document.querySelector("#container");
const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey Im red";
container.appendChild(paragraph);

const header3 = document.createElement("h3");
header3.style.color = "blue";
header3.textContent = "Im a blue h3";
container.appendChild(header3);

const subCont = document.createElement("div");
subCont.style.borderColor = "black";
subCont.style.backgroundColor = "pink";

const subP = document.createElement("p");
subP.textContent = "ME TOO!";

subCont.appendChild(subP);
container.appendChild(subCont);