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
  var height = 0.95;
  this.addInteractionSurface(this.width, this.depth, height);

  var name = 'burner';
  var burnerWidth = 0.25;
  var backBurnerY = 0.135;
  var frontBurnerY = -0.175;
  var outerBurnerX = 0.443;
  this
      .addPOI(name, burnerWidth, burnerWidth, height, outerBurnerX, backBurnerY);
  this.addPOI(name, burnerWidth, burnerWidth, height, outerBurnerX,
      frontBurnerY);
  var midBurnerX = 0.15;
  this.addPOI(name, burnerWidth, burnerWidth, height, midBurnerX, backBurnerY);
  this.addPOI(name, burnerWidth, burnerWidth, height, midBurnerX, frontBurnerY);
  this.addPOI(name, burnerWidth, burnerWidth, height, -outerBurnerX,
      backBurnerY);
  this.addPOI(name, burnerWidth, burnerWidth, height, -outerBurnerX,
      frontBurnerY);
};
INTERACTIVEWORLD.Oven.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
