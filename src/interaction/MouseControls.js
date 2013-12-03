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
