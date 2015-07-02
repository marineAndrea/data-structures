var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.added = 0;
  this.removed = 0;
};

Queue.prototype.enqueue = function(value) {
	this.added++;
	return this.storage[this.added - 1] = value;
};

Queue.prototype.dequeue = function() {
	if (this.added - this.removed > 0) {
		this.removed++;
		return this.storage[this.removed - 1];
	}
};

Queue.prototype.size = function() {
	return this.added - this.removed;
};
