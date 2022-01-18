// eslint-disable-next-line no-var
var injectCanvas = (function() {
  const CANVAS = document.createElement('canvas');
  CANVAS.setAttribute('class', 'tfJsHp-canvas');
  document.body.appendChild(CANVAS);

  CANVAS.width = window.innerWidth;
  CANVAS.height = window.innerHeight;
  const CONTEXT = CANVAS.getContext('2d');

  /**
 * @param  {number} beginX
 * @param  {number} beginY
 */
  function drawCircle(beginX, beginY) {
    CONTEXT.beginPath();
    CONTEXT.arc(beginX, beginY, 15, 0, 2 * Math.PI, false);
    CONTEXT.closePath();
    CONTEXT.strokeStyle = 'red';
    CONTEXT.lineWidth = 3;
    CONTEXT.stroke();
  }
  /**
 */
  function rerenderOnWindowResize() {
    CANVAS.width = window.innerWidth;
    CANVAS.style.width = window.innerWidth;
    CANVAS.height = window.innerHeight;
    CANVAS.style.height = window.innerHeight;
    drawCircle(20, 20);
    drawCircle(CANVAS.width-40, 20);
    drawCircle(20, CANVAS.height-20);
    drawCircle(CANVAS.width-40, CANVAS.height-20);
  }
  return {
    draw: drawCircle,
    reDraw: rerenderOnWindowResize,
    canvas: CANVAS,
  };
})();

// draw circles on all four corners
injectCanvas.draw(20, 20);
injectCanvas.draw(injectCanvas.canvas.width-40, 20);
injectCanvas.draw(20, injectCanvas.canvas.height-20);
injectCanvas.draw(injectCanvas.canvas.width-40, injectCanvas.canvas.height-20);

// rerender drawings when browser window is resized
window.addEventListener('resize', injectCanvas.reDraw);

chrome.runtime.onMessage.addListener(
    function(request) {
      if (request.onToggle) {
        injectCanvas.canvas.remove();
      }
    },
);
