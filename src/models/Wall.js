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
