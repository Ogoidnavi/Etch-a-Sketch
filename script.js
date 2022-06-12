const grid = document.getElementById('grid');
const btn = document.querySelector('button');
let grid_size = 16;
let grid_item;
let press = 'black';

function resetGrid(){
    while(grid.firstChild){
      grid.removeChild(grid.firstChild);
    }
    initializeGrid(grid_size);
}

function initializeGrid(size){
    grid.style.setProperty('--grid-rows', size);
    grid.style.setProperty('--grid-cols', size);
    for(let i = 0; i < (size*size); i++)
    {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'grid-item';
    };
    paintGrid(press);
};

function paintGrid(color){
    grid_item = document.querySelectorAll('.grid-item');
    const myArray = Array.from(grid_item);
    myArray.forEach(pixel => {
    pixel.addEventListener('mouseover', function(){
        if(color == 'black')
        {
            pixel.style.background = 'black';
        }
        else if(color == 'rainbow')
        {
            const randomR = Math.floor(Math.random() * 256)
            const randomG = Math.floor(Math.random() * 256)
            const randomB = Math.floor(Math.random() * 256)
            pixel.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
        }
    } );
 });
};

initializeGrid(grid_size,grid_size);
document.getElementById('black').addEventListener('click',function(){
    press = 'black';
    paintGrid(press);
});
document.getElementById('rainbow').addEventListener('click',function(){
    press = 'rainbow';
    paintGrid(press);
});
document.getElementById('erase').addEventListener('click', function(){
    resetGrid();
});
document.getElementById('resize').addEventListener('click', function(){
    let aux = parseInt(prompt('Please enter the desired size for your canvas(up to 100).', '16'));
    if(aux <= 100)
    {
        grid_size = aux;
        resetGrid();
    }
    else
    {
        alert("Please enter a size lower or equal to 100!");
    }
    
});