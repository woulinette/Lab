module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'portfolio/public/js/script.js' : ['portfolio/sources/js/*.js']
				} //files
			} //my_target
		}, //uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		}, //compass
		watch: {
			options: { livereload: true },
			scripts: {
			files: 	 ['portfolio/sources/js/*.js'],
			tasks:   ['uglify']	
			}, //script
			sass: {
				files: ['portfolio/sources/sass/*.scss'],
				tasks: ['compass:dev']
			}, //sass
			html: {
				files: ['portfolio/ *.html']
			}
		} //watch
	}) //initConfig	
	grunt.registerTask('default', 'watch')
} //exports