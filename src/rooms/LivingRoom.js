INTERACTIVEWORLD.LivingRoom = function(options) {
  var that = this;
  options = options || [];
  THREE.Object3D.call(this);

  this.name = 'Living Room';
  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  var controls = options.controls;
  var setup = options.setup || Math.floor((Math.random() * 2));

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
      rotation : {
        x : that.rotation.x,
        y : that.rotation.y,
        z : that.rotation.z,
      },
      furniture : furn
    });
  });
  var tv = new INTERACTIVEWORLD.TV();
  var coffeeTable = new INTERACTIVEWORLD.CoffeeTable();
  coffeeTable.eventHandler.on('addition', function(furn) {
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

  //set the positions
  if (setup === 0) {
    couch.position.x = -0.65;
    couch.position.y = -1.95;
    couch.rotation.z = Math.PI / 2.0;

    tv.position.x = 1.7;
    tv.position.y = 0.5;
    tv.rotation.z = -Math.PI / 2.0;

    coffeeTable.position.x = -0.15;
    coffeeTable.position.y = 0.7;
    coffeeTable.rotation.z = -Math.PI / 2.0;
  } else if (setup === 1) {
    couch.position.x = 2.35;
    couch.position.y = -0.2;
    couch.rotation.z = Math.PI;

    tv.position.x = -0.5;
    tv.position.y = 1.3;

    coffeeTable.position.x = -0.5;
    coffeeTable.position.y = 0;
  }

  // add the models
  this.add(couch);
  this.add(tv);
  this.add(coffeeTable);

  // add the interactions
  controls.addInteractionSurfaces(coffeeTable.interactions);
  controls.addInteractionSurfaces(couch.interactions);
};
INTERACTIVEWORLD.LivingRoom.prototype.__proto__ = THREE.Object3D.prototype;
