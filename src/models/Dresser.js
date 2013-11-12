INTERACTIVEWORLD.Dresser = function() {
  var that = this;
  THREE.Object3D.call(this);

  this.name = 'Dresser';
  this.interactions = [];

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.DRESSER_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = -17.32;
    result.scene.position.y = -11.55;
    that.add(result.scene);
  });

  // create the interaction surface
  var interaction = new INTERACTIVEWORLD.InteractionSurface({
    width : 1.36,
    height : 0.48
  });
  interaction.position.x = 0.66;
  interaction.position.y = 0.23;
  interaction.position.z = 0.8;
  this.add(interaction);
  this.interactions.push(interaction);
};
INTERACTIVEWORLD.Dresser.prototype.__proto__ = THREE.Object3D.prototype;
