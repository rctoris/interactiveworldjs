INTERACTIVEWORLD.House = function(options) {
  var that = this;
  options = options || [];
  THREE.Object3D.call(this);

  var controls = options.controls;
  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();

  // add the room structure
  var outside = new INTERACTIVEWORLD.Room({
    width : INTERACTIVEWORLD.HOUSE_WIDTH,
    height : INTERACTIVEWORLD.HOUSE_HEIGHT,
    floor : INTERACTIVEWORLD.HOUSE_FLOOR_TEXTURE,
    wall : INTERACTIVEWORLD.HOUSE_WALL_TEXTURE,
  });
  outside.position.z = -INTERACTIVEWORLD.Z_INDEX;
  this.add(outside);

  var wallBuffer = (INTERACTIVEWORLD.WALL_WIDTH / 2.0);

  // add the rooms
  var bedroom = new INTERACTIVEWORLD.Bedroom({
    controls : controls
  });
  bedroom.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH / 2.0)
      - ((INTERACTIVEWORLD.HOUSE_WIDTH / 2.0) - INTERACTIVEWORLD.ROOM_WIDTH)
      + wallBuffer;
  bedroom.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT / 2.0)
      + ((INTERACTIVEWORLD.HOUSE_HEIGHT / 2.0) - INTERACTIVEWORLD.ROOM_HEIGHT)
      - wallBuffer;
  bedroom.eventHandler.on('addition', function(event) {
    that.eventHandler.emit('addition', event);
  });
  this.add(bedroom);
  this.bedroom = bedroom;

  var kitchen = new INTERACTIVEWORLD.Kitchen({
    controls : controls
  });
  kitchen.eventHandler.on('addition', function(event) {
    that.eventHandler.emit('addition', event);
  });
  kitchen.position.x = (INTERACTIVEWORLD.ROOM_WIDTH / 2.0)
      + ((INTERACTIVEWORLD.HOUSE_WIDTH / 2.0) - INTERACTIVEWORLD.ROOM_WIDTH)
      - wallBuffer;
  kitchen.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT / 2.0)
      + ((INTERACTIVEWORLD.HOUSE_HEIGHT / 2.0) - INTERACTIVEWORLD.ROOM_HEIGHT)
      - wallBuffer;
  this.add(kitchen);
  this.kitchen = kitchen;

  var livingRoom = new INTERACTIVEWORLD.LivingRoom({
    controls : controls
  });
  livingRoom.eventHandler.on('addition', function(event) {
    that.eventHandler.emit('addition', event);
  });
  livingRoom.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH / 2.0)
      - ((INTERACTIVEWORLD.HOUSE_WIDTH / 2.0) - INTERACTIVEWORLD.ROOM_WIDTH)
      + wallBuffer;
  livingRoom.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT / 2.0)
      - ((INTERACTIVEWORLD.HOUSE_HEIGHT / 2.0) - INTERACTIVEWORLD.ROOM_HEIGHT)
      + wallBuffer;
  this.add(livingRoom);
  this.livingRoom = livingRoom;

  var diningRoom = new INTERACTIVEWORLD.DiningRoom({
    controls : controls
  });
  diningRoom.eventHandler.on('addition', function(event) {
    that.eventHandler.emit('addition', event);
  });
  diningRoom.position.x = (INTERACTIVEWORLD.ROOM_WIDTH / 2.0)
      + ((INTERACTIVEWORLD.HOUSE_WIDTH / 2.0) - INTERACTIVEWORLD.ROOM_WIDTH)
      - wallBuffer;
  diningRoom.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT / 2.0)
      - ((INTERACTIVEWORLD.HOUSE_HEIGHT / 2.0) - INTERACTIVEWORLD.ROOM_HEIGHT)
      + wallBuffer;
  this.add(diningRoom);
  this.diningRoom = diningRoom;

  // create a config JSON object for logging
  this.config = {
    rooms : [ bedroom.getConfig(), kitchen.getConfig(), livingRoom.getConfig(),
        diningRoom.getConfig() ]
  };
};
INTERACTIVEWORLD.House.prototype.__proto__ = THREE.Object3D.prototype;
