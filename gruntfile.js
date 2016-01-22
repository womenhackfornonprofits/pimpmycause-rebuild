module.exports = function(grunt) {

  grunt.initConfig({
    // TODO - add src file path
    jshint: {
      all: ['', '']
    },
    mocha_istanbul: {
        target: {
            src: 'tests'
        }
    }
  });

  grunt.loadNpmTasks('grunt-mocha-istanbul');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', 'jshint', 'mocha_istanbul');

};
