var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
  var dupl = false;
  var idx = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(idx);
  if (!bucket) {
    bucket = [];
    this._storage.set(idx, bucket);
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      dupl = true;
      return;
    }
  }
  if (dupl === false) {
    bucket.push([k,v]);
  }
  return;
};

HashTable.prototype.retrieve = function(k){
  var idx = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(idx);
  if (!bucket) {
    return null;
  }
  for( var i = 0; i < bucket.length; i++ ){
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k) {
  var idx = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(idx);
  if (!bucket) {
    return null;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
    }
  }
  return;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
