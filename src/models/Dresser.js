INTERACTIVEWORLD.Dresser = function() {
  var that = this;
  THREE.Object3D.call(this);

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.DRESSER_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = -17.32;
    result.scene.position.y = -11.55;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Dresser.prototype.__proto__ = THREE.Object3D.prototype;
