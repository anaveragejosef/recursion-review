// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (json[0] === "{") {
    parseObject(json);
  }
  // object - begins with {
  function parseObject(obj) {
    var outputObj = {};
    obj = obj.slice(1, obj.length-1);
    var arrObj = obj.split(":"); // ["name", "6"];
    for (var i = 0; i < arrObj.length; i++) {
      if (i % 2 === 0) { // "name"
        parseString(arrObj[i]);
      }
    }
  }
  // array - begins with [
  // string - begins with "
  function parseString(str) {

  }
  // number - starts with number
  // boolean - begins with f or t, no quote

};

console.log(parseJSON(`{"name":"6"}`)); // => {"name":6}