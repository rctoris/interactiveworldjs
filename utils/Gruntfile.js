module.exports = function(grunt) {

  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    concat : {
      main : {
        src : [
          '../src/*.js',
          '../src/**/*.js'
        ],
        dest : '../build/interactiveworld.js'
      },
      eventemitter2 : {
        src : [
          '../include/EventEmitter2/eventemitter2.js'
        ],
        dest : '../build/eventemitter2.js'
      },
      three : {
        src : [
          '../include/threejs/three.js',
          '../include/threejs/ColladaLoader.js'
        ],
        dest : '../build/threecolladaloader.js'
      }
    },
    jshint : {
      options : {
        jshintrc : '.jshintrc'
      },
      files : [
        'Gruntfile.js',
        '../build/interactiveworld.js'
      ]
    },
    uglify : {
      options : {
        report : 'min'
      },
      main : {
        src : '../build/interactiveworld.js',
        dest : '../build/interactiveworld.min.js'
      },
      eventemitter2 : {
        src : '../build/eventemitter2.js',
        dest : '../build/eventemitter2.min.js'
      },
      three : {
        src : '../build/threecolladaloader.js',
        dest : '../build/threecolladaloader.min.js'
      }
    },
    csslint : {
      build : {
        options : {
          csslintrc : '.csslintrc'
        },
        src : [
          '../resources/css/interactiveworld.css',
        ]
      }
    },
    cssmin : {
      options : {
        report : 'min'
      },
      build : {
        files : {
          '../resources/css/interactiveworld.min.css' : ['../resources/css/interactiveworld.css']
        }
      }
    },
    imagemin : {
      build : {
        options : {
          optimizationLevel : 7
        },
        files : {
          '../resources/textures/book-page-1.jpg' : '../resources/textures/book-page-1.jpg',
          '../resources/textures/book-page-2.jpg' : '../resources/textures/book-page-2.jpg',
          '../resources/textures/bricks.jpg' : '../resources/textures/bricks.jpg',
          '../resources/textures/cardboard-corrugated.jpg' : '../resources/textures/cardboard-corrugated.jpg',
          '../resources/textures/cardboard.jpg' : '../resources/textures/cardboard.jpg',
          '../resources/textures/carpet-blue.jpg' : '../resources/textures/carpet-blue.jpg',
          '../resources/textures/carpet-grey.jpg' : '../resources/textures/carpet-grey.jpg',
          '../resources/textures/carpet-pattern.jpg' : '../resources/textures/carpet-pattern.jpg',
          '../resources/textures/carpet-tan.jpg' : '../resources/textures/carpet-tan.jpg',
          '../resources/textures/china.jpg' : '../resources/textures/china.jpg',
          '../resources/textures/countertop-black.jpg' : '../resources/textures/countertop-black.jpg',
          '../resources/textures/countertop-red.jpg' : '../resources/textures/countertop-red.jpg',
          '../resources/textures/fabric-aqua.jpg' : '../resources/textures/fabric-aqua.jpg',
          '../resources/textures/fabric-red.jpg' : '../resources/textures/fabric-red.jpg',
          '../resources/textures/glass.jpg' : '../resources/textures/glass.jpg',
          '../resources/textures/grass.jpg' : '../resources/textures/grass.jpg',
          '../resources/textures/hardwood-dark.jpg' : '../resources/textures/hardwood-dark.jpg',
          '../resources/textures/hardwood-light.jpg' : '../resources/textures/hardwood-light.jpg',
          '../resources/textures/magazine-1.jpg' : '../resources/textures/magazine-1.jpg',
          '../resources/textures/magazine-2.jpg' : '../resources/textures/magazine-2.jpg',
          '../resources/textures/magazine-3.jpg' : '../resources/textures/magazine-3.jpg',
          '../resources/textures/metal-vertical.jpg' : '../resources/textures/metal-vertical.jpg',
          '../resources/textures/newspaper.jpg' : '../resources/textures/newspaper.jpg',
          '../resources/textures/nightstand.jpg' : '../resources/textures/nightstand.jpg',
          '../resources/textures/painted-wall-blue.jpg' : '../resources/textures/painted-wall-blue.jpg',
          '../resources/textures/painted-wall-red.jpg' : '../resources/textures/painted-wall-red.jpg',
          '../resources/textures/particle-board.jpg' : '../resources/textures/particle-board.jpg',
          '../resources/textures/plastic-black.jpg' : '../resources/textures/plastic-black.jpg',
          '../resources/textures/rug.jpg' : '../resources/textures/rug.jpg',
          '../resources/textures/sky.jpg' : '../resources/textures/sky.jpg',
          '../resources/textures/stone-wall.jpg' : '../resources/textures/stone-wall.jpg',
          '../resources/textures/tile-floor.jpg' : '../resources/textures/tile-floor.jpg',
          '../resources/textures/tile-wall.jpg' : '../resources/textures/tile-wall.jpg',
          '../resources/textures/wallpaper-dark.jpg' : '../resources/textures/wallpaper-dark.jpg',
          '../resources/textures/wallpaper-light.jpg' : '../resources/textures/wallpaper-light.jpg',
          '../resources/textures/wallpaper-red-dots.jpg' : '../resources/textures/wallpaper-red-dots.jpg',
          '../resources/textures/wood-cherry.jpg' : '../resources/textures/wood-cherry.jpg',
          '../resources/textures/wood-mahogany-polished.jpg' : '../resources/textures/wood-mahogany-polished.jpg',
          '../resources/textures/wood-mahogany.jpg' : '../resources/textures/wood-mahogany.jpg',
          '../resources/textures/wood-oak-horizontal.jpg' : '../resources/textures/wood-oak-horizontal.jpg',
          '../resources/textures/wood-oak-vertical.jpg' : '../resources/textures/wood-oak-vertical.jpg',
          '../resources/textures/wood-pine.jpg' : '../resources/textures/wood-pine.jpg',
          '../resources/images/next.png' : '../resources/images/next.png',
          '../resources/images/previous.png' : '../resources/images/previous.png'
        }
      }
    },
    xmlmin : {
      dist : {
        files : {
          '../resources/models/bed.min.dae': '../resources/models/bed.dae',
          '../resources/models/cabinet.min.dae': '../resources/models/cabinet.dae',
          '../resources/models/coffee-table.min.dae': '../resources/models/coffee-table.dae',
          '../resources/models/couch.min.dae': '../resources/models/couch.dae',
          '../resources/models/counter.min.dae': '../resources/models/counter.dae',
          '../resources/models/dining-table.min.dae': '../resources/models/dining-table.dae',
          '../resources/models/dresser.min.dae': '../resources/models/dresser.dae',
          '../resources/models/magazines.min.dae': '../resources/models/magazines.dae',
          '../resources/models/nightstand.min.dae': '../resources/models/nightstand.dae',
          '../resources/models/oven.min.dae': '../resources/models/oven.dae',
          '../resources/models/plate.min.dae': '../resources/models/plate.dae',
          '../resources/models/refrigerator.min.dae': '../resources/models/refrigerator.dae',
          '../resources/models/sink.min.dae': '../resources/models/sink.dae',
          '../resources/models/spoon.min.dae': '../resources/models/spoon.dae',
          '../resources/models/tv.min.dae': '../resources/models/tv.dae',
          '../resources/models/cup.min.dae': '../resources/models/cup.dae',
          '../resources/models/fork.min.dae': '../resources/models/fork.dae'
        }
      }
    },
    clean : {
      options : {
        force : true
      },
      doc : ['../doc']
    },
    jsdoc : {
      doc : {
        src : [
          '../src/*.js',
          '../src/**/*.js'
        ],
        options : {
          destination : '../doc'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-xmlmin');
  grunt.loadNpmTasks('grunt-jsdoc');

  grunt.registerTask('build', ['imagemin', 'csslint', 'cssmin', 'concat', 'jshint', 'uglify', 'xmlmin']);
  grunt.registerTask('doc', ['clean', 'jsdoc']);
};
