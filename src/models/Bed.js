INTERACTIVEWORLD.Bed = function() {
  var that = this;
  THREE.Object3D.call(this);

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.BED_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = -0.04;
    result.scene.position.y = 2.17;
    result.scene.rotation.z = -Math.PI / 2.0;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Bed.prototype.__proto__ = THREE.Object3D.prototype;
