var COMPONENT_TYPES = {
  POINT: 1,
  LINE: 2,
  CIRCLE: 3,
  IMAGE: 4,
  MARTIAN: 4,
}

function Components() {
  this.active = true;
  this.type = 0;
  this.color = 'red';
}

Components.prototype.setActive = function(activate) {
  this.active = activate
}

Components.prototype.getActivate = function(params) {
  return this.active
}

function Point(x, y) {
  Components.call(this);
  this.type = COMPONENT_TYPES.POINT;
  this.x = x || 0;
  this.y = y || 0;
}
Point.prototype = new Components();
Point.prototype.constructor = Point;

function Line({x = 0, y = 0, xx = 0, yy = 0}) {
  Components.call(this);
  this.type = COMPONENT_TYPES.LINE;
  this.x = x;
  this.y = y;
  this.xx= xx;
  this.yy= yy;
}
Line.prototype = new Components();
Line.prototype.constructor = Line;

Line.prototype.getColor =  function() {
  return this.color
}