
var Graph = function(){
  this.nodes = [];
  this.connections = [];
};

Graph.prototype.addNode = function(node){
  this.nodes.push(node);
  this.connections.push([]);
};

Graph.prototype.contains = function(node){
  return _.contains(this.nodes, node);
};

Graph.prototype.removeNode = function(node){
  var index = _.indexOf(this.nodes, node);
  this.nodes.splice(index, 1);
  this.connections.splice(index, 1);
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var indexFrom = _.indexOf(this.nodes, fromNode);
  for (var i = 0; i < this.connections[indexFrom].length; i++) {
    if (this.connections[indexFrom][i] === toNode) {
      return true;
    }
  };
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var indexFrom = _.indexOf(this.nodes, fromNode);
  var indexTo = _.indexOf(this.nodes, toNode);
  this.connections[indexFrom].push(toNode);
  this.connections[indexTo].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var indexFrom = _.indexOf(this.nodes, fromNode);
  var indexTo = _.indexOf(this.nodes, toNode);
  var removeIndex1 = _.indexOf(this.connections[indexFrom], this.nodes[indexTo]);
  this.connections[indexFrom].splice(removeIndex1, 1);
  var removeIndex2 = _.indexOf(this.connections[indexTo], this.nodes[indexFrom]);
  this.connections[indexTo].splice(removeIndex2, 1);
};

Graph.prototype.forEachNode = function(cb){
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  };
};
 
/*
 * Complexity: What is the time complexity of the above functions?
 */



