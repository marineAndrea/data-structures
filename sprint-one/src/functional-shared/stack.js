var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.len = 0;

  _.extend(obj, stackMethods);

  return obj;
};

var stackMethods = {
	push: function(value) {
		this.storage[this.len] = value;
		this.len++;	
	},
	pop: function() {
		if (this.len > 0) {
			this.len--;
			return this.storage[this.len];
		}
	},
	size: function() {
		return this.len;
	}
};
