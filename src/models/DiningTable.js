INTERACTIVEWORLD.DiningTable = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Dining Table with Chairs',
    width : 2.39,
    depth : 1.19,
    model : INTERACTIVEWORLD.DINING_TABLE_MODEL,
    offsetX : 0.965,
    offsetY : 0.89
  });

  // add the interaction surface
  this.addInteractionSurface(this.width, this.depth, 0.7);
  // TODO: chairs?
};
INTERACTIVEWORLD.DiningTable.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
