/* eslint-disable no-var */
let video;
let model;
let detector;
var handPosTopleft;
var handPosTopRight;
var handPosBotmLeft;
var handPosBotmRight;

const init = async () => {
  video = await loadVideo();
  model = handPoseDetection.SupportedModels.MediaPipeHands;
  const detectorConfig = {
    runtime: 'tfjs',
    modelType: 'full',
  };
  detector =
 await handPoseDetection.createDetector(model, detectorConfig);
  predict();
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
init();

const STEP_1 = document.getElementById('tfJsHp-calibration-step1');
const STEP_2 = document.getElementById('tfJsHp-calibration-step2');
const STEP_3 = document.getElementById('tfJsHp-calibration-step3');
const STEP_4 = document.getElementById('tfJsHp-calibration-step4');
var calibrate = (function() {
  const CANVAS = document.createElement('canvas');

  CANVAS.setAttribute('class', 'tfJsHp-canvas');
  document.body.appendChild(CANVAS);
  CANVAS.width = window.innerWidth;
  CANVAS.height = window.innerHeight;
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


function predict() {
  detector.estimateHands(video).then(function(predictions) {
    if (predictions.length > 0) {
      calibrate.draw(20, 20);
      handPosTopleft = predictions[0].keypoints3D[8];
      STEP_1.addEventListener('click', ()=>{
        STEP_1.disabled = true;
        STEP_2.disabled = false;
        calibrate.remove(20, 20);
        calibrate.draw(calibrate.canvas.width-40, 20);
      });
      handPosTopRight = predictions[0].keypoints3D[8];
      STEP_2.addEventListener('click', ()=>{
        STEP_2.disabled = true;
        STEP_3.disabled = false;
        calibrate.remove(calibrate.canvas.width-40, 20);
        calibrate.draw(20, calibrate.canvas.height-20);
      });
      handPosBotmLeft =
      STEP_3.addEventListener('click', ()=>{
        STEP_3.disabled = true;
        STEP_4.disabled = false;
        calibrate.remove(20, calibrate.canvas.height-20);
        calibrate.draw(calibrate.canvas.width-40, calibrate.canvas.height-20);
      });
      predict(handPosBotmRight);
    }
    window.requestAnimationFrame(predict);
  });
}
