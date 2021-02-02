const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        // 경로를 만든다.
        ctx.beginPath(); // 경로생성
        ctx.moveTo(x, y); // 선 시작 좌표
    } else {
        // 그린다.
        ctx.lineTo(x, y); // 선 끝 좌표
        ctx.stroke(); // 선그리기
    }
}

function onMouseLeave(event) {
    painting = false;
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", onMouseLeave);
}

Array.from(colors).forEach((color) => color.addEventListener("click", handleColorClick));
