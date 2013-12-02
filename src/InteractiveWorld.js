/**
 * @author Russell Toris - rctoris@wpi.edu
 */

var INTERACTIVEWORLD = INTERACTIVEWORLD || {
  REVISION : '1-devel'
};

INTERACTIVEWORLD.BOOK_PAGE_1_TEXTURE = 'resources/textures/book-page-1.jpg';
INTERACTIVEWORLD.BOOK_PAGE_2_TEXTURE = 'resources/textures/book-page-2.jpg';
INTERACTIVEWORLD.BRICKS_TEXTURE = 'resources/textures/bricks.jpg';
INTERACTIVEWORLD.CARDBOARD_CORRUGATED_TEXTURE = 'resources/textures/cardboard-corrugated.jpg';
INTERACTIVEWORLD.CARDBOARD_TEXTURE = 'resources/textures/cardboard.jpg';
INTERACTIVEWORLD.CARPET_BLUE_TEXTURE = 'resources/textures/carpet-blue.jpg';
INTERACTIVEWORLD.CARPET_GREY_TEXTURE = 'resources/textures/carpet-grey.jpg';
INTERACTIVEWORLD.CARPET_PATTERN_TEXTURE = 'resources/textures/carpet-pattern.jpg';
INTERACTIVEWORLD.CARPET_TAN_TEXTURE = 'resources/textures/carpet-tan.jpg';
INTERACTIVEWORLD.CHINA_TEXTURE = 'resources/textures/china.jpg';
INTERACTIVEWORLD.COUNTERTOP_BLACK_TEXTURE = 'resources/textures/countertop-black.jpg';
INTERACTIVEWORLD.COUNTERTOP_RED_TEXTURE = 'resources/textures/countertop-red.jpg';
INTERACTIVEWORLD.FABRIC_AQUA_TEXTURE = 'resources/textures/fabric-aqua.jpg';
INTERACTIVEWORLD.FABRIC_RED_TEXTURE = 'resources/textures/fabric-red.jpg';
INTERACTIVEWORLD.GLASS_TEXTURE = 'resources/textures/glass.jpg';
INTERACTIVEWORLD.GRASS_TEXTURE = 'resources/textures/grass.jpg';
INTERACTIVEWORLD.HARDWOOD_DARK_TEXTURE = 'resources/textures/hardwood-dark.jpg';
INTERACTIVEWORLD.HARDWOOD_LIGHT_TEXTURE = 'resources/textures/hardwood-light.jpg';
INTERACTIVEWORLD.MAGAZINE_1_TEXTURE = 'resources/textures/magazine-1.jpg';
INTERACTIVEWORLD.MAGAZINE_2_TEXTURE = 'resources/textures/magazine-2.jpg';
INTERACTIVEWORLD.MAGAZINE_3_TEXTURE = 'resources/textures/magazine-3.jpg';
INTERACTIVEWORLD.METAL_VERTICAL_TEXTURE = 'resources/textures/metal-vertical.jpg';
INTERACTIVEWORLD.NEWSPAPER_TEXTURE = 'resources/textures/newspaper.jpg';
INTERACTIVEWORLD.NIGHTSTAND_TEXTURE = 'resources/textures/nightstand.jpg';
INTERACTIVEWORLD.PAINTED_WALL_BLUE_TEXTURE = 'resources/textures/painted-wall-blue.jpg';
INTERACTIVEWORLD.PAINTED_WALL_RED_TEXTURE = 'resources/textures/painted-wall-red.jpg';
INTERACTIVEWORLD.PARTICLE_BOARD_TEXTURE = 'resources/textures/particle-board.jpg';
INTERACTIVEWORLD.PLASTIC_BLACK_TEXTURE = 'resources/textures/plastic-black.jpg';
INTERACTIVEWORLD.RUG_TEXTURE = 'resources/textures/rug.jpg';
INTERACTIVEWORLD.SKY_TEXTURE = 'resources/textures/sky.jpg';
INTERACTIVEWORLD.STONE_WALL_TEXTURE = 'resources/textures/stone-wall.jpg';
INTERACTIVEWORLD.TILE_FLOOR_TEXTURE = 'resources/textures/tile-floor.jpg';
INTERACTIVEWORLD.TILE_WALL_TEXTURE = 'resources/textures/tile-wall.jpg';
INTERACTIVEWORLD.WALLPAPER_DARK_TEXTURE = 'resources/textures/wallpaper-dark.jpg';
INTERACTIVEWORLD.WALLPAPER_LIGHT_TEXTURE = 'resources/textures/wallpaper-light.jpg';
INTERACTIVEWORLD.WALLPAPER_RED_DOTS_TEXTURE = 'resources/textures/wallpaper-red-dots.jpg';
INTERACTIVEWORLD.WOOD_CHERRY_TEXTURE = 'resources/textures/wood-cherry.jpg';
INTERACTIVEWORLD.WOOD_MAHOGANY_POLISHED_TEXTURE = 'resources/textures/wood-mahogany-polished.jpg';
INTERACTIVEWORLD.WOOD_MAHOGANY_TEXTURE = 'resources/textures/wood-mahogany.jpg';
INTERACTIVEWORLD.WOOD_OAK_HORIZONTAL_TEXTURE = 'resources/textures/wood-oak-horizontal.jpg';
INTERACTIVEWORLD.WOOD_OACK_VERTICAL_TEXTURE = 'resources/textures/wood-oak-vertical.jpg';
INTERACTIVEWORLD.WOOD_PINE_TEXTURE = 'resources/textures/wood-pine.jpg';

INTERACTIVEWORLD.NEXT_ARROW = 'resources/images/next.png';
INTERACTIVEWORLD.PREVIOUS_ARROW = 'resources/images/previous.png';

INTERACTIVEWORLD.Z_INDEX = 0.005;

INTERACTIVEWORLD.NORTH_WALL = 0;
INTERACTIVEWORLD.EAST_WALL = 1;
INTERACTIVEWORLD.SOUTH_WALL = 2;
INTERACTIVEWORLD.WEST_WALL = 3;

INTERACTIVEWORLD.NEGATIVE_DOOR_SIDE = 0;
INTERACTIVEWORLD.POSITIVE_DOOR_SIDE = 1;

INTERACTIVEWORLD.INTERACTION_SURFACE_THICKNESS = 0.005;

INTERACTIVEWORLD.OBJECT_MENU_DISPLAY_WIDTH = 3;
INTERACTIVEWORLD.OBJECT_MENU_DISPLAY_HEIGHT = 3;
INTERACTIVEWORLD.OBJECT_MENU_DISPLAY_FLOOR_TEXTURE = INTERACTIVEWORLD.WOOD_MAHOGANY_POLISHED_TEXTURE;

INTERACTIVEWORLD.WORLD_WIDTH = 20;
INTERACTIVEWORLD.WORLD_HEIGHT = 20;
INTERACTIVEWORLD.WORLD_FLOOR_TEXTURE = INTERACTIVEWORLD.GRASS_TEXTURE;

INTERACTIVEWORLD.WALL_WIDTH = 0.05;
INTERACTIVEWORLD.WALL_HEIGHT = 0.75;
INTERACTIVEWORLD.DOOR_WIDTH = 0.8;

INTERACTIVEWORLD.HALLWAY_WIDTH = 1;

INTERACTIVEWORLD.ROOM_WIDTH = 4.9;
INTERACTIVEWORLD.ROOM_HEIGHT = 4;

INTERACTIVEWORLD.HOUSE_WIDTH = (INTERACTIVEWORLD.ROOM_WIDTH * 2)
    + INTERACTIVEWORLD.HALLWAY_WIDTH;
INTERACTIVEWORLD.HOUSE_HEIGHT = (INTERACTIVEWORLD.ROOM_HEIGHT * 2)
    + INTERACTIVEWORLD.HALLWAY_WIDTH;
INTERACTIVEWORLD.HOUSE_WALL_TEXTURE = INTERACTIVEWORLD.BRICKS_TEXTURE;
INTERACTIVEWORLD.HOUSE_FLOOR_TEXTURE = INTERACTIVEWORLD.HARDWOOD_LIGHT_TEXTURE;

INTERACTIVEWORLD.BEDROOM_WALL_TEXTURE = INTERACTIVEWORLD.PAINTED_WALL_BLUE_TEXTURE;
INTERACTIVEWORLD.BEDROOM_FLOOR_TEXTURE = INTERACTIVEWORLD.CARPET_GREY_TEXTURE;

INTERACTIVEWORLD.KITCHEN_WALL_TEXTURE = INTERACTIVEWORLD.TILE_WALL_TEXTURE;
INTERACTIVEWORLD.KITCHEN_FLOOR_TEXTURE = INTERACTIVEWORLD.TILE_FLOOR_TEXTURE;

INTERACTIVEWORLD.DINING_ROOM_WALL_TEXTURE = INTERACTIVEWORLD.WALLPAPER_LIGHT_TEXTURE;
INTERACTIVEWORLD.DINING_ROOM_FLOOR_TEXTURE = INTERACTIVEWORLD.HARDWOOD_DARK_TEXTURE;

INTERACTIVEWORLD.LIVING_ROOM_WALL_TEXTURE = INTERACTIVEWORLD.PAINTED_WALL_RED_TEXTURE;
INTERACTIVEWORLD.LIVING_ROOM_FLOOR_TEXTURE = INTERACTIVEWORLD.CARPET_TAN_TEXTURE;

INTERACTIVEWORLD.BED_MODEL = 'resources/models/bed.min.dae';
INTERACTIVEWORLD.DRESSER_MODEL = 'resources/models/dresser.min.dae';
INTERACTIVEWORLD.NIGHTSTAND_MODEL = 'resources/models/nightstand.min.dae';
INTERACTIVEWORLD.DINING_TABLE_MODEL = 'resources/models/dining-table.min.dae';
INTERACTIVEWORLD.SINK_MODEL = 'resources/models/sink.min.dae';
INTERACTIVEWORLD.CABINET_MODEL = 'resources/models/cabinet.min.dae';
INTERACTIVEWORLD.REFRIGERATOR_MODEL = 'resources/models/refrigerator.min.dae';
INTERACTIVEWORLD.OVEN_MODEL = 'resources/models/oven.min.dae';
INTERACTIVEWORLD.COUNTER_MODEL = 'resources/models/counter.min.dae';
INTERACTIVEWORLD.COUCH_MODEL = 'resources/models/couch.min.dae';
INTERACTIVEWORLD.TV_MODEL = 'resources/models/tv.min.dae';
INTERACTIVEWORLD.COFFEE_TABLE_MODEL = 'resources/models/coffee-table.min.dae';
INTERACTIVEWORLD.PLATE_MODEL = 'resources/models/plate.min.dae';
INTERACTIVEWORLD.SPOON_MODEL = 'resources/models/spoon.min.dae';
INTERACTIVEWORLD.MAGAZINES_MODEL = 'resources/models/magazines.min.dae';
INTERACTIVEWORLD.CUP_MODEL = 'resources/models/cup.min.dae';
INTERACTIVEWORLD.FORK_MODEL = 'resources/models/fork.min.dae';

INTERACTIVEWORLD.DIV_ID = 'interactive-world';

INTERACTIVEWORLD.init = function() {
  // start with a fresh page
  document.body.innerHTML = '';

  // create the main container we need
  var main = document.createElement('div');
  main.id = INTERACTIVEWORLD.DIV_ID;
  document.getElementsByTagName('body')[0].appendChild(main);

  // add the viewer
  var viewer = new INTERACTIVEWORLD.Viewer({
    divID : INTERACTIVEWORLD.DIV_ID,
    antialias : true
  });

  return viewer;
};
