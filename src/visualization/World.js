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
  var sky = INTERACTIVEWORLD.PATH + INTERACTIVEWORLD.SKY_TEXTURE;
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
