INTERACTIVEWORLD.Sink = function() {
  var that = this;
  THREE.Object3D.call(this);

  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  this.name = 'Sink';
  this.interactions = [];

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.SINK_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = -0.3;
    result.scene.position.y = -0.2;
    that.add(result.scene);
  });

  // create the interaction surface
  var interaction1 = new INTERACTIVEWORLD.InteractionSurface({
    width : 0.8,
    height : 0.46
  });
  interaction1.position.x = 1.95;
  interaction1.position.y = 0.33;
  interaction1.position.z = 0.6;
  interaction1.eventHandler.on('addition', function(obj) {
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
  this.add(interaction1);
  this.interactions.push(interaction1);
  var interaction2 = new INTERACTIVEWORLD.InteractionSurface({
    width : 1.5,
    height : 0.8
  });
  interaction2.position.x = 0.75;
  interaction2.position.y = 0.45;
  interaction2.position.z = 0.9;
  interaction2.eventHandler.on('addition', function(obj) {
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
  this.add(interaction2);
  this.interactions.push(interaction2);
  var interaction3 = new INTERACTIVEWORLD.InteractionSurface({
    width : 0.5,
    height : 0.8
  });
  interaction3.position.x = 2.65;
  interaction3.position.y = 0.45;
  interaction3.position.z = 0.9;
  interaction3.eventHandler.on('addition', function(obj) {
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
  this.add(interaction3);
  this.interactions.push(interaction3);
};
INTERACTIVEWORLD.Sink.prototype.__proto__ = THREE.Object3D.prototype;
