(function() {
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
  // draw circles on all four corners
  drawCircle(20, 20);
  drawCircle(CANVAS.width-40, 20);
  drawCircle(20, CANVAS.height-20);
  drawCircle(CANVAS.width-40, CANVAS.height-20);

  // rerender drawings when browser window is resized
  window.addEventListener('resize', rerenderOnWindowResize);

  chrome.runtime.onMessage.addListener(
      function(request) {
        if (request.onToggle) {
          CANVAS.remove();
        }
      },
  );
})();
