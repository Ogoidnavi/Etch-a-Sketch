const container = document.getElementById('container');
let grid_size = 16;

function makeGrid(rows, cols)
{
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < (rows*cols); i++)
    {
        let cell = document.createElement('div');
        cell.innerText = (i + 1);
        container.appendChild(cell).className = 'grid-item';
    }
}