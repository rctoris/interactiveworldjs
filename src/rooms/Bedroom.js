INTERACTIVEWORLD.Bedroom = function(options) {
  var that = this;
  options = options || [];
  THREE.Object3D.call(this);

  this.name = 'Bedroom';
  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  var controls = options.controls;
  var setup = options.setup || Math.floor((Math.random() * 2));

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
      rotation : {
        x : that.rotation.x,
        y : that.rotation.y,
        z : that.rotation.z,
      },
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
      rotation : {
        x : that.rotation.x,
        y : that.rotation.y,
        z : that.rotation.z,
      },
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
      rotation : {
        x : that.rotation.x,
        y : that.rotation.y,
        z : that.rotation.z,
      },
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
    bed.position.x = -0.8;
    bed.position.y = -0.2;

    nightstandOne.position.x = 1.25;
    nightstandOne.position.y = 1.3;

    nightstandTwo.position.x = -2;
    nightstandTwo.position.y = 1.3;

    dresser.position.x = 0.645;
    dresser.position.y = -1.45;
    dresser.rotation.z = Math.PI;
  } else if (setup === 1) {
    bed.position.x = -0.2;
    bed.position.y = 0;
    bed.rotation.z = Math.PI / 2.0;

    nightstandOne.position.x = 1;
    nightstandOne.position.y = -1.3;
    nightstandOne.rotation.z = Math.PI;

    nightstandTwo.position.x = 1.75;
    nightstandTwo.position.y = 0.9;
    nightstandTwo.rotation.z = -Math.PI/2.0;

    dresser.position.x = -1.95;
    dresser.position.y = -1.55;
    dresser.rotation.z = Math.PI / 2.0;
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
