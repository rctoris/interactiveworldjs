INTERACTIVEWORLD.Sink = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Sink Unit',
    width : 2.91,
    depth : 0.775,
    model : INTERACTIVEWORLD.SINK_MODEL,
    offsetX : -1.763,
    offsetY : -0.645,
  });

  // add the interaction surface
  var counterHeight = 0.91;
  this.addInteractionSurface(1.51, this.depth, counterHeight, -0.7, 0);
  this.addInteractionSurface(0.54, this.depth, counterHeight, 1.19, 0);
  var sinkWidth = 0.82;
  var sinkDepth = 0.46;
  var sinkX = 0.49;
  var sinkY = -0.12;
  this.addInteractionSurface(sinkWidth, sinkDepth, 0.81, sinkX, sinkY);
  var rotation = 0;
  this.addPOI('sink', sinkWidth, sinkDepth, counterHeight, sinkX, sinkY, rotation);
};
INTERACTIVEWORLD.Sink.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
