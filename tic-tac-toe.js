function boardfunc(){
    var grid = document.querySelectorAll("#board div");
    for (var i = 0; i < grid.length; i++) {
        grid[i].classList.add("square");
        grid[i].setAttribute("cell-num",i);
    }
}
onload = boardfunc;

// function squarefunc(){
//     var grid = document.querySelectorAll("#board div");
//     for (var i = 0; i < grid.length; i++) {
//         grid[i].classList.add("X");
// }


