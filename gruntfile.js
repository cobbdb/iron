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
                src: ['./source/*.js']
            }
        },
        uglify: {
            options: {
                mangle: {
                    except: [
                        '_',
                        '$'
                    ]
                }
            },
            default: {
                src: ['./source/*.js'],
                dest: './build/iron.min.js'
            }
        },
        watch: {
            scripts: {
                files: ['./source/*.js'],
                tasks: ['deploy']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('deploy', [
        'jshint',
        'uglify'
    ]);
};
