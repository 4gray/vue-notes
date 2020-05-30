<template>
    <div>
        <NoteForm @noteAdded="add"></NoteForm>
        <NotesList
            :notes="notes"
            @noteEdited="edit"
            @noteRemoved="remove"
        ></NotesList>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Note } from '@/models/note.interface';
import NoteForm from '../components/NoteForm.vue';
import NotesList from '../components/NotesList.vue';

@Component({
    components: { NoteForm, NotesList }
})
export default class Home extends Vue {
    private notes: Note[] = [];

    add(text: string): void {
        this.notes.push({
            id:
                '_' +
                Math.random()
                    .toString(36)
                    .substr(2, 9),
            text,
            created: new Date().toLocaleDateString()
        });
    }

    edit(editedNote: Note): void {
        this.notes = this.notes.map(note => {
            if (note.id === editedNote.id) {
                note.text = editedNote.text;
            }
            return note;
        });
    }

    remove(noteId: string): void {
        this.notes = this.notes.filter(note => note.id !== noteId);
    }
}
</script>

<style scoped>
h3 {
    margin: 0 !important;
    padding: 0 !important;
}
</style>
