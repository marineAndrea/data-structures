var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
	this.children.push(Tree(value));
	return;
};

treeMethods.contains = function(target){ // Marine: imoprove this and check difference with none embedding function
	var checkSubTrees = function(tree) {
		var result = false;
		if (tree.value === target) {
			return true;
		} 
		if (tree.children.length === 0) {
			return result;
		} else {
			for (var i = 0; i < tree.children.length; i++) {
				result = checkSubTrees(tree.children[i]);
				if (result) {
					return true;
				}
			};
		}
		return result;
	};
	return checkSubTrees(this); //review this
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

