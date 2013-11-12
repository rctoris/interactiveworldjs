INTERACTIVEWORLD.DiningTable = function() {
  var that = this;
  THREE.Object3D.call(this);

  this.name = 'Dining Table';
  this.interactions = [];

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.DINING_TABLE_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = 2.4;
    result.scene.position.y = 1.75;
    that.add(result.scene);
  });

  // create the interaction surface
  var interaction = new INTERACTIVEWORLD.InteractionSurface({
    width : 2.4,
    height : 1.2
  });
  interaction.position.x = 1.425;
  interaction.position.y = 0.85;
  interaction.position.z = 0.7;
  this.add(interaction);
  this.interactions.push(interaction);
};
INTERACTIVEWORLD.DiningTable.prototype.__proto__ = THREE.Object3D.prototype;
