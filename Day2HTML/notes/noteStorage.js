/** 1: localStorage example, stored only on the browser (client); 
 *  Data exsists even after the browser is closed out.
 * !!!!
 * localStorage.setItem(key, value)// store
 * localStorage.getItem(Key) //output the value
 * localStorage.removeItem(key); // delete the data
 */

localStorage.setItem('name', 'Ruby');

console.log(localStorage.getItem('name'));//Ruby

localStorage.removeItem('name');
console.log(localStorage.getItem('name'));//

/*****
 * 2: Session Storage,stored only on the browser (client); 
 * Data is cleared when the browser tab or session is closed out.
 * !!!
 * sessionStorage.setItem(key, value)
 * sessionStorage.getItem(key)
 * sessionStorage.removeItem(key);
 */

// Store session data
sessionStorage.setItem('mySessionID', '666');

// get data
console.log(sessionStorage.getItem('mySessionID')); // 666
sessionStorage.removeItem('mySessionID')
console.log(sessionStorage.getItem('mySessionID')); //

/****
 * 3. Cookies
 *  Cookies are sent with HTTP requests to server and  have expiration dates.
 *  create a cookie through the document.cookie object
 *  get a cookie
 * ** */

document.cookie = 'name=Ruby';

// this month is 0 because index is 0, dan the data is going to be 1
document.cookie = 'name=Ruby; expires=' + new Date(2020, 0, 1).toUTCString()// expires is 2020-01-01

document.cookie = 'lastName=liu; expires=' + new Date(2020, 0, 1).toUTCString()

console.log(document.cookie);

