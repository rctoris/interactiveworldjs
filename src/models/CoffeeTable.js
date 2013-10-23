INTERACTIVEWORLD.CoffeeTable = function() {
  var that = this;
  THREE.Object3D.call(this);

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.COFFEE_TABLE_MODEL, function(result) {
    // fix the offset
    result.scene.position.y = 0.75;
    result.scene.rotation.z = -Math.PI / 2.0;
    result.scene.scale.x *= 0.11;
    result.scene.scale.y *= 0.11;
    result.scene.scale.z *= 0.11;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.CoffeeTable.prototype.__proto__ = THREE.Object3D.prototype;
