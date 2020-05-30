<template>
    <div>
        <h3>Create a new note</h3>
        <form @submit.prevent="submitForm">
            <textarea type="text" v-model="text" rows="10" cols="80"></textarea>
            <br />
            <button type="submit" :disabled="text === ''">Add note</button>
            <button type="button" :disabled="text === ''" @click="clearForm">
                Clear
            </button>
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
textarea {
    resize: none;
}
button {
    margin-right: 5px;
}
</style>
