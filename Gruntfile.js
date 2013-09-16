module.exports = function(grunt) {

    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: './vendor'
                }
            }
        },
        jsbeautifier: {
            files: ['src/**/*.js', 'lib/**/*.js', 'Gruntfile.js'],
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
    grunt.loadNpmTasks('grunt-jsbeautifier');

    grunt.registerTask('install', ['bower']);
    grunt.registerTask('default', ['jsbeautifier', 'rig']);
};
