module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['src/**/*.js', 'test/**/*.js']
    }
  });

  // LOAD PLUGINS
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // TASK REGISTER
  grunt.registerTask('default', ['jshint']);
};
