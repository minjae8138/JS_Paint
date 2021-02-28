const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext("2d")

canvas.width = 500;
canvas.height = 500;
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function onMouseMove(event){
    const x = event.offsetX
    const y = event.offsetY
    if (!painting){
        ctx.beginPath()
        ctx.moveTo(x,y)
    }else{
        ctx.lineTo(x,y)
        ctx.stroke()
    }   
}

function onMouseDown(event){
    painting=true;
}

function onMouseUp(event){
    painting=false;
}

function onMouseLeave(event){
    painting = false;
}

if (canvas){
    addEventListener("mousemove",onMouseMove)
    addEventListener("mousedown",onMouseDown)
    addEventListener("mouseup",onMouseUp)
    addEventListener("mouseleave",onMouseLeave)
}

const colors = document.getElementsByClassName("control_color");


function changeColor(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;

}

Array.from(colors).forEach(color => color.addEventListener("click", changeColor))

