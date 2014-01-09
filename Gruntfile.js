/*global module */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            pre: ["dist", "compiled-templates", ".build"],
            post: ["compiled-templates"]
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
                    "compiled-templates/template.js": ["src/ad-display/template.html", "src/controls/template.html"]
                }
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'src/sass',
                    cssDir: 'dist',
                    imagesDir: 'src/sass',
                    httpGeneratedImagesPath: '.',
                    generatedImagesDir: 'dist'
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/gui.min.css': 'dist/gui.css'
                }
            }
        },
        push_svn: {
            options: {
                trymkdir: true,
                remove: false
            },
            release: {
                src: "./dist",
                dest: '<%= grunt.config("svnDir") %>/<%= pkg.version %><%= grunt.config("buildNumber") %>',
                tmp: './.build'
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
    grunt.registerTask('deploy', 'deploy to svn', function() {
        grunt.config("svnDir", grunt.option("dir"));
        if (grunt.option("build")) {
            grunt.config("buildNumber", "-" + grunt.option("build"));
        }
        grunt.task.run("push_svn");
    });
    grunt.loadNpmTasks('grunt-rigger');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-bumpx');
    grunt.loadNpmTasks("grunt-push-svn");
    grunt.registerTask('default', ['clean:pre', 'jshint:devel', 'handlebars', 'compass', 'rig', 'copy', 'clean:post']);
    grunt.registerTask('release', ['clean:pre', 'jshint:release', 'handlebars', 'compass', 'rig', 'uglify', 'cssmin', 'copy', 'clean:post']);
};