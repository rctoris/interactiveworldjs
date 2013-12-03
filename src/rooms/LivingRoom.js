INTERACTIVEWORLD.LivingRoom = function(options) {
  var that = this;
  options = options || [];
  THREE.Object3D.call(this);

  this.furniture = [];
  this.name = 'Living Room';
  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  var controls = options.controls;
  var setup = options.setup || Math.floor((Math.random() * 3));

  // add the room structure
  this.add(new INTERACTIVEWORLD.Room({
    width : INTERACTIVEWORLD.ROOM_WIDTH,
    height : INTERACTIVEWORLD.ROOM_HEIGHT,
    floor : INTERACTIVEWORLD.LIVING_ROOM_FLOOR_TEXTURE,
    wall : INTERACTIVEWORLD.LIVING_ROOM_WALL_TEXTURE,
    withDoor : true,
    doorWall : INTERACTIVEWORLD.EAST_WALL,
    doorSide : INTERACTIVEWORLD.POSITIVE_DOOR_SIDE
  }));

  // load the models we need
  var couch = new INTERACTIVEWORLD.Couch();
  couch.eventHandler.on('addition', function(furn) {
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
  var tv = new INTERACTIVEWORLD.TV();
  tv.eventHandler.on('addition', function(furn) {
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
  var coffeeTable = new INTERACTIVEWORLD.CoffeeTable();
  coffeeTable.eventHandler.on('addition', function(furn) {
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
  if (setup === 0 && false) {
    couch.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - couch.depth) / 2.0
        + buffer;
    couch.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - couch.width) / 2.0
        + buffer;
    couch.rotation.z = Math.PI / 2.0;

    tv.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - tv.depth) / 2.0 - buffer;
    tv.rotation.z = -Math.PI / 2.0;

    coffeeTable.position.x = 0.25;
    coffeeTable.position.y = tv.position.y;
    coffeeTable.rotation.z = -Math.PI / 2.0;
  } else if (setup === 1 && false) {
    couch.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - couch.width) / 2.0
        - buffer;
    couch.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - couch.depth) / 2.0
        + buffer;
    couch.rotation.z = Math.PI;

    tv.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - tv.depth) / 2.0 - buffer;

    coffeeTable.position.x = tv.position.x;
    coffeeTable.position.y = 0.25;
  } else {
    couch.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - couch.width) / 2.0
        + buffer;
    couch.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - couch.depth) / 2.0
        - buffer;

    tv.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - tv.depth) / 2.0 - buffer;
    tv.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - tv.width) / 2.0 + buffer;
    tv.rotation.z = -Math.PI / 2.0;
  }

  // add the models
  this.add(couch);
  this.furniture.push(couch);
  this.add(tv);
  this.furniture.push(tv);
  this.add(coffeeTable);
  this.furniture.push(coffeeTable);

  // add the interactions
  controls.addInteractionSurfaces(coffeeTable.interactions);
  controls.addInteractionSurfaces(couch.interactions);
  controls.addInteractionSurfaces(tv.interactions);
};
INTERACTIVEWORLD.LivingRoom.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.LivingRoom.prototype.getConfig = function() {
  var furnConfig = [];
  for ( var i = 0; i < this.furniture.length; i++) {
    furnConfig.push(this.furniture[i].getConfig());
  }

  return {
    name : this.name,
    width : INTERACTIVEWORLD.ROOM_WIDTH,
    height : INTERACTIVEWORLD.ROOM_HEIGHT,
    position : {
      x : this.position.x,
      y : this.position.y,
      z : this.position.z
    },
    rotation : this.rotation.z,
    furniture : furnConfig
  };
};
