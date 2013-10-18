INTERACTIVEWORLD.Bedroom = function() {
  THREE.Object3D.call(this);

  // add the room structure
  this.add(new INTERACTIVEWORLD.Room({
    width : INTERACTIVEWORLD.BEDROOM_WIDTH,
    height : INTERACTIVEWORLD.BEDROOM_HEIGHT,
    floor : INTERACTIVEWORLD.BEDROOM_FLOOR_TEXTURE,
    wall : INTERACTIVEWORLD.BEDROOM_WALL_TEXTURE,
    withDoor : true,
    doorWall : INTERACTIVEWORLD.WEST_WALL,
    doorSide : INTERACTIVEWORLD.NEGATIVE_DOOR_SIDE
  }));

  var bed = new INTERACTIVEWORLD.Bed();
  this.add(bed);

  var dresser = new INTERACTIVEWORLD.Dresser();
  dresser.position.x = INTERACTIVEWORLD.BEDROOM_WIDTH / 2.0 - 0.8;
  dresser.position.y = INTERACTIVEWORLD.BEDROOM_HEIGHT / 2.0
      - INTERACTIVEWORLD.WALL_WIDTH;
  this.add(dresser);

  this.add(new THREE.DirectionalLight(0xffffff, 0.9));
};
INTERACTIVEWORLD.Bedroom.prototype.__proto__ = THREE.Object3D.prototype;
