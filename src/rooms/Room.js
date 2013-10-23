INTERACTIVEWORLD.Room = function(options) {
  THREE.Object3D.call(this);

  options = options || {};
  var width = options.width;
  var height = options.height;
  var withDoor = options.withDoor;
  var doorWall = options.doorWall;
  var doorSide = options.doorSide;
  var floor = options.floor;
  var wall = options.wall;

  // add the floor
  this.add(new INTERACTIVEWORLD.TexturePlane({
    width : width,
    height : height,
    texture : floor,
    repeat : 4
  }));

  // setup the walls
  var northWall = new INTERACTIVEWORLD.Wall({
    length : width,
    texture : wall
  });
  northWall.position.y = height / 2.0;
  var eastWall = new INTERACTIVEWORLD.Wall({
    length : height,
    texture : wall
  });
  eastWall.position.x = width / 2.0;
  eastWall.rotation.z = Math.PI / 2.0;
  var southWall = new INTERACTIVEWORLD.Wall({
    length : width,
    texture : wall
  });
  southWall.position.y = -height / 2.0;
  var westWall = new INTERACTIVEWORLD.Wall({
    length : height,
    texture : wall
  });
  westWall.position.x = -width / 2.0;
  westWall.rotation.z = Math.PI / 2.0;

  // now check for a door
  if (withDoor) {
    if (doorWall === INTERACTIVEWORLD.NORTH_WALL) {
      northWall = new INTERACTIVEWORLD.Wall({
        length : width - INTERACTIVEWORLD.DOOR_WIDTH,
        texture : wall
      });
      northWall.position.y = height / 2.0;
      if (doorSide === INTERACTIVEWORLD.NEGATIVE_DOOR_SIDE) {
        northWall.position.x = INTERACTIVEWORLD.DOOR_WIDTH / 2.0;
      } else {
        northWall.position.x = -INTERACTIVEWORLD.DOOR_WIDTH / 2.0;
      }
    } else if (doorWall === INTERACTIVEWORLD.EAST_WALL) {
      eastWall = new INTERACTIVEWORLD.Wall({
        length : height - INTERACTIVEWORLD.DOOR_WIDTH,
        texture : wall
      });
      eastWall.position.x = width / 2.0;
      eastWall.rotation.z = Math.PI / 2.0;
      if (doorSide === INTERACTIVEWORLD.NEGATIVE_DOOR_SIDE) {
        eastWall.position.y = INTERACTIVEWORLD.DOOR_WIDTH / 2.0;
      } else {
        eastWall.position.y = -INTERACTIVEWORLD.DOOR_WIDTH / 2.0;
      }
    } else if (doorWall === INTERACTIVEWORLD.SOUTH_WALL) {
      southWall = new INTERACTIVEWORLD.Wall({
        length : width - INTERACTIVEWORLD.DOOR_WIDTH,
        texture : wall
      });
      southWall.position.y = -height / 2.0;
      if (doorSide === INTERACTIVEWORLD.NEGATIVE_DOOR_SIDE) {
        southWall.position.x = INTERACTIVEWORLD.DOOR_WIDTH / 2.0;
      } else {
        southWall.position.x = -INTERACTIVEWORLD.DOOR_WIDTH / 2.0;
      }
    } else {
      westWall = new INTERACTIVEWORLD.Wall({
        length : height - INTERACTIVEWORLD.DOOR_WIDTH,
        texture : wall
      });
      westWall.position.x = -width / 2.0;
      westWall.rotation.z = Math.PI / 2.0;
      if (doorSide === INTERACTIVEWORLD.NEGATIVE_DOOR_SIDE) {
        westWall.position.y = INTERACTIVEWORLD.DOOR_WIDTH / 2.0;
      } else {
        westWall.position.y = -INTERACTIVEWORLD.DOOR_WIDTH / 2.0;
      }
    }
  }

  // add each wall
  this.add(northWall);
  this.add(eastWall);
  this.add(southWall);
  this.add(westWall);
};
INTERACTIVEWORLD.Room.prototype.__proto__ = THREE.Object3D.prototype;
