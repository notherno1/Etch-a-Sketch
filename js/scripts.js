
let blocks = document.querySelectorAll(".grid-block");

// blocks.forEach(elem => (
//     elem.addeventlistener("hover", function() {
//         elem.style.opacity = String(Number(elem.style.opacity)+0.1)
//     })
// ))

// create block, set random color at opacity 0, class = "grid-block", add event listener
// create grid row, insert all blocks in a row, set class = "grid-row"
let block = document.querySelector("#test");

block.style.opacity = 0.1

function blockBuilder() {
    let newBlock = document.createElement("div");
    newBlock.classList.add("grid-block");
    newBlock.style.backgroundColor = 'rgb(' + Math.floor(Math.random()*255)
     + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')';
    newBlock.style.opacity = 0.0;
    newBlock.addEventListener("mouseover", function() {
        if (Number(newBlock.style.opacity) < 1)
        newBlock.style.opacity = String(Number(newBlock.style.opacity) + 0.1);
    });
    return newBlock
}

function rowBuilder(len) {
    let newRow = document.createElement("div");
    newRow.classList.add("grid-row");

    for(let i = 0; i < len; i++) {
        let childBlock = blockBuilder();
        newRow.appendChild(childBlock);
    }
    return newRow

}

function buildCanvas(len) {
    let canvas = document.querySelector(".container");

    for(let i = 0; i < len; i++) {
        canvas.appendChild(rowBuilder(len));
    }
}

function cleanCanvas() {
    let canvas = document.querySelector(".container");
    
    for(let i = canvas.children.length-1; i >= 0 ; i-- )
        canvas.children[i].remove();
    
}

let buttonSize = document.querySelector("button");
buttonSize.addEventListener("click",function () {
    let newSize = prompt("Choose a new canvas size (max 100)");

    if(isNaN(newSize) || parseInt(newSize)<0 ){
        alert("Must be a number between 1 and 100");
    }

    cleanCanvas();
    buildCanvas(Math.min(parseInt(newSize), 100));

})

cleanCanvas();
buildCanvas(16);