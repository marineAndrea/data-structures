var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if (list.head === null && list.tail === null) { //if no nodes
      list.head = newNode;
      list.tail = newNode;
    } else if (list.head.value === list.tail.value) { // if one node
      list.head.next = newNode;
      list.tail = newNode;
    } else { // if multiple nodes
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    var temp = list.head;
    if (temp.next === null) {
      list = {};
    } else {
      list.head = temp.next;
    }
    return temp.value;
  };

  list.contains = function(target){
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
