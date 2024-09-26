function createSquares(tam) {
    const div = document.querySelector(".container");

    while(div.firstChild){
        div.removeChild(div.firstChild);
    }

    for (var i = 0; i < (tam * tam); i++) {
        const square = document.createElement("div");
        square.style.width = `${squareWH}px`;
        square.style.height = `${squareWH}px`;
        square.classList.add('square')      
        square.style.backgroundColor = "red"
        square.addEventListener('mouseenter', () => {
            square.classList.add('coloredSquare');
            if (square.classList.contains('coloredSquare')) {
                square.style.backgroundColor = "black"
                square.style.border = "1px solid red"
                square.style.boxSizing = "border-box"
            }
        });
        div.appendChild(square);
    }
}

function changeRoomSize(size){

}

var roomSize = 16;
var squareWH = 600 / roomSize;
const buttonChange = document.getElementById('buttonSize')
const valorInput = document.getElementById('inputValor');

buttonChange.addEventListener('click', ()=>{
    const valor = valorInput.value;
    if(valor < 8 || valor > 100) {
        alert("Valor inválido, será setado como 16");
    }
    else{
        roomSize = valor;
        squareWH = 600 / roomSize;
    }
    createSquares(roomSize)
})

createSquares(roomSize);
