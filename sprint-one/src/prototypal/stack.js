var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.len = 0;
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.storage[this.len++] = value;
};

stackMethods.pop = function() {
	if (this.len > 0) {
		this.len--;
		return this.storage[this.len];
	}
};

stackMethods.size = function() {
	return this.len;
};