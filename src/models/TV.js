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
  var height = 0.63;
  this.addInteractionSurface(this.width, this.depth, height, 0, 0);

  var name = 'speaker';
  var spakerWidth = 0.19;
  var spaekerX = 0.89;
  var rotation = 0;
  this.addPOI(name, spakerWidth, spakerWidth, height, spaekerX, 0, rotation);
  this.addPOI(name, spakerWidth, spakerWidth, height, -spaekerX, 0, rotation);

  this.addPOI('tv', 1.4, 0.45, height, 0, -0.03, rotation);
};
INTERACTIVEWORLD.TV.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
