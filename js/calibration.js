(function() {
  // /**
  //  * @param  {string} source
  //  */
  // function addScript(source) {
  //   const SCRIPT_TAG = document.createElement('script');
  //   SCRIPT_TAG.setAttribute('src', source);
  //   SCRIPT_TAG.onload= function() {
  //     console.log('loaded');
  //   };
  //   document.head.appendChild = SCRIPT_TAG;
  // }
  // addScript('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core');
  // addScript('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter');
  // addScript('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl');
  // addScript('https://cdn.jsdelivr.net/npm/@tensorflow-models/hand-pose-detection');

  document.head.innerHTML += `
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter"></script>
  
 
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl"></script>
  
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/hand-pose-detection"></script>
  `;


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

