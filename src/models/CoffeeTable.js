INTERACTIVEWORLD.CoffeeTable = function() {
  var that = this;
  THREE.Object3D.call(this);

  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  this.name = 'Coffee Table';
  this.interactions = [];

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

  // create the interaction surface
  var interaction = new INTERACTIVEWORLD.InteractionSurface({
    width : 1.5,
    height : 0.81
  });
  interaction.position.x = 0.78;
  interaction.position.y = 0.4;
  interaction.position.z = 0.4;
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
      object : obj
    });
  });
  this.add(interaction);
  this.interactions.push(interaction);
};
INTERACTIVEWORLD.CoffeeTable.prototype.__proto__ = THREE.Object3D.prototype;
