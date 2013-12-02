INTERACTIVEWORLD.Nightstand = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Nightstand',
    width : 0.875,
    depth : 0.62,
    model : INTERACTIVEWORLD.NIGHTSTAND_MODEL,
    offsetX : -1.359,
    offsetY : -1,
    offsetZ : -0.1
  });

  // add the interaction surface
  this.addInteractionSurface(this.width, this.depth, 0.72);
};
INTERACTIVEWORLD.Nightstand.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
