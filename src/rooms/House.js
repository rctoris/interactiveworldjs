INTERACTIVEWORLD.House = function() {
  THREE.Object3D.call(this);

  // add the room structure
  var outside = new INTERACTIVEWORLD.Room({
    width : INTERACTIVEWORLD.HOUSE_WIDTH,
    height : INTERACTIVEWORLD.HOUSE_WIDTH,
    floor : INTERACTIVEWORLD.HOUSE_FLOOR_TEXTURE,
    wall : INTERACTIVEWORLD.HOUSE_WALL_TEXTURE,
  });
  outside.position.z = -INTERACTIVEWORLD.Z_INDEX;
  this.add(outside);

  // add the rooms
  var bedroom = new INTERACTIVEWORLD.Bedroom();
  this.add(bedroom);
};
INTERACTIVEWORLD.House.prototype.__proto__ = THREE.Object3D.prototype;
