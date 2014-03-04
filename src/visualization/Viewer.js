INTERACTIVEWORLD.Viewer = function(options) {
  var that = this;
  options = options || {};
  var divID = options.divID;
  var antialias = options.antialias;
  var task = options.task || 0;

  // determine the task
  var objs = [];
  var count = 0;
  var text = '';
  if (task === 0) {
    // table setting
    objs = [ new INTERACTIVEWORLD.Plate(), new INTERACTIVEWORLD.Cup(),
        new INTERACTIVEWORLD.Fork(), new INTERACTIVEWORLD.Spoon() ];
    count = 3;
    text = 'Set the table with these objects.';
  } else if (task === 1) {
    // table setting
    objs = [ new INTERACTIVEWORLD.Magazines()];
    count = 3;
    text = 'Place the object where it belongs.';
  } else if (task === 2) {
    // table setting
    objs = [ new INTERACTIVEWORLD.Plate(), new INTERACTIVEWORLD.Cup(),
        new INTERACTIVEWORLD.Fork(), new INTERACTIVEWORLD.Spoon() ];
    count = 3;
    text = 'Place the dirty dishes where they belong.';
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
  world.interactionHandler.on('addition', function(event) {
    that.emit('addition', event);
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
INTERACTIVEWORLD.Viewer.prototype.__proto__ = EventEmitter2.prototype;
