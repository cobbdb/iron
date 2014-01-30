module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqeqeq: false,
                indent: 4,
                noarg: true,
                nonew: false,
                plusplus: true,
                quotmark: false,
                trailing: true
            },
            default: {
                src: [
                    'source/**/*.js'
                ]
            }
        },
        watch: {
            scripts: {
                files: [
                    'source/**/*.js'
                ],
                tasks: [
                    'default'
                ]
            }
        },
        uglify: {
            build: {
                files: {
                    'build/iron-core.min.js': [
                        'build/iron-core.js'
                    ]
                }
            }
        },
        browserify: {
            build: {
                files: {
                    'build/iron-core.js': [
                        'source/**/*.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', [
        'jshint',
        'browserify',
        'uglify'
    ]);
};
