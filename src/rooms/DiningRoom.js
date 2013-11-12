INTERACTIVEWORLD.DiningRoom = function(options) {
  options = options || [];
  THREE.Object3D.call(this);

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
