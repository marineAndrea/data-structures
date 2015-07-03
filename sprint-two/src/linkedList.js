var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if (list.head === null && list.tail === null) { //if no nodes
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){ // review this
    var res = list.head.value;
    if (list.head === list.tail) {
      list.tail = null;
    }
    list.head = list.head.next;
    return res;
  };

  list.contains = function(target){ // rewrite using while loop
    // var first = list.head;
    // while (first !== target) {

    // }
    var checkNodesValue = function(node) {
      if (node === list.tail) {
        return node.value === target;
      } else if (node.value === target) {
        return true;
      } else {
        return checkNodesValue(node.next);
      }
      return false;
    }
    return checkNodesValue(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
