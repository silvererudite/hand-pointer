/* eslint-disable max-len */
(function() {
  const CANVAS = document.createElement('canvas');
  const STEP_1 = document.getElementById('tfJsHp-calibration-step1');
  const STEP_2 = document.getElementById('tfJsHp-calibration-step2');
  const STEP_3 = document.getElementById('tfJsHp-calibration-step3');
  const STEP_4 = document.getElementById('tfJsHp-calibration-step4');

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
// console.log(flag);
// flag.onload = () => {
init();
// };
/**
 */
async function main() {
  const predictions = await detector.estimateHands(
      document.querySelector('video'),
  );
  if (predictions.length > 0) {
    console.log(predictions[0]);
  }
  requestAnimationFrame(main);
}
