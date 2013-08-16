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
                src: ['source/*.js']
            }
        },
        watch: {
            scripts: {
                files: ['source/*.js'],
                tasks: ['deploy']
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'source',
                    paths: {
                        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
                        underscore: '//underscorejs.org/underscore-min'
                    },
                    out: 'build',
                    optimize: 'uglify2',
                    uglify2: {
                        mangle: {
                            except: [
                                '_',
                                '$'
                            ]
                        }
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('deploy', [
        'jshint',
        'requirejs'
    ]);
};
