if (INPUTS.length == 120) {
  console.log('start training');
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

      // Calculate the adjusted values divided
      // by the range size as a new Tensor.
      const NORMALIZED_VALUES = tf.div(TENSOR_SUBTRACT_MIN_VALUE, RANGE_SIZE);
      // Return the important tensors.
      return {NORMALIZED_VALUES, MIN_VALUES, MAX_VALUES};
    });
    return result;
  }


  // Normalize all input feature arrays and then
  // dispose of the original non normalized Tensors.
  const FEATURE_RESULTS = normalize(INPUTS_TENSOR);
  console.log('Normalized Values:');
  FEATURE_RESULTS.NORMALIZED_VALUES.print();

  console.log('Min Values:');
  FEATURE_RESULTS.MIN_VALUES.print();

  console.log('Max Values:');
  FEATURE_RESULTS.MAX_VALUES.print();

  INPUTS_TENSOR.dispose();


  // Now actually create and define model architecture.
  modelHp = tf.sequential();
  // Note: Would need to change input shape if 6 dimensional
  // instead of 2 dimensional inputs.
  modelHp.add(tf.layers.dense({inputShape: [3], units: 16}));
  // output layer must be 2 dimensional
  // - representing 2d screen co-ordinate trying to predict.
  modelHp.add(tf.layers.dense({units: 2}));
  modelHp.summary();

  train();


  async function train() {
  // Compile the model with the defined learning rate and specify
  // our loss function to use.
    modelHp.compile({
      optimizer: 'sgd',
      loss: 'meanSquaredError'});

    // Finally do the training itself
    const results =
  await modelHp.fit(FEATURE_RESULTS.NORMALIZED_VALUES, OUTPUTS_TENSOR, {
    shuffle: true,
    batchSize: 5,
    epochs: 200});

    OUTPUTS_TENSOR.dispose();
    FEATURE_RESULTS.NORMALIZED_VALUES.dispose();

    console.log(
        'Average error loss: ' +
    Math.sqrt(results.history.loss[results.history.loss.length - 1]));
    // Once trained we can evaluate the model.
    evaluate();
  }


  function evaluate() {
  // Predict answer for a single piece of data.
    tf.tidy(function() {
      const newInput =
    normalize(tf.tensor2d(
        [[-0.071, -0.072, -0.035]]),
    FEATURE_RESULTS.MIN_VALUES, FEATURE_RESULTS.MAX_VALUES);

      const output = modelHp.predict(newInput.NORMALIZED_VALUES);
      output.print();
    });

    FEATURE_RESULTS.MIN_VALUES.dispose();
    FEATURE_RESULTS.MAX_VALUES.dispose();
    modelHp.dispose();

    console.log(tf.memory().numTensors);
  }
}
