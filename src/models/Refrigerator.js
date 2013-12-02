INTERACTIVEWORLD.Refrigerator = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Refrigerator',
    width : 0.883,
    depth : 0.8,
    model : INTERACTIVEWORLD.REFRIGERATOR_MODEL,
    offsetX : -0.592,
    offsetY : 0.8,
    rotation : -Math.PI / 2.0
  });
};
INTERACTIVEWORLD.Refrigerator.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
