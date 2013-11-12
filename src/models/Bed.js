INTERACTIVEWORLD.Bed = function() {
  var that = this;
  THREE.Object3D.call(this);

  this.name = 'Bed';
  this.interactions = [];

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.BED_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = -0.04;
    result.scene.position.y = 2.17;
    result.scene.rotation.z = -Math.PI / 2.0;
    that.add(result.scene);
  });

  // create the interaction surface
  var interaction = new INTERACTIVEWORLD.InteractionSurface({
    width : 1.65,
    height : 2.05
  });
  interaction.position.x = 0.825;
  interaction.position.y = 1.025;
  interaction.position.z = 0.64;
  this.add(interaction);
  this.interactions.push(interaction);
};
INTERACTIVEWORLD.Bed.prototype.__proto__ = THREE.Object3D.prototype;
