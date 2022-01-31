let video;
let model;
let detector;

const prompt = document.getElementById('banner');
let render = (function() {
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

const init = async () => {
  video = await loadVideo();
  model = handPoseDetection.SupportedModels.MediaPipeHands;
  const detectorConfig = {
    runtime: 'tfjs',
    modelType: 'full',
  };
  detector =
   await handPoseDetection.createDetector(model, detectorConfig);
  step1();
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
    video: true,
  });
  video.srcObject = stream;
  return new Promise(
      (resolve) => (video.onloadedmetadata = () => resolve(video)),
  );
};

init();

let tempBuffer = [];
let count = 0;

async function step1() {
  console.log('inside step 1');
  render.draw(20, 20);
  const estimationConfig = {flipHorizontal: true};
  const predictions = await detector.estimateHands(
      document.querySelector('video'),
      estimationConfig);
  if (predictions.length > 0) {
    if (count > 5 && INPUTS.length < 30) {
      INPUTS.push(
          [predictions[0].keypoints3D[8].x,
            predictions[0].keypoints3D[8].y,
            predictions[0].keypoints3D[8].z]);
      OUTPUTS.push([20, 20]);
    } else if (tempBuffer.length > 0) {
      calculateChange(
          predictions[0].keypoints3D[8].x,
          predictions[0].keypoints3D[8].y,
          predictions[0].keypoints3D[8].z);
    } else {
      tempBuffer[0] = [predictions[0].keypoints3D[8].x,
        predictions[0].keypoints3D[8].y,
        predictions[0].keypoints3D[8].z];
    }
  }
  if (INPUTS.length < 30) {
    requestAnimationFrame(step1);
  } else {
    // jump to step2
    render.remove(20, 20);
    // console.log(INPUTS.length);
    count = 0;
    tempBuffer = [];
    prompt.innerText = 'Put finger in top right';
    setTimeout(step2, 5000);
  }
}

function calculateChange(x, y, z) {
  if (
    (Math.abs(tempBuffer[0][0]) - Math.abs(x)) < 0.01 &&
     (Math.abs(tempBuffer[0][1]) - Math.abs(y)) < 0.01 &&
     (Math.abs(tempBuffer[0][2]) - Math.abs(z)) < 0.01 ) {
    count +=1;
  }
}
async function step2() {
  console.log('inside step 2');
  render.draw(render.canvas.width-40, 20);
  const estimationConfig = {flipHorizontal: true};
  const predictions = await detector.estimateHands(
      document.querySelector('video'),
      estimationConfig);
  if (predictions.length > 0) {
    if (count > 5 && INPUTS.length < 60) {
      INPUTS.push(
          [predictions[0].keypoints3D[8].x,
            predictions[0].keypoints3D[8].y,
            predictions[0].keypoints3D[8].z]);
      OUTPUTS.push([render.canvas.width-40, 20]);
    } else if (tempBuffer.length > 0) {
      calculateChange(
          predictions[0].keypoints3D[8].x,
          predictions[0].keypoints3D[8].y,
          predictions[0].keypoints3D[8].z);
    } else {
      tempBuffer[0] = [
        predictions[0].keypoints3D[8].x,
        predictions[0].keypoints3D[8].y,
        predictions[0].keypoints3D[8].z];
    }
  }
  if (INPUTS.length < 60) {
    requestAnimationFrame(step2);
  } else {
    render.remove(render.canvas.width-40, 20);
    console.log(INPUTS.length);
    count = 0;
    tempBuffer = [];
    prompt.innerText = 'Put finger in bottom left';
    setTimeout(step3, 5000);
  }
}
async function step3() {
  console.log('inside step 3');
  render.draw(20, render.canvas.height-20);
  const estimationConfig = {flipHorizontal: true};
  const predictions = await detector.estimateHands(
      document.querySelector('video'),
      estimationConfig);
  if (predictions.length > 0) {
    if (count > 5 && INPUTS.length < 90) {
      INPUTS.push(
          [predictions[0].keypoints3D[8].x,
            predictions[0].keypoints3D[8].y,
            predictions[0].keypoints3D[8].z]);
      OUTPUTS.push([20, render.canvas.height-20]);
    } else if (tempBuffer.length > 0) {
      calculateChange(
          predictions[0].keypoints3D[8].x,
          predictions[0].keypoints3D[8].y,
          predictions[0].keypoints3D[8].z);
    } else {
      tempBuffer[0] = [
        predictions[0].keypoints3D[8].x,
        predictions[0].keypoints3D[8].y,
        predictions[0].keypoints3D[8].z];
    }
  }
  if (INPUTS.length < 90) {
    requestAnimationFrame(step3);
  } else {
    // jump to step 4
    render.remove(20, render.canvas.height-20);
    count = 0;
    tempBuffer = [];
    prompt.innerText = 'Put finger in bottom right';
    setTimeout(step4, 5000);
  }
}
async function step4() {
  console.log('inside step 4');
  render.draw(render.canvas.width-40, render.canvas.height-20);
  const estimationConfig = {flipHorizontal: true};
  const predictions = await detector.estimateHands(
      document.querySelector('video'),
      estimationConfig);
  if (predictions.length > 0) {
    if (count > 5 && INPUTS.length < 120) {
      INPUTS.push(
          [predictions[0].keypoints3D[8].x,
            predictions[0].keypoints3D[8].y,
            predictions[0].keypoints3D[8].z]);
      OUTPUTS.push([render.canvas.width-40, render.canvas.height-20]);
    } else if (tempBuffer.length > 0) {
      calculateChange(
          predictions[0].keypoints3D[8].x,
          predictions[0].keypoints3D[8].y,
          predictions[0].keypoints3D[8].z);
    } else {
      tempBuffer[0] = [
        predictions[0].keypoints3D[8].x,
        predictions[0].keypoints3D[8].y,
        predictions[0].keypoints3D[8].z];
    }
  }
  if (INPUTS.length < 120) {
    requestAnimationFrame(step4);
  } else {
    render.remove(render.canvas.width-40, render.canvas.height-20);
    tempBuffer = [];
    prompt.innerText = 'Done !';
    console.log(INPUTS);
    console.log(OUTPUTS);
  }
}
