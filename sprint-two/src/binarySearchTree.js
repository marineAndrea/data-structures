var BinarySearchTree = function(value){
    var tree = Object.create(binarySearchTreePrototype);

    tree.value = value;
    tree.left = null;
    tree.right = null;

    return tree;
};


var binarySearchTreePrototype = {};

binarySearchTreePrototype.insert = function(value) {
  //base case:




  // check if value is smaller or larger than this.value
  if (value < this.value) {
    // if value is smaller than this.value
      // check if this.left === null, if so, assign
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }       
  } else {
    // else call insert on this.left
    // if value is larger than this.value
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }

      // check if this.right === null, if so, assign
    // else call insert on this.right

};

binarySearchTreePrototype.contains = function() {

};

binarySearchTreePrototype.depthFirstLog = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
