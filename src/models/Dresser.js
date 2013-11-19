INTERACTIVEWORLD.Dresser = function() {
  var that = this;
  THREE.Object3D.call(this);
  
  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
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
INTERACTIVEWORLD.Dresser.prototype.__proto__ = THREE.Object3D.prototype;
