
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
        }],
        options: {
          lineNumbers: true,
          sourcemap: 'none',
          noCache: true
        },
      }
    },

    watch: {
      css: {
        files: 'assets/sass/*.scss',
        tasks: ['sass']
        // tasks: ['sass', 'csscomb']
      }
    },

    csscomb: {
        dynamic_mappings: {
            expand: true,
            cwd: 'assets/css/',
            src: ['*.css'],
            dest: 'assets/css/',
            ext: '.css'
        }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-csscomb');
  // Default task(s).
  grunt.registerTask('default', ['watch']);

};