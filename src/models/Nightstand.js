INTERACTIVEWORLD.Nightstand = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Nightstand';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.NIGHTSTAND_MODEL, function(result) {
    // fix offset
    result.scene.position.x = -0.95;
    result.scene.position.y = -0.69;
    result.scene.position.z = -0.1;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Nightstand.prototype.__proto__ = THREE.Object3D.prototype;
