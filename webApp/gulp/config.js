/**
 * Copyright 2016 dryTools doo
 * Email: contact@drytools.co
 * 
 * This file is part of todo.
 * 
 * todo is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * todo is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with todo. If not, see <http://www.gnu.org/licenses/>.*
 **/
'use strict';

var gulp = require('gulp');

var gulpNgConfig = require('gulp-ng-config');

module.exports = function(options) {
    gulp.task('config-development', function() {

        gulp.src('./environmentConfig.json')
            .pipe(gulpNgConfig('app.config', {
                environment: 'development'
            }))
            .pipe(gulp.dest('./src/app/'));
    });

    gulp.task('config-development-mock', function() {

        gulp.src('./environmentConfig.json')
            .pipe(gulpNgConfig('app.config', {
                environment: 'development-mock'
            }))
            .pipe(gulp.dest('./src/app/'));
    });

    gulp.task('config-development-remote', function() {

        gulp.src('./environmentConfig.json')
            .pipe(gulpNgConfig('app.config', {
                environment: 'development-remote'
            }))
            .pipe(gulp.dest('./src/app/'));
    });

    gulp.task('config-development-docker', function() {

        gulp.src('./environmentConfig.json')
            .pipe(gulpNgConfig('app.config', {
                environment: 'development-docker'
            }))
            .pipe(gulp.dest('./src/app/'));
    });

    gulp.task('config-deployment', function() {

        gulp.src('./environmentConfig.json')
            .pipe(gulpNgConfig('app.config', {
                environment: 'deployment'
            }))
            .pipe(gulp.dest('./src/app/'));
    });

}