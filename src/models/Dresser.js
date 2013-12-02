INTERACTIVEWORLD.Dresser = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Dresser',
    width : 1.353,
    depth : 0.48,
    model : INTERACTIVEWORLD.DRESSER_MODEL,
    offsetX : -17.985,
    offsetY : -11.785
  });

  // add the interaction surface
  this.addInteractionSurface(this.width, this.depth, 0.8);
};
INTERACTIVEWORLD.Dresser.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
