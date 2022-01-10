import * as handPoseDetection from '/@tensorflow-models/hand-pose-detection';
// Register WebGL backend.
import '/@tensorflow/tfjs-backend-webgl';

(function() {
  const BLANK_CANVAS = document.createElement('canvas');
  const STEP_1 = document.querySelector('.tfJsHp-calibration-step1');
  const STEP_2 = document.querySelector('.tfJsHp-calibration-step2');
  const STEP_3 = document.querySelector('.tfJsHp-calibration-step3');
  const STEP_4 = document.querySelector('.tfJsHp-calibration-step4');

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
    CONTEXT.arc(beginX, beginY, 15, 0, 2 * Math.PI, false);
    CONTEXT.closePath();
    CONTEXT.strokeStyle = 'red';
    CONTEXT.lineWidth = 3;
    CONTEXT.stroke();
  }
  /**
 * @param  {number} beginX
 * @param  {number} beginY
 */
  function removeCircle(beginX, beginY) {
    CONTEXT.beginPath();
    CONTEXT.arc(beginX, beginY, 15, 0, 2 * Math.PI, false);
    CONTEXT.closePath();
    CONTEXT.strokeStyle = 'white';
    CONTEXT.lineWidth = 6;
    CONTEXT.stroke();
  }


  drawCircle(20, 20);
  STEP_1.addEventListener('click', ()=>{
    STEP_1.disabled = true;
    STEP_2.disabled = false;
    removeCircle(20, 20);
    drawCircle(CANVAS.width-40, 20);
  });

  STEP_2.addEventListener('click', ()=>{
    STEP_2.disabled = true;
    STEP_3.disabled = false;
    removeCircle(CANVAS.width-40, 20);
    drawCircle(20, CANVAS.height-20);
  });

  STEP_3.addEventListener('click', ()=>{
    STEP_3.disabled = true;
    STEP_4.disabled = false;
    removeCircle(20, CANVAS.height-20);
    drawCircle(CANVAS.width-40, CANVAS.height-20);
  });
})();

/**
 */
async function loadModel() {
  const model = handPoseDetection.SupportedModels.MediaPipeHands;
  const detectorConfig = {
    runtime: 'tfjs',
  };
  detector = await handPoseDetection.createDetector(model, detectorConfig);


  const video = document.getElementById('webcam');

  /**
   * @return {boolean} if user has webcam
   */
  function hasGetUserMedia() {
    return !!(navigator.mediaDevices &&
     navigator.mediaDevices.getUserMedia);
  }

  // If webcam supported, add event listener to button for when user
  // wants to activate it.
  if (hasGetUserMedia()) {
    enableCam();
  } else {
    console.warn('getUserMedia() is not supported by your browser');
  }


  // Enable the live webcam view and start classification.
  /**
   */
  function enableCam() {
    if (!model) {
      console.log('Wait! Model not loaded yet.');
      return;
    }


    // getUsermedia parameters.
    const constraints = {
      video: true,
    };

    // Activate the webcam stream.
    navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
      video.srcObject = stream;
      video.addEventListener('loadeddata', predictWebcam);
    });
  }

  /**
   */
  function predictWebcam() {
  // Now let's start classifying the stream.
    detector.estimateHands(video).then(function(hands) {
      if (hands[0].score > 0.6) {
        console.log(keypoints3D[0]);
      }

      // Call this function again to keep predicting when the browser is ready.
      window.requestAnimationFrame(predictWebcam);
    });
  }
}

loadModel();

