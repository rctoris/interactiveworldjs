INTERACTIVEWORLD.Cup = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Cup';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.CUP_MODEL, function(result) {
    // fix the offset
    result.scene.scale.x *= 0.04;
    result.scene.scale.y *= 0.04;
    result.scene.scale.z *= 0.04;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Cup.prototype.__proto__ = THREE.Object3D.prototype;
