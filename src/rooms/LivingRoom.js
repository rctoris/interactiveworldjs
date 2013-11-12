INTERACTIVEWORLD.LivingRoom = function(options) {
  options = options || [];
  THREE.Object3D.call(this);

  var controls = options.controls;

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
  var tv = new INTERACTIVEWORLD.TV();
  var coffeeTable = new INTERACTIVEWORLD.CoffeeTable();

  // set the positions
  couch.position.x = -0.65;
  couch.position.y = -1.95;
  couch.rotation.z = Math.PI / 2.0;

  tv.position.x = 1.7;
  tv.position.y = 0.5;
  tv.rotation.z = -Math.PI / 2.0;

  coffeeTable.position.x = -0.15;
  coffeeTable.position.y = 0.7;
  coffeeTable.rotation.z = -Math.PI / 2.0;

  // add the models
  this.add(couch);
  this.add(tv);
  this.add(coffeeTable);

  // add the interactions
  //controls.addInteractionSurfaces(bed.interactions);
};
INTERACTIVEWORLD.LivingRoom.prototype.__proto__ = THREE.Object3D.prototype;
