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
        .directive('createNewNote', function() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'src/app/components/forms/createNewNote.html',
                controller: 'CreateNewNoteController'
            };
        });

    angular
        .module('webApp')
        .controller('CreateNewNoteController', CreateNewNoteController);

    CreateNewNoteController.$inject = ['$scope', 'eventBus', 'noteApi'];

    function CreateNewNoteController($scope, eventBus, noteApi) {

        $scope.model = {};
        $scope.errorCode = null;
        $scope.submit = submit;

        function submit(form) {
            if (form !== undefined && form.$submitted && form.$invalid) {
                return false;
            }
            noteApi.createNote($scope.model).then(onSuccess, onError);

            function onSuccess(response) {
                eventBus.emitEvent('NoteUpdated');
                eventBus.emitEvent('ModalClose');
                $scope.errorCode = null;
            }

            function onError(response) {
                if (response.status && response.statusText) {
                    $scope.errorCode = response.statusText;
                } else {
                    $scope.errorCode = 'Unknown error';
                }
            }

        }

    }

})();