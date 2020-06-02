import Vue from 'vue';
import Vuex from 'vuex';
import { Note } from '@/models/note.interface';

Vue.use(Vuex);

function generateId(): string {
    return (
        'note_' +
        Math.random()
            .toString(36)
            .substr(2, 9)
    );
}

export default new Vuex.Store({
    state: {
        notes: Array<Note>()
    },
    mutations: {
        ADD(state, noteText: string) {
            state.notes.unshift({
                id: generateId(),
                text: noteText,
                created: new Date().toLocaleDateString()
            });
        },
        REMOVE(state, noteId: string) {
            state.notes = state.notes.filter(note => note.id !== noteId);
        },
        EDIT(state, editedNote: Note) {
            state.notes = [
                ...state.notes.filter(element => element.id !== editedNote.id),
                editedNote
            ];
        }
    },
    actions: {
        addNote(context, note: Note) {
            context.commit('ADD', note);
        },
        removeNote(context, noteId: string) {
            context.commit('REMOVE', noteId);
        },
        editNote(context, note: Note) {
            context.commit('EDIT', note);
        }
    },
    getters: {
        notes: state => state.notes
    },
    modules: {}
});
