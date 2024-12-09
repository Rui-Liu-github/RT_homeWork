// Promise-based function that returns a random number after a delay
function randomNumberAfterDelay(delay) {
    return new Promise((resolve, reject) => {
      if (typeof delay !== 'number' || delay < 0) {
        reject("Invalid delay time");
        return;
      }
  
      setTimeout(() => {
        const randomNumber = Math.random();
        resolve(randomNumber);
      }, delay);
    });
  }
  
  // UsingI .then .catch and error handling 
  // async is gone get a promise 
  function fetchRandomNum() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
     // this is a second promise 
      .then(async (res) => {
        // let data = res.id;
        console.log('res', res)

        if (res.ok) {
        //console.log("Fetched promise obj here 666:", res.json());             
            const data = await res.json(); // Await util get data from .json()
            console.log("Fetched the data:", data); 
            console.log("Fetched the data id number:", data.id); 
            return data;       
         }
      })
      // can create a second result use .then to get ui data
      .catch((error) => {
        console.error(" get Error:", error.message);
      });
  }
  
  // fetchRandomNum();

  // methods 2: Using .then .catch and error handling
  function fetchRandomNum2() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
     // this is a second promise 
      .then((res) => {
        // let data = res.id;
        console.log('get response2', res)

        if (res.ok) {
          // console.log("Fetched promise obj here 666:", res.json());             
            const data = res.json();
            console.log("Fetched a promise:", data); 
            return data;       
         }
      })
      .then((data) => {
        console.log('get data here', data);
        console.log('get data here', data.id);
        console.log('get data here', data.body);
      })
      .catch((error) => {
        console.error(" get Error:", error.message);
      });
  }

  // fetchRandomNum2();

  //method3: using fetch API with async/await and error handling(try catch)
  async function fetchRandomNum3() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

      if (response.ok) {
        console.log('response3',response);
        const data = await response.json();
        console.log('get data3', data);
        console.log('get data3', data.id);
        return data;
      }

    } catch(error) {
      console.log('error in fetch data with async and await', error.message);
    }
  }
  // fetchRandomNum3();


    //method3: using fetch API with async/await, using .then .catch, and error handling(try catch)

  
  // Using Promise.all to handle multiple promises
  async function handleMultiplePromises() {
    try {
      const promises = [
        randomNumberAfterDelay(1000),
        randomNumberAfterDelay(2000),
        randomNumberAfterDelay(1500),
      ];
  
      const results = await Promise.all(promises);
      console.log("Random numbers from Promise.all:", results);
    } catch (error) {
      console.error("Error in handleMultiplePromises:", error);
    }
  }
  

//   handleMultiplePromises();
  