
module.exports = function(grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';
    grunt.file.defaultEncoding = 'utf8';
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
                ' * Fancy File v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
                ' * Copyright 2012-<%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
                ' * Licensed under <%= _.pluck(pkg.licenses, "type") %> (<%= _.pluck(pkg.licenses, "url") %>)\n' +
                ' * Plugin demo <%= pkg.demopage %>\n' +
                ' */\n',
        concat: {
            css: {
                options: {
                    banner: '<%= banner %>'
                },
                src: ['src/<%= pkg.name %>.css'],
                dest: 'css/<%= pkg.name %>.css'
            },
            js: {
                options: {
                    banner: '<%= banner %>'
                },
                src: ['src/<%= pkg.name %>.js'],
                dest: 'js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'js/<%= pkg.name %>.min.js'
            }
        },
        cssmin: {
            compress: {
                options: {
                    banner: '<%= banner %>',
                    keepSpecialComments: '*',
                    noAdvanced: true, // turn advanced optimizations off until it's fixed in clean-css
                    report: 'min',
                    selectorsMergeMode: 'ie8'
                },
                src: 'src/<%= pkg.name %>.css',
                dest: 'css/<%= pkg.name %>.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // A very basic default task.
    grunt.registerTask('default', 'Log some stuff.', function() {
        grunt.log.write('Logging some stuff...').ok();
    });
    grunt.registerTask('build', ['concat:css', 'concat:js', 'cssmin', 'uglify']);

};