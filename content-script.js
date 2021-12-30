// const node = document.createElement("canvas");
// node.id = "canvas";
// document.body.appendChild(node);
document.body.innerHTML += '<canvas id="canvas" ></canvas>';
const canvas = document.getElementById('canvas');
canvas.width = window.screen.width;
canvas.height = window.screen.height;
// console.log(window.screen.width)
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

