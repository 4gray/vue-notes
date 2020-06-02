<template>
    <div>
        <h3>Notes ({{ notes.length }})</h3>

        <NoteItem
            v-for="note in notes"
            :key="note.id"
            :note="note"
            @editNote="$emit('noteEdited', $event)"
            @removeNote="$emit('noteRemoved', $event)"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Note } from '@/models/note.interface';
import NoteItem from './NoteItem.vue';

@Component({
    components: { NoteItem }
})
export default class NotesList extends Vue {
    get notes(): Note[] {
        return this.$store.getters.notes;
    }
}
</script>
