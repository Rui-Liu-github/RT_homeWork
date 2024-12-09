// reinvent the wheel: prototype methods

export function myMap(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with the callback applied to each element.
  // myMap(arr, num => num * 2);
  
   // Check if the input is a valid array
   if (!Array.isArray(arr)) {
    throw new Error("First argument must be an array");
  }
  if (typeof cb !== 'function') {
    throw new Error("Second argument must be a function");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i, arr)); // Pass element to cb
  }

  return result;
}

export function myFilter(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns a new array with only the elements that return a truthy value.
  // myFilter(arr, num => num % 2 === 0);

   if (!Array.isArray(arr)) {
    throw new Error("the first argument should be an array");
  }

  if (typeof cb !== 'function') {
    throw new Error("the second argument should be a callback function");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) { // Pass element to  callback, if true
      result.push(arr[i]); 
    }
  }

  return result;
}

export function myConcat(arr1, arr2) {
  // Write a function that takes two arrays as arguments
  // and returns a new array with the elements of both arrays.
  // Example: const arr1 = [1, 2, 3];
  // const arr2 = [4, 5, 6];
  // myConcat(arr1, arr2);
  // Expected output: [1, 2, 3, 4, 5, 6]
  // use spread operator:  (...)
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("Both two arguments are array");
  }

  const result = [...arr1, ...arr2];

  return result;
}

export function myFind(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns the first element that returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myFind(arr, num => num % 2 === 0);
  // Expected output: 2

  if (!Array.isArray(arr)) {
    throw new Error("the first argument should be an array");
  }
  if (typeof cb !== 'function') {
    throw new Error("the second argument should be a callback function");
  }

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) { 
      return arr[i];
    }
  }

  return undefined;

}

export function myEvery(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns true if all the elements return a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myEvery(arr, num => num > 0);
  // Expected output: true


  if (!Array.isArray(arr)) {
    throw new Error("the first argument should be an array");
  }
  if (typeof cb !== 'function') {
    throw new Error("the second argument should be a callback function");
  }

  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i], i, arr)) {
      return false; 
    }
  }

  return true;


}

export function mySome(arr, cb) {
  // Write a function that takes an array and a callback as arguments
  // and returns true if at least one element returns a truthy value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySome(arr, num => num % 2 === 0);
  // Expected output: true

  if (!Array.isArray(arr)) {
    throw new Error("the first argument should be an array");
  }
  if (typeof cb !== 'function') {
    throw new Error("the second argument should be a callback function");
  }

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) { 
      return true; 
    }
  }

  return false;
}

export function myIncludes(arr, val) {
  // Write a function that takes an array and a value as arguments
  // and returns true if the value is in the array.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myIncludes(arr, 3);
  // Expected output: true

  // Validate input arguments
  if (!Array.isArray(arr) || arr.length == 0) {
    throw new Error("the arr argument should be an array");
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true; // Return true if the value is found
    }
  }

  // If not found, return false
  return false;

}

export function myJoin(arr, separator) {
  // Write a function that takes an array and a separator as arguments
  // and returns a string with the elements joined by the separator.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myJoin(arr, '-');
  // Expected output: '1-2-3-4-5'

   if (!Array.isArray(arr)) {
    throw new Error("the arr argument should be an array");
  }

  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]; // Append the element
    if (i < arr.length - 1) {
      result += separator; // Append the separator if it's not the last element
    }
  }

  return result;
}

export function myPush(arr, val) {
  // Write a function that takes an array and a value as arguments
  // and returns the array with the value added to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myPush(arr, 6);
  // Expected output: [1, 2, 3, 4, 5, 6]

  if (!Array.isArray(arr)) {
    throw new Error("the arr argument should be an array");
  }

  arr[arr.length] = val;
  return arr;

}

export function myReverse1(arr) {
  // Write a function that takes an array as an argument
  // and returns a new array with the elements reversed.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReverse(arr);
  // Expected output: [5, 4, 3, 2, 1]

  if (!Array.isArray(arr)) {
    throw new Error("the argument should be an array");
  }

  const reversed = [];

  // Iterate over the array in reverse order and add elements to the new array
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  // Return the reversed array
  return reversed;
}

export function myReverse2(arr) {
  // Same as above but this time returns the original array reference reversed.

  if (!Array.isArray(arr)) {
    throw new Error("the argument should be an array");
  }

  // Use two-pointer to reverse the array 
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap elements
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    // Move pointers to center
    left++;
    right--;
  }

  return arr;
}

// Challenges
export  function myReduce(arr, cb, initial) {
  // Write a function that takes an array, a callback and an initial value as arguments
  // and returns a single value.
  // Example: const arr = [1, 2, 3, 4, 5];
  // myReduce(arr, (acc, num) => acc + num, 0);
  // Expected output: 15

  if (!Array.isArray(arr)) {
    throw new Error("the first argument must be an array");
  }
  if (typeof cb !== 'function') {
    throw new Error("the second argument must be a function");
  }
  if (arr.length === 0) {
    throw new Error("Reduce of empty array with no initial value");
  }

  // Initialize the accumulator
  let currNum = initial;
  let startIndex = 0;

  // If no initial value provided, use the first element of the array as the initial value
  if (currNum === undefined) {
    currNum = arr[0];
    startIndex++; 
  }

  for (let i = startIndex; i < arr.length; i++) {
    currNum = cb(currNum, arr[i], i, arr);
  }

  return currNum;
}

export function mySort(arr, cb) {
  // Write a function that takes an array of NUMBERS and a callback as arguments
  // and returns a new array sorted by the callback.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySort(arr, (a, b) => a - b);
  // Expected output: [1, 2, 3, 4, 5]

  if (!Array.isArray(arr)) {
    throw new Error("the frst argument must be an array");
  }
  if (typeof cb !== 'function') {
    throw new Error("the second argument must be a function");
  }

  const sortedArray = [...arr];

  // Bubble Sort 
  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = 0; j < sortedArray.length - i - 1; j++) {
      // Use callback to compare adjacent elements in the inner loop
      // the last i elements are already sorted
      if (cb(sortedArray[j], sortedArray[j + 1]) > 0) {
        // Swap elements 
        const temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }

  return sortedArray;
}

export function mySlice(arr, start, end) {
  // Write a function that takes an array, a start index and an end index as arguments
  // and returns a new array with the elements sliced from the start to the end.
  // Example: const arr = [1, 2, 3, 4, 5];
  // mySlice(arr, 1, 3);
  // Expected output: [2, 3]
  //expect(mySlice(arr, -2)).toEqual([4, 5]);


   // Validate input
  if (!Array.isArray(arr)) {
    throw new Error("the first argument must be an array");
  }

  const len = arr.length;
  end = end === undefined ? len : end;
  
  // Normalize start and end indices
  const normalizedStart = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
  const normalizedEnd = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

  const result = [];

  for (let i = normalizedStart; i < normalizedEnd; i++) {
    result.push(arr[i]);
  }

  return result;
}
