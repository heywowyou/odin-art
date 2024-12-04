let gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 4; i++) {
  let divContainer = document.createElement("div");
  divContainer.classList.add("div-container");
  gridContainer.appendChild(divContainer);

  for (let i = 0; i < 4; i++) {
    let div = document.createElement("div");
    div.classList.add("div");
    div.textContent = "Hey";
    divContainer.appendChild(div);
  }
}
