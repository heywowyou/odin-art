const gridContainer = document.querySelector("#grid-container");

let userInput;

let color;

function getRgbColor() {
  return Math.floor(Math.random() * 3) + 1;
}

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
        switch (getRgbColor()) {
          case 1:
            color = "red";
            break;
          case 2:
            color = "green";
            break;
          case 3:
            color = "blue";
            break;
        }
        div.style.backgroundColor = color;
        let currentOpacity = Number(div.style.opacity);
        if (currentOpacity < 1) div.style.opacity = currentOpacity + 0.1;
      });
    }
  }
}

const button = document.querySelector("#button");

button.addEventListener("click", () => {
  gridContainer.innerHTML = "";
  userInput = prompt("Please select grid size");
  Number(userInput);
  if (userInput <= 100) {
    createGrid();
  } else alert("Grid size must no exceed 100");
});
