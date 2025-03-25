// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let grid = document.querySelector("table"); // Retrieve grid dynamically
    let row = document.createElement("tr"); 
    
    for (let i = 0; i < numCols; i++) { 
        let cell = document.createElement("td");
        cell.onclick = function() { setColor(cell); };
        row.appendChild(cell);
    }
    
    grid.appendChild(row);
    numRows++;
    
    if (numCols === 0) {
        numCols = 1; // Ensure at least one column exists
        let firstCell = document.createElement("td");
        firstCell.onclick = function() { setColor(firstCell); };
        row.appendChild(firstCell);
    }
}

// Add a column
function addC() {
    let grid = document.querySelector("table"); // Retrieve grid dynamically
    if (numRows === 0) {
        addR(); // If no rows exist, add a row first
    } else {
        for (let row of grid.children) {
            let cell = document.createElement("td");
            cell.onclick = function() { setColor(cell); };
            row.appendChild(cell);
        }
    }
    numCols++;
}

// Remove a row
function removeR() {
    let grid = document.querySelector("table"); // Retrieve grid dynamically
    if (numRows > 0) {
        grid.removeChild(grid.lastElementChild);
        numRows--;
        if (numRows === 0) numCols = 0; // Reset columns if no rows left
    }
}

// Remove a column
function removeC() {
    let grid = document.querySelector("table"); // Retrieve grid dynamically
    if (numCols > 0) {
        for (let row of grid.children) {
            row.removeChild(row.lastElementChild);
        }
        numCols--;
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Set color of clicked cell
function setColor(cell) {
    if (colorSelected !== "SELECT") {
        cell.style.backgroundColor = colorSelected;
    }
}

// Fill all uncolored cells
function fillU(){
    let grid = document.querySelector("table"); // Retrieve grid dynamically
    let cells = grid.getElementsByTagName("td");
    for (let cell of cells) {
        if (!cell.style.backgroundColor || cell.style.backgroundColor === "white") {
            cell.style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    let grid = document.querySelector("table"); // Retrieve grid dynamically
    let cells = grid.getElementsByTagName("td");
    for (let cell of cells) {
        cell.style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){
    let grid = document.querySelector("table"); // Retrieve grid dynamically
    let cells = grid.getElementsByTagName("td");
    for (let cell of cells) {
        cell.style.backgroundColor = "white";
    }
}