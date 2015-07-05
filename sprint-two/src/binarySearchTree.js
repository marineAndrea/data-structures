var BinarySearchTree = function(value){
    var tree = Object.create(binarySearchTreePrototype);

    tree.value = value;
    tree.left = null;
    tree.right = null;

    return tree;
};


var binarySearchTreePrototype = {};

binarySearchTreePrototype.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }       
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

binarySearchTreePrototype.contains = function(target) {
  var result = false;
  if (this.value === target) {
    return result = true;
  } else {
    if (target < this.value && this.left !== null) {
      result = this.left.contains(target);
    } else if (target > this.value && this.right !== null) {
      result = this.right.contains(target);
    }
  }
  return result;
};

binarySearchTreePrototype.depthFirstLog = function(fn) {
  var node = this; 
  var helper = function(node) {
    fn(node.value);
    debugger;
    if (node.left !== null) {
      node = node.left; 
      helper(node);
    }
    if (node.right !== null) {
      node = node.right;
      helper(node);
    }
  }
  helper(node);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
