var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  var length = 0;
  var obj = {};
  extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
	push : function(value) {
		storage[length] = value;
		length++;
		
	},
	pop : function() {
		return;

	},
	size : function() {
		return length;
	}
};

var extend = function(constr, methods) {
	for (var key in methods) {
		constr[key] = methods[key];
	}
	return constr;
};