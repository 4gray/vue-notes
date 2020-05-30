<template>
    <div>
        <h3>Create a new note</h3>
        <form @submit.prevent="submitForm">
            <md-field class="note-textarea">
                <label>My note</label>
                <md-textarea v-model="text" md-counter="1200"></md-textarea>
            </md-field>
            <md-button
                type="submit"
                :disabled="text === ''"
                class="md-raised md-primary"
                >Add note</md-button
            >
            <md-button
                type="button"
                :disabled="text === ''"
                @click="clearForm"
                class="md-raised md-accent"
            >
                Clear
            </md-button>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit } from 'vue-property-decorator';

@Component
export default class NoteForm extends Vue {
    text = '';

    submitForm(): void {
        this.addNote();
        this.clearForm();
    }

    @Emit('noteAdded')
    addNote(): string {
        return this.text;
    }

    clearForm(): void {
        this.text = '';
    }
}
</script>

<style lang="scss" scoped>
md-textarea {
    resize: none;
}
button {
    margin-right: 5px;
}
</style>
