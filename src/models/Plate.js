INTERACTIVEWORLD.Plate = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Plate',
    width : 0.149,
    depth : 0.149,
    model : INTERACTIVEWORLD.PLATE_MODEL,
    offsetX : -0.0968,
    offsetY : -0.08,
    scale : 0.04
  });
};
INTERACTIVEWORLD.Plate.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
