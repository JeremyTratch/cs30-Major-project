// Worlds Second Hardest Game
// Jeremy Tratch
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let GR_SIZE;
let sqSize;



function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = genGrid(GR_SIZE,GR_SIZE);
}

function draw() {
  background(220);
  showGrid();
}

function showGrid() {
  for (let y = 0; y < GR_SIZE; y++) {
    for (let x = 0; x < GR_SIZE; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      rect(x*sqSize, y*sqSize, sqSize, sqSize);
    }
  }
}

function genGrid(cols, rows) {
  let theGrid = [];
  for (let y = 0; y < cols; y++) {
    theGrid.push([]);
    for (let x = 0; x < rows; x++) {
      theGrid.push([]);
    }
  }
  return theGrid;
}