module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      build: {
        src  : ['../src/*.js', '../src/**/*.js'],
        dest : '../build/interactiveworld.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: [
        'Gruntfile.js',
        '../build/interactiveworld.js'
      ]
    },
    uglify: {
      options: {
        report: 'min'
      },
      build: {
        src: '../build/interactiveworld.js',
        dest: '../build/interactiveworld.min.js'
      }
    },
    clean: {
      options: {
        force: true
      },
      doc: ['../doc']
    },
    jsdoc: {
      doc: {
        src: [
          '../src/*.js',
          '../src/**/*.js'
        ],
        options: {
          destination: '../doc'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-jsdoc');

  grunt.registerTask('build', ['concat', 'jshint', 'uglify']);
  grunt.registerTask('doc', ['clean', 'jsdoc']);
};

