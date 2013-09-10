module.exports = function(grunt) {

  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: './vendor'
        }
      }
    },
    rig: {
      compile: {        
        files: {
          'dist/app.js': ['src/app.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-rigger');

  grunt.registerTask('default', ['bower', 'rig']);
};
