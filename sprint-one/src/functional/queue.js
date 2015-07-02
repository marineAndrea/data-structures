var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var dTimes = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function(){
    if (length - dTimes > 0) {
      dTimes++;
      return storage[dTimes -1];
    }
  };

  someInstance.size = function() {
    return length - dTimes;
  };

  return someInstance;
};
