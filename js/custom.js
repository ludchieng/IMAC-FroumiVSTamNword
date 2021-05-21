// Implement Array.prototype.remove
Array.prototype.remove = function(elem) {
  var ai = this.indexOf(elem);
  while(ai > -1){
      this.splice(ai,1);
      ai = this.indexOf(elem);
  }
  return this;
};

Array.prototype.isEmpty = function(elem) {
  return this.length === 0;
};
