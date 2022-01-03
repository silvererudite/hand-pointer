document.body.innerHTML += '<canvas id="canvas"></canvas>';
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
// let angle = 0;

/**
 * @param  {number} beginX
 * @param  {number} beginY
 */
function drawCircle(beginX, beginY) {
  ctx.beginPath();
  // const radius = 15 + 20 * Math.abs(Math.cos(angle));
  ctx.arc(beginX, beginY, 15, 0, 2 * Math.PI, false);
  ctx.closePath();
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 3;
  ctx.stroke();

//   angle += Math.PI / 220;
//   requestAnimationFrame(drawCircle);
}


drawCircle(20, 20);
drawCircle(canvas.width-40, 20);
drawCircle(20, canvas.height-20);
drawCircle(canvas.width-40, canvas.height-20);


window.onresize = function() {
  canvas.width = window.innerWidth;
  canvas.style.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.height = window.innerHeight;
  drawCircle(20, 20);
  drawCircle(canvas.width-40, 20);
  drawCircle(20, canvas.height-20);
  drawCircle(canvas.width-40, canvas.height-20);
};
