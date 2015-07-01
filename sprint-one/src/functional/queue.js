var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var queueSize = 0;
  var dequeuedTimes = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[queueSize] = value; // 0:a 1:b
    queueSize++; // 2
  };

  someInstance.dequeue = function(){
    dequeuedTimes++;
    return storage[dequeuedTimes - 1];
  };

  someInstance.size = function() {
    if (queueSize - dequeuedTimes <= 0) {
      return 0;
    }
    return queueSize - dequeuedTimes;
  };

  return someInstance;
};
