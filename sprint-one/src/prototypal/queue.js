var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.firstPos = 0;
  obj.lastPos = 0;
  return obj;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
	this.storage[this.firstPos++] = value;
};
queueMethods.dequeue = function() {
	if ((this.firstPos - this.lastPos) > 0) {
		return this.storage[this.lastPos++];
	}
};
queueMethods.size = function() {
	return this.firstPos - this.lastPos;
};


