INTERACTIVEWORLD.Kitchen = function(options) {
  var that = this;
  options = options || [];
  THREE.Object3D.call(this);

  this.name = 'Kitchen';
  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  var controls = options.controls;
  var setup = options.setup || Math.floor((Math.random() * 3));

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
      rotation : that.rotation.z,
      furniture : furn
    });
  });
  var oven = new INTERACTIVEWORLD.Oven();
  oven.eventHandler.on('addition', function(furn) {
    that.eventHandler.emit('addition', {
      name : that.name,
      position : {
        x : that.position.x,
        y : that.position.y,
        z : that.position.z,
      },
      rotation : that.rotation.z,
      furniture : furn
    });
  });
  var counterOne = new INTERACTIVEWORLD.Counter();
  counterOne.eventHandler.on('addition', function(furn) {
    that.eventHandler.emit('addition', {
      name : that.name,
      position : {
        x : that.position.x,
        y : that.position.y,
        z : that.position.z,
      },
      rotation : that.rotation.z,
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
      rotation : that.rotation.z,
      furniture : furn
    });
  });

  // set the positions
  var buffer = INTERACTIVEWORLD.WALL_WIDTH;
  if (setup === 0) {
    refrigerator.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - refrigerator.width)
        / 2.0 - buffer;
    refrigerator.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - refrigerator.depth)
        / 2.0 - buffer;

    sink.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - sink.width) / 2.0
        + buffer;
    sink.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - sink.depth) / 2.0
        - buffer;

    counterOne.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - counterOne.width)
        / 2.0 - buffer;
    counterOne.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - counterOne.depth)
        / 2.0 + buffer;
    counterOne.rotation.z = Math.PI;

    oven.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - oven.width) / 2.0 - 2
        * buffer - counterOne.width;
    oven.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - oven.depth) / 2.0
        + buffer;
    oven.rotation.z = Math.PI;

    counterTwo.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - counterTwo.width)
        / 2.0 - 3 * buffer - counterOne.width - oven.width;
    counterTwo.position.y = counterOne.position.y;
    counterTwo.rotation.z = counterOne.rotation.z;
  } else if (setup === 1) {
    refrigerator.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - refrigerator.width)
        / 2.0 - buffer;
    refrigerator.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - refrigerator.depth)
        / 2.0 + buffer;
    refrigerator.rotation.z = Math.PI;

    oven.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - oven.depth) / 2.0
        + buffer;
    oven.rotation.z = Math.PI;

    sink.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - sink.depth) / 2.0
        + buffer;
    sink.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - sink.width) / 2.0
        - buffer;
    sink.rotation.z = Math.PI / 2.0;

    counterOne.position.x = 1.3;
    counterOne.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - counterOne.depth)
        / 2.0 - buffer;

    counterTwo.position.x = counterOne.position.x - counterOne.width;
    counterTwo.position.y = counterOne.position.y;
  } else {
    sink.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - sink.depth) / 2.0 - buffer;
    sink.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - sink.width) / 2.0
        + buffer;
    sink.rotation.z = -Math.PI / 2.0;

    refrigerator.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - refrigerator.depth)
        / 2.0 - buffer;
    refrigerator.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - refrigerator.width)
        / 2.0 - buffer;
    refrigerator.rotation.z = -Math.PI / 2.0;

    counterOne.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - counterOne.depth)
        / 2.0 + buffer;
    counterOne.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - counterOne.width)
        / 2.0 - buffer;
    counterOne.rotation.z = Math.PI / 2.0;

    counterTwo.position.x = counterOne.position.x;
    counterTwo.position.y = counterOne.position.y - counterOne.width;
    counterTwo.rotation.z = counterOne.rotation.z;

    oven.position.x = -0.5;
    oven.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - oven.depth) / 2.0
        + buffer;
    oven.rotation.z = Math.PI;
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
  controls.addInteractionSurfaces(oven.interactions);
};
INTERACTIVEWORLD.Kitchen.prototype.__proto__ = THREE.Object3D.prototype;
