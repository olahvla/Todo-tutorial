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
        .service('noteApiService', noteApiService);

    noteApiService.$inject = ['$http'];

    function noteApiService($http) {

        var backendApiUrl = '';

        return {
            init: init,
            readNote: readNote,
            createNote: createNote,
            updateNote: updateNote,
            deleteNote: deleteNote,
            notes: notes
        };

        function init(backendUrl) {
            backendApiUrl = backendUrl;
        }

        /** readNote 
         * request - Unit
         *
         * response - ReadNoteResponse {
         *   id: Int
         *   title: String
         *   content: String
         * }
         *
         */
        function readNote(model) {
            return $http({
                method: 'GET',
                url: backendApiUrl + '/api/note/' + model.id + ''
            });
        }

        /** createNote 
         * request - CreateNoteRequest {
         *   title: String
         *   content: String
         * }
         *
         * response - CreateNoteResponse {
         *   id: Int
         *   title: String
         *   content: String
         * }
         *
         */
        function createNote(model) {
            return $http({
                method: 'POST',
                url: backendApiUrl + '/api/note',
                data: {
                    title: model.title,
                    content: model.content
                }
            });
        }

        /** updateNote 
         * request - RestUpdateNoteRequest {
         *   title: String
         *   content: String
         * }
         *
         * response - UpdateNoteResponse {
         *   id: Int
         *   title: String
         *   content: String
         * }
         *
         */
        function updateNote(model) {
            return $http({
                method: 'PUT',
                url: backendApiUrl + '/api/note/' + model.id + '',
                data: {
                    title: model.title,
                    content: model.content
                }
            });
        }

        /** deleteNote 
         * request - DeleteNoteRequest {
         *   id: Int
         * }
         *
         * response - Unit
         *
         */
        function deleteNote(model) {
            return $http({
                method: 'DELETE',
                url: backendApiUrl + '/api/note/' + model.id + '',
                data: {
                    id: model.id
                }
            });
        }

        /** notes 
         * request - Unit
         *
         * response - List [
         *   NotesResponse {
         *     id: Int
         *     title: String
         *     content: String
         *   }
         * ]
         *
         */
        function notes() {
            return $http({
                method: 'GET',
                url: backendApiUrl + '/api/notes'
            });
        }

    }
})();