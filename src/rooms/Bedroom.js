INTERACTIVEWORLD.Bedroom = function(options) {
  var that = this;
  options = options || [];
  THREE.Object3D.call(this);

  this.name = 'Bedroom';
  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  var controls = options.controls;
  var setup = options.setup || Math.floor((Math.random() * 3));

  // add the room structure
  this.add(new INTERACTIVEWORLD.Room({
    width : INTERACTIVEWORLD.ROOM_WIDTH,
    height : INTERACTIVEWORLD.ROOM_HEIGHT,
    floor : INTERACTIVEWORLD.BEDROOM_FLOOR_TEXTURE,
    wall : INTERACTIVEWORLD.BEDROOM_WALL_TEXTURE,
    withDoor : true,
    doorWall : INTERACTIVEWORLD.EAST_WALL,
    doorSide : INTERACTIVEWORLD.NEGATIVE_DOOR_SIDE
  }));

  // load the models we need
  var bed = new INTERACTIVEWORLD.Bed();
  bed.eventHandler.on('addition', function(furn) {
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
  var nightstandOne = new INTERACTIVEWORLD.Nightstand();
  nightstandOne.eventHandler.on('addition', function(furn) {
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
  var nightstandTwo = new INTERACTIVEWORLD.Nightstand();
  nightstandTwo.eventHandler.on('addition', function(furn) {
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
  var dresser = new INTERACTIVEWORLD.Dresser();
  dresser.eventHandler.on('addition', function(furn) {
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
    bed.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - bed.depth) / 2.0 - buffer;

    nightstandOne.position.x = INTERACTIVEWORLD.ROOM_WIDTH / 4.0
        + (nightstandOne.width / 2.0) - buffer;
    nightstandOne.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - nightstandOne.depth)
        / 2.0 - buffer;

    nightstandTwo.position.x = -nightstandOne.position.x;
    nightstandTwo.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - nightstandTwo.depth)
        / 2.0 - buffer;

    dresser.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - dresser.depth) / 2.0
        + buffer;
    dresser.rotation.z = Math.PI;
  } else if (setup === 1) {
    bed.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - bed.depth) / 2.0 + buffer;
    bed.position.y = 0.5;
    bed.rotation.z = Math.PI / 2.0;

    nightstandOne.position.x = 1;
    nightstandOne.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - nightstandOne.depth)
        / 2.0 + buffer;
    nightstandOne.rotation.z = Math.PI;

    nightstandTwo.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - nightstandTwo.depth)
        / 2.0 - buffer;
    nightstandTwo.position.y = 0.5;
    nightstandTwo.rotation.z = -Math.PI / 2.0;

    dresser.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - dresser.depth) / 2.0
        + buffer;
    dresser.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - dresser.width) / 2.0
        + buffer;
    dresser.rotation.z = Math.PI / 2.0;
  } else {
    bed.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - bed.width) / 2.0 + buffer;
    bed.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - bed.depth) / 2.0 + buffer;
    bed.rotation.z = -Math.PI;

    nightstandOne.position.x = 1;
    nightstandOne.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - nightstandOne.depth)
        / 2.0 + buffer;
    nightstandOne.rotation.z = Math.PI;

    nightstandTwo.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - nightstandTwo.depth)
        / 2.0 - buffer;
    nightstandTwo.position.y = 0.5;
    nightstandTwo.rotation.z = -Math.PI / 2.0;

    dresser.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - dresser.depth) / 2.0
        - buffer;
  }

  // add the models
  this.add(bed);
  this.add(nightstandOne);
  this.add(nightstandTwo);
  this.add(dresser);

  // add the interactions
  controls.addInteractionSurfaces(bed.interactions);
  controls.addInteractionSurfaces(nightstandOne.interactions);
  controls.addInteractionSurfaces(nightstandTwo.interactions);
  controls.addInteractionSurfaces(dresser.interactions);
};
INTERACTIVEWORLD.Bedroom.prototype.__proto__ = THREE.Object3D.prototype;
