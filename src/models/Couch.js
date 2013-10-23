INTERACTIVEWORLD.Couch = function() {
  var that = this;
  THREE.Object3D.call(this);

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.COUCH_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = -0.7;
    result.scene.position.y = 0.55;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Couch.prototype.__proto__ = THREE.Object3D.prototype;
