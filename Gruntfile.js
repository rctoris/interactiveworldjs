module.exports = function(grunt) {

  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    concat : {
      build : {
        src : [
          'src/*.js',
          'src/models/Model.js',
          'src/**/*.js'
        ],
        dest : 'build/interactiveworld.js'
      }
    },
    jshint : {
      options : {
        jshintrc : '.jshintrc'
      },
      files : [
        'Gruntfile.js',
        'build/interactiveworld.js'
      ]
    },
    uglify : {
      options : {
        report : 'min'
      },
      build : {
        src : 'build/interactiveworld.js',
        dest : 'build/interactiveworld.min.js'
      }
    },
    csslint : {
      build : {
        options : {
          csslintrc : '.csslintrc'
        },
        src : [
          'resources/css/interactiveworld.css',
        ]
      }
    },
    cssmin : {
      options : {
        report : 'min'
      },
      build : {
        files : {
          'resources/css/interactiveworld.min.css' : ['resources/css/interactiveworld.css']
        }
      }
    },
    imagemin : {
      build : {
        options : {
          optimizationLevel : 7
        },
        files: [{
          expand: true,
          cwd: 'resources',
          src: '**/*.{png,jpg}',
          dest: 'resources'
        }]
      }
    },
    clean : {
      options : {
        force : true
      },
      doc : ['doc']
    },
    jsdoc : {
      doc : {
        src : [
          'src/*.js',
          'src/**/*.js'
        ],
        options : {
          destination : 'doc'
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
