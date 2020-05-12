// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (json[0] === "{") {
    parseObject(json);
  } else if (json[0] === "[") {
    parseArray(json);
  } else if (json[0] === /[a-z]|[A-Z]/) {
    parseString(json);
  } else if (json[0] === /[0-9]|-|./) {
    parseNumber(json);
  }
    else if (json === 'true'){
      return true;
  } else if (json === 'false'){
    return false;
  } else if (json === 'null'){
    return null;
  }

  // object - begins with {
  function parseObject(obj) {
    var outputObj = {};
    obj = obj.slice(1, obj.length-1);
    var arrObj = obj.split(","); // ["name", "6"], [age:"6"];

    for (var i = 0; i < arrObj.length; i++) {
      var pair = arrObj[i].split(":");
      var key = pair[0];
      var value = pair[1];
      parseJSON(value);
      console.log(value);
    }


  }
  // array - begins with [
  // string - begins with "
  function parseString(str) {

  }
  // number - starts with number
  // boolean - begins with f or t, no quote

};

console.log(parseJSON(`{"name":"kim", "age":"6"}`)); // => {"name":"kim", "age":6}