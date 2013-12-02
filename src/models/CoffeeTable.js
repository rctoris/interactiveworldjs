INTERACTIVEWORLD.CoffeeTable = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Coffee Table',
    width : 1.54,
    depth : 0.84,
    model : INTERACTIVEWORLD.COFFEE_TABLE_MODEL,
    offsetX : -0.773,
    offsetY : 0.345,
    rotation : -Math.PI / 2.0,
    scale : 0.11
  });

  // create the interaction surface
  this.addInteractionSurface(this.width - 0.08, this.depth, 0.408);
};
INTERACTIVEWORLD.CoffeeTable.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
