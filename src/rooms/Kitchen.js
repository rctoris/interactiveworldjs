INTERACTIVEWORLD.Kitchen = function(options) {
  var that = this;
  options = options || [];
  THREE.Object3D.call(this);

  this.name = 'Kitchen';
  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  var controls = options.controls;
  var setup = options.setup || Math.floor((Math.random()*2));

  // add the room structure
  this.add(new INTERACTIVEWORLD.Room({
    width : INTERACTIVEWORLD.ROOM_WIDTH,
    height : INTERACTIVEWORLD.ROOM_HEIGHT,
    floor : INTERACTIVEWORLD.KITCHEN_FLOOR_TEXTURE,
    wall : INTERACTIVEWORLD.KITCHEN_WALL_TEXTURE,
    withDoor : true,
    doorWall : INTERACTIVEWORLD.SOUTH_WALL,
    doorSide : INTERACTIVEWORLD.NEGATIVE_DOOR_SIDE
  }));

  // load the models we need
  var refrigerator = new INTERACTIVEWORLD.Refrigerator();
  var sink = new INTERACTIVEWORLD.Sink();
  sink.eventHandler.on('addition', function(furn) {
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
      furniture : furn
    });
  });
  var oven = new INTERACTIVEWORLD.Oven();
  var counterOne = new INTERACTIVEWORLD.Counter();
  counterOne.eventHandler.on('addition', function(furn) {
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
      furniture : furn
    });
  });
  var counterTwo = new INTERACTIVEWORLD.Counter();
  counterTwo.eventHandler.on('addition', function(furn) {
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
      furniture : furn
    });
  });

  // set the positions
  if (setup === 0) {
    refrigerator.position.x = 1.2;
    refrigerator.position.y = 1.1;

    sink.position.x = -2.2;
    sink.position.y = 1.1;

    oven.position.x = 1;
    oven.position.y = -1.35;
    oven.rotation.z = Math.PI;

    counterOne.position.x = 2.1;
    counterOne.position.y = -1.1;
    counterOne.rotation.z = Math.PI;

    counterTwo.position.x = -0.3;
    counterTwo.position.y = -1.1;
    counterTwo.rotation.z = Math.PI;
  } else if (setup === 1) {
    refrigerator.position.x = 2.3;
    refrigerator.position.y = -1.2;
    refrigerator.rotation.z = Math.PI;

    sink.position.x = -1.6;
    sink.position.y = -0.95;
    sink.rotation.z = Math.PI/2.0;

    oven.position.x = 1;
    oven.position.y = -1.35;
    oven.rotation.z = Math.PI;

    counterOne.position.x = 1.3;
    counterOne.position.y = 1.1;

    counterTwo.position.x = 0.25;
    counterTwo.position.y = 1.1;
  }

  // add the models
  this.add(refrigerator);
  this.add(sink);
  this.add(oven);
  this.add(counterOne);
  this.add(counterTwo);

  // add the interactions
  controls.addInteractionSurfaces(sink.interactions);
  controls.addInteractionSurfaces(counterOne.interactions);
  controls.addInteractionSurfaces(counterTwo.interactions);
};
INTERACTIVEWORLD.Kitchen.prototype.__proto__ = THREE.Object3D.prototype;
