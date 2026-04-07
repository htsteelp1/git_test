let button = document.querySelector("button");
let input = document.querySelector("input");
let theList = document.querySelector("ul");
function addItem(event) {
    event.preventDefault();
    let value = input.value;
    let listItem = document.createElement("li");
    let remove = document.createElement("button");
    let span = document.createElement("span");
    span.textContent = value;
    listItem.appendChild(span);
    listItem.appendChild(remove);
    remove.textContent = "Remove";
    theList.appendChild(listItem);
    remove.addEventListener("click", removeItem);
}

function removeItem(event) {
    let elem = event.target;
    elem.parentElement.remove();
}


button.addEventListener("click",addItem);
