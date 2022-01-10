import * as handPoseDetection from '/@tensorflow-models/hand-pose-detection';
// Register WebGL backend.
import '/@tensorflow/tfjs-backend-webgl';

// const STEP_1 = document.querySelector('.tfJsHp-calibration-step1');
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

  // Prediction loop!
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

