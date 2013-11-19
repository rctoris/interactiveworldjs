INTERACTIVEWORLD.Couch = function() {
  var that = this;
  THREE.Object3D.call(this);

  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  this.name = 'Couch';
  this.interactions = [];

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.COUCH_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = -0.7;
    result.scene.position.y = 0.55;
    that.add(result.scene);
  });

  // create the interaction surface
  var interaction1 = new INTERACTIVEWORLD.InteractionSurface({
    width : 1,
    height : 1.5
  });
  interaction1.position.x = 0.5;
  interaction1.position.y = 0.8;
  interaction1.position.z = 0.35;
  interaction1.eventHandler.on('addition', function(surf) {
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
      surface : surf
    });
  });
  this.add(interaction1);
  this.interactions.push(interaction1);
  var interaction2 = new INTERACTIVEWORLD.InteractionSurface({
    width : 1.85,
    height : 0.9
  });
  interaction2.position.x = 1.85;
  interaction2.position.y = 1.2;
  interaction2.position.z = 0.35;
  interaction2.eventHandler.on('addition', function(surf) {
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
      surface : surf
    });
  });
  this.add(interaction2);
  this.interactions.push(interaction2);
};
INTERACTIVEWORLD.Couch.prototype.__proto__ = THREE.Object3D.prototype;
