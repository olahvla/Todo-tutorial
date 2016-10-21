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
        .config(function($translateProvider) {

            $translateProvider.translations('en', {
                ALERT_CLOSE: 'Close',
                CANCEL: 'Cancel',
                CREATE_NEW_NOTE: 'Create new note',
                CREATE_NEW_NOTE_CONTENT: 'Content',
                CREATE_NEW_NOTE_CONTENT_IS_REQUIRED: 'Content is required',
                CREATE_NEW_NOTE_CONTENT_MAX: 'Content max',
                CREATE_NEW_NOTE_SUBMIT: 'Submit',
                CREATE_NEW_NOTE_TITLE: 'Title',
                CREATE_NEW_NOTE_TITLE_IS_REQUIRED: 'Title is required',
                CREATE_NEW_NOTE_TITLE_MAX: 'Title max',
                DATA_SET_EMPTY_NO_DATA: 'No data',
                ERROR_MESSAGE: 'There was an error executing operation.',
                ERROR_TITLE: 'Error',
                MODAL_WINDOW_CLOSE: 'Close',
                NO: 'No',
                NOTES_CONTENT: 'Content',
                NOTES_ID: 'Id',
                NOTES_PAGE_ADD_NOTE: 'Add note',
                NOTES_TITLE: 'Title',
                OK: 'Ok',
                YES: 'Yes'
            });

            $translateProvider.preferredLanguage('en');

            $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
        });
})();