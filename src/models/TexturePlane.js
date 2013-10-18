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
