const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext("2d")
const colors = document.getElementsByClassName("control_color");
const fill = document.getElementById("jsMode");
const brush = document.getElementById("jsRange");
const save = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 500;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
  }

function startPainting() {
painting = true;
}

function onMouseMove(event){
    const x = event.offsetX
    const y = event.offsetY
    if (painting && !filling){
        ctx.lineTo(x,y)
        ctx.stroke()
        
    }else{
        ctx.beginPath()
        ctx.moveTo(x,y)
    }   
}

function changeColor(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function changeBrush(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleFill(event){
    if (filling===false){
        filling = true;
        fill.innerHTML = "Paint"
    }else{
        filling = false;
        fill.innerHTML = "Fill"
    }
}

function paintAll(event){
    if (filling){
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
    }
}

function handleCM(event){
    event.preventDefault();
}

function handleSave(event){
    const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = image ;
    link.download = "PaintJS"
    link.click();
}

if (canvas){
    canvas.addEventListener("mousemove",onMouseMove)
    canvas.addEventListener("mousedown",startPainting)
    canvas.addEventListener("mouseup",stopPainting)
    canvas.addEventListener("mouseleave",stopPainting)
    canvas.addEventListener("click",paintAll)
    canvas.addEventListener("contextmenu", handleCM)
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", changeColor)
);

if (brush){
    brush.addEventListener("input",changeBrush);
}

if (fill) {
    fill.addEventListener("click",handleFill);
}

if (save) {
    save.addEventListener("click",handleSave);
}


