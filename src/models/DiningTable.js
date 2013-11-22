INTERACTIVEWORLD.DiningTable = function() {
  var that = this;
  THREE.Object3D.call(this);
  
  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
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
  interaction.eventHandler.on('addition', function(obj) {
    that.eventHandler.emit('addition', {
      name : that.name,
      position : {
        x : that.position.x,
        y : that.position.y,
        z : that.position.z,
      },
      rotation : {
        x : that.rotation.x,
        y : that.rotation.y,
        z : that.rotation.z,
      },
      surface : obj
    });
  });
  this.add(interaction);
  this.interactions.push(interaction);
};
INTERACTIVEWORLD.DiningTable.prototype.__proto__ = THREE.Object3D.prototype;
