// TIME COMPLEXITY

const data = ['A', 'B', 'C'];

const data2 = [1, 2, 3, 4, 5];

for (let j = 0; j < data2.length; j++) {
  console.log(data2[index]);
}

for (let index = 0; index < data.length; index++) {
  console.log(data[index]);
}

/**
 * n -> determine how many times one block code was execute
 *  How our code grows when our input grows.
 *
 * O(n)
 *
 * The performance of the code depends of the inputs.
 * With 2 inputs our code will grow based on this formule:
 *
 * O(n + a)
 *
 * n -> first input (data)
 * a -> second input (data2)
 *
 * If a have a nested loops where for each element of data I will be loop
 * through data2 to the formule will be:
 *
 * O(n * a)
 */

// MEMORY COMPLEXITY

const out = [];

for (let index = 0; index < data.length; index++) {
  out[index] = data[index];
}

/**
 * The memory for this algorithm depends of the input, because for each element
 * of the input I'm saving in a new array
 *
 * so the notation of this algorithm will be:
 *
 * O(n)
 */

for (let index = 0; index < data.length; index++) {
  out[index] = [];
  for (let j = 0; j < data.length; j++) {
    out[index][j] = data[i];
  }
}

/**
 * for this algorithm the o notation will be:
 *
 * O(n^2)
 *
 * cause for each element of the array I'm looping through the array again
 * creating a matriz
 */
