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
