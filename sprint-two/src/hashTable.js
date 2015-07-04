var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){ // making duplicates, correct this
  var i = getIndexBelowMaxForKey(k, this._limit); // i = 0
  var tuple = [k, v];
  if (this._storage.get(i)) { // if not empty
    this._storage.set(i, this._storage.get(i).push(tuple));
  } else {
    this._storage.set(i, [tuple]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var n = 0; n < bucket.length; n++) {
    if (bucket[n][0] === k) {
      return bucket[n][1];
    }
  };
  return; //bucket[indexTuple][1];
  // return this._storage.get(i);

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
	// this._storage.set(i, null);
  var bucket = this._storage.get(i);

  for (var n = 0; n < bucket.length; n++) {
    if (bucket[n][0] === k) {
      bucket[n][1] = null;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
