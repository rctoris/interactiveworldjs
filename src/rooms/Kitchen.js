INTERACTIVEWORLD.Kitchen = function() {
  THREE.Object3D.call(this);

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
  var oven = new INTERACTIVEWORLD.Oven();
  var counterOne = new INTERACTIVEWORLD.Counter();
  var counterTwo = new INTERACTIVEWORLD.Counter();

  // set the positions
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

  // add the models
  this.add(refrigerator);
  this.add(sink);
  this.add(oven);
  this.add(counterOne);
  this.add(counterTwo);
};
INTERACTIVEWORLD.Kitchen.prototype.__proto__ = THREE.Object3D.prototype;
