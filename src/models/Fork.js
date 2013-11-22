INTERACTIVEWORLD.Fork = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Fork';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.FORK_MODEL, function(result) {
    // fix the offset
    result.scene.scale.x *= 0.95;
    result.scene.scale.y *= 0.95;
    result.scene.scale.z *= 0.95;
    result.scene.position.x = -0.01;
    result.scene.position.y = 0.05;
    result.scene.rotation.z = Math.PI / 2.0;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Fork.prototype.__proto__ = THREE.Object3D.prototype;
