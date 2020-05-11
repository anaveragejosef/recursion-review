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
  } else if (Array.isArray(obj)){ //check if array
      var results = [];
      for (const ele of obj){
        result.push(stringifyJSON(ele));
      }
      return "[" + results.join(",") + "]";
  } else {
    // if (typeof obj === null) {
    //   return 'null';
    // }
    // var strObj = "{";
    // Object.keys(obj).forEach(function(key){
    //   strObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
    //   if (key !== Object.keys(obj).length-1) {
    //     strObj += ",";
    //   }
    // });
    // strObj += "}";
    // return strObj;
    var objStringify = [];
    Object.key(obj).forEach(function(key){
      var value = obj[key];
      if (typeof value === "function" || value === undefined){
        continue;
      } else if (typeof value === 'boolean' || typeof value === 'number' || value === null){
        objStringify.push(`"${key}":${value}`)
      } else if (typeof value === 'string'){
        objStringify.push(`"${key}":"${value}"`)
      } else if (typeof value === 'object'){
        objStringify.push(`"${key}":${stringifyJSON(value)}`);
      }
    });

    return `{${objStringify}}`
  }

};

