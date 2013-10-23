INTERACTIVEWORLD.Counter = function() {
  var that = this;
  THREE.Object3D.call(this);

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.COUNTER_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = 1.65;
    result.scene.position.y = 1.95;
    result.scene.scale.x *= 0.85;
    result.scene.scale.y *= 0.85;
    result.scene.scale.z *= 0.85;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Counter.prototype.__proto__ = THREE.Object3D.prototype;
