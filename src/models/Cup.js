INTERACTIVEWORLD.Cup = function() {
  INTERACTIVEWORLD.Model.call(this, {
    name : 'Cup',
    width : 0.061,
    depth : 0.061,
    model : INTERACTIVEWORLD.CUP_MODEL,
    rotation : Math.PI,
    scale : 0.04
  });
};
INTERACTIVEWORLD.Cup.prototype.__proto__ = INTERACTIVEWORLD.Model.prototype;
