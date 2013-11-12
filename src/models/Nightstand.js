INTERACTIVEWORLD.Nightstand = function() {
  var that = this;
  THREE.Object3D.call(this);

  this.name = 'Nightstand';
  this.interactions = [];

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.NIGHTSTAND_MODEL, function(result) {
    // fix offset
    result.scene.position.x = -0.95;
    result.scene.position.y = -0.69;
    result.scene.position.z = -0.1;
    that.add(result.scene);
  });

  // create the interaction surface
  var interaction = new INTERACTIVEWORLD.InteractionSurface({
    width : 0.88,
    height : 0.6
  });
  interaction.position.x = 0.42;
  interaction.position.y = 0.3;
  interaction.position.z = 0.75;
  this.add(interaction);
  this.interactions.push(interaction);
};
INTERACTIVEWORLD.Nightstand.prototype.__proto__ = THREE.Object3D.prototype;
