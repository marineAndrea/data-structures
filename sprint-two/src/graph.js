
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

  // this.connections.slice(index, 1);
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
  this.connections[indexFrom].push(toNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



