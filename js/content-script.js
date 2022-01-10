(function() {
  const BLANK_CANVAS = document.createElement('canvas');

  BLANK_CANVAS.className = 'tfJsHp-canvas';
  BLANK_CANVAS.id = 'canvas';
  document.body.appendChild(BLANK_CANVAS);
  const CANVAS = document.getElementById('canvas');


  CANVAS.width = window.innerWidth;
  CANVAS.height = window.innerHeight;
  const CONTEXT = CANVAS.getContext('2d');
  // let angle = 0;

  /**
 * @param  {number} beginX
 * @param  {number} beginY
 */
  function drawCircle(beginX, beginY) {
    CONTEXT.beginPath();
    // const radius = 15 + 20 * Math.abs(Math.cos(angle));
    CONTEXT.arc(beginX, beginY, 15, 0, 2 * Math.PI, false);
    CONTEXT.closePath();
    CONTEXT.strokeStyle = 'red';
    CONTEXT.lineWidth = 3;
    CONTEXT.stroke();

  //   angle += Math.PI / 220;
  //   requestAnimationFrame(drawCircle);
  }


  drawCircle(20, 20);
  drawCircle(CANVAS.width-40, 20);
  drawCircle(20, CANVAS.height-20);
  drawCircle(CANVAS.width-40, CANVAS.height-20);

  // rerender drawings when browser window is resized
  window.addEventListener('resize', rerenderOnWindowResize );

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

  chrome.runtime.onMessage.addListener(
      function(request) {
        if (request.onToggle) {
          CANVAS.remove();
        }
      },
  );
})();
