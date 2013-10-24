INTERACTIVEWORLD.Spoon = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Spoon';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.SPOON_MODEL, function(result) {
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Spoon.prototype.__proto__ = THREE.Object3D.prototype;
