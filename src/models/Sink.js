INTERACTIVEWORLD.Sink = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Sink';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.SINK_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = -0.3;
    result.scene.position.y = -0.2;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Sink.prototype.__proto__ = THREE.Object3D.prototype;
