// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // check primitives
  if (typeof obj === "string" || typeof obj === "number" || typeof obj === "boolean") {
    // check if obj is string
    if (typeof obj === "string") {
      // return with outer quotes
      return `"${obj}"`;
    } else {
      return `${obj}`;
    }
  }


};

