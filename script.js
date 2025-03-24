// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let grid = document.getElementById("grid");
    let row = grid.insertRow(); 
    for (let i = 0; i < numCols; i++) { 
        let cell = row.insertCell();
        cell.onclick = function() { setColor(cell); };
    }
    numRows++;
    if (numCols === 0) numCols = 1;
}

// Add a column
function addC() {
    let grid = document.getElementById("grid"); // Retrieve grid dynamically
    if (numRows === 0) {
        addR(); // If no rows exist, add a row first
    } else {
        for (let i = 0; i < numRows; i++) {
            let cell = grid.rows[i].insertCell();
            cell.onclick = function() { setColor(this); };
        }
    }
    numCols++;
}

// Remove a row
function removeR() {
    let grid = document.getElementById("grid"); // Retrieve grid dynamically
    if (numRows > 0) {
        grid.deleteRow(-1);
        numRows--;
        if (numRows === 0) numCols = 0; // Reset columns if no rows left
    }
}

// Remove a column
function removeC() {
    let grid = document.getElementById("grid"); // Retrieve grid dynamically
    if (numCols > 0) {
        for (let i = 0; i < numRows; i++) {
            grid.rows[i].deleteCell(-1);
        }
        numCols--;
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let grid = document.getElementById("grid"); // Retrieve grid dynamically
    let cells = grid.getElementsByTagName("td");
    for (let cell of cells) {
        if (!cell.style.backgroundColor) {
            cell.style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    let grid = document.getElementById("grid"); // Retrieve grid dynamically
    let cells = grid.getElementsByTagName("td");
    for (let cell of cells) {
        cell.style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){
    let grid = document.getElementById("grid"); // Retrieve grid dynamically
    let cells = grid.getElementsByTagName("td");
    for (let cell of cells) {
        cell.style.backgroundColor = "";
    }
}