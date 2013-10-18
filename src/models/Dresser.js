INTERACTIVEWORLD.Dresser = function() {
  var that = this;
  THREE.Object3D.call(this);

  // load the dresser
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.DRESSER_MODEL, function(result) {
    // fix the offset
    result.scene.position.x -= 18;
    result.scene.position.y -= 12;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Dresser.prototype.__proto__ = THREE.Object3D.prototype;
