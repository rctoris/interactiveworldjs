INTERACTIVEWORLD.Refrigerator = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Refrigerator';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.REFRIGERATOR_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = -0.15;
    result.scene.position.y = 1.15;
    result.scene.rotation.z = -Math.PI / 2.0;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Refrigerator.prototype.__proto__ = THREE.Object3D.prototype;
