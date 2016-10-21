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
(function() {
    'use strict';

    angular
        .module('webApp')
        .provider('noteApi', noteApi)
        .config(noteApiProvider);

    function noteApi() {
        var isMocked = false;

        var $get = ['noteApiService', 'noteApiMockService', 'clientConfigurationValues', function(noteApiService, noteApiMockService, clientConfigurationValues) {
            if (this.isMocked) {
                return noteApiMockService;
            } else {
                if (clientConfigurationValues.remoteBackendUrl) {
                    noteApiService.init(clientConfigurationValues.remoteBackendUrl);
                }
                return noteApiService;
            }
        }];

        return {
            isMocked: isMocked,
            $get: $get
        };
    }

    function noteApiProvider(clientConfigurationValues, noteApiProvider) {
        noteApiProvider.isMocked = clientConfigurationValues.useServerMock;
    }

})();