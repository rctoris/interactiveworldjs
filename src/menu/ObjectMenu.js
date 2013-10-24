INTERACTIVEWORLD.ObjectMenu = function(options) {
  var that = this;
  options = options || {};
  var antialias = options.antialias;
  var objects = options.objects;
  var counter = 0;
  var displayObject = objects[counter];

  // setup the div
  var div = document.createElement('div');
  div.classList.add('object-menu');
  document.getElementsByTagName('body')[0].appendChild(div);

  // create the heading
  var title = document.createElement('h1');
  title.innerHTML = 'Where does this object belong?';
  div.appendChild(title);

  // create the 3D canvas
  var renderer = new THREE.WebGLRenderer({
    antialias : antialias
  });

  // create the global scene
  var scene = new THREE.Scene();
  scene.add(displayObject);

  // create the global camera
  var camera = new THREE.PerspectiveCamera(60, that.getMenuWidth()
      / that.getMenuHeight(), 0.01, 1000);
  camera.position.y = -0.25;
  camera.position.z = 0.25;
  camera.lookAt(scene.position);

  var plane = new INTERACTIVEWORLD.TexturePlane({
    width : INTERACTIVEWORLD.OBJECT_MENU_DISPLAY_WIDTH,
    height : INTERACTIVEWORLD.OBJECT_MENU_DISPLAY_HEIGHT,
    texture : INTERACTIVEWORLD.OBJECT_MENU_DISPLAY_FLOOR_TEXTURE,
    repeat : 10
  });
  scene.add(plane);

  // add lights
  scene.add(new THREE.AmbientLight(0x666666));
  scene.add(new THREE.HemisphereLight(0xffffff, 0xaaaaaa, 0.8));

  div.appendChild(renderer.domElement);

  // add the navigation bar
  var nav = document.createElement('div');
  var previousArrow = document.createElement('img');
  previousArrow.src = INTERACTIVEWORLD.PREVIOUS_ARROW;
  previousArrow.onclick = previous;
  previousArrow.style.cursor = 'pointer';
  nav.appendChild(previousArrow);
  var objectName = document.createElement('span');
  nav.appendChild(objectName);
  objectName.innerHTML = '&nbsp;&nbsp;&nbsp;' + displayObject.name
      + '&nbsp;&nbsp;&nbsp;';
  var nextArrow = document.createElement('img');
  nextArrow.src = INTERACTIVEWORLD.NEXT_ARROW;
  nextArrow.onclick = next;
  nextArrow.style.cursor = 'pointer';
  nav.appendChild(nextArrow);
  div.appendChild(nav);

  function previous() {
    // update the counter
    counter--;
    if (counter < 0) {
      counter = objects.length - 1;
    }

    // update the display
    scene.remove(displayObject);
    displayObject = objects[counter];
    scene.add(displayObject);

    // change the name
    objectName.innerHTML = '&nbsp;&nbsp;&nbsp;' + displayObject.name
        + '&nbsp;&nbsp;&nbsp;';
  }

  function next() {
    // update the counter
    counter++;
    if (counter >= objects.length) {
      counter = 0;
    }

    // update the display
    scene.remove(displayObject);
    displayObject = objects[counter];
    scene.add(displayObject);

    // change the name
    objectName.innerHTML = '&nbsp;&nbsp;&nbsp;' + displayObject.name
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
    displayObject.rotation.z += 0.005;

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

INTERACTIVEWORLD.ObjectMenu.prototype.getMenuWidth = function() {
  return window.innerWidth / 4;
};

INTERACTIVEWORLD.ObjectMenu.prototype.getMenuHeight = function() {
  return this.getMenuWidth() * 0.5;
};
