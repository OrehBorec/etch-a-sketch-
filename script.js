const gridContainer = document.querySelector("#grid");
const clearButton = document.querySelector(".clear");
const resizeButton = document.querySelector(".resize");
const colorPicker = document.querySelector(".color-picker");

let isMouseDown = false;
let currentColor = "#000000";

function createGrid(size) {
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    gridContainer.appendChild(cell);
  }
}

gridContainer.addEventListener("mousedown", () => (isMouseDown = true));
gridContainer.addEventListener("mouseup", () => (isMouseDown = false));
gridContainer.addEventListener("mouseover", (event) => {
  if (isMouseDown && event.target.classList.contains("grid-cell")) {
    event.target.style.backgroundColor = currentColor;
  }
});

colorPicker.addEventListener("input", (event) => {
  currentColor = event.target.value;
});

clearButton.addEventListener("click", () => {
  const cells = document.querySelectorAll(".grid-cell");
  cells.forEach((cell) => (cell.style.backgroundColor = "white"));
});

resizeButton.addEventListener("click", () => {
  let newSize = prompt("Введите новый размер сетки (1-100):");
  newSize = parseInt(newSize);
  if (newSize >= 1 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Пожалуйста, введите число от 1 до 100.");
  }
});

createGrid(16);
