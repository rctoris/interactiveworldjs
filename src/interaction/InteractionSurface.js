INTERACTIVEWORLD.InteractionSurface = function(options) {
  options = options || {};
  this.width = options.width;
  this.height = options.height;
  this.displayObject = null;

  // create the surface
  var geom = new THREE.CubeGeometry(this.width, this.height,
      INTERACTIVEWORLD.INTERACTION_SURFACE_THICKNESS);
  var mat = new THREE.MeshLambertMaterial({
    transparent : true,
    color : 0x00FF00
  });
  // initially not visible
  mat.opacity = 0; // TODO

  // create the mesh
  THREE.Mesh.call(this, geom, mat);
  this.position.z = INTERACTIVEWORLD.INTERACTION_SURFACE_THICKNESS;
};
INTERACTIVEWORLD.InteractionSurface.prototype.__proto__ = THREE.Mesh.prototype;

INTERACTIVEWORLD.InteractionSurface.prototype.mousemove = function(ObjectType,
    vector) {
  // become visible
  this.material.opacity = 0.5;

  this.parent.updateMatrixWorld();
  var local = new THREE.Vector3();
  local.getPositionFromMatrix(this.matrixWorld);

  if (this.displayObject === null) {
    // create the object
    this.displayObject = new ObjectType();
    this.add(this.displayObject);
  }
  // set the location
  this.setObjectPose(this.displayObject, vector);
};

INTERACTIVEWORLD.InteractionSurface.prototype.mouseout = function() {
  // become invisible
  this.material.opacity = 0; // TODO

  if (this.displayObject !== null) {
    this.remove(this.displayObject);
    this.displayObject = null;
  }
};

INTERACTIVEWORLD.InteractionSurface.prototype.dblclick = function(ObjectType,
    vector) {
  // create the object
  var object = new ObjectType();
  // set the location and add it
  this.setObjectPose(object, vector);
  this.add(object);
};

INTERACTIVEWORLD.InteractionSurface.prototype.setObjectPose = function(object,
    worldPose) {
  // convert to local coords
  this.parent.updateMatrixWorld();
  var local = new THREE.Vector3();
  local.getPositionFromMatrix(this.matrixWorld);

  // set the pose
  object.position = worldPose.sub(local);

  // assume 90 degree rotations
  if (this.parent.rotation.z === Math.PI) {
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
