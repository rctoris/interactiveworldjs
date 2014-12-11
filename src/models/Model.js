INTERACTIVEWORLD.Model = function(options) {
  var that = this;
  options = options || {};
  THREE.Object3D.call(this);

  this.eventHandler = new INTERACTIVEWORLD.InteractionHandler();
  this.name = options.name;
  this.width = options.width;
  this.depth = options.depth;
  this.interactions = [];
  this.pois = [];

  var model = INTERACTIVEWORLD.PATH + options.model;
  var offsetX = options.offsetX || 0;
  var offsetY = options.offsetY || 0;
  var offsetZ = options.offsetZ || 0;
  var rotation = options.rotation || 0;
  var scale = options.scale || 1;

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(model, function(result) {
    // fix the offset
    result.scene.position.x = offsetX;
    result.scene.position.y = offsetY;
    result.scene.position.z = offsetZ;
    result.scene.rotation.z = rotation;
    result.scene.scale.x *= scale;
    result.scene.scale.y *= scale;
    result.scene.scale.z *= scale;
    that.add(result.scene);
  });

};
INTERACTIVEWORLD.Model.prototype.__proto__ = THREE.Object3D.prototype;

INTERACTIVEWORLD.Model.prototype.addInteractionSurface = function(width,
                                                                  height, offsetZ, offsetX, offsetY) {
  var that = this;

  var name = 'surface' + this.interactions.length;
  var interaction = new INTERACTIVEWORLD.InteractionSurface({
    width : width,
    height : height,
    offsetX : offsetX,
    offsetY : offsetY,
    offsetZ : offsetZ,
    name : name
  });
  interaction.eventHandler.on('addition', function(surf) {
    that.eventHandler.emit('addition', {
      name : that.name,
      position : {
        x : that.position.x,
        y : that.position.y,
        z : that.position.z
      },
      rotation : that.rotation.z,
      surface : surf
    });
  });
  this.add(interaction);
  this.interactions.push(interaction);
};

INTERACTIVEWORLD.Model.prototype.addPOI = function(name, width, height,
                                                   offsetZ, offsetX, offsetY, rotation) {
  this.pois.push({
    name : name,
    width : width,
    height : height,
    position : {
      x : offsetX,
      y : offsetY,
      z : offsetZ
    },
    rotation : rotation
  });
};

INTERACTIVEWORLD.Model.prototype.getConfig = function() {
  return {
    name : this.name,
    width : this.width,
    height : this.depth,
    position : {
      x : this.position.x,
      y : this.position.y,
      z : this.position.z
    },
    rotation : this.rotation.z,
    poi : this.pois
  };
};
