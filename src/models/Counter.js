INTERACTIVEWORLD.Counter = function() {
  var that = this;
  THREE.Object3D.call(this);

  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  this.name = 'Counter';
  this.interactions = [];

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.COUNTER_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = 1.65;
    result.scene.position.y = 1.95;
    result.scene.scale.x *= 0.85;
    result.scene.scale.y *= 0.85;
    result.scene.scale.z *= 0.85;
    that.add(result.scene);
  });

  //create the interaction surface
  var interaction = new INTERACTIVEWORLD.InteractionSurface({
    width : 1.1,
    height : 0.8
  });
  interaction.position.x = 0.53;
  interaction.position.y = 0.43;
  interaction.position.z = 0.78;
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
INTERACTIVEWORLD.Counter.prototype.__proto__ = THREE.Object3D.prototype;
