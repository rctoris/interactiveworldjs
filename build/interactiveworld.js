/**
 * @author Russell Toris - rctoris@wpi.edu
 */

var INTERACTIVEWORLD = INTERACTIVEWORLD || {
  REVISION : '1-devel'
};

INTERACTIVEWORLD.Z_INDEX = 0.005;

INTERACTIVEWORLD.NORTH_WALL = 0;
INTERACTIVEWORLD.EAST_WALL = 1;
INTERACTIVEWORLD.SOUTH_WALL = 2;
INTERACTIVEWORLD.WEST_WALL = 3;

INTERACTIVEWORLD.NEGATIVE_DOOR_SIDE = 0;
INTERACTIVEWORLD.POSITIVE_DOOR_SIDE = 1;

INTERACTIVEWORLD.WALL_WIDTH = 0.05;
INTERACTIVEWORLD.WALL_HEIGHT = 1.5;
INTERACTIVEWORLD.DOOR_WIDTH = 0.8;

INTERACTIVEWORLD.WORLD_WIDTH = 100;
INTERACTIVEWORLD.WORLD_HEIGHT = 100;
INTERACTIVEWORLD.WORLD_FLOOR_TEXTURE = 'grass.jpg';

INTERACTIVEWORLD.HOUSE_WIDTH = 10;
INTERACTIVEWORLD.HOUSE_HEIGHT = 8;
INTERACTIVEWORLD.HOUSE_WALL_TEXTURE = 'wall.jpg';
INTERACTIVEWORLD.HOUSE_FLOOR_TEXTURE = 'floor.jpg';

INTERACTIVEWORLD.BEDROOM_WIDTH = 4.9;
INTERACTIVEWORLD.BEDROOM_HEIGHT = 4.5;
INTERACTIVEWORLD.BEDROOM_WALL_TEXTURE = 'bedroom.jpg';
INTERACTIVEWORLD.BEDROOM_FLOOR_TEXTURE = 'carpet.jpg';

INTERACTIVEWORLD.BED_MODEL = 'bed.dae';

INTERACTIVEWORLD.DRESSER_MODEL = 'dresser.dae';
INTERACTIVEWORLD.Bed = function() {
  var that = this;
  THREE.Object3D.call(this);

  // load the bed
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.BED_MODEL, function(result) {
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Bed.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.Dresser = function() {
  var that = this;
  THREE.Object3D.call(this);

  // load the dresser
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.DRESSER_MODEL, function(result) {
    // fix the offset
    result.scene.position.x -= 18;
    result.scene.position.y -= 12;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Dresser.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.TexturePlane = function(options) {
  options = options || {};
  var width = options.width;
  var height = options.height;
  var texture = options.texture;
  var repeat = options.repeat;

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

INTERACTIVEWORLD.Room = function(options) {
  THREE.Object3D.call(this);

  options = options || {};
  var width = options.width;
  var height = options.width;
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
    repeat : 5
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

  var translateObject = new THREE.Object3D();
  translateObject.add(this.camera);

  //var rotateObject = new THREE.Object3D();
  //rotateObject.add(translateObject);
  var rotateObject = translateObject;

  this.scene.add(rotateObject);

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
        rotateObject.position.x = translateObject.position.x;
        rotateObject.position.y = translateObject.position.y;
        rotateObject.rotation.z -= ((movementX - movementY)) * 0.002;
        break;
      case STATE.PAN:
        translateObject.translateX(-movementX * 0.01);
        translateObject.translateY(movementY * 0.01);
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
  renderer.setSize(window.innerWidth, window.innerHeight);

  // create the global scene
  var scene = new THREE.Scene();

  // create the global camera
  var camera = new THREE.PerspectiveCamera(60, window.innerWidth
      / window.innerHeight, 0.01, 1000);
  camera.position.z = INTERACTIVEWORLD.WALL_HEIGHT * 4;

  // add lights
  scene.add(new THREE.AmbientLight(0x666666));
  var directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
  scene.add(directionalLight);

  // add the world
  scene.add(new INTERACTIVEWORLD.World());

  // add the mouse controls
  var controls = new INTERACTIVEWORLD.MouseControls({
    scene : scene,
    camera : camera,
    domElement : renderer.domElement,
    objects : objects
  });

  // setup the reszie
  window.addEventListener('resize', function() {
    camera.left = window.innerWidth / -2;
    camera.right = window.innerWidth / 2;
    camera.top = window.innerHeight / 2;
    camera.bottom = window.innerHeight / -2;

    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }, false);

  /**
   * Renders the associated scene to the viewer.
   */
  function draw() {
    // update the controls
    controls.update();

    // put light to the top-left of the camera
    directionalLight.position = camera
        .localToWorld(new THREE.Vector3(-1, 1, 0));
    directionalLight.position.normalize();

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
    repeat : 6
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
