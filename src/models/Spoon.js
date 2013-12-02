INTERACTIVEWORLD.Spoon = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Spoon',
    width : 0.032,
    depth : 0.15,
    model : INTERACTIVEWORLD.SPOON_MODEL,
    offsetX : 0.0165,
    offsetY : -0.075,
    rotation : Math.PI / 2.0
  });
};
INTERACTIVEWORLD.Spoon.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
