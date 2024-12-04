let gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 4; i++) {
  let divContainer = document.createElement("div");
  divContainer.classList.add("div-container");
  gridContainer.appendChild(divContainer);

  for (let j = 0; j < 4; j++) {
    let div = document.createElement("div");
    div.classList.add("div");
    divContainer.appendChild(div);
  }
}
