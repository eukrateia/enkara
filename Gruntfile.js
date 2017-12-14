module.exports = function(grunt) {
  grunt.initConfig({
    sass:{
      dist:{
        files:{
          'public/stylesheets/style.css': 'scss/style.scss',
          'public/tc-app/style.css': 'public/tc-app/style.scss'
        }
      },
      options: {
        includePaths: [
          './bower_components/css-calc-mixin',
          './font-awesome/scss'
        ]
      }
    },
    watch: {
      source: {
        files: ['scss/*.scss', 'views/**/*.pug',
          'public/tc-app/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};
