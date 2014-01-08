INTERACTIVEWORLD.Counter = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Counter',
    width : 1.08,
    depth : 0.82,
    model : INTERACTIVEWORLD.COUNTER_MODEL,
    offsetX : 1.114,
    offsetY : 1.52,
    scale : 0.85
  });

  // add the interaction surface
  this.addInteractionSurface(this.width, this.depth, 0.77, 0, 0);
};
INTERACTIVEWORLD.Counter.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
