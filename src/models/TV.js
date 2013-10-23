INTERACTIVEWORLD.TV = function() {
  var that = this;
  THREE.Object3D.call(this);

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.TV_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = 1.3;
    result.scene.position.y = 0.6;
    result.scene.scale.x *= 0.66;
    result.scene.scale.y *= 0.66;
    result.scene.scale.z *= 0.66;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.TV.prototype.__proto__ = THREE.Object3D.prototype;
