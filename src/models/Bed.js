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
};
INTERACTIVEWORLD.Bed.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
