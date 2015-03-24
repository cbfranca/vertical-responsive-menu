
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/sass',
          src: ['*.scss'],
          dest: 'src',
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
        files: 'src/sass/**/*.scss',
        tasks: ['sass']
        // tasks: ['sass', 'csscomb']
      }
    },

    csscomb: {
      dynamic_mappings: {
        expand: true,
        cwd: 'src/sass/',
        src: ['*.scss'],
        dest: 'src/sass/',
        ext: '.scss'
      }
    },

    uglify: {
      options: { mangle: true },
      my_target: {
        files: [{
          expand: true,
          flatten: true,
          cwd: 'src/',
          src: ['vertical-responsive-menu.js' ],
          dest: 'dist/',
          ext: '.min.js'
        }]
      }
    },

    cssmin: {
      minify: {
        expand: true,
        flatten: true,
        cwd: 'src/',
        src: ['vertical-responsive-menu.css'],
        dest: 'dist/',
        ext: '.min.css'
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['cssmin','uglify']);

};