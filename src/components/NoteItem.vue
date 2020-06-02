<template>
    <md-card md-with-hover>
        <md-card-content>
            <div v-if="!editMode">
                {{ note.text }}
                <div class="md-subhead">created: {{ note.created }}</div>
            </div>
            <div v-else>
                <md-field>
                    <label>Edit note</label>
                    <md-textarea v-model="note.text" md-autogrow></md-textarea>
                </md-field>
            </div>
        </md-card-content>
        <md-card-actions>
            <div v-if="editMode">
                <md-button
                    @click="editNote"
                    :disabled="note.text === ''"
                    class="md-primary"
                    >Save</md-button
                >
                <md-button @click="toggleEditMode">Cancel</md-button>
            </div>
            <md-button
                v-if="!editMode"
                @click="toggleEditMode"
                class="md-primary"
                ><md-icon>edit</md-icon> Edit</md-button
            >
            <md-button class="md-accent" @click="removeNote">
                <md-icon>delete</md-icon> Remove</md-button
            >
        </md-card-actions>
    </md-card>
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
strong,
small {
    display: block;
}
button {
    margin-right: 5px;
}
.md-card {
    margin: 10px 0;
}
</style>
