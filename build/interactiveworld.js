/**
 * @author Russell Toris - rctoris@wpi.edu
 */

var INTERACTIVEWORLD = INTERACTIVEWORLD || {
  REVISION : '1-devel'
};

INTERACTIVEWORLD.BRICKS_TEXTURE = 'resources/textures/bricks.jpg';
INTERACTIVEWORLD.CARDBOARD_CORRUGATED_TEXTURE = 'resources/textures/cardboard-corrugated.jpg';
INTERACTIVEWORLD.CARDBOARD_TEXTURE = 'resources/textures/cardboard.jpg';
INTERACTIVEWORLD.CARPET_GREY_TEXTURE = 'resources/textures/carpet-grey.jpg';
INTERACTIVEWORLD.CARPET_PATTERN_TEXTURE = 'resources/textures/carpet-pattern.jpg';
INTERACTIVEWORLD.CARPET_TAN_TEXTURE = 'resources/textures/carpet-tan.jpg';
INTERACTIVEWORLD.CHINA_TEXTURE = 'resources/textures/china.jpg';
INTERACTIVEWORLD.COUNTERTOP_BLACK_TEXTURE = 'resources/textures/countertop-black.jpg';
INTERACTIVEWORLD.COUNTERTOP_RED_TEXTURE = 'resources/textures/countertop-red.jpg';
INTERACTIVEWORLD.FABRIC_AQUA_TEXTURE = 'resources/textures/fabric-aqua.jpg';
INTERACTIVEWORLD.FABRIC_RED_TEXTURE = 'resources/textures/fabric-red.jpg';
INTERACTIVEWORLD.GLASS_TEXTURE = 'resources/textures/glass.jpg';
INTERACTIVEWORLD.GRASS_TEXTURE = 'resources/textures/grass.jpg';
INTERACTIVEWORLD.HARDWOOD_DARK_TEXTURE = 'resources/textures/hardwood-dark.jpg';
INTERACTIVEWORLD.HARDWOOD_LIGHT_TEXTURE = 'resources/textures/hardwood-light.jpg';
INTERACTIVEWORLD.METAL_VERTICAL_TEXTURE = 'resources/textures/metal-vertical.jpg';
INTERACTIVEWORLD.NEWSPAPER_TEXTURE = 'resources/textures/newspaper.jpg';
INTERACTIVEWORLD.NIGHTSTAND_TEXTURE = 'resources/textures/nightstand.jpg';
INTERACTIVEWORLD.PAINTED_WALL_BLUE_TEXTURE = 'resources/textures/painted-wall-blue.jpg';
INTERACTIVEWORLD.PAINTED_WALL_RED_TEXTURE = 'resources/textures/painted-wall-red.jpg';
INTERACTIVEWORLD.PARTICLE_BOARD_TEXTURE = 'resources/textures/particle-board.jpg';
INTERACTIVEWORLD.PLASTIC_BLACK_TEXTURE = 'resources/textures/plastic-black.jpg';
INTERACTIVEWORLD.RUG_TEXTURE = 'resources/textures/rug.jpg';
INTERACTIVEWORLD.TILE_FLOOR_TEXTURE = 'resources/textures/tile-floor.jpg';
INTERACTIVEWORLD.TILE_WALL_TEXTURE = 'resources/textures/tile-wall.jpg';
INTERACTIVEWORLD.WALLPAPER_DARK_TEXTURE = 'resources/textures/wallpaper-dark.jpg';
INTERACTIVEWORLD.WALLPAPER_LIGHT_TEXTURE = 'resources/textures/wallpaper-light.jpg';
INTERACTIVEWORLD.WALLPAPER_RED_DOTS_TEXTURE = 'resources/textures/wallpaper-red-dots.jpg';
INTERACTIVEWORLD.WOOD_CHERRY_TEXTURE = 'resources/textures/wood-cherry.jpg';
INTERACTIVEWORLD.WOOD_MAHOGANY_POLISHED_TEXTURE = 'resources/textures/wood-mahogany-polished.jpg';
INTERACTIVEWORLD.WOOD_MAHOGANY_TEXTURE = 'resources/textures/wood-mahogany.jpg';
INTERACTIVEWORLD.WOOD_OAK_HORIZONTAL_TEXTURE = 'resources/textures/wood-oak-horizontal.jpg';
INTERACTIVEWORLD.WOOD_OACK_VERTICAL_TEXTURE = 'resources/textures/wood-oak-vertical.jpg';
INTERACTIVEWORLD.WOOD_PINE_TEXTURE = 'resources/textures/wood-pine.jpg';

INTERACTIVEWORLD.NEXT_ARROW = 'resources/images/next.png';
INTERACTIVEWORLD.PREVIOUS_ARROW = 'resources/images/previous.png';

INTERACTIVEWORLD.Z_INDEX = 0.005;

INTERACTIVEWORLD.NORTH_WALL = 0;
INTERACTIVEWORLD.EAST_WALL = 1;
INTERACTIVEWORLD.SOUTH_WALL = 2;
INTERACTIVEWORLD.WEST_WALL = 3;

INTERACTIVEWORLD.NEGATIVE_DOOR_SIDE = 0;
INTERACTIVEWORLD.POSITIVE_DOOR_SIDE = 1;

INTERACTIVEWORLD.OBJECT_MENU_DISPLAY_WIDTH = 3;
INTERACTIVEWORLD.OBJECT_MENU_DISPLAY_HEIGHT = 3;
INTERACTIVEWORLD.OBJECT_MENU_DISPLAY_FLOOR_TEXTURE = INTERACTIVEWORLD.WOOD_MAHOGANY_POLISHED_TEXTURE;

INTERACTIVEWORLD.WORLD_WIDTH = 20;
INTERACTIVEWORLD.WORLD_HEIGHT = 20;
INTERACTIVEWORLD.WORLD_FLOOR_TEXTURE = INTERACTIVEWORLD.GRASS_TEXTURE;

INTERACTIVEWORLD.WALL_WIDTH = 0.05;
INTERACTIVEWORLD.WALL_HEIGHT = 0.75;
INTERACTIVEWORLD.DOOR_WIDTH = 0.8;

INTERACTIVEWORLD.HALLWAY_WIDTH = 1;

INTERACTIVEWORLD.ROOM_WIDTH = 4.9;
INTERACTIVEWORLD.ROOM_HEIGHT = 4;

INTERACTIVEWORLD.HOUSE_WIDTH = (INTERACTIVEWORLD.ROOM_WIDTH * 2)
    + INTERACTIVEWORLD.HALLWAY_WIDTH;
INTERACTIVEWORLD.HOUSE_HEIGHT = (INTERACTIVEWORLD.ROOM_HEIGHT * 2)
    + INTERACTIVEWORLD.HALLWAY_WIDTH;
INTERACTIVEWORLD.HOUSE_WALL_TEXTURE = INTERACTIVEWORLD.BRICKS_TEXTURE;
INTERACTIVEWORLD.HOUSE_FLOOR_TEXTURE = INTERACTIVEWORLD.HARDWOOD_LIGHT_TEXTURE;

INTERACTIVEWORLD.BEDROOM_WALL_TEXTURE = INTERACTIVEWORLD.PAINTED_WALL_BLUE_TEXTURE;
INTERACTIVEWORLD.BEDROOM_FLOOR_TEXTURE = INTERACTIVEWORLD.CARPET_GREY_TEXTURE;

INTERACTIVEWORLD.KITCHEN_WALL_TEXTURE = INTERACTIVEWORLD.TILE_WALL_TEXTURE;
INTERACTIVEWORLD.KITCHEN_FLOOR_TEXTURE = INTERACTIVEWORLD.TILE_FLOOR_TEXTURE;

INTERACTIVEWORLD.DINING_ROOM_WALL_TEXTURE = INTERACTIVEWORLD.WALLPAPER_LIGHT_TEXTURE;
INTERACTIVEWORLD.DINING_ROOM_FLOOR_TEXTURE = INTERACTIVEWORLD.HARDWOOD_DARK_TEXTURE;

INTERACTIVEWORLD.LIVING_ROOM_WALL_TEXTURE = INTERACTIVEWORLD.PAINTED_WALL_RED_TEXTURE;
INTERACTIVEWORLD.LIVING_ROOM_FLOOR_TEXTURE = INTERACTIVEWORLD.CARPET_TAN_TEXTURE;

INTERACTIVEWORLD.BED_MODEL = 'resources/models/bed.dae';
INTERACTIVEWORLD.DRESSER_MODEL = 'resources/models/dresser.dae';
INTERACTIVEWORLD.NIGHTSTAND_MODEL = 'resources/models/nightstand.dae';
INTERACTIVEWORLD.DINING_TABLE_MODEL = 'resources/models/dining-table.dae';
INTERACTIVEWORLD.SINK_MODEL = 'resources/models/sink.dae';
INTERACTIVEWORLD.CABINET_MODEL = 'resources/models/cabinet.dae';
INTERACTIVEWORLD.REFRIGERATOR_MODEL = 'resources/models/refrigerator.dae';
INTERACTIVEWORLD.OVEN_MODEL = 'resources/models/oven.dae';
INTERACTIVEWORLD.COUNTER_MODEL = 'resources/models/counter.dae';
INTERACTIVEWORLD.COUCH_MODEL = 'resources/models/couch.dae';
INTERACTIVEWORLD.TV_MODEL = 'resources/models/tv.dae';
INTERACTIVEWORLD.COFFEE_TABLE_MODEL = 'resources/models/coffee-table.dae';
INTERACTIVEWORLD.PLATE_MODEL = 'resources/models/plate.dae';
INTERACTIVEWORLD.SPOON_MODEL = 'resources/models/spoon.dae';

INTERACTIVEWORLD.DIV_ID = 'interactive-world';

window.onload = function() {
  // start with a fresh page
  document.body.innerHTML = '';

  // create the main container we need
  var main = document.createElement('div');
  main.id = INTERACTIVEWORLD.DIV_ID;
  document.getElementsByTagName('body')[0].appendChild(main);

  // add the viewer
  new INTERACTIVEWORLD.Viewer({
    divID : INTERACTIVEWORLD.DIV_ID,
    antialias : true
  });

  // add an object menu
  new INTERACTIVEWORLD.ObjectMenu({
    antialias : true,
    objects : [ new INTERACTIVEWORLD.Plate(), new INTERACTIVEWORLD.Spoon() ]
  });
};

INTERACTIVEWORLD.ObjectMenu = function(options) {
  var that = this;
  options = options || {};
  var antialias = options.antialias;
  var objects = options.objects;
  var counter = 0;
  var displayObject = objects[counter];

  // setup the div
  var div = document.createElement('div');
  div.classList.add('object-menu');
  document.getElementsByTagName('body')[0].appendChild(div);

  // create the heading
  var title = document.createElement('h1');
  title.innerHTML = 'Where does this object belong?';
  div.appendChild(title);

  // create the 3D canvas
  var renderer = new THREE.WebGLRenderer({
    antialias : antialias
  });

  // create the global scene
  var scene = new THREE.Scene();
  scene.add(displayObject);

  // create the global camera
  var camera = new THREE.PerspectiveCamera(60, that.getMenuWidth()
      / that.getMenuHeight(), 0.01, 1000);
  camera.position.y = -0.25;
  camera.position.z = 0.25;
  camera.lookAt(scene.position);

  var plane = new INTERACTIVEWORLD.TexturePlane({
    width : INTERACTIVEWORLD.OBJECT_MENU_DISPLAY_WIDTH,
    height : INTERACTIVEWORLD.OBJECT_MENU_DISPLAY_HEIGHT,
    texture : INTERACTIVEWORLD.OBJECT_MENU_DISPLAY_FLOOR_TEXTURE,
    repeat : 10
  });
  scene.add(plane);

  // add lights
  scene.add(new THREE.AmbientLight(0x666666));
  scene.add(new THREE.HemisphereLight(0xffffff, 0xaaaaaa, 0.8));

  div.appendChild(renderer.domElement);

  // add the navigation bar
  var nav = document.createElement('div');
  var previousArrow = document.createElement('img');
  previousArrow.src = INTERACTIVEWORLD.PREVIOUS_ARROW;
  previousArrow.onclick = previous;
  previousArrow.style.cursor = 'pointer';
  nav.appendChild(previousArrow);
  var objectName = document.createElement('span');
  nav.appendChild(objectName);
  objectName.innerHTML = '&nbsp;&nbsp;&nbsp;' + displayObject.name
      + '&nbsp;&nbsp;&nbsp;';
  var nextArrow = document.createElement('img');
  nextArrow.src = INTERACTIVEWORLD.NEXT_ARROW;
  nextArrow.onclick = next;
  nextArrow.style.cursor = 'pointer';
  nav.appendChild(nextArrow);
  div.appendChild(nav);

  function previous() {
    // update the counter
    counter--;
    if (counter < 0) {
      counter = objects.length - 1;
    }

    // update the display
    scene.remove(displayObject);
    displayObject = objects[counter];
    scene.add(displayObject);

    // change the name
    objectName.innerHTML = '&nbsp;&nbsp;&nbsp;' + displayObject.name
        + '&nbsp;&nbsp;&nbsp;';
  }

  function next() {
    // update the counter
    counter++;
    if (counter >= objects.length) {
      counter = 0;
    }

    // update the display
    scene.remove(displayObject);
    displayObject = objects[counter];
    scene.add(displayObject);

    // change the name
    objectName.innerHTML = '&nbsp;&nbsp;&nbsp;' + displayObject.name
        + '&nbsp;&nbsp;&nbsp;';
  }

  function resize() {
    // base it on the window size
    var width = that.getMenuWidth();
    var height = that.getMenuHeight();
    div.style.width = width + 'px';
    div.style.height = height + 'px';
    div.style.top = (window.innerHeight - height) + 'px';

    // set the font size for the title
    title.style.fontSize = Math.round(that.getMenuWidth() / 20) + 'px';

    // set the navigation menu
    previousArrow.style.height = Math.round(that.getMenuWidth() / 12) + 'px';
    nextArrow.style.height = Math.round(that.getMenuWidth() / 12) + 'px';
    nav.style.height = Math.round(that.getMenuWidth() / 12) + 'px';

    // set the visualizer
    renderer.setSize(width, height - title.offsetHeight - nav.offsetHeight);
    camera.aspect = width / (height - title.offsetHeight - nav.offsetHeight);
  }

  /**
   * Renders the associated scene to the viewer.
   */
  function draw() {
    // rotate the object
    displayObject.rotation.z += 0.005;

    // render the scene
    renderer.render(scene, camera);

    // draw the frame
    requestAnimationFrame(draw);
  }

  // setup the reszie
  window.addEventListener('resize', resize, false);

  // setup the initial size
  resize();

  draw();
};

INTERACTIVEWORLD.ObjectMenu.prototype.getMenuWidth = function() {
  return window.innerWidth / 4;
};

INTERACTIVEWORLD.ObjectMenu.prototype.getMenuHeight = function() {
  return this.getMenuWidth() * 0.5;
};

INTERACTIVEWORLD.Bed = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Bed';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.BED_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = -0.04;
    result.scene.position.y = 2.17;
    result.scene.rotation.z = -Math.PI / 2.0;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Bed.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.Cabinet = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Cabinet';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.CABINET_MODEL, function(result) {
    // fix the offset
    result.scene.position.y = 0.1;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Cabinet.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.CoffeeTable = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Coffee Table';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.COFFEE_TABLE_MODEL, function(result) {
    // fix the offset
    result.scene.position.y = 0.75;
    result.scene.rotation.z = -Math.PI / 2.0;
    result.scene.scale.x *= 0.11;
    result.scene.scale.y *= 0.11;
    result.scene.scale.z *= 0.11;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.CoffeeTable.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.Couch = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Couch';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.COUCH_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = -0.7;
    result.scene.position.y = 0.55;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Couch.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.Counter = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Counter';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.COUNTER_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = 1.65;
    result.scene.position.y = 1.95;
    result.scene.scale.x *= 0.85;
    result.scene.scale.y *= 0.85;
    result.scene.scale.z *= 0.85;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Counter.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.DiningTable = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Dining Table';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.DINING_TABLE_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = 2.4;
    result.scene.position.y = 1.75;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.DiningTable.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.Dresser = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Dresser';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.DRESSER_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = -17.32;
    result.scene.position.y = -11.55;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Dresser.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.Nightstand = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Nightstand';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.NIGHTSTAND_MODEL, function(result) {
    // fix offset
    result.scene.position.x = -0.95;
    result.scene.position.y = -0.69;
    result.scene.position.z = -0.1;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Nightstand.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.Oven = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Oven';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.OVEN_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = -0.45;
    result.scene.position.y = -0.2;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Oven.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.Plate = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Plate';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.PLATE_MODEL, function(result) {
    // fix the offset
    result.scene.scale.x *= 0.04;
    result.scene.scale.y *= 0.04;
    result.scene.scale.z *= 0.04;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Plate.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.Refrigerator = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Refrigerator';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.REFRIGERATOR_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = -0.15;
    result.scene.position.y = 1.15;
    result.scene.rotation.z = -Math.PI / 2.0;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Refrigerator.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.Sink = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Sink';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.SINK_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = -0.3;
    result.scene.position.y = -0.2;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Sink.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.Spoon = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Spoon';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.SPOON_MODEL, function(result) {
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Spoon.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.TV = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'TV';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.TV_MODEL, function(result) {
    // fix the offset
    result.scene.position.x = 1.3;
    result.scene.position.y = 0.6;
    result.scene.scale.x *= 0.66;
    result.scene.scale.y *= 0.66;
    result.scene.scale.z *= 0.66;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.TV.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.TexturePlane = function(options) {
  options = options || {};
  var width = options.width;
  var height = options.height;
  var texture = options.texture;
  var repeat = options.repeat;
  this.name = 'Plane';

  // load the material
  var planeTexture = new THREE.ImageUtils.loadTexture(texture);
  planeTexture.wrapS = planeTexture.wrapT = THREE.RepeatWrapping;
  planeTexture.repeat.set(repeat, repeat);

  // create the mesh
  THREE.Mesh.call(this, new THREE.PlaneGeometry(width, height),
      new THREE.MeshLambertMaterial({
        map : planeTexture
      }));
};
INTERACTIVEWORLD.TexturePlane.prototype.__proto__ = THREE.Mesh.prototype;

INTERACTIVEWORLD.Wall = function(options) {
  options = options || {};
  var length = options.length;
  var texture = options.texture;
  this.name = 'Wall';

  // load the material
  var planeTexture = new THREE.ImageUtils.loadTexture(texture);
  planeTexture.wrapS = planeTexture.wrapT = THREE.RepeatWrapping;
  planeTexture.repeat.set(length, 1);

  // create the mesh
  THREE.Mesh.call(this, new THREE.CubeGeometry(length,
      INTERACTIVEWORLD.WALL_WIDTH, INTERACTIVEWORLD.WALL_HEIGHT),
      new THREE.MeshLambertMaterial({
        map : planeTexture,
        side : THREE.DoubleSide
      }));
  this.position.z = INTERACTIVEWORLD.WALL_HEIGHT / 2.0;
};
INTERACTIVEWORLD.Wall.prototype.__proto__ = THREE.Mesh.prototype;

INTERACTIVEWORLD.Bedroom = function() {
  THREE.Object3D.call(this);

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
};
INTERACTIVEWORLD.Bedroom.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.DiningRoom = function() {
  THREE.Object3D.call(this);

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
};
INTERACTIVEWORLD.DiningRoom.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.House = function() {
  THREE.Object3D.call(this);

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
  var bedroom = new INTERACTIVEWORLD.Bedroom();
  bedroom.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH / 2.0)
      - ((INTERACTIVEWORLD.HOUSE_WIDTH / 2.0) - INTERACTIVEWORLD.ROOM_WIDTH)
      + wallBuffer;
  bedroom.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT / 2.0)
      + ((INTERACTIVEWORLD.HOUSE_HEIGHT / 2.0) - INTERACTIVEWORLD.ROOM_HEIGHT)
      - wallBuffer;
  this.add(bedroom);

  var kitchen = new INTERACTIVEWORLD.Kitchen();
  kitchen.position.x = (INTERACTIVEWORLD.ROOM_WIDTH / 2.0)
      + ((INTERACTIVEWORLD.HOUSE_WIDTH / 2.0) - INTERACTIVEWORLD.ROOM_WIDTH)
      - wallBuffer;
  kitchen.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT / 2.0)
      + ((INTERACTIVEWORLD.HOUSE_HEIGHT / 2.0) - INTERACTIVEWORLD.ROOM_HEIGHT)
      - wallBuffer;
  this.add(kitchen);

  var livingRoom = new INTERACTIVEWORLD.LivingRoom();
  livingRoom.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH / 2.0)
      - ((INTERACTIVEWORLD.HOUSE_WIDTH / 2.0) - INTERACTIVEWORLD.ROOM_WIDTH)
      + wallBuffer;
  livingRoom.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT / 2.0)
      - ((INTERACTIVEWORLD.HOUSE_HEIGHT / 2.0) - INTERACTIVEWORLD.ROOM_HEIGHT)
      + wallBuffer;
  this.add(livingRoom);

  var diningRoom = new INTERACTIVEWORLD.DiningRoom();
  diningRoom.position.x = (INTERACTIVEWORLD.ROOM_WIDTH / 2.0)
      + ((INTERACTIVEWORLD.HOUSE_WIDTH / 2.0) - INTERACTIVEWORLD.ROOM_WIDTH)
      - wallBuffer;
  diningRoom.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT / 2.0)
      - ((INTERACTIVEWORLD.HOUSE_HEIGHT / 2.0) - INTERACTIVEWORLD.ROOM_HEIGHT)
      + wallBuffer;
  this.add(diningRoom);
};
INTERACTIVEWORLD.House.prototype.__proto__ = THREE.Object3D.prototype;

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

INTERACTIVEWORLD.LivingRoom = function() {
  THREE.Object3D.call(this);

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
};
INTERACTIVEWORLD.LivingRoom.prototype.__proto__ = THREE.Object3D.prototype;

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

INTERACTIVEWORLD.MouseControls = function(options) {
  var that = this;
  options = options || {};
  this.camera = options.camera;
  this.scene = options.scene;
  this.domElement = options.domElement;
  var objects = options.objects;

  this.camera.position.z = INTERACTIVEWORLD.WALL_HEIGHT * 4;

  var boom = new THREE.Object3D();
  boom.add(this.camera);

  this.scene.add(boom);

  boom.position.z = INTERACTIVEWORLD.WALL_HEIGHT * 3;

  this.target = new THREE.Vector3();

  this.EPS = 0.000001;

  this.phiDelta = 0;
  this.thetaDelta = 0;
  this.scale = 1;
  this.pan = new THREE.Vector3();

  this.zoomSpeed = 1.0;

  this.autoRotateSpeed = 2.0;

  var rotateStart = new THREE.Vector2();
  var panStart = new THREE.Vector2();

  this.minPolarAngle = 0;
  this.maxPolarAngle = Math.PI;

  this.minDistance = 0;
  this.maxDistance = Infinity;

  this.lastPosition = new THREE.Vector3();

  var projector = new THREE.Projector();

  var STATE = {
    NONE : -1,
    ROTATE : 0,
    DOLLY : 1,
    PAN : 2
  };
  var state = STATE.NONE;

  function onMouseDown(event) {
    event.preventDefault();

    switch (event.button) {
      case 0:
        state = STATE.PAN;
        panStart.set(event.clientX, event.clientY);
        break;
      case 2:
        state = STATE.ROTATE;
        rotateStart.set(event.clientX, event.clientY);
        break;
    }

    that.domElement.addEventListener('mousemove', onMouseMove, false);
    that.domElement.addEventListener('mouseup', onMouseUp, false);
  }

  function onMouseMove(event) {
    event.preventDefault();

    var movementX = event.movementX || event.mozMovementX
        || event.webkitMovementX || 0;
    var movementY = event.movementY || event.mozMovementY
        || event.webkitMovementY || 0;

    switch (state) {
      case STATE.ROTATE:
        boom.position.x = boom.position.x;
        boom.position.y = boom.position.y;
        boom.rotation.z -= ((movementX - movementY)) * 0.002;
        break;
      case STATE.PAN:
        boom.translateX(-movementX * 0.01);
        boom.translateY(movementY * 0.01);
    }
  }

  function onMouseUp(event) {
    event.preventDefault();

    that.domElement.removeEventListener('mousemove', onMouseMove, false);
    that.domElement.removeEventListener('mouseup', onMouseUp, false);

    state = STATE.NONE;
  }

  function onMouseWheel(event) {
    event.preventDefault();

    var delta = 0;
    if (event.wheelDelta) {
      delta = event.wheelDelta;
    } else if (event.detail) {
      delta = -event.detail;
    }

    if (delta > 0) {
      that.dollyOut();
    } else {
      that.dollyIn();
    }
  }

  function mouseHighlighter(event) {
    event.preventDefault();
    var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
    projector.unprojectVector(vector, that.camera);

    that.camera.updateMatrixWorld();
    var vector2 = new THREE.Vector3();
    vector2.getPositionFromMatrix(that.camera.matrixWorld);

    var raycaster = new THREE.Raycaster(vector2, vector.sub(vector2)
        .normalize());

    var intersects = raycaster.intersectObjects(objects);

    if (intersects.length > 0) {

      intersects[0].object.material.color.setHex(Math.random() * 0xffffff);
      console.log('hit');
    }
  }

  // add event listeners
  this.domElement.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  }, false);
  this.domElement.addEventListener('mousedown', onMouseDown, false);
  this.domElement.addEventListener('mousewheel', onMouseWheel, false);
  this.domElement.addEventListener('DOMMouseScroll', onMouseWheel, false);
  this.domElement.addEventListener('mousemove', mouseHighlighter, false);

  this.rotateUp(-0.75);
};
INTERACTIVEWORLD.MouseControls.prototype.__proto__ = THREE.EventDispatcher.prototype;

INTERACTIVEWORLD.MouseControls.prototype.update = function() {
  var position = this.camera.position;
  var offset = position.clone().sub(this.target);

  // angle from y-axis
  var phi = Math.atan2(Math.sqrt(offset.x * offset.x + offset.z * offset.z),
      offset.y)
      + this.phiDelta;

  // restrict phi to be between desired limits
  phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, phi));
  phi = Math.max(this.EPS, Math.min(Math.PI - this.EPS, phi));

  var radius = offset.length() * this.scale;

  // restrict radius to be between desired limits
  radius = Math.max(this.minDistance, Math.min(this.maxDistance, radius));

  offset.y = radius * Math.cos(phi);
  offset.z = radius * Math.sin(phi);

  position.copy(this.target).add(offset);

  this.camera.lookAt(this.target);

  this.phiDelta = 0;
  this.scale = 1;
};

INTERACTIVEWORLD.MouseControls.prototype.rotateUp = function(angle) {
  if (angle === undefined) {
    angle = 2 * Math.PI / 60 / 60 * this.autoRotateSpeed;
  }

  this.phiDelta -= angle;
};

INTERACTIVEWORLD.MouseControls.prototype.dollyIn = function(dollyScale) {
  if (dollyScale === undefined) {
    dollyScale = Math.pow(0.95, this.zoomSpeed);
  }

  this.scale /= dollyScale;
  this.rotateUp(0.01);
};

INTERACTIVEWORLD.MouseControls.prototype.dollyOut = function(dollyScale) {
  if (dollyScale === undefined) {
    dollyScale = Math.pow(0.95, this.zoomSpeed);
  }

  this.scale *= dollyScale;
  this.rotateUp(-0.01);
};

INTERACTIVEWORLD.Viewer = function(options) {
  var objects = [];
  options = options || {};
  var divID = options.divID;
  var antialias = options.antialias;

  // create the canvas to render to
  var renderer = new THREE.WebGLRenderer({
    antialias : antialias
  });

  // create the global scene
  var scene = new THREE.Scene();

  // create the global camera
  var camera = new THREE.PerspectiveCamera(60, window.innerWidth
      / window.innerHeight, 0.01, 1000);

  // add lights
  scene.add(new THREE.AmbientLight(0x666666));
  scene.add(new THREE.HemisphereLight(0xffffff, 0xaaaaaa, 0.8));

  // add the world
  scene.add(new INTERACTIVEWORLD.World());

  // add the mouse controls
  var controls = new INTERACTIVEWORLD.MouseControls({
    scene : scene,
    camera : camera,
    domElement : renderer.domElement,
    objects : objects
  });

  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // setup the reszie
  window.addEventListener('resize', resize, false);
  resize();

  /**
   * Renders the associated scene to the viewer.
   */
  function draw() {
    // update the controls
    controls.update();

    // render the scene
    renderer.render(scene, camera);

    // draw the frame
    requestAnimationFrame(draw);
  }

  // add the renderer to the page
  document.getElementById(divID).appendChild(renderer.domElement);

  // begin the animation
  draw();
};

INTERACTIVEWORLD.World = function() {
  THREE.Object3D.call(this);

  // add the grass
  var grass = new INTERACTIVEWORLD.TexturePlane({
    width : INTERACTIVEWORLD.WORLD_WIDTH,
    height : INTERACTIVEWORLD.WORLD_HEIGHT,
    texture : INTERACTIVEWORLD.WORLD_FLOOR_TEXTURE,
    repeat : 10
  });
  grass.position.z = -INTERACTIVEWORLD.Z_INDEX * 2;
  this.add(grass);

  // add the skybox
  var textureCube = THREE.ImageUtils.loadTextureCube([ 'posx.jpg', 'negx.jpg',
      'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg' ]);
  textureCube.format = THREE.RGBFormat;
  var shader = THREE.ShaderLib['cube'];
  shader.uniforms['tCube'].value = textureCube;
  this.add(new THREE.Mesh(new THREE.CubeGeometry(INTERACTIVEWORLD.WORLD_WIDTH,
      INTERACTIVEWORLD.WORLD_HEIGHT, Math.max(INTERACTIVEWORLD.WORLD_WIDTH,
          INTERACTIVEWORLD.WORLD_HEIGHT)), new THREE.ShaderMaterial({
    fragmentShader : shader.fragmentShader,
    vertexShader : shader.vertexShader,
    uniforms : shader.uniforms,
    side : THREE.BackSide
  })));

  // add the house
  this.add(new INTERACTIVEWORLD.House());
};
INTERACTIVEWORLD.World.prototype.__proto__ = THREE.Object3D.prototype;
