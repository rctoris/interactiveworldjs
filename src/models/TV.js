INTERACTIVEWORLD.TV = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'TV',
    width : 2.14,
    depth : 0.64,
    model : INTERACTIVEWORLD.TV_MODEL,
    offsetX : 0.295,
    offsetY : 0.27,
    scale : 0.66
  });

  // add the interaction surface
  this.addInteractionSurface(this.width, this.depth, 0.63);
};
INTERACTIVEWORLD.TV.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
