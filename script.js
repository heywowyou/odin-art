const gridContainer = document.querySelector("#grid-container");

let userInput;

function createGrid() {
  for (let i = 0; i < userInput; i++) {
    let divContainer = document.createElement("div");
    divContainer.classList.add("div-container");
    gridContainer.appendChild(divContainer);

    for (let j = 0; j < userInput; j++) {
      let div = document.createElement("div");
      div.classList.add("div");
      divContainer.appendChild(div);
      div.addEventListener("mouseover", () => {
        div.classList.add("div-colored");
      });
    }
  }
}

const button = document.querySelector("#button");

button.addEventListener("click", () => {
  userInput = prompt("Please select grid size");
  Number(userInput);
  createGrid();
});
