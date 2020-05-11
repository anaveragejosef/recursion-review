// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  let node = document.body;
  let output = [];

  //iterates through each node
  var searchChild = function(node){
    if(node.classList){
      if (node.classList.contains(className)){
        output.push(node);
      }
    }

    var children = node.childNodes;
    for (var i = 0; i < children.length; i++) {
      searchChild(children[i]);
    }
  }

  searchChild(node);
  return output;
};
