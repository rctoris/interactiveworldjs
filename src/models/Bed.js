INTERACTIVEWORLD.Bed = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Bed',
    width : 1.7,
    depth : 2.15,
    model : INTERACTIVEWORLD.BED_MODEL,
    offsetX : -0.875,
    offsetY : 1.1,
    rotation : -Math.PI / 2.0
  });

  // create the interaction surface
  this.addInteractionSurface(this.width - 0.1, this.depth, 0.658);

  var name = 'pillow';
  var pillowWidth = 0.64;
  var pillowDepth = 0.35;
  var pillowHeight = 0.84;
  var pillowX = 0.35;
  var pillowY = 0.76;
  this.addPOI(name, pillowWidth, pillowDepth, pillowHeight, pillowX, pillowY);
  this.addPOI(name, pillowWidth, pillowDepth, pillowHeight, -pillowX, pillowY);
};
INTERACTIVEWORLD.Bed.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
