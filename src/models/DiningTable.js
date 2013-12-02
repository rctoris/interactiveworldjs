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

  var name = 'chair';
  var chairWidth = 0.29;
  var chairHeight = 0.44;
  var endChairX = 1.27;
  var endChairY = 0.03;
  this.addPOI(name, chairWidth, chairWidth, chairHeight, endChairX, endChairY);
  this.addPOI(name, chairWidth, chairWidth, chairHeight, -endChairX,
      endChairY * 2);
  var outerChairX = 0.8;
  var outerChairY = 0.68;
  this.addPOI(name, chairWidth, chairWidth, chairHeight, outerChairX,
      outerChairY);
  this.addPOI(name, chairWidth, chairWidth, chairHeight, outerChairX,
      -outerChairY);
  this.addPOI(name, chairWidth, chairWidth, chairHeight, -outerChairX,
      outerChairY);
  this.addPOI(name, chairWidth, chairWidth, chairHeight, -outerChairX,
      -outerChairY);
  var midChairX = 0.03;
  this
      .addPOI(name, chairWidth, chairWidth, chairHeight, midChairX, outerChairY);
  this.addPOI(name, chairWidth, chairWidth, chairHeight, midChairX,
      -outerChairY);
};
INTERACTIVEWORLD.DiningTable.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
