/*global module */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            folder: ["dist/*"]
        },
        jshint: {
            devel: {
                options: {
                    asi: false,
                    browser: true,
                    devel: true,
                    debug: true
                },
                src: ['src/*.js', '!src/template.js']
            },
            release: {
                options: {
                    browser: true
                },
                src: ['src/*.js', '!src/template.js']
            }
        },
        uglify: {
            all: {
                src: "dist/<%=pkg.name%>.js",
                dest: "dist/<%=pkg.name%>.min.js"
            }
        },
        rig: {
            options: {
                processContent: true,
                data: {
                    version: '<%= pkg.version %><%= grunt.config("buildNumber") %>',
                    build: '<%= grunt.template.today("mm/dd/yyyy hh:MM:ss TT") %>'
                }
            },
            all: {
                files: {
                    "dist/<%=pkg.name%>.js": "src/<%=pkg.name%>.js"
                }
            }
        },
        handlebars: {
            options: {
                namespace: "Templates"
            },
            all: {
                files: {
                    "src/template.js": ["src/template.html", "src/controls/template.html"]
                }
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'src/controls/sass',
                    cssDir: 'dist',
                    imagesDir:'src/controls/sass',
                    httpGeneratedImagesPath:'.',
                    generatedImagesDir:'dist'
                }
            }
        },
        copy: {
            all: {
                src: "src/<%=pkg.name%>.css",
                dest: "dist/<%=pkg.name%>.css"
            }
        },
        bump: {
            files: ['package.json', 'bower.json']
        },
        watch: {
            files: ['Gruntfile.js', 'src/**/*.js', 'src/**/*.html', 'src/**/*.scss', '!src/template.js'],
            tasks: ["default"]
        }
    });
    grunt.loadNpmTasks('grunt-rigger');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-bumpx');
    grunt.registerTask('default', ['clean', 'jshint:devel', 'handlebars', 'compass', 'rig', 'copy']);
    grunt.registerTask('release', ['clean', 'jshint:release', 'handlebars', 'compass', 'rig', 'uglify', 'copy']);
};