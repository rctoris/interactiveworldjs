INTERACTIVEWORLD.Bed = function() {
  var that = this;
  THREE.Object3D.call(this);

  // load the bed
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.BED_MODEL, function(result) {
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Bed.prototype.__proto__ = THREE.Object3D.prototype;
