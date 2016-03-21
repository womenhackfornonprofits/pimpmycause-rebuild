// gruntfile.js

module.exports = function(grunt) {
	
	grunt.initConfig({
        
		pkg: require('./package.json'),
		meta: {
			banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %> */'
		},

		// Grunt clean will delete the contents of the dist/ directory before we start a new build

		clean: {
			build: ['frontend/dist'],
			options: {
				force: true
			}
		},


		// Grunt will watch for file changes
		// Sass files changed in the styles folder/sub-dir will call the ['sass'] task
		// Include pages changed will call the ['ssi'] task - Server Side Includes

		watch: {
			watch_sass: {
				files: 'frontend/src/styles/**/*.scss',
				tasks: ['sass:dev', 'postcss']
			},
			watch_ssi: {
				files: 'frontend/src/pages/**/*.html',
				tasks: ['ssi']
			},
			watch_js: {
				files: ['frontend/src/scripts/**/*.js'],
				tasks: ['uglify']
			},
            		watch_img: {
				files: ['frontend/src/img/**/*'],
				tasks: ['imagemin']
			}
		},

		// Grunt will pre-process sass files into css files from src to destination directory

		sass: {
			dev: {
				files: {
					//destination            //source file
					'frontend/dist/styles/styles.css': 'frontend/src/styles/main.scss'
				}
			},
			deploy: {
				options: {
					style: 'compressed'
				},
				files: {
					//destination          //source file
					'frontend/dist/styles/styles.css': 'frontend/src/styles/main.scss'
				}
			}
		},

		// Grunt uses a type of serverside include for common page elements like header/footer/nav
		// https://github.com/jamesor/grunt-ssimin

		ssi: {
			dev: {
				options: {
					// task-specific options
					cache: 'all',
					cacheDir: '.ssi-cache',
					baseDir: 'frontend/src/pages'  // dir where to locate files to be processed for ssi
				},
				files: [{
					// target-specific file lists and/or options go here
					expand: true,     // enable dynamic expansion
					cwd: 'frontend/src/pages', // src matches are relative to this path
					src: ['*.html'],  // actual patten(s) to match
					dest: 'frontend/dist'      // destination path prefix
				}]
			}
		},


		// Config for grunt-postcss (multiple css post processors, minification, autoprefixing)

		postcss: {
			options: {
				safe: true,
				map: true,
				processors: [
					require('rucksack-css')({
						fallbacks: true
					}),
					require('pixrem')(16, { // Value is the same as on _config.scss $fsz variable multiplied by 10.
						html: true,
						replace: false,
						atrules: true,
						browsers: ['last 3 versions', '> 2%', 'ie 8', 'ie 7']
					}),
					require('autoprefixer')({
						browsers: ['last 3 versions', '> 2%', 'ie 8', 'ie 7']
					})
				]
			},
			main: {
				src: 'frontend/dist/styles/styles.css'
			}
		},

		// concatenate javascript files for development

		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: [
					'frontend/src/scripts/vendors/jquery.js',
					'frontend/src/scripts/vendors/fastclick.js',
					'frontend/src/scripts/vendors/jquery.cookie.js',
					'frontend/src/scripts/vendors/jquery.placeholder.js',
					'frontend/src/scripts/vendors/jquery.selectBox.js',
					'frontend/src/scripts/vendors/jquery.easing.js',
					'frontend/src/scripts/vendors/foundation.js',
					'frontend/src/scripts/vendors/foundation.equalizer.js',
					'frontend/src/scripts/vendors/slick.js',
					'frontend/src/scripts/scripts.js'
				],
				dest: 'frontend/dist/scripts/scripts.js',
			},
		},

		// compress javascript files for deployment

		uglify: {
			options: {
				beautify: false,
				sourceMap: true,
				sourceMapIncludeSources: true,
				sourceMapName: 'frontend/dist/scripts/scripts.map'
			},
			main: {
				files: {
					'frontend/dist/scripts/scripts.js': [
						// 'scripts/**/*.js'
						'frontend/src/scripts/vendors/jquery.js',
						'frontend/src/scripts/vendors/fastclick.js',
						'frontend/src/scripts/vendors/jquery.cookie.js',
						'frontend/src/scripts/vendors/jquery.placeholder.js',
						'frontend/src/scripts/vendors/jquery.selectBox.js',
						'frontend/src/scripts/vendors/jquery.easing.js',
						'frontend/src/scripts/vendors/foundation.js',
						'frontend/src/scripts/vendors/foundation.equalizer.js',
						'frontend/src/scripts/vendors/slick.js',
						'frontend/src/scripts/scripts.js'
					]
				}
			}
		},


		// Browsersync live reloads the page you are working on across all browsers across all devices
		// Browsersync can watch your files as you work. Changes you make will either be injected into the page
		// (CSS & images) or will cause all browsers to do a full-page refresh.

		browserSync: {
			default_options: {
				bsFiles: {
					src: [
						'frontend/dist/styles/*.css',
						'frontend/dist/*.html',
						'frontend/dist/scripts/*.js'
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: 'frontend/dist'
					}
				}
			}
		},
        
        
        // Minify images in production
        
         imagemin: {
              dist: {
                options: {
                  optimizationLevel: 3
                },
                files: [
                  {
                    expand: true,
                    cwd: 'frontend/src/img/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'frontend/dist/img'
                  }
                ]
              }
        },
        
        
        // Copy fonts to distribution directory
        
        copy: {
            fonts: {
                files: [
                  {
                    expand: true,
                    cwd: 'frontend/src/fonts/',
                    src: ['**'],
                    dest: 'frontend/dist/fonts'
                  }
                ]    
            }
        },
        
        
        // GitHub pages generates a live site from a git repo
        // Running this task with grunt will create a temporary clone of the current repository, 
        // create a gh-pages branch if one doesn't already exist, copy over all files from the 
        // dist directory that match patterns from thesrc configuration, commit all changes, 
        // and push to the origin remote.
        
        'gh-pages': {
            options: {
                base: 'frontend/dist'
            },
            src: ['**']
        }

	});

	// Dependent plug-ins

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-ssi');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    	grunt.loadNpmTasks('grunt-contrib-imagemin');
    	grunt.loadNpmTasks('grunt-contrib-copy');
    	grunt.loadNpmTasks('grunt-gh-pages');


    // include call to sass/ssi separately for first time run thereafter called via watch
	grunt.registerTask('default', ['sass:dev', 'ssi', 'postcss', 'concat', 'imagemin', 'copy:fonts', 'browserSync', 'watch']);
    // run grunt deploy for a distribution ready product
    grunt.registerTask('deploy', ['clean', 'sass:deploy', 'ssi', 'postcss', 'uglify', 'imagemin', 'copy:fonts', 'gh-pages']);
    grunt.registerTask('backend', ['mocha_istanbul']);

};
