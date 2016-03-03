/**
 * @author Russell Toris - russell.toris@gmail.com
 */

var INTERACTIVEWORLD = INTERACTIVEWORLD || {
  REVISION : '0.5.0-SNAPSHOT'
};

INTERACTIVEWORLD.TASK_NONE = -1;
INTERACTIVEWORLD.TASK_TABLE_SETTING = 0;
INTERACTIVEWORLD.TASK_MAGAZINE_PLACEMENT = 1;
INTERACTIVEWORLD.TASK_DIRTY_DISHES = 2;
INTERACTIVEWORLD.TASK_PUT_AWAY_GENERAL = 3;

INTERACTIVEWORLD.DOT_RADIUS = 0.04;

INTERACTIVEWORLD.BRICKS_TEXTURE = 'resources/textures/bricks.jpg';
INTERACTIVEWORLD.CARPET_GREY_TEXTURE = 'resources/textures/carpet-grey.jpg';
INTERACTIVEWORLD.CARPET_TAN_TEXTURE = 'resources/textures/carpet-tan.jpg';
INTERACTIVEWORLD.GRASS_TEXTURE = 'resources/textures/grass.jpg';
INTERACTIVEWORLD.HARDWOOD_DARK_TEXTURE = 'resources/textures/hardwood-dark.jpg';
INTERACTIVEWORLD.HARDWOOD_LIGHT_TEXTURE = 'resources/textures/hardwood-light.jpg';
INTERACTIVEWORLD.PAINTED_WALL_BLUE_TEXTURE = 'resources/textures/painted-wall-blue.jpg';
INTERACTIVEWORLD.PAINTED_WALL_RED_TEXTURE = 'resources/textures/painted-wall-red.jpg';
INTERACTIVEWORLD.RUG_TEXTURE = 'resources/textures/rug.jpg';
INTERACTIVEWORLD.SKY_TEXTURE = 'resources/textures/sky.jpg';
INTERACTIVEWORLD.TILE_FLOOR_TEXTURE = 'resources/textures/tile-floor.jpg';
INTERACTIVEWORLD.TILE_WALL_TEXTURE = 'resources/textures/tile-wall.jpg';
INTERACTIVEWORLD.WALLPAPER_LIGHT_TEXTURE = 'resources/textures/wallpaper-light.jpg';

INTERACTIVEWORLD.NEXT_ARROW = 'resources/images/next.png';
INTERACTIVEWORLD.PREVIOUS_ARROW = 'resources/images/previous.png';

INTERACTIVEWORLD.Z_INDEX = 0.005;

INTERACTIVEWORLD.NORTH_WALL = 0;
INTERACTIVEWORLD.EAST_WALL = 1;
INTERACTIVEWORLD.SOUTH_WALL = 2;
INTERACTIVEWORLD.WEST_WALL = 3;

INTERACTIVEWORLD.NEGATIVE_DOOR_SIDE = 0;
INTERACTIVEWORLD.POSITIVE_DOOR_SIDE = 1;

INTERACTIVEWORLD.INTERACTION_SURFACE_THICKNESS = 0.005;

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

INTERACTIVEWORLD.BED_MODEL = 'rail_collada_models/meshes/bed.min.dae';
INTERACTIVEWORLD.DRESSER_MODEL = 'rail_collada_models/meshes/dresser.min.dae';
INTERACTIVEWORLD.NIGHTSTAND_MODEL = 'rail_collada_models/meshes/nightstand.min.dae';
INTERACTIVEWORLD.DINING_TABLE_MODEL = 'rail_collada_models/meshes/dining-table.min.dae';
INTERACTIVEWORLD.SINK_MODEL = 'rail_collada_models/meshes/sink.min.dae';
INTERACTIVEWORLD.CABINET_MODEL = 'rail_collada_models/meshes/cabinet.min.dae';
INTERACTIVEWORLD.REFRIGERATOR_MODEL = 'rail_collada_models/meshes/refrigerator.min.dae';
INTERACTIVEWORLD.OVEN_MODEL = 'rail_collada_models/meshes/oven.min.dae';
INTERACTIVEWORLD.COUNTER_MODEL = 'rail_collada_models/meshes/counter.min.dae';
INTERACTIVEWORLD.COUCH_MODEL = 'rail_collada_models/meshes/large-couch.min.dae';
INTERACTIVEWORLD.TV_MODEL = 'rail_collada_models/meshes/tv-set.min.dae';
INTERACTIVEWORLD.COFFEE_TABLE_MODEL = 'rail_collada_models/meshes/coffee-table.min.dae';
INTERACTIVEWORLD.PLATE_MODEL = 'rail_collada_models/meshes/plate.min.dae';
INTERACTIVEWORLD.SPOON_MODEL = 'rail_collada_models/meshes/spoon.min.dae';
INTERACTIVEWORLD.MAGAZINES_MODEL = 'rail_collada_models/meshes/magazines.min.dae';
INTERACTIVEWORLD.CUP_MODEL = 'rail_collada_models/meshes/cup.min.dae';
INTERACTIVEWORLD.FORK_MODEL = 'rail_collada_models/meshes/fork.min.dae';

INTERACTIVEWORLD.CSS = 'resources/css/interactiveworld.min.css';

INTERACTIVEWORLD.DIV_ID = 'interactive-world';

INTERACTIVEWORLD.PATH = 'http://resources.robotwebtools.org/';
INTERACTIVEWORLD.TEXTURE_PATH = '/';
INTERACTIVEWORLD.IMAGE_PATH = '/';
INTERACTIVEWORLD.CSS_PATH = '/';

INTERACTIVEWORLD.init = function(options) {
  options = options || {};
  var task = options.task;

  // load CSS
  var link = document.createElement('link');
  link.href = INTERACTIVEWORLD.CSS_PATH + INTERACTIVEWORLD.CSS;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.media = 'screen,print';
  document.getElementsByTagName('head')[0].appendChild(link);

  // create the main container we need
  var main = document.createElement('div');
  main.id = INTERACTIVEWORLD.DIV_ID;
  document.getElementsByTagName('body')[0].appendChild(main);

  // add the viewer
  var viewer = new INTERACTIVEWORLD.Viewer({
    divID : INTERACTIVEWORLD.DIV_ID,
    antialias : true,
    task : task
  });

  return viewer;
};

INTERACTIVEWORLD.createObjectByName = function(name) {
  switch (name) {
    case 'Bed':
      return new INTERACTIVEWORLD.Bed();
    case 'Cabinet':
      return new INTERACTIVEWORLD.Cabinet();
    case 'Coffee Table':
      return new INTERACTIVEWORLD.CoffeeTable();
    case 'Couch':
      return new INTERACTIVEWORLD.Couch();
    case 'Counter':
      return new INTERACTIVEWORLD.Counter();
    case 'Cup':
      return new INTERACTIVEWORLD.Cup();
    case 'Dining Table with Chairs':
      return new INTERACTIVEWORLD.DiningTable();
    case 'Dresser':
      return new INTERACTIVEWORLD.Dresser();
    case 'Fork':
      return new INTERACTIVEWORLD.Fork();
    case 'Magazines':
      return new INTERACTIVEWORLD.Magazines();
    case 'Nightstand':
      return new INTERACTIVEWORLD.Nightstand();
    case 'Oven':
      return new INTERACTIVEWORLD.Oven();
    case 'Plate':
      return new INTERACTIVEWORLD.Plate();
    case 'Refrigerator':
      return new INTERACTIVEWORLD.Refrigerator();
    case 'Sink Unit':
      return new INTERACTIVEWORLD.Sink();
    case 'Spoon':
      return new INTERACTIVEWORLD.Spoon();
    case 'TV':
      return new INTERACTIVEWORLD.TV();
    default:
      var r = INTERACTIVEWORLD.DOT_RADIUS;
      return new THREE.Mesh(new THREE.SphereGeometry(r, r / 10000, r / 10000), new THREE.MeshNormalMaterial());
  }
};

INTERACTIVEWORLD.Model = function(options) {
  var that = this;
  options = options || {};
  THREE.Object3D.call(this);

  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  this.name = options.name;
  this.width = options.width;
  this.depth = options.depth;
  this.interactions = [];
  this.pois = [];
  this.poiFrames = [];

  var model = INTERACTIVEWORLD.PATH + options.model;
  var offsetX = options.offsetX || 0;
  var offsetY = options.offsetY || 0;
  var offsetZ = options.offsetZ || 0;
  var rotation = options.rotation || 0;
  var scale = options.scale || 1;

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(model, function(result) {
    // fix the offset
    result.scene.position.x = offsetX;
    result.scene.position.y = offsetY;
    result.scene.position.z = offsetZ;
    result.scene.rotation.z = rotation;
    result.scene.scale.x *= scale;
    result.scene.scale.y *= scale;
    result.scene.scale.z *= scale;
    that.add(result.scene);
  });

};
INTERACTIVEWORLD.Model.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.Model.prototype.addInteractionSurface = function(width,
                                                                  height, offsetZ, offsetX, offsetY) {
  var that = this;

  var name = 'surface' + this.interactions.length;
  var interaction = new INTERACTIVEWORLD.InteractionSurface({
    width : width,
    height : height,
    offsetX : offsetX,
    offsetY : offsetY,
    offsetZ : offsetZ,
    name : name
  });
  interaction.eventHandler.on('addition', function(surf) {
    that.eventHandler.emit('addition', {
      name : that.name,
      position : {
        x : that.position.x,
        y : that.position.y,
        z : that.position.z
      },
      rotation : that.rotation.z,
      surface : surf
    });
  });
  this.add(interaction);
  this.interactions.push(interaction);
};

INTERACTIVEWORLD.Model.prototype.addPOI = function(name, width, height,
                                                   offsetZ, offsetX, offsetY, rotation) {
  this.pois.push({
    name : name,
    width : width,
    height : height,
    position : {
      x : offsetX,
      y : offsetY,
      z : offsetZ
    },
    rotation : rotation
  });
  // create a point as the mesh
  var r = 0.001;
  var mesh = new THREE.Mesh(new THREE.SphereGeometry(r, r, r), new THREE.MeshNormalMaterial());
  mesh.position.x = offsetX;
  mesh.position.y = offsetY;
  mesh.position.z = offsetZ;
  mesh.rotation.z = rotation;
  this.add(mesh);
  this.poiFrames.push(mesh);
};

INTERACTIVEWORLD.Model.prototype.getConfig = function() {
  return {
    name : this.name,
    width : this.width,
    height : this.depth,
    position : {
      x : this.position.x,
      y : this.position.y,
      z : this.position.z
    },
    rotation : this.rotation.z,
    poi : this.pois
  };
};

INTERACTIVEWORLD.InteractionHandler = function() {
};
INTERACTIVEWORLD.InteractionHandler.prototype.__proto__ = EventEmitter2.prototype;

INTERACTIVEWORLD.InteractionSurface = function(options) {
  options = options || {};
  this.width = options.width;
  this.height = options.height;
  var offsetX = options.offsetX || 0;
  var offsetY = options.offsetY || 0;
  var offsetZ = options.offsetZ || 0;
  this.displayObject = null;
  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();

  // create the surface
  var geom = new THREE.CubeGeometry(this.width, this.height,
    INTERACTIVEWORLD.INTERACTION_SURFACE_THICKNESS);
  var mat = new THREE.MeshLambertMaterial({
    transparent : true,
    color : 0x00FF00
  });
  // initially not visible
  mat.opacity = 0;

  // create the mesh
  THREE.Mesh.call(this, geom, mat);
  this.position.x = offsetX;
  this.position.y = offsetY;
  this.position.z = INTERACTIVEWORLD.INTERACTION_SURFACE_THICKNESS + offsetZ;
  this.name = options.name || 'surface';
};
INTERACTIVEWORLD.InteractionSurface.prototype.__proto__ = THREE.Mesh.prototype;

INTERACTIVEWORLD.InteractionSurface.prototype.mousemove = function(object,
                                                                   vector) {
  // become visible
  this.material.opacity = 0.5;

  this.parent.updateMatrixWorld();
  var local = new THREE.Vector3();
  local.getPositionFromMatrix(this.matrixWorld);

  if (this.displayObject === null) {
    // create the object
    this.displayObject = object;
    this.add(this.displayObject);
  }
  // set the location
  this.setObjectPose(this.displayObject, vector);
};

INTERACTIVEWORLD.InteractionSurface.prototype.mouseout = function() {
  // become invisible
  this.material.opacity = 0;

  if (this.displayObject !== null) {
    this.remove(this.displayObject);
    this.displayObject = null;
  }
};

INTERACTIVEWORLD.InteractionSurface.prototype.dblclick = function(ObjectType, vector) {
  if (ObjectType === null) {
    return;
  }

  var that = this;
  // create the object
  var object = new ObjectType();
  // set the location and add it
  this.setObjectPose(object, vector);
  this.eventHandler.emit('addition', {
    name : this.name,
    position : {
      x : that.position.x,
      y : that.position.y,
      z : that.position.z
    },
    rotation : that.rotation.z,
    object : {
      name : object.name,
      position : {
        x : object.position.x,
        y : object.position.y,
        z : object.position.z
      },
      rotation : object.rotation.z
    }
  });
  this.add(object);
};

INTERACTIVEWORLD.InteractionSurface.prototype.setObjectPose = function(object, worldPose) {
  if (object === undefined || object === null) {
    return;
  }

  // convert to local coords
  this.parent.updateMatrixWorld();
  var local = new THREE.Vector3();
  local.getPositionFromMatrix(this.matrixWorld);

  // set the pose
  object.position = worldPose.sub(local);

  // assume 90 degree rotations
  if (this.parent.rotation.z === Math.PI || this.parent.rotation.z === -Math.PI) {
    object.position.x *= -1;
    object.position.y *= -1;
  } else if (this.parent.rotation.z === Math.PI / 2.0) {
    var negX = -object.position.x;
    object.position.x = object.position.y;
    object.position.y = negX;
  } else if (this.parent.rotation.z === -Math.PI / 2.0) {
    var posX = object.position.x;
    object.position.x = -object.position.y;
    object.position.y = posX;
  }

  // now check the rotation
  if (Math.abs(object.position.x) / this.width > Math.abs(object.position.y)
    / this.height) {
    if (object.position.x > 0) {
      object.rotation.z = Math.PI / 2.0;
    } else {
      object.rotation.z = -Math.PI / 2.0;
    }
  } else {
    if (object.position.y > 0) {
      object.rotation.z = Math.PI;
    } else {
      object.rotation.z = 0;
    }
  }
};

INTERACTIVEWORLD.MouseControls = function(options) {
  var that = this;
  options = options || {};
  this.camera = options.camera;
  this.scene = options.scene;
  this.domElement = options.domElement;
  var objectMenu = options.objectMenu;
  this.surfaces = [];
  var cachedObjects = [];

  // create caches
  for ( var i = 0; i < objectMenu.objects.length; i++) {
    cachedObjects.push(new objectMenu.objects[i].constructor());
  }

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

        boom.position.x = Math.min(Math.max(boom.position.x,
            -INTERACTIVEWORLD.HOUSE_WIDTH / 2.0),
            INTERACTIVEWORLD.HOUSE_WIDTH / 2.0);
        boom.position.y = Math.min(Math.max(boom.position.y,
            -INTERACTIVEWORLD.HOUSE_HEIGHT / 2.0),
            INTERACTIVEWORLD.HOUSE_HEIGHT / 2.0);
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

  function surfaceDetection(event) {
    event.preventDefault();

    // get the vector
    var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
    projector.unprojectVector(vector, that.camera);

    // get the actual camera position
    that.camera.updateMatrixWorld();
    var cameraVector = new THREE.Vector3();
    cameraVector.getPositionFromMatrix(that.camera.matrixWorld);

    // ray cast it
    var raycaster = new THREE.Raycaster(cameraVector, vector.sub(cameraVector)
        .normalize());

    // check any intersections
    var intersects = raycaster.intersectObjects(that.surfaces);
    for ( var i = 0; i < that.surfaces.length; i++) {
      if (intersects.length > 0 && intersects[0].object === that.surfaces[i]) {
        that.surfaces[i].mousemove(cachedObjects[objectMenu.counter],
            intersects[0].point);
      } else {
        that.surfaces[i].mouseout();
      }
    }
  }

  function surfaceClick(event) {
    event.preventDefault();

    // get the vector
    var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
    projector.unprojectVector(vector, that.camera);

    // get the actual camera position
    that.camera.updateMatrixWorld();
    var cameraVector = new THREE.Vector3();
    cameraVector.getPositionFromMatrix(that.camera.matrixWorld);

    // ray cast it
    var raycaster = new THREE.Raycaster(cameraVector, vector.sub(cameraVector)
        .normalize());

    // check any intersections
    var intersects = raycaster.intersectObjects(that.surfaces);
    if (intersects.length > 0) {
      intersects[0].object.dblclick(objectMenu.getDisplayObjectType(),
          intersects[0].point);
      objectMenu.markPlacedItem();
    }
  }

  // add event listeners
  this.domElement.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  }, false);
  this.domElement.addEventListener('mousedown', onMouseDown, false);
  this.domElement.addEventListener('mousewheel', onMouseWheel, false);
  this.domElement.addEventListener('DOMMouseScroll', onMouseWheel, false);
  this.domElement.addEventListener('mousemove', surfaceDetection, false);
  this.domElement.addEventListener('dblclick', surfaceClick, false);

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
  phi = Math.max(0, Math.min(Math.PI, phi));
  phi = Math.max(this.EPS, Math.min(Math.PI - this.EPS, phi));
  var radius = offset.length() * this.scale;

  // restrict radius to be between desired limits
  if (radius < 4 && radius > 0.5) {
    offset.y = radius * Math.cos(phi);
    offset.z = radius * Math.sin(phi);
    position.copy(this.target).add(offset);
    this.camera.lookAt(this.target);
  }

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

INTERACTIVEWORLD.MouseControls.prototype.addInteractionSurfaces = function(
    surfaces) {
  for ( var i = 0; i < surfaces.length; i++) {
    this.surfaces.push(surfaces[i]);
  }
};

INTERACTIVEWORLD.ObjectMenu = function(options) {
  var that = this;
  options = options || {};
  var antialias = options.antialias;
  this.objects = options.objects;
  this.counter = 0;
  this.displayObject = this.objects[this.counter];
  this.placedObjects = [];
  this.placedObjectCount = [];
  var text = options.title || '';
  this.completion = options.completion || 1;

  // setup the div
  if(this.objects.length === 0) {
    return;
  }
  var div = document.createElement('div');
  div.classList.add('object-menu');
  document.getElementsByTagName('body')[0].appendChild(div);

  // create the heading
  var title = document.createElement('h1');
  title.innerHTML = text;
  div.appendChild(title);

  // create the 3D canvas
  var renderer = new THREE.WebGLRenderer({
    antialias : antialias
  });

  // create the global scene
  var scene = new THREE.Scene();
  scene.add(this.displayObject);

  // create the global camera
  var camera = new THREE.PerspectiveCamera(60, 2.5, 0.01, 1000);
  camera.position.y = -0.25;
  camera.position.z = 0.25;
  camera.lookAt(scene.position);

  var plane = new THREE.Mesh(new THREE.CubeGeometry(
      INTERACTIVEWORLD.OBJECT_MENU_DISPLAY_WIDTH,
      INTERACTIVEWORLD.OBJECT_MENU_DISPLAY_HEIGHT, 0.01),
      new THREE.MeshLambertMaterial({
        transparent : true,
        color : 0x0000FF
      }));
  plane.material.opacity = 0.5;
  plane.position.z = -0.01;
  scene.add(plane);

  // add lights
  scene.add(new THREE.AmbientLight(0x666666));
  scene.add(new THREE.HemisphereLight(0xffffff, 0xaaaaaa, 0.8));

  div.appendChild(renderer.domElement);

  // add the navigation bar
  var nav = document.createElement('div');
  var previousArrow = document.createElement('img');
  previousArrow.src = INTERACTIVEWORLD.IMAGE_PATH + INTERACTIVEWORLD.PREVIOUS_ARROW;
  previousArrow.onclick = previous;
  previousArrow.style.cursor = 'pointer';
  nav.appendChild(previousArrow);
  var objectName = document.createElement('span');
  nav.appendChild(objectName);
  objectName.innerHTML = '&nbsp;&nbsp;&nbsp;' + this.displayObject.name
      + '&nbsp;&nbsp;&nbsp;';
  var nextArrow = document.createElement('img');
  nextArrow.src = INTERACTIVEWORLD.IMAGE_PATH + INTERACTIVEWORLD.NEXT_ARROW;
  nextArrow.onclick = next;
  nextArrow.style.cursor = 'pointer';
  nav.appendChild(nextArrow);
  div.appendChild(nav);

  function previous() {
    // update the counter
    that.counter--;
    if (that.counter < 0) {
      that.counter = that.objects.length - 1;
    }

    // update the display
    scene.remove(that.displayObject);
    that.displayObject = that.objects[that.counter];
    scene.add(that.displayObject);

    // change the name
    objectName.innerHTML = '&nbsp;&nbsp;&nbsp;' + that.displayObject.name
        + '&nbsp;&nbsp;&nbsp;';
  }

  function next() {
    // update the counter
    that.counter++;
    if (that.counter >= that.objects.length) {
      that.counter = 0;
    }

    // update the display
    scene.remove(that.displayObject);
    that.displayObject = that.objects[that.counter];
    scene.add(that.displayObject);

    // change the name
    objectName.innerHTML = '&nbsp;&nbsp;&nbsp;' + that.displayObject.name
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
    that.displayObject.rotation.z += 0.005;

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
INTERACTIVEWORLD.ObjectMenu.prototype.__proto__ = EventEmitter2.prototype;

INTERACTIVEWORLD.ObjectMenu.prototype.getMenuWidth = function() {
  return window.innerWidth / 4;
};

INTERACTIVEWORLD.ObjectMenu.prototype.getMenuHeight = function() {
  return this.getMenuWidth() * 0.5;
};

INTERACTIVEWORLD.ObjectMenu.prototype.getDisplayObjectType = function() {
  if (this.displayObject === undefined) {
    return null;
  } else {
    return this.displayObject.constructor;
  }
};

INTERACTIVEWORLD.ObjectMenu.prototype.markPlacedItem = function() {
  var index = this.objects.indexOf(this.displayObject);

  if (this.placedObjects.indexOf(index) === -1) {
    this.placedObjects.push(index);
    this.placedObjectCount.push(1);
  } else {
    this.placedObjectCount[this.placedObjects.indexOf(index)]++;
  }

  if (this.placedObjects.length === this.objects.length) {
    for ( var i = 0; i < this.objects.length; i++) {
      if (this.placedObjectCount[i] < this.completion) {
        return;
      }
    }
    this.emit('completion');
  }
};

INTERACTIVEWORLD.Bed = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Bed',
    width : 1.7,
    depth : 2.15,
    model : INTERACTIVEWORLD.BED_MODEL,
    offsetX : -0.875,
    offsetY : 1.1,
    rotation : -Math.PI / 2.0
  });

  // create the interaction surface
  this.addInteractionSurface(this.width - 0.1, this.depth, 0.658, 0, 0);

  var name = 'pillow';
  var pillowWidth = 0.64;
  var pillowDepth = 0.35;
  var pillowHeight = 0.84;
  var pillowX = 0.35;
  var pillowY = 0.76;
  var rotation = 0;
  this.addPOI(name, pillowWidth, pillowDepth, pillowHeight, pillowX, pillowY, rotation);
  this.addPOI(name, pillowWidth, pillowDepth, pillowHeight, -pillowX, pillowY, rotation);
};
INTERACTIVEWORLD.Bed.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;

INTERACTIVEWORLD.Cabinet = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Cabinet',
    width : 1.91,
    depth : 0.557,
    model : INTERACTIVEWORLD.CABINET_MODEL,
    offsetX : -0.916,
    offsetY : -0.126
  });
};
INTERACTIVEWORLD.Cabinet.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;

INTERACTIVEWORLD.CoffeeTable = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Coffee Table',
    width : 1.54,
    depth : 0.84,
    model : INTERACTIVEWORLD.COFFEE_TABLE_MODEL,
    offsetX : -0.773,
    offsetY : 0.345,
    rotation : -Math.PI / 2.0,
    scale : 0.11
  });

  // create the interaction surface
  this.addInteractionSurface(this.width - 0.08, this.depth, 0.408, 0, 0);
};
INTERACTIVEWORLD.CoffeeTable.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;

INTERACTIVEWORLD.Couch = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Couch',
    width : 2.99,
    depth : 1.68,
    model : INTERACTIVEWORLD.COUCH_MODEL,
    offsetX : -2.18,
    offsetY : -0.33
  });

  // add the interaction surfaces
  var w = 0.99;
  var z = 0.348;
  this.addInteractionSurface(w, this.depth, z, -1, 0, 0);
  this.addInteractionSurface(this.width - w, w, z, 0.49, 0.35);
};
INTERACTIVEWORLD.Couch.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;

INTERACTIVEWORLD.Counter = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Counter',
    width : 1.08,
    depth : 0.82,
    model : INTERACTIVEWORLD.COUNTER_MODEL,
    offsetX : 1.114,
    offsetY : 1.52,
    scale : 0.85
  });

  // add the interaction surface
  this.addInteractionSurface(this.width, this.depth, 0.77, 0, 0);
};
INTERACTIVEWORLD.Counter.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;

INTERACTIVEWORLD.Cup = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Cup',
    width : 0.061,
    depth : 0.061,
    model : INTERACTIVEWORLD.CUP_MODEL,
    rotation : Math.PI,
    scale : 0.04
  });
};
INTERACTIVEWORLD.Cup.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;

INTERACTIVEWORLD.DiningTable = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Dining Table with Chairs',
    width : 2.39,
    depth : 1.19,
    model : INTERACTIVEWORLD.DINING_TABLE_MODEL,
    offsetX : 0.965,
    offsetY : 0.89
  });

  // add the interaction surface
  this.addInteractionSurface(this.width, this.depth, 0.7, 0, 0);

  var name = 'chair';
  var chairWidth = 0.29;
  var chairHeight = 0.44;
  var endChairX = 1.27;
  var endChairY = 0.03;
  this.addPOI(name, chairWidth, chairWidth, chairHeight, endChairX, endChairY, -Math.PI / 2.0);
  this.addPOI(name, chairWidth, chairWidth, chairHeight, -endChairX,
      endChairY * 2, Math.PI / 2.0);
  var outerChairX = 0.8;
  var outerChairY = 0.68;
  this.addPOI(name, chairWidth, chairWidth, chairHeight, outerChairX,
      outerChairY, 0);
  this.addPOI(name, chairWidth, chairWidth, chairHeight, outerChairX,
      -outerChairY, Math.PI);
  this.addPOI(name, chairWidth, chairWidth, chairHeight, -outerChairX,
      outerChairY, 0);
  this.addPOI(name, chairWidth, chairWidth, chairHeight, -outerChairX,
      -outerChairY, Math.PI);
  var midChairX = 0.03;
  this
      .addPOI(name, chairWidth, chairWidth, chairHeight, midChairX, outerChairY, 0);
  this.addPOI(name, chairWidth, chairWidth, chairHeight, midChairX,
      -outerChairY, Math.PI);
};
INTERACTIVEWORLD.DiningTable.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;

INTERACTIVEWORLD.Dresser = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Dresser',
    width : 1.353,
    depth : 0.48,
    model : INTERACTIVEWORLD.DRESSER_MODEL,
    offsetX : -17.985,
    offsetY : -11.785
  });

  // add the interaction surface
  this.addInteractionSurface(this.width, this.depth, 0.8, 0, 0);
};
INTERACTIVEWORLD.Dresser.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;

INTERACTIVEWORLD.Fork = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Fork',
    width : 0.025,
    depth : 0.195,
    model : INTERACTIVEWORLD.FORK_MODEL,
    offsetX : -0.0155,
    offsetY : 0.0415,
    rotation : Math.PI / 2.0,
    scale : 0.95
  });
};
INTERACTIVEWORLD.Fork.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;

INTERACTIVEWORLD.Magazines = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Magazines',
    width : 0.467,
    depth : 0.399,
    model : INTERACTIVEWORLD.MAGAZINES_MODEL,
    offsetX : -0.097,
    offsetY : -0.138,
    scale : 0.4
  });
};
INTERACTIVEWORLD.Magazines.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;

INTERACTIVEWORLD.Nightstand = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Nightstand',
    width : 0.875,
    depth : 0.62,
    model : INTERACTIVEWORLD.NIGHTSTAND_MODEL,
    offsetX : -1.359,
    offsetY : -1,
    offsetZ : -0.1
  });

  // add the interaction surface
  this.addInteractionSurface(this.width, this.depth, 0.72, 0, 0);
};
INTERACTIVEWORLD.Nightstand.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;

INTERACTIVEWORLD.Oven = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Oven',
    width : 1.215,
    depth : 0.66,
    model : INTERACTIVEWORLD.OVEN_MODEL,
    offsetX : -1.066,
    offsetY : -0.49
  });

  // add the interaction surface
  var height = 0.95;
  this.addInteractionSurface(this.width, this.depth, height);

  var name = 'burner';
  var burnerWidth = 0.25;
  var backBurnerY = 0.135;
  var frontBurnerY = -0.175;
  var outerBurnerX = 0.443;
  var rotation = 0;
  this
      .addPOI(name, burnerWidth, burnerWidth, height, outerBurnerX, backBurnerY, rotation);
  this.addPOI(name, burnerWidth, burnerWidth, height, outerBurnerX,
      frontBurnerY, rotation);
  var midBurnerX = 0.15;
  this.addPOI(name, burnerWidth, burnerWidth, height, midBurnerX, backBurnerY, rotation);
  this.addPOI(name, burnerWidth, burnerWidth, height, midBurnerX, frontBurnerY, rotation);
  this.addPOI(name, burnerWidth, burnerWidth, height, -outerBurnerX,
      backBurnerY, rotation);
  this.addPOI(name, burnerWidth, burnerWidth, height, -outerBurnerX,
      frontBurnerY, rotation);
};
INTERACTIVEWORLD.Oven.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;

INTERACTIVEWORLD.Plate = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Plate',
    width : 0.149,
    depth : 0.149,
    model : INTERACTIVEWORLD.PLATE_MODEL,
    offsetX : -0.0968,
    offsetY : -0.08,
    scale : 0.04
  });
};
INTERACTIVEWORLD.Plate.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;

INTERACTIVEWORLD.Refrigerator = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Refrigerator',
    width : 0.883,
    depth : 0.8,
    model : INTERACTIVEWORLD.REFRIGERATOR_MODEL,
    offsetX : -0.592,
    offsetY : 0.8,
    rotation : -Math.PI / 2.0
  });
};
INTERACTIVEWORLD.Refrigerator.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;

INTERACTIVEWORLD.Sink = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Sink Unit',
    width : 2.91,
    depth : 0.775,
    model : INTERACTIVEWORLD.SINK_MODEL,
    offsetX : -1.763,
    offsetY : -0.645,
  });

  // add the interaction surface
  var counterHeight = 0.91;
  this.addInteractionSurface(1.51, this.depth, counterHeight, -0.7, 0);
  this.addInteractionSurface(0.54, this.depth, counterHeight, 1.19, 0);
  var sinkWidth = 0.82;
  var sinkDepth = 0.46;
  var sinkX = 0.49;
  var sinkY = -0.12;
  this.addInteractionSurface(sinkWidth, sinkDepth, 0.81, sinkX, sinkY);
  var rotation = 0;
  this.addPOI('sink', sinkWidth, sinkDepth, counterHeight, sinkX, sinkY, rotation);
};
INTERACTIVEWORLD.Sink.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;

INTERACTIVEWORLD.Spoon = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Spoon',
    width : 0.032,
    depth : 0.15,
    model : INTERACTIVEWORLD.SPOON_MODEL,
    offsetX : 0.0165,
    offsetY : -0.075,
    rotation : Math.PI / 2.0
  });
};
INTERACTIVEWORLD.Spoon.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;

INTERACTIVEWORLD.TV = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'TV',
    width : 2.14,
    depth : 0.64,
    model : INTERACTIVEWORLD.TV_MODEL,
    offsetX : 0.295,
    offsetY : 0.27,
    scale : 0.66
  });

  // add the interaction surface
  var height = 0.63;
  this.addInteractionSurface(this.width, this.depth, height, 0, 0);

  var name = 'speaker';
  var spakerWidth = 0.19;
  var spaekerX = 0.89;
  var rotation = 0;
  this.addPOI(name, spakerWidth, spakerWidth, height, spaekerX, 0, rotation);
  this.addPOI(name, spakerWidth, spakerWidth, height, -spaekerX, 0, rotation);

  this.addPOI('tv', 1.4, 0.45, height, 0, -0.03, rotation);
};
INTERACTIVEWORLD.TV.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;

INTERACTIVEWORLD.TexturePlane = function(options) {
  options = options || {};
  var width = options.width;
  var height = options.height;
  var texture = INTERACTIVEWORLD.TEXTURE_PATH + options.texture;
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
  var texture = INTERACTIVEWORLD.TEXTURE_PATH + options.texture;
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

INTERACTIVEWORLD.Bedroom = function(options) {
  var that = this;
  options = options || [];
  THREE.Object3D.call(this);

  this.furniture = [];
  this.name = 'Bedroom';
  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  var controls = options.controls;
  var setup = options.setup || Math.floor((Math.random() * 3));

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
  bed.eventHandler.on('addition', function(furn) {
    that.eventHandler.emit('addition', {
      name : that.name,
      position : {
        x : that.position.x,
        y : that.position.y,
        z : that.position.z,
      },
      rotation : that.rotation.z,
      furniture : furn
    });
  });
  this.bed = bed;
  var nightstandOne = new INTERACTIVEWORLD.Nightstand();
  nightstandOne.eventHandler.on('addition', function(furn) {
    that.eventHandler.emit('addition', {
      name : that.name,
      position : {
        x : that.position.x,
        y : that.position.y,
        z : that.position.z,
      },
      rotation : that.rotation.z,
      furniture : furn
    });
  });
  this.nightstandOne = nightstandOne;
  var nightstandTwo = new INTERACTIVEWORLD.Nightstand();
  nightstandTwo.eventHandler.on('addition', function(furn) {
    that.eventHandler.emit('addition', {
      name : that.name,
      position : {
        x : that.position.x,
        y : that.position.y,
        z : that.position.z,
      },
      rotation : that.rotation.z,
      furniture : furn
    });
  });
  this.nightstandTwo = nightstandTwo;
  var dresser = new INTERACTIVEWORLD.Dresser();
  dresser.eventHandler.on('addition', function(furn) {
    that.eventHandler.emit('addition', {
      name : that.name,
      position : {
        x : that.position.x,
        y : that.position.y,
        z : that.position.z,
      },
      rotation : that.rotation.z,
      furniture : furn
    });
  });
  this.dresser = dresser;

  // set the positions
  var buffer = INTERACTIVEWORLD.WALL_WIDTH;
  if (setup === 0) {
    bed.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - bed.depth) / 2.0 - buffer;

    nightstandOne.position.x = INTERACTIVEWORLD.ROOM_WIDTH / 4.0
        + (nightstandOne.width / 2.0) - buffer;
    nightstandOne.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - nightstandOne.depth)
        / 2.0 - buffer;

    nightstandTwo.position.x = -nightstandOne.position.x;
    nightstandTwo.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - nightstandTwo.depth)
        / 2.0 - buffer;

    dresser.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - dresser.depth) / 2.0
        + buffer;
    dresser.rotation.z = Math.PI;
  } else if (setup === 1) {
    bed.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - bed.depth) / 2.0 + buffer;
    bed.position.y = 0.5;
    bed.rotation.z = Math.PI / 2.0;

    nightstandOne.position.x = 1;
    nightstandOne.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - nightstandOne.depth)
        / 2.0 + buffer;
    nightstandOne.rotation.z = Math.PI;

    nightstandTwo.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - nightstandTwo.depth)
        / 2.0 - buffer;
    nightstandTwo.position.y = 0.5;
    nightstandTwo.rotation.z = -Math.PI / 2.0;

    dresser.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - dresser.depth) / 2.0
        + buffer;
    dresser.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - dresser.width) / 2.0
        + buffer;
    dresser.rotation.z = Math.PI / 2.0;
  } else {
    bed.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - bed.width) / 2.0 + buffer;
    bed.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - bed.depth) / 2.0 + buffer;
    bed.rotation.z = -Math.PI;

    nightstandOne.position.x = 1;
    nightstandOne.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - nightstandOne.depth)
        / 2.0 + buffer;
    nightstandOne.rotation.z = Math.PI;

    nightstandTwo.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - nightstandTwo.depth)
        / 2.0 - buffer;
    nightstandTwo.position.y = 0.5;
    nightstandTwo.rotation.z = -Math.PI / 2.0;

    dresser.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - dresser.depth) / 2.0
        - buffer;
  }

  // add the models
  this.add(bed);
  this.furniture.push(bed);
  this.add(nightstandOne);
  this.furniture.push(nightstandOne);
  this.add(nightstandTwo);
  this.furniture.push(nightstandTwo);
  this.add(dresser);
  this.furniture.push(dresser);

  // add the interactions
  controls.addInteractionSurfaces(bed.interactions);
  controls.addInteractionSurfaces(nightstandOne.interactions);
  controls.addInteractionSurfaces(nightstandTwo.interactions);
  controls.addInteractionSurfaces(dresser.interactions);
};
INTERACTIVEWORLD.Bedroom.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.Bedroom.prototype.getConfig = function() {
  var furnConfig = [];
  for ( var i = 0; i < this.furniture.length; i++) {
    furnConfig.push(this.furniture[i].getConfig());
  }

  return {
    name : this.name,
    width : INTERACTIVEWORLD.ROOM_WIDTH,
    height : INTERACTIVEWORLD.ROOM_HEIGHT,
    position : {
      x : this.position.x,
      y : this.position.y,
      z : this.position.z
    },
    rotation : this.rotation.z,
    furniture : furnConfig
  };
};

INTERACTIVEWORLD.DiningRoom = function(options) {
  var that = this;
  options = options || [];
  THREE.Object3D.call(this);

  this.furniture = [];
  this.name = 'Dining Room';
  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  var controls = options.controls;
  var setup = options.setup || Math.floor((Math.random() * 3));

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
      rotation : that.rotation.z,
      furniture : furn
    });
  });
  var cabinet = new INTERACTIVEWORLD.Cabinet();

  var rug = new INTERACTIVEWORLD.TexturePlane({
    width : diningTable.width + 1,
    height : diningTable.depth + 1,
    texture : INTERACTIVEWORLD.RUG_TEXTURE,
    repeat : 1
  });

  // set the positions
  var buffer = INTERACTIVEWORLD.WALL_WIDTH;
  if (setup === 0) {
    cabinet.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - cabinet.width) / 2.0
        + buffer;
    cabinet.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - cabinet.depth) / 2.0
        + buffer;
    cabinet.rotation.z = Math.PI;
  } else if (setup === 1) {
    diningTable.position.x = -0.75;
    diningTable.rotation.z = Math.PI / 2.0;

    cabinet.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - cabinet.width) / 2.0
        - buffer;
    cabinet.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - cabinet.depth) / 2.0
        - buffer;
  } else {
    diningTable.position.x = 0.75;
    diningTable.rotation.z = -Math.PI / 2.0;

    cabinet.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - cabinet.depth) / 2.0
        + buffer;
    cabinet.rotation.z = Math.PI / 2.0;
  }

  rug.position.x = diningTable.position.x;
  rug.position.y = diningTable.position.y;
  rug.position.z = INTERACTIVEWORLD.Z_INDEX * 3;
  rug.rotation.z = diningTable.rotation.z;

  // add the models
  this.add(diningTable);
  this.furniture.push(diningTable);
  this.add(cabinet);
  this.furniture.push(cabinet);
  this.add(rug);

  // add the interactions
  controls.addInteractionSurfaces(diningTable.interactions);
};
INTERACTIVEWORLD.DiningRoom.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.DiningRoom.prototype.getConfig = function() {
  var furnConfig = [];
  for ( var i = 0; i < this.furniture.length; i++) {
    furnConfig.push(this.furniture[i].getConfig());
  }

  return {
    name : this.name,
    width : INTERACTIVEWORLD.ROOM_WIDTH,
    height : INTERACTIVEWORLD.ROOM_HEIGHT,
    position : {
      x : this.position.x,
      y : this.position.y,
      z : this.position.z
    },
    rotation : this.rotation.z,
    furniture : furnConfig
  };
};

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
  this.rooms = [bedroom, kitchen, livingRoom, diningRoom];
};
INTERACTIVEWORLD.House.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.Kitchen = function(options) {
  var that = this;
  options = options || [];
  THREE.Object3D.call(this);

  this.furniture = [];
  this.name = 'Kitchen';
  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  var controls = options.controls;
  var setup = options.setup || Math.floor((Math.random() * 3));

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
  sink.eventHandler.on('addition', function(furn) {
    that.eventHandler.emit('addition', {
      name : that.name,
      position : {
        x : that.position.x,
        y : that.position.y,
        z : that.position.z,
      },
      rotation : that.rotation.z,
      furniture : furn
    });
  });
  var oven = new INTERACTIVEWORLD.Oven();
  oven.eventHandler.on('addition', function(furn) {
    that.eventHandler.emit('addition', {
      name : that.name,
      position : {
        x : that.position.x,
        y : that.position.y,
        z : that.position.z,
      },
      rotation : that.rotation.z,
      furniture : furn
    });
  });
  var counterOne = new INTERACTIVEWORLD.Counter();
  counterOne.eventHandler.on('addition', function(furn) {
    that.eventHandler.emit('addition', {
      name : that.name,
      position : {
        x : that.position.x,
        y : that.position.y,
        z : that.position.z,
      },
      rotation : that.rotation.z,
      furniture : furn
    });
  });
  var counterTwo = new INTERACTIVEWORLD.Counter();
  counterTwo.eventHandler.on('addition', function(furn) {
    that.eventHandler.emit('addition', {
      name : that.name,
      position : {
        x : that.position.x,
        y : that.position.y,
        z : that.position.z,
      },
      rotation : that.rotation.z,
      furniture : furn
    });
  });

  // set the positions
  var buffer = INTERACTIVEWORLD.WALL_WIDTH;
  if (setup === 0) {
    refrigerator.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - refrigerator.width)
        / 2.0 - buffer;
    refrigerator.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - refrigerator.depth)
        / 2.0 - buffer;

    sink.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - sink.width) / 2.0
        + buffer;
    sink.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - sink.depth) / 2.0
        - buffer;

    counterOne.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - counterOne.width)
        / 2.0 - buffer;
    counterOne.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - counterOne.depth)
        / 2.0 + buffer;
    counterOne.rotation.z = Math.PI;

    oven.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - oven.width) / 2.0 - 2
        * buffer - counterOne.width;
    oven.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - oven.depth) / 2.0
        + buffer;
    oven.rotation.z = Math.PI;

    counterTwo.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - counterTwo.width)
        / 2.0 - 3 * buffer - counterOne.width - oven.width;
    counterTwo.position.y = counterOne.position.y;
    counterTwo.rotation.z = counterOne.rotation.z;
  } else if (setup === 1) {
    refrigerator.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - refrigerator.width)
        / 2.0 - buffer;
    refrigerator.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - refrigerator.depth)
        / 2.0 + buffer;
    refrigerator.rotation.z = Math.PI;

    oven.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - oven.depth) / 2.0
        + buffer;
    oven.rotation.z = Math.PI;

    sink.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - sink.depth) / 2.0
        + buffer;
    sink.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - sink.width) / 2.0
        - buffer;
    sink.rotation.z = Math.PI / 2.0;

    counterOne.position.x = 1.3;
    counterOne.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - counterOne.depth)
        / 2.0 - buffer;

    counterTwo.position.x = counterOne.position.x - counterOne.width;
    counterTwo.position.y = counterOne.position.y;
  } else {
    sink.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - sink.depth) / 2.0 - buffer;
    sink.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - sink.width) / 2.0
        + buffer;
    sink.rotation.z = -Math.PI / 2.0;

    refrigerator.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - refrigerator.depth)
        / 2.0 - buffer;
    refrigerator.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - refrigerator.width)
        / 2.0 - buffer;
    refrigerator.rotation.z = -Math.PI / 2.0;

    counterOne.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - counterOne.depth)
        / 2.0 + buffer;
    counterOne.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - counterOne.width)
        / 2.0 - buffer;
    counterOne.rotation.z = Math.PI / 2.0;

    counterTwo.position.x = counterOne.position.x;
    counterTwo.position.y = counterOne.position.y - counterOne.width;
    counterTwo.rotation.z = counterOne.rotation.z;

    oven.position.x = -0.5;
    oven.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - oven.depth) / 2.0
        + buffer;
    oven.rotation.z = Math.PI;
  }

  // add the models
  this.add(refrigerator);
  this.furniture.push(refrigerator);
  this.add(sink);
  this.furniture.push(sink);
  this.add(oven);
  this.furniture.push(oven);
  this.add(counterOne);
  this.furniture.push(counterOne);
  this.add(counterTwo);
  this.furniture.push(counterTwo);

  // add the interactions
  controls.addInteractionSurfaces(sink.interactions);
  controls.addInteractionSurfaces(counterOne.interactions);
  controls.addInteractionSurfaces(counterTwo.interactions);
  controls.addInteractionSurfaces(oven.interactions);
};
INTERACTIVEWORLD.Kitchen.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.Kitchen.prototype.getConfig = function() {
  var furnConfig = [];
  for ( var i = 0; i < this.furniture.length; i++) {
    furnConfig.push(this.furniture[i].getConfig());
  }

  return {
    name : this.name,
    width : INTERACTIVEWORLD.ROOM_WIDTH,
    height : INTERACTIVEWORLD.ROOM_HEIGHT,
    position : {
      x : this.position.x,
      y : this.position.y,
      z : this.position.z
    },
    rotation : this.rotation.z,
    furniture : furnConfig
  };
};

INTERACTIVEWORLD.LivingRoom = function(options) {
  var that = this;
  options = options || [];
  THREE.Object3D.call(this);

  this.furniture = [];
  this.name = 'Living Room';
  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  var controls = options.controls;
  var setup = options.setup || Math.floor((Math.random() * 3));

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
  couch.eventHandler.on('addition', function(furn) {
    that.eventHandler.emit('addition', {
      name : that.name,
      position : {
        x : that.position.x,
        y : that.position.y,
        z : that.position.z,
      },
      rotation : that.rotation.z,
      furniture : furn
    });
  });
  var tv = new INTERACTIVEWORLD.TV();
  tv.eventHandler.on('addition', function(furn) {
    that.eventHandler.emit('addition', {
      name : that.name,
      position : {
        x : that.position.x,
        y : that.position.y,
        z : that.position.z,
      },
      rotation : that.rotation.z,
      furniture : furn
    });
  });
  var coffeeTable = new INTERACTIVEWORLD.CoffeeTable();
  coffeeTable.eventHandler.on('addition', function(furn) {
    that.eventHandler.emit('addition', {
      name : that.name,
      position : {
        x : that.position.x,
        y : that.position.y,
        z : that.position.z,
      },
      rotation : that.rotation.z,
      furniture : furn
    });
  });

  // set the positions
  var buffer = INTERACTIVEWORLD.WALL_WIDTH;
  if (setup === 0 && false) {
    couch.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - couch.depth) / 2.0
        + buffer;
    couch.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - couch.width) / 2.0
        + buffer;
    couch.rotation.z = Math.PI / 2.0;

    tv.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - tv.depth) / 2.0 - buffer;
    tv.rotation.z = -Math.PI / 2.0;

    coffeeTable.position.x = 0.25;
    coffeeTable.position.y = tv.position.y;
    coffeeTable.rotation.z = -Math.PI / 2.0;
  } else if (setup === 1 && false) {
    couch.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - couch.width) / 2.0
        - buffer;
    couch.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - couch.depth) / 2.0
        + buffer;
    couch.rotation.z = Math.PI;

    tv.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - tv.depth) / 2.0 - buffer;

    coffeeTable.position.x = tv.position.x;
    coffeeTable.position.y = 0.25;
  } else {
    couch.position.x = -(INTERACTIVEWORLD.ROOM_WIDTH - couch.width) / 2.0
        + buffer;
    couch.position.y = (INTERACTIVEWORLD.ROOM_HEIGHT - couch.depth) / 2.0
        - buffer;

    tv.position.x = (INTERACTIVEWORLD.ROOM_WIDTH - tv.depth) / 2.0 - buffer;
    tv.position.y = -(INTERACTIVEWORLD.ROOM_HEIGHT - tv.width) / 2.0 + buffer;
    tv.rotation.z = -Math.PI / 2.0;
  }

  // add the models
  this.add(couch);
  this.furniture.push(couch);
  this.add(tv);
  this.furniture.push(tv);
  this.add(coffeeTable);
  this.furniture.push(coffeeTable);

  // add the interactions
  controls.addInteractionSurfaces(coffeeTable.interactions);
  controls.addInteractionSurfaces(couch.interactions);
  controls.addInteractionSurfaces(tv.interactions);
};
INTERACTIVEWORLD.LivingRoom.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.LivingRoom.prototype.getConfig = function() {
  var furnConfig = [];
  for ( var i = 0; i < this.furniture.length; i++) {
    furnConfig.push(this.furniture[i].getConfig());
  }

  return {
    name : this.name,
    width : INTERACTIVEWORLD.ROOM_WIDTH,
    height : INTERACTIVEWORLD.ROOM_HEIGHT,
    position : {
      x : this.position.x,
      y : this.position.y,
      z : this.position.z
    },
    rotation : this.rotation.z,
    furniture : furnConfig
  };
};

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

INTERACTIVEWORLD.Viewer = function(options) {
  var that = this;
  options = options || {};
  var divID = options.divID;
  var antialias = options.antialias;
  var task = options.task || 0;
  this.manuallyPlacedItems = [];

  // determine the task
  var objs = [];
  var objInfo= [];
  var count = 0;
  var text = '';
  if (task === INTERACTIVEWORLD.TASK_TABLE_SETTING) {
    // table setting
    objs = [ new INTERACTIVEWORLD.Plate(), new INTERACTIVEWORLD.Cup(),
        new INTERACTIVEWORLD.Fork(), new INTERACTIVEWORLD.Spoon() ];
    count = 3;
    text = 'Set the table with these objects.';
  } else if (task === INTERACTIVEWORLD.TASK_MAGAZINE_PLACEMENT) {
    // table setting
    objs = [ new INTERACTIVEWORLD.Magazines()];
    count = 3;
    text = 'Place the object where it belongs.';
  } else if (task === INTERACTIVEWORLD.TASK_DIRTY_DISHES) {
    // table setting
    objs = [ new INTERACTIVEWORLD.Plate(), new INTERACTIVEWORLD.Cup(),
      new INTERACTIVEWORLD.Fork(), new INTERACTIVEWORLD.Spoon() ];
    count = 3;
    text = 'Place the dirty dishes where they belong.';
  } else if (task === INTERACTIVEWORLD.TASK_PUT_AWAY_GENERAL) {
    // general put away
    objs = [ new INTERACTIVEWORLD.Plate(), new INTERACTIVEWORLD.Cup(),
      new INTERACTIVEWORLD.Fork(), new INTERACTIVEWORLD.Spoon(),
      new INTERACTIVEWORLD.Magazines()];
    count = 3;
    text = 'Put the items away where they belong.';
  }
  for (var i=0; i < objs.length; i++) {
    objInfo.push({
      name: objs[i].name,
      width: objs[i].width,
      height: objs[i].depth
    });
  }

  // add an object menu
  var menu = new INTERACTIVEWORLD.ObjectMenu({
    antialias : antialias,
    objects : objs,
    completion : count,
    title : text
  });
  menu.on('completion', function() {
    that.emit('completion');
  });

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

  // add the mouse controls
  var controls = new INTERACTIVEWORLD.MouseControls({
    scene : scene,
    camera : camera,
    domElement : renderer.domElement,
    objectMenu : menu
  });

  // add the world
  var world = new INTERACTIVEWORLD.World({
    controls : controls
  });
  scene.add(world);
  this.config = world.config;
  this.config.objects = objInfo;
  this.config.task = text;
  world.interactionHandler.on('addition', function(event) {
    that.emit('addition', event);
  });
  this.world = world;

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
INTERACTIVEWORLD.Viewer.prototype.__proto__ = EventEmitter2.prototype;

INTERACTIVEWORLD.Viewer.prototype.placeObjectOnSurface = function(options) {
  options = options || {};
  var furnitureName = options.furnitureName;
  var surfaceName = options.surfaceName || 'surface';
  var itemName = options.itemName;
  var position = options.position;
  var rotation = options.rotation;

  for (var i = 0; i < this.world.house.rooms.length; i++) {
    var room = this.world.house.rooms[i];
    for (var j = 0; j < room.furniture.length; j++) {
      var furniture = room.furniture[j];
      if (furniture.name === furnitureName) {
        for (var k = 0; k < furniture.interactions.length; k++) {
          var interaction = furniture.interactions[k];
          if (interaction.name === surfaceName) {
            // create the item
            var item = INTERACTIVEWORLD.createObjectByName(itemName);
            item.position.x = position.x;
            item.position.y = position.y;
            item.position.z = position.z;
            item.rotation.z = rotation.z;
            interaction.add(item);
            this.manuallyPlacedItems.push(item);
          }
        }
      }
    }
  }
};

INTERACTIVEWORLD.Viewer.prototype.placeObjectOnFurniture = function(options) {
  options = options || {};
  var furnitureName = options.furnitureName;
  var itemName = options.itemName;
  var position = options.position;
  var rotation = options.rotation;

  for (var i = 0; i < this.world.house.rooms.length; i++) {
    var room = this.world.house.rooms[i];
    for (var j = 0; j < room.furniture.length; j++) {
      var furniture = room.furniture[j];
      if (furniture.name === furnitureName) {
        // create the item
        var item = INTERACTIVEWORLD.createObjectByName(itemName);
        item.position.x = position.x;
        item.position.y = position.y;
        item.position.z = furniture.interactions[0].position.z;
        item.rotation.z = rotation.z;
        furniture.add(item);
        this.manuallyPlacedItems.push(item);
      }
    }
  }
};

INTERACTIVEWORLD.Viewer.prototype.placeObjectOnPoi = function(options) {
  options = options || {};
  var furnitureName = options.furnitureName;
  var poiName = options.poiName;
  var itemName = options.itemName;
  var position = options.position;
  var rotation = options.rotation;

  for (var i = 0; i < this.world.house.rooms.length; i++) {
    var room = this.world.house.rooms[i];
    for (var j = 0; j < room.furniture.length; j++) {
      var furniture = room.furniture[j];
      if (furniture.name === furnitureName) {
        for (var k = 0; k < furniture.pois.length; k++) {
          var poi = furniture.pois[k];
          if (poi.name === poiName) {
            // create the item
            var item = INTERACTIVEWORLD.createObjectByName(itemName);
            item.position.x = position.x;
            item.position.y = position.y;
            item.position.z = poi.height;
            item.rotation.z = rotation.z;
            furniture.poiFrames[k].add(item);
            this.manuallyPlacedItems.push(item);
            return;
          }
        }
      }
    }
  }
};

INTERACTIVEWORLD.Viewer.prototype.placeObjectOnObject = function(options) {
  options = options || {};
  var referenceItemName = options.referenceItemName;
  var itemName = options.itemName;
  var position = options.position;
  var rotation = options.rotation;

  for (var i = 0; i < this.manuallyPlacedItems.length; i++) {
    var referenceItem = this.manuallyPlacedItems[i];
    if (referenceItem.name === referenceItemName) {
      // create the item
      var item = INTERACTIVEWORLD.createObjectByName(itemName);
      item.position.x = position.x;
      item.position.y = position.y;
      item.position.z = position.z;
      item.rotation.z = rotation.z;
      referenceItem.add(item);
      this.manuallyPlacedItems.push(item);
      return;
    }
  }
};

INTERACTIVEWORLD.Viewer.prototype.displayTemplateFromModels = function(models) {
  // get the initial state
  var availableFrames = [];
  for (var i = 0; i < this.world.house.rooms.length; i++) {
    var room = this.world.house.rooms[i];
    for (var j = 0; j < room.furniture.length; j++) {
      var furniture = room.furniture[j];
      availableFrames.push({name: furniture.name, type: 'furniture'});
      for (var k = 0; k < furniture.pois.length; k++) {
        var poi = furniture.pois[k];
        var add = true;
        for (var l = 0; l < availableFrames.length; l++) {
          if (availableFrames[l].name === poi.name) {
            add = false;
            break;
          }
        }
        if (add) {
          availableFrames.push({name: poi.name, type: 'poi', furniture: furniture.name});
        }
      }
    }
  }

  // available items
  var availableItems = [];
  for (var m = 0; m < models.length; m++) {
    if (availableItems.indexOf(models[m].placement.item.name) === -1) {
      availableItems.push(models[m].placement.item.name);
    }
  }

  // place all the items we need to place
  while(availableItems.length > 0) {
    var bestValue = Infinity;
    var bestPlacement = {};
    for (var n = 0; n < models.length; n++) {
      var model = models[n];
      // check if this item needs to be placed still
      if (availableItems.indexOf(model.placement.item.name) >= 0) {
        // now check if the reference frame is available
        var available = false;
        for (var o = 0; o < availableFrames.length; o++) {
          if (availableFrames[o].name === model.placement.reference_frame_id) {
            available = true;
            break;
          }
        }
        if (available && model.decision_value < bestValue) {
          bestValue = model.decision_value;
          bestPlacement = model.placement;
        }
      }
    }

    // find the reference frame to place in
    for (var p = 0; p < availableFrames.length; p++) {
      var frame = availableFrames[p];
      if (frame.name === bestPlacement.reference_frame_id) {
        console.log('Placing ' + bestPlacement.item.name + ' w.r.t ' + bestPlacement.reference_frame_id);
        // place the item
        switch (frame.type) {
          case 'furniture':
            this.placeObjectOnFurniture({
              furnitureName : frame.name,
              itemName : bestPlacement.item.name,
              position : bestPlacement.position,
              rotation : {z: bestPlacement.rotation}
            });
            break;
          case 'poi':
            this.placeObjectOnPoi({
              furnitureName : frame.furniture,
              poiName : frame.name,
              itemName : bestPlacement.item.name,
              position : bestPlacement.position,
              rotation : {z: bestPlacement.rotation}
            });
            break;
          case 'item':
            this.placeObjectOnObject({
              referenceItemName : frame.name,
              itemName : bestPlacement.item.name,
              position : bestPlacement.position,
              rotation : {z: bestPlacement.rotation}
            });
            break;
        }

        // remove the item from the list
        availableItems.splice(availableItems.indexOf(bestPlacement.item.name), 1);
        // add the item as a possible reference frame
        availableFrames.push({name: bestPlacement.item.name, type: 'item'});
        break;
      }
    }
  }
};

INTERACTIVEWORLD.World = function(options) {
  options = options || [];
  THREE.Object3D.call(this);

  var controls = options.controls;

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
  var sky = INTERACTIVEWORLD.TEXTURE_PATH + INTERACTIVEWORLD.SKY_TEXTURE;
  var textureCube = THREE.ImageUtils.loadTextureCube(
    [sky, sky, sky, sky, sky, sky]
  );
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
  var house = new INTERACTIVEWORLD.House({
    controls : controls
  });
  this.add(house);
  this.interactionHandler = house.eventHandler;
  this.config = house.config;
  this.house = house;
};
INTERACTIVEWORLD.World.prototype.__proto__ = THREE.Object3D.prototype;
