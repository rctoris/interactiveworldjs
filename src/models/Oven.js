INTERACTIVEWORLD.Oven = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Oven',
    width : 1.215,
    depth : 0.66,
    model : INTERACTIVEWORLD.OVEN_MODEL,
    offsetX : -1.066,
    offsetY : -0.49
  });

  // add the interaction surface
  this.addInteractionSurface(this.width, this.depth, 0.95);
};
INTERACTIVEWORLD.Oven.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
