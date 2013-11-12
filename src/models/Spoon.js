INTERACTIVEWORLD.Spoon = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Spoon';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.SPOON_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = 0.019;
    result.scene.position.y = -0.06;
    result.scene.rotation.z = Math.PI / 2.0;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Spoon.prototype.__proto__ = THREE.Object3D.prototype;
