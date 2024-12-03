// Do not use prototype methods

// Data types & nums
export function checkIfStringIsNumber(str) {
  //   Write a function that takes a string as an argument and
  //   returns a boolean indicating if the str is a number
      
  // str = "1";
   // return str == 1;
    return (!isNaN(Number(str))) ? true: false;
  //   '1' -> true, "a" -> false, "1a" -> false
}

export function findAvgOfNums(arr) {
  //   Write a function that takes an array of numbers and strings as an
  //   argument and returns the average of all the numbers.
   let sum = 0, count = 0;

   for(let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
         sum += arr[i];
         count++;
      }
   }

   return count > 0 ? Math.round(sum / count) : 0;
  //   Expected output: 3


}

export function findAverageAge(people) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of all the people.

  if (people.length == 0) {
    return 0;
  }

  let totalAge = 0;

  for (let i = 0; i < people.length; i++) {
    totalAge += people[i].age;
  }

  return Math.round(totalAge / people.length);
}

export function findAvgAgeByJob(people, job) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of people with the same job.
  let totalAge = 0;
  let count = 0;

  for (let i = 0; i < people.length; i++) {
    if (people[i].job === job) {
      totalAge += people[i].age;
      count++;
    }
  }
  return (count > 0) ? Math.round(totalAge / count) : 0;
     
}

export function findMaxNum(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns the maximum number in that array.
  //   Do not use Math.max
  //   Example: const arr = [1, 2, 3, 4, 5];
  let left = 0;
  let maxNum = 0;

  while (left < arr.length) {
    if (arr[left] > maxNum) {
      maxNum = arr[left];
    }
    left++;
  }
  return maxNum;
}

export function findLongestWord(str) {
  //   Write a function that takes a string as an argument and
  //   returns the longest word in that string.
  //   Hint: You can use String.prototype.split
  //   Example: const str = 'I love JavaScript';
  let strArr = str.split(' ');
  let maxLen = 0;
  let res = '';

  strArr.forEach(element => {
    if (element.length > maxLen) {
      maxLen = element.length;
      res = element;
    }
  });

  return res;
}

export function findSumOfEvenNums(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns an array of only the even numbers.
  //   Example: const arr = [1, 2, 3, 4, 5];
  //   Expected output: [2, 4]
  let slow = 0, fast = 0; // using 

  while (fast < arr.length) {
    if (arr[fast] % 2 == 0) {
      arr[slow++] = arr[fast];
    }
    fast++;
  }

  return arr.slice(0, slow);
}

// reference types
export function bubbleSortArr1(num) {
  // Write a function that takes an array of numbers as an argument and
  // returns a new sorted array using the bubble sort algorithm.
  // Do not use Array.prototype.sort
  // Example: const num = [5, 3, 8, 2, 1];
  // Expected output: [1, 2, 3, 5, 8]
  let arr = [...num];

  // out loop: iterate all nums;
  // inner loop: through the unsorted part, -1 every time, so - i
  // -1:  the loop stops one step before the last index during each iteration of the outer loop.

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
  }

  return arr;
}

export function bubbleSortArr2(num) {
  // Same as above but this time returns the original array reference sorted.
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length - 1 - i; j++) {
        if (num[j] > num[j + 1]) {
            // Swap
            let temp = num[j];
            num[j] = num[j + 1];
            num[j + 1] = temp;
        }
    }
  }

  return num;

}

export function removeTypes(arr, typeToRemove) {
  // Write a function that takes an array of mixed types and a type as arguments
  // and returns a new array without the specified type.
  // Example: const arr = [1, '2', 3, '4', 5];
  // removeTypes(arr, 'string');
  // Expected output: [1, 3, 5]
  let slow = 0, fast = 0; // using 

  while (fast < arr.length) {
    if (typeof arr[fast] !== typeToRemove) {
      arr[slow++] = arr[fast];
    }
    fast++;
  }

  return arr.slice(0, slow);

}

// reinvent the wheel: prototype methods
export function changeNumsByAmount(nums, amount, operator) {
  // Write a function that takes an array of numbers, an amount and an operator as arguments
  // and returns a new array with the numbers changed by the amount and operator.
  // Example: const nums = [1, 2, 3, 4, 5];
  // changeNumsByAmount(nums, 2, '+');
  // Expected output: [3, 4, 5, 6, 7]
  let newArr = [];

  nums.forEach(element => {
    switch(operator) {
      case '+':
        newArr.push(element + amount);
        break;
      case '-':
        newArr.push(element - amount);
        break;
      case '*':
        newArr.push(element * amount);
        break;
      case '/':
        newArr.push(element / amount);
        break;
    }
  });

  return newArr;
}

export function removeNumFromArr(nums, num) {
  // Write a function that takes an array of numbers and a number as arguments
  // and returns a new array without the specified number.
  // Example: const nums = [1, 2, 3, 3, 3, 4, 5];
  // removeNumFromArr(nums, 3);
  // Expected output: [1, 2, 4, 5]
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== num) {
      newArr.push(nums[i]);
    }
  }
  return newArr;

}
