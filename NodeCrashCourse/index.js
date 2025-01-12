// const { generateRandomNumber, celsiusToFahrenheit, greetings } = require('./utils.js');
// console.log(`Random number: ${generateRandomNumber()}`);
// console.log(`0 celsius is: ${celsiusToFahrenheit(0)}`);
// greetings();

import getPosts, {getPostsLength}  from "./postController.js";

console.log(getPosts());
console.log(getPostsLength());