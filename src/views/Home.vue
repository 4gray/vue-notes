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
import store from '@/store';

@Component({
    components: { NoteForm, NotesList }
})
export default class Home extends Vue {
    private notes: Note[] = [];

    add(text: string): void {
        this.$store.dispatch('addNote', text);
    }

    edit(editedNote: Note): void {
        this.$store.dispatch('editNote', editedNote);
    }

    remove(noteId: string): void {
        this.$store.dispatch('removeNote', noteId);
    }
}
</script>
