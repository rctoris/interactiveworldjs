INTERACTIVEWORLD.Viewer = function(options) {
  var that = this;
  options = options || {};
  var divID = options.divID;
  var antialias = options.antialias;
  var task = options.task || 0;
  this.manuallyPlacedItems = [];

  // determine the task
  var objs = [];
  var objInfo= [];
  var count = 0;
  var text = '';
  if (task === INTERACTIVEWORLD.TASK_TABLE_SETTING) {
    // table setting
    objs = [ new INTERACTIVEWORLD.Plate(), new INTERACTIVEWORLD.Cup(),
        new INTERACTIVEWORLD.Fork(), new INTERACTIVEWORLD.Spoon() ];
    count = 3;
    text = 'Set the table with these objects.';
  } else if (task === INTERACTIVEWORLD.TASK_MAGAZINE_PLACEMENT) {
    // table setting
    objs = [ new INTERACTIVEWORLD.Magazines()];
    count = 3;
    text = 'Place the object where it belongs.';
  } else if (task === INTERACTIVEWORLD.TASK_DIRTY_DISHES) {
    // table setting
    objs = [ new INTERACTIVEWORLD.Plate(), new INTERACTIVEWORLD.Cup(),
        new INTERACTIVEWORLD.Fork(), new INTERACTIVEWORLD.Spoon() ];
    count = 3;
    text = 'Place the dirty dishes where they belong.';
  }
  for (var i=0; i < objs.length; i++) {
    objInfo.push({
      name: objs[i].name,
      width: objs[i].width,
      height: objs[i].depth
    });
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
  this.config.objects = objInfo;
  this.config.task = text;
  world.interactionHandler.on('addition', function(event) {
    that.emit('addition', event);
  });
  this.world = world;

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

INTERACTIVEWORLD.Viewer.prototype.placeObjectOnSurface = function(options) {
  options = options || {};
  var furnitureName = options.furnitureName;
  var surfaceName = options.surfaceName || 'surface';
  var itemName = options.itemName;
  var position = options.position;
  var rotation = options.rotation;

  for (var i = 0; i < this.world.house.rooms.length; i++) {
    var room = this.world.house.rooms[i];
    for (var j = 0; j < room.furniture.length; j++) {
      var furniture = room.furniture[j];
      if (furniture.name === furnitureName) {
        for (var k = 0; k < furniture.interactions.length; k++) {
          var interaction = furniture.interactions[k];
          if (interaction.name === surfaceName) {
            // create the item
            var item = INTERACTIVEWORLD.createObjectByName(itemName);
            item.position.x = position.x;
            item.position.y = position.y;
            item.position.z = position.z;
            item.rotation.z = rotation.z;
            interaction.add(item);
            this.manuallyPlacedItems.push(item);
          }
        }
      }
    }
  }
};

INTERACTIVEWORLD.Viewer.prototype.placeObjectOnFurniture = function(options) {
  options = options || {};
  var furnitureName = options.furnitureName;
  var itemName = options.itemName;
  var position = options.position;
  var rotation = options.rotation;

  for (var i = 0; i < this.world.house.rooms.length; i++) {
    var room = this.world.house.rooms[i];
    for (var j = 0; j < room.furniture.length; j++) {
      var furniture = room.furniture[j];
      if (furniture.name === furnitureName) {
        // create the item
        var item = INTERACTIVEWORLD.createObjectByName(itemName);
        item.position.x = position.x;
        item.position.y = position.y;
        item.position.z = furniture.interactions[0].position.z;
        item.rotation.z = rotation.z;
        furniture.add(item);
        this.manuallyPlacedItems.push(item);
      }
    }
  }
};

INTERACTIVEWORLD.Viewer.prototype.placeObjectOnPoi = function(options) {
  options = options || {};
  var furnitureName = options.furnitureName;
  var poiName = options.poiName;
  var itemName = options.itemName;
  var position = options.position;
  var rotation = options.rotation;

  for (var i = 0; i < this.world.house.rooms.length; i++) {
    var room = this.world.house.rooms[i];
    for (var j = 0; j < room.furniture.length; j++) {
      var furniture = room.furniture[j];
      if (furniture.name === furnitureName) {
        for (var k = 0; k < furniture.pois.length; k++) {
          var poi = furniture.pois[k];
          if (poi.name === poiName) {
            // create the item
            var item = INTERACTIVEWORLD.createObjectByName(itemName);
            item.position.x = position.x;
            item.position.y = position.y;
            item.position.z = poi.height;
            item.rotation.z = rotation.z;
            furniture.poiFrames[k].add(item);
            this.manuallyPlacedItems.push(item);
            return;
          }
        }
      }
    }
  }
};

INTERACTIVEWORLD.Viewer.prototype.placeObjectOnObject = function(options) {
  options = options || {};
  var referenceItemName = options.referenceItemName;
  var itemName = options.itemName;
  var position = options.position;
  var rotation = options.rotation;

  for (var i = 0; i < this.manuallyPlacedItems.length; i++) {
    var referenceItem = this.manuallyPlacedItems[i];
    if (referenceItem.name === referenceItemName) {
      // create the item
      var item = INTERACTIVEWORLD.createObjectByName(itemName);
      item.position.x = position.x;
      item.position.y = position.y;
      item.position.z = position.z;
      item.rotation.z = rotation.z;
      referenceItem.add(item);
      this.manuallyPlacedItems.push(item);
      return;
    }
  }
};

INTERACTIVEWORLD.Viewer.prototype.displayTemplateFromModels = function(models) {
  // get the initial state
  var availableFrames = [];
  for (var i = 0; i < this.world.house.rooms.length; i++) {
    var room = this.world.house.rooms[i];
    for (var j = 0; j < room.furniture.length; j++) {
      var furniture = room.furniture[j];
      availableFrames.push({name: furniture.name, type: 'furniture'});
      for (var k = 0; k < furniture.pois.length; k++) {
        var poi = furniture.pois[k];
        var add = true;
        for (var l = 0; l < availableFrames.length; l++) {
          if (availableFrames[l].name === poi.name) {
            add = false;
            break;
          }
        }
        if (add) {
          availableFrames.push({name: poi.name, type: 'poi', furniture: furniture.name});
        }
      }
    }
  }

  // available items
  var availableItems = [];
  for (var m = 0; m < models.length; m++) {
    if (availableItems.indexOf(models[m].placement.item.name) === -1) {
      availableItems.push(models[m].placement.item.name);
    }
  }

  // place all the items we need to place
  while(availableItems.length > 0) {
    var bestValue = Infinity;
    var bestPlacement = {};
    for (var n = 0; n < models.length; n++) {
      var model = models[n];
      // check if this item needs to be placed still
      if (availableItems.indexOf(model.placement.item.name) >= 0) {
        // now check if the reference frame is available
        var available = false;
        for (var o = 0; o < availableFrames.length; o++) {
          if (availableFrames[o].name === model.placement.reference_frame_id) {
            available = true;
            break;
          }
        }
        if (available && model.decision_value < bestValue) {
          bestValue = model.decision_value;
          bestPlacement = model.placement;
        }
      }
    }

    // find the reference frame to place in
    for (var p = 0; p < availableFrames.length; p++) {
      var frame = availableFrames[p];
      if (frame.name === bestPlacement.reference_frame_id) {
        console.log('Placing ' + bestPlacement.item.name + ' w.r.t ' + bestPlacement.reference_frame_id);
        // place the item
        switch (frame.type) {
          case 'furniture':
            this.placeObjectOnFurniture({
              furnitureName : frame.name,
              itemName : bestPlacement.item.name,
              position : bestPlacement.position,
              rotation : {z: bestPlacement.rotation}
            });
            break;
          case 'poi':
            this.placeObjectOnPoi({
              furnitureName : frame.furniture,
              poiName : frame.name,
              itemName : bestPlacement.item.name,
              position : bestPlacement.position,
              rotation : {z: bestPlacement.rotation}
            });
            break;
          case 'item':
            this.placeObjectOnObject({
              referenceItemName : frame.name,
              itemName : bestPlacement.item.name,
              position : bestPlacement.position,
              rotation : {z: bestPlacement.rotation}
            });
            break;
        }

        // remove the item from the list
        availableItems.splice(availableItems.indexOf(bestPlacement.item.name), 1);
        // add the item as a possible reference frame
        availableFrames.push({name: bestPlacement.item.name, type: 'item'});
        break;
      }
    }
  }
};
