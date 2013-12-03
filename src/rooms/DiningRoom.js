INTERACTIVEWORLD.DiningRoom = function(options) {
  var that = this;
  options = options || [];
  THREE.Object3D.call(this);

  this.furniture = [];
  this.name = 'Dining Room';
  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  var controls = options.controls;
  var setup = options.setup || Math.floor((Math.random() * 3));

  // add the room structure
  this.add(new INTERACTIVEWORLD.Room({
    width : INTERACTIVEWORLD.ROOM_WIDTH,
    height : INTERACTIVEWORLD.ROOM_HEIGHT,
    floor : INTERACTIVEWORLD.DINING_ROOM_FLOOR_TEXTURE,
    wall : INTERACTIVEWORLD.DINING_ROOM_WALL_TEXTURE,
    withDoor : true,
    doorWall : INTERACTIVEWORLD.NORTH_WALL,
    doorSide : INTERACTIVEWORLD.NEGATIVE_DOOR_SIDE
  }));

  // load the models we need
  var diningTable = new INTERACTIVEWORLD.DiningTable();
  diningTable.eventHandler.on('addition', function(furn) {
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
  var cabinet = new INTERACTIVEWORLD.Cabinet();

  var rug = new INTERACTIVEWORLD.TexturePlane({
    width : diningTable.width + 1,
    height : diningTable.depth + 1,
    texture : INTERACTIVEWORLD.RUG_TEXTURE,
    repeat : 1
  });

  // set the positions
  var buffer = INTERACTIVEWORLD.WALL_WIDTH;
  if (setup === 0) {
    cabinet.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - cabinet.width) / 2.0
        + buffer;
    cabinet.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - cabinet.depth) / 2.0
        + buffer;
    cabinet.rotation.z = Math.PI;
  } else if (setup === 1) {
    diningTable.position.x = -0.75;
    diningTable.rotation.z = Math.PI / 2.0;

    cabinet.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - cabinet.width) / 2.0
        - buffer;
    cabinet.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - cabinet.depth) / 2.0
        - buffer;
  } else {
    diningTable.position.x = 0.75;
    diningTable.rotation.z = -Math.PI / 2.0;

    cabinet.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - cabinet.depth) / 2.0
        + buffer;
    cabinet.rotation.z = Math.PI / 2.0;
  }

  rug.position.x = diningTable.position.x;
  rug.position.y = diningTable.position.y;
  rug.position.z = INTERACTIVEWORLD.Z_INDEX * 3;
  rug.rotation.z = diningTable.rotation.z;

  // add the models
  this.add(diningTable);
  this.furniture.push(diningTable);
  this.add(cabinet);
  this.furniture.push(cabinet);
  this.add(rug);

  // add the interactions
  controls.addInteractionSurfaces(diningTable.interactions);
};
INTERACTIVEWORLD.DiningRoom.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.DiningRoom.prototype.getConfig = function() {
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
