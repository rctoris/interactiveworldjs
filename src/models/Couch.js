INTERACTIVEWORLD.Couch = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Couch',
    width : 2.99,
    depth : 1.68,
    model : INTERACTIVEWORLD.COUCH_MODEL,
    offsetX : -2.18,
    offsetY : -0.33
  });

  // add the interaction surfaces
  var w = 0.99;
  var z = 0.348;
  this.addInteractionSurface(w, this.depth, z, -1, 0, 0);
  this.addInteractionSurface(this.width - w, w, z, 0.49, 0.35);
};
INTERACTIVEWORLD.Couch.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
