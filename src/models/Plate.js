INTERACTIVEWORLD.Plate = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Plate';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.PLATE_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = -0.1;
    result.scene.position.y = -0.07;
    result.scene.scale.x *= 0.04;
    result.scene.scale.y *= 0.04;
    result.scene.scale.z *= 0.04;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Plate.prototype.__proto__ = THREE.Object3D.prototype;
