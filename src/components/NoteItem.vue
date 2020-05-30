<template>
    <div class="note-container">
        <div v-if="!editMode" class="content">
            <strong>{{ note.text }}</strong>
            <small>created: {{ note.created }}</small>
        </div>
        <div v-else>
            <textarea v-model="note.text" rows="10" cols="40"></textarea>
            <div>
                <button @click="editNote">Save</button>
                <button @click="toggleEditMode">Cancel</button>
            </div>
        </div>
        <button v-if="!editMode" @click="toggleEditMode">Edit</button>
        <button @click="removeNote">Remove</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Note } from '@/models/note.interface';
import { Prop, Component, Emit } from 'vue-property-decorator';

@Component
export default class NoteItem extends Vue {
    @Prop() note!: Note;
    editMode = false;

    toggleEditMode(): void {
        this.editMode = !this.editMode;
    }

    @Emit('editNote')
    editNote() {
        this.toggleEditMode();
        return this.note;
    }

    @Emit('removeNote')
    removeNote() {
        return this.note.id;
    }
}
</script>

<style lang="scss" scoped>
.note-container {
    background: #fff;
    width: 650px;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    text-align: left;

    .content {
        padding-bottom: 10px;
    }
}
strong,
small {
    display: block;
}
button {
    margin-right: 5px;
}
</style>
