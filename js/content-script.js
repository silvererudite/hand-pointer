/* eslint-disable no-var */
// var render = (function() {
//   const CANVAS = document.createElement('canvas');
//   CANVAS.setAttribute('class', 'tfJsHp-canvas');
//   document.body.appendChild(CANVAS);

//   CANVAS.width = window.innerWidth;
//   CANVAS.height = window.innerHeight;
//   const CONTEXT = CANVAS.getContext('2d');


//   function drawCircle(beginX, beginY) {
//     CONTEXT.beginPath();
//     CONTEXT.arc(beginX, beginY, 15, 0, 2 * Math.PI, false);
//     CONTEXT.closePath();
//     CONTEXT.strokeStyle = 'red';
//     CONTEXT.lineWidth = 3;
//     CONTEXT.stroke();
//   }

//   function rerenderOnWindowResize() {
//     CANVAS.width = window.innerWidth;
//     CANVAS.style.width = window.innerWidth;
//     CANVAS.height = window.innerHeight;
//     CANVAS.style.height = window.innerHeight;
//     drawCircle(20, 20);
//     drawCircle(CANVAS.width-40, 20);
//     drawCircle(20, CANVAS.height-20);
//     drawCircle(CANVAS.width-40, CANVAS.height-20);
//   }
//   return {
//     draw: drawCircle,
//     reDraw: rerenderOnWindowResize,
//     canvas: CANVAS,
//   };
// })();

// // draw circles on all four corners
// injectCanvas.draw(20, 20);
// injectCanvas.draw(injectCanvas.canvas.width-40, 20);
// injectCanvas.draw(20, injectCanvas.canvas.height-20);
// injectCanvas.draw(injectCanvas.canvas.width-40,
// injectCanvas.canvas.height-20);

// // rerender drawings when browser window is resized
// window.addEventListener('resize', injectCanvas.reDraw);

// chrome.runtime.onMessage.addListener(
//     function(request) {
//       if (request.onToggle) {
//         injectCanvas.canvas.remove();
//       }
//     },
// );
// var isCalibrated;
// var canvasSetup;

// // set the global vars from global-settings file
// chrome.runtime.onMessage.addListener(
//     function(request) {
//       isCalibrated = request.isCalibrated;
//       canvasSetup = request.canvasSetup;
//     },
// );
let video;
let model;
let detector;

const init = async () => {
  video = await loadVideo();
  model = handPoseDetection.SupportedModels.MediaPipeHands;
  const detectorConfig = {
    runtime: 'tfjs',
    modelType: 'full',
  };
  detector =
   await handPoseDetection.createDetector(model, detectorConfig);
  main();
};
const loadVideo = async () => {
  const video = await setupCamera();
  video.play();
  return video;
};
const setupCamera = async () => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    throw new Error(
        'Browser API navigator.mediaDevices.getUserMedia not available',
    );
  }
  video = document.getElementById('webcam');
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      facingMode: 'user',
      width: window.innerWidth,
      height: window.innerHeight,
    },
  });
  video.srcObject = stream;
  return new Promise(
      (resolve) => (video.onloadedmetadata = () => resolve(video)),
  );
};


var render = (function() {
  const CANVAS = document.createElement('canvas');
  const VIDEO = document.createElement('video');
  CANVAS.setAttribute('class', 'tfJsHp-canvas');
  VIDEO.setAttribute('id', 'webcam');
  document.body.appendChild(CANVAS);
  CANVAS.append('VIDEO');
  CANVAS.width = window.innerWidth;
  CANVAS.height = window.innerHeight;
  VIDEO.width = window.innerWidth;
  VIDEO.height = window.innerHeight;
  const CONTEXT = CANVAS.getContext('2d');

  function drawCircle(beginX, beginY) {
    CONTEXT.beginPath();
    CONTEXT.arc(beginX, beginY, 15, 0, 2 * Math.PI, false);
    CONTEXT.closePath();
    CONTEXT.strokeStyle = 'red';
    CONTEXT.lineWidth = 3;
    CONTEXT.stroke();
  }

  function removeCircle(beginX, beginY) {
    CONTEXT.beginPath();
    CONTEXT.arc(beginX, beginY, 15, 0, 2 * Math.PI, false);
    CONTEXT.closePath();
    CONTEXT.strokeStyle = 'white';
    CONTEXT.lineWidth = 6;
    CONTEXT.stroke();
  }

  return {
    draw: drawCircle,
    remove: removeCircle,
    canvas: CANVAS,
  };
})();
function predict(handPos) {
  // Predict answer for a single piece of data.
  tf.tidy(function() {
    const newInput =
    normalize(tf.tensor2d(
        [handPos]),
    FEATURE_RESULTS.MIN_VALUES, FEATURE_RESULTS.MAX_VALUES);

    const output = modelHp.predict(newInput.NORMALIZED_VALUES);
    output.print();
  });

  FEATURE_RESULTS.MIN_VALUES.dispose();
  FEATURE_RESULTS.MAX_VALUES.dispose();
}

async function main() {
  const estimationConfig = {flipHorizontal: true};
  const predictions = await detector.estimateHands(
      document.querySelector('video'),
      estimationConfig,
  );
  if (predictions.length > 0) {
    render.draw(predict(
        [predictions[0].keypoints3D.x,
          predictions[0].keypoints3D.y,
          predictions[0].keypoints3D.z]));
  }
  requestAnimationFrame(main);
}

