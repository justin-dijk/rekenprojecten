const sudokus = [
    [2,5,0,7,0,0,0,1,6,0,6,0,0,0,0,4,2,8,0,0,0,1,0,0,5,0,0,5,7,0,2,1,8,9,0,0,0,0,0,3,0,9,7,8,0,9,0,3,0,0,5,1,0,0,0,0,0,8,3,0,0,7,0,4,0,2,0,0,7,0,0,0,0,0,7,0,5,0,0,3,0],
    [0,0,9,0,0,0,0,0,8,6,0,7,4,1,0,0,5,0,0,0,2,0,5,0,0,0,7,0,9,0,1,0,7,6,0,0,0,4,0,0,9,6,3,0,0,8,6,3,0,0,4,7,0,9,5,3,6,0,0,0,0,7,0,0,0,0,7,8,0,0,3,0,0,7,0,0,0,0,0,9,2],
    [0,0,0,0,5,0,1,0,0,7,0,0,1,0,0,6,0,0,2,3,1,0,8,0,0,0,0,3,1,0,0,0,6,8,0,0,0,0,7,0,0,0,0,9,5,0,4,0,0,3,7,0,0,0,0,2,5,3,0,0,0,8,7,0,0,6,9,0,0,0,3,2,4,0,3,2,0,0,0,1,0],
    [6,0,0,5,1,8,0,0,0,4,2,1,0,0,0,0,0,0,0,8,0,0,3,0,6,9,1,0,0,0,1,0,2,7,5,8,5,1,6,0,0,0,2,0,0,0,0,0,9,5,3,0,6,0,0,0,0,0,0,0,0,1,7,3,9,8,7,0,1,0,0,6,0,5,0,8,4,6,0,2,0],
    [4,0,3,0,5,2,6,0,0,0,0,2,0,8,6,3,0,0,0,0,0,0,1,3,4,2,7,1,6,0,0,0,4,0,9,0,0,3,0,0,0,5,0,4,0,0,7,0,0,9,0,5,0,0,9,0,0,0,0,0,0,0,6,3,0,0,8,2,7,0,0,1,5,8,0,3,0,0,0,0,0],
    [0,0,2,0,0,0,4,3,8,4,3,9,0,0,5,0,0,2,8,0,0,2,0,3,0,0,5,6,0,0,9,5,0,0,0,0,5,9,4,0,0,0,8,2,0,7,0,0,0,6,4,0,9,0,0,0,0,0,0,8,1,6,0,0,4,0,0,0,0,0,0,0,2,8,0,4,0,9,3,0,0],
    [0,0,0,7,3,0,0,0,9,2,8,9,0,0,0,7,0,0,7,0,0,0,8,0,2,6,0,8,0,0,0,0,5,6,0,4,6,3,0,0,0,0,0,0,0,0,0,0,8,0,9,0,0,5,0,0,8,0,5,0,3,2,6,5,0,0,2,4,0,9,0,0,3,1,0,6,0,0,0,0,7]
]

let activeCellId = 1;

let sudoku_string = "<ul>";
for(i=1; i<=81; i++){
    sudoku_string += `<li class="dummy" id="${i}" onclick="activateCell(${i})"></li>`;
}
sudoku_string += "</ul>";
document.getElementById("sudoku").innerHTML = sudoku_string;

function selectCijfer(cijfer){
    document.getElementById(activeCellId).innerText = cijfer;
}

function activateCell(id){
    //bij een cijfer mag de cel niet meer aangepast worden
    //als de achtergrond grijs is, niet activeren
    if(!document.getElementById(id).classList.contains("bg-secondary-subtle")){
        document.getElementById(activeCellId).classList.remove("bg-primary-subtle");
        activeCellId = id;
        document.getElementById(activeCellId).classList.add("bg-primary-subtle");
    }
}

function GenereerSudoku(){
    //we genereren een random heel getal van 0 t/m 6
    let random_nmbr = Math.floor(Math.random()*7);
    //m.b.v. dit random getal selecteren we een sudoku uit de hoofd-array
    let selected_sudoku = sudokus[random_nmbr];
    let index = 0;
    //we lopen alle id's bij langs: 1 t/m 81;
    //denk erom: de index moet bij 0 beginnen
    // for(i = 1; i <= 81; i++){
    //     document.getElementById(i).innerText = selected_sudoku[index];
    //     index++;
    // }
    //kan ook met een while-loop
    // let i = 1;
    // while(i <= 81){
    //     document.getElementById(i).innerText = selected_sudoku[index];
    //     index++;
    //     i++
    // }
    //kan ook met for each die speciaal voor het doorlopen van arrays gebouwd is
    selected_sudoku.forEach(plaatsInGrid);
}

function plaatsInGrid(item, index)
{ 
    //als het een nul is, moet hij leeg blijven/worden - check
    //de achtergrond bij een cijfer moet grijs worden - check check
    //==0 ? "": item
    if(item == 0){
        document.getElementById(index + 1).classList.remove("bg-secondary-subtle");
        document.getElementById(index + 1).innerText = "";
    }
    else {
        document.getElementById(index + 1).innerText = item;
        document.getElementById(index + 1).classList.add("bg-secondary-subtle");
    }
}