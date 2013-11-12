INTERACTIVEWORLD.Viewer = function(options) {
  options = options || {};
  var divID = options.divID;
  var antialias = options.antialias;

  // add an object menu
  var menu = new INTERACTIVEWORLD.ObjectMenu({
    antialias : antialias,
    objects : [ new INTERACTIVEWORLD.Plate(), new INTERACTIVEWORLD.Spoon() ]
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
  scene.add(new INTERACTIVEWORLD.World({
    controls : controls
  }));

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
