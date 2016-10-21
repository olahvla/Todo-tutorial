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
package com.todo.backend.web.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;
import java.util.List;
import java.util.stream.Collectors;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.*;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import com.codahale.metrics.annotation.Timed;
import javax.validation.Valid;
import com.todo.backend.model.*;
import com.todo.backend.web.rest.dto.*;

import com.todo.backend.repository.*;


@RestController
@RequestMapping("/api/")
public class NoteApi {

    private final Logger log = LoggerFactory.getLogger(NoteApi.class);

    @Inject
    private NoteRepository noteRepository;

    @RequestMapping(value = "/note/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    @Transactional(readOnly = true)
    public ResponseEntity<ReadNoteResponse> readNote(@PathVariable Long id) {
        log.debug("GET /note/{}", id);
        final Optional<Note> result = Optional.ofNullable(noteRepository.findOne(id));
        if (result.isPresent()) {
            return ResponseEntity.ok().body(convertToReadNoteResponse(result.get()));
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value = "/note", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    @Transactional
    public ResponseEntity<CreateNoteResponse> createNote(@Valid @RequestBody CreateNoteRequest request) throws URISyntaxException {
        log.debug("POST /note {}", request);
        final Note note = convertToNote(request);
        final Note result = noteRepository.save(note);
        return ResponseEntity.created(new URI("/note/" + result.getId())).body(convertToCreateNoteResponse(result));
    }

    @RequestMapping(value = "/note/{id}", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    @Transactional
    public ResponseEntity<UpdateNoteResponse> updateNote(@PathVariable Long id, @Valid @RequestBody RestUpdateNoteRequest request) {
        log.debug("PUT /note/{} {}", id, request);
        final Note note = convertToNote(id, request);
        final Note result = noteRepository.save(note);
        return ResponseEntity.ok().body(convertToUpdateNoteResponse(result));
    }

    @RequestMapping(value = "/note/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    @Transactional
    public ResponseEntity<Void> deleteNote(@PathVariable Long id) {
        log.debug("DELETE /note/{}", id);
        noteRepository.delete(id);
        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "/notes", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    @Transactional(readOnly = true)
    public ResponseEntity<List<NotesResponse>> notes() {
        log.debug("GET /notes");
        final List<Note> result = noteRepository.notes();
        return ResponseEntity.ok().body(result.stream().map(this::convertToNotesResponse).collect(Collectors.toList()));
    }

    private ReadNoteResponse convertToReadNoteResponse(Note model) {
        final ReadNoteResponse dto = new ReadNoteResponse();
        dto.setId(model.getId());
        dto.setTitle(model.getTitle());
        dto.setContent(model.getContent());
        return dto;
    }

    private Note convertToNote(CreateNoteRequest dto) {
        final Note note = new Note();
        note.setTitle(dto.getTitle());
        note.setContent(dto.getContent());
        return note;
    }

    private CreateNoteResponse convertToCreateNoteResponse(Note model) {
        final CreateNoteResponse dto = new CreateNoteResponse();
        dto.setId(model.getId());
        dto.setTitle(model.getTitle());
        dto.setContent(model.getContent());
        return dto;
    }

    private Note convertToNote(Long id, RestUpdateNoteRequest dto) {
        final Note note = new Note();
        note.setId(id);
        note.setTitle(dto.getTitle());
        note.setContent(dto.getContent());
        return note;
    }

    private UpdateNoteResponse convertToUpdateNoteResponse(Note model) {
        final UpdateNoteResponse dto = new UpdateNoteResponse();
        dto.setId(model.getId());
        dto.setTitle(model.getTitle());
        dto.setContent(model.getContent());
        return dto;
    }

    private NotesResponse convertToNotesResponse(Note model) {
        final NotesResponse dto = new NotesResponse();
        dto.setId(model.getId());
        dto.setTitle(model.getTitle());
        dto.setContent(model.getContent());
        return dto;
    }
}
