const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.prepend(canvas);
const game = {grid:40};

canvas.setAttribute("width", game.grid * 15);
canvas.setAttribute("height", game.grid * 10);
canvas.style.border = "1px solid black";

const player = {
    x: game.grid * 7, 
    y: game.grid * 4, 
    w: grid * 2,
    h: grid / 2,
    color: "red",
};

draw();

function draw() {
    ctx.beginPath();
    ctx.rect(player.x, player.y, player.w, player.h)
    ctx.fillStyle = player.color;
    ctx.fill
}