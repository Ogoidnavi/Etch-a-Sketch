const container = document.getElementById('container');
const btn = document.querySelector('button');
const grid_size = 16;
let grid_item;
let press;

function initializeGrid(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < (rows*cols); i++)
    {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    };
    paintGrid('black');
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
