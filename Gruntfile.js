
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/sass',
          src: ['*.scss'],
          dest: 'assets/css',
          ext: '.css'
        }]
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('sass', ['sass']);

};