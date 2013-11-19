INTERACTIVEWORLD.DiningRoom = function(options) {
  var that = this;
  options = options || [];
  THREE.Object3D.call(this);
  
  this.name = 'Dining Room';
  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  var controls = options.controls;

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
      rotation : {
        x : that.rotation.x,
        y : that.rotation.y,
        z : that.rotation.z,
      },
      furniture : furn
    });
  });
  var cabinet = new INTERACTIVEWORLD.Cabinet();

  var rug = new INTERACTIVEWORLD.TexturePlane({
    width : 3.2,
    height : 2,
    texture : INTERACTIVEWORLD.RUG_TEXTURE,
    repeat : 1
  });

  // set the positions
  diningTable.position.x = -1.2;
  diningTable.position.y = -0.3;

  cabinet.position.x = -0.55;
  cabinet.position.y = -1.4;
  cabinet.rotation.z = Math.PI;

  rug.position.x = 0.3;
  rug.position.y = 0.6;
  rug.position.z = INTERACTIVEWORLD.Z_INDEX * 3;

  // add the models
  this.add(diningTable);
  this.add(cabinet);
  this.add(rug);

  // add the interactions
  controls.addInteractionSurfaces(diningTable.interactions);
};
INTERACTIVEWORLD.DiningRoom.prototype.__proto__ = THREE.Object3D.prototype;
