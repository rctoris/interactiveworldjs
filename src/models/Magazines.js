INTERACTIVEWORLD.Magazines = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Magazines';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.MAGAZINES_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = -0.1;
    result.scene.position.y = -0.1;
    result.scene.scale.x *= 0.4;
    result.scene.scale.y *= 0.4;
    result.scene.scale.z *= 0.4;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Magazines.prototype.__proto__ = THREE.Object3D.prototype;
