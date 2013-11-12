INTERACTIVEWORLD.Bedroom = function(options) {
  options = options || [];
  THREE.Object3D.call(this);

  var controls = options.controls;

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
  var nightstandOne = new INTERACTIVEWORLD.Nightstand();
  var nightstandTwo = new INTERACTIVEWORLD.Nightstand();
  var dresser = new INTERACTIVEWORLD.Dresser();

  // set the positions
  bed.position.x = -0.8;
  bed.position.y = -0.2;

  nightstandOne.position.x = 1.25;
  nightstandOne.position.y = 1.3;

  nightstandTwo.position.x = -2;
  nightstandTwo.position.y = 1.3;

  dresser.position.x = 0.645;
  dresser.position.y = -1.45;
  dresser.rotation.z = Math.PI;

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
