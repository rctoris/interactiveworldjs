INTERACTIVEWORLD.Fork = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Fork',
    width : 0.025,
    depth : 0.195,
    model : INTERACTIVEWORLD.FORK_MODEL,
    offsetX : -0.0155,
    offsetY : 0.0415,
    rotation : Math.PI / 2.0,
    scale : 0.95
  });
};
INTERACTIVEWORLD.Fork.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
