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
        .service('noteApiMockService', noteApiMockService);

    noteApiMockService.$inject = ['$timeout'];

    function noteApiMockService($timeout) {

        return {
            readNote: readNote,
            createNote: createNote,
            updateNote: updateNote,
            deleteNote: deleteNote,
            notes: notes
        };

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
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
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
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
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
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
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
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
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
            $timeout(function() {
                successCallback({
                    //TODO fill up mocked data values
                }, 500);
            });
        }
    }
})();