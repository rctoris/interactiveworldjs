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
          '../resources/textures/bricks.jpg' : '../resources/textures/bricks.jpg',
          '../resources/textures/cardboard-corrugated.jpg' : '../resources/textures/cardboard-corrugated.jpg',
          '../resources/textures/cardboard.jpg' : '../resources/textures/cardboard.jpg',
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
          '../resources/textures/metal-vertical.jpg' : '../resources/textures/metal-vertical.jpg',
          '../resources/textures/newspaper.jpg' : '../resources/textures/newspaper.jpg',
          '../resources/textures/nightstand.jpg' : '../resources/textures/nightstand.jpg',
          '../resources/textures/painted-wall-blue.jpg' : '../resources/textures/painted-wall-blue.jpg',
          '../resources/textures/painted-wall-red.jpg' : '../resources/textures/painted-wall-red.jpg',
          '../resources/textures/particle-board.jpg' : '../resources/textures/particle-board.jpg',
          '../resources/textures/plastic-black.jpg' : '../resources/textures/plastic-black.jpg',
          '../resources/textures/rug.jpg' : '../resources/textures/rug.jpg',
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
  grunt.loadNpmTasks('grunt-jsdoc');

  grunt.registerTask('build', ['imagemin', 'csslint', 'cssmin', 'concat', 'jshint', 'uglify']);
  grunt.registerTask('doc', ['clean', 'jsdoc']);
};
