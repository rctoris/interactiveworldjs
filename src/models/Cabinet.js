INTERACTIVEWORLD.Cabinet = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Cabinet',
    width : 1.91,
    depth : 0.557,
    model : INTERACTIVEWORLD.CABINET_MODEL,
    offsetX : -0.916,
    offsetY : -0.126
  });
};
INTERACTIVEWORLD.Cabinet.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
