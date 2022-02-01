let video;
let model;
let detector;
let INPUTS = [];
let OUTPUTS = [];
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
    startTraining();
  }
}

function startTraining() {
  console.log('start training');
  // Input features - these are 2 dimensional,
  // but could be 6 to represent 2 x 3D co-ords on finger.
  // Would just need to update model definition below.

  // Shuffle the two arrays to remove any order, but do so in the same way so
  // inputs still match outputs indexes.
  tf.util.shuffleCombo(INPUTS, OUTPUTS);

  // Input feature Array of Arrays needs 2D tensor to store.
  const INPUTS_TENSOR = tf.tensor2d(INPUTS);

  // Output can stay 1 dimensional.
  const OUTPUTS_TENSOR = tf.tensor2d(OUTPUTS);


  // Function to take a Tensor and normalize values
  // with respect to each column of values contained in that Tensor.
  function normalize(tensor, min, max) {
    const result = tf.tidy(function() {
    // Find the minimum value contained in the Tensor.
      const MIN_VALUES = min || tf.min(tensor, 0);

      // Find the maximum value contained in the Tensor.
      const MAX_VALUES = max || tf.max(tensor, 0);

      // Now calculate subtract the MIN_VALUE from every value in the Tensor
      // And store the results in a new Tensor.
      const TENSOR_SUBTRACT_MIN_VALUE = tf.sub(tensor, MIN_VALUES);

      // Calculate the range size of possible values.
      const RANGE_SIZE = tf.sub(MAX_VALUES, MIN_VALUES);

      // Calculate the adjusted values divided by
      // the range size as a new Tensor.
      const NORMALIZED_VALUES = tf.div(TENSOR_SUBTRACT_MIN_VALUE, RANGE_SIZE);

      // Return the important tensors.
      return {NORMALIZED_VALUES, MIN_VALUES, MAX_VALUES};
    });
    return result;
  }


  // Normalize all input feature arrays and
  // then dispose of the original non normalized Tensors.
  const FEATURE_RESULTS = INPUTS_TENSOR;
  console.log('Normalized Values:');
  // FEATURE_RESULTS.NORMALIZED_VALUES.print();

  // console.log('Min Values:');
  // FEATURE_RESULTS.MIN_VALUES.print();

  // console.log('Max Values:');
  // FEATURE_RESULTS.MAX_VALUES.print();

  // INPUTS_TENSOR.dispose();


  // Now actually create and define model architecture.
  const model = tf.sequential();
  // Note: Would need to change input shape
  // if 6 dimensional instead of 2 dimensional inputs.
  model.add(tf.layers.dense({inputShape: [3], units: 16, activation: 'relu'}));
  // output layer must be 2 dimensional -
  //  representing 2d screen co-ordinate trying to predict.
  model.add(tf.layers.dense({units: 2}));
  model.summary();

  train();


  async function train() {
  // Compile the model with the defined learning rate and specify
  // our loss function to use.
    model.compile({
      optimizer: 'adam',
      loss: 'meanSquaredError',
    });

    // Finally do the training itself
    const results =
    await model.fit(FEATURE_RESULTS, OUTPUTS_TENSOR, {
      shuffle: true,
      batchSize: 15,
      epochs: 200,
    });

    OUTPUTS_TENSOR.dispose();
    // FEATURE_RESULTS.NORMALIZED_VALUES.dispose();

    console.log('Average error loss: ' +
     Math.sqrt(results.history.loss[results.history.loss.length - 1]));
    // Once trained we can evaluate the model.
    evaluate();
  }


  function evaluate() {
  // Predict answer for a single piece of data.
    tf.tidy(function() {
      const newInput =
      // normalize(
          tf.tensor2d([[-0.06, -0.06, -0.03]]);
      // FEATURE_RESULTS.MIN_VALUES, FEATURE_RESULTS.MAX_VALUES);

      const output = model.predict(newInput);
      output.print();
    });

    // FEATURE_RESULTS.MIN_VALUES.dispose();
    // FEATURE_RESULTS.MAX_VALUES.dispose();
    model.dispose();

    console.log(tf.memory().numTensors);
  }
}

// startTraining();
