<template>
    <div class="edit-window" v-for="(note, index) in changeNote" :key="index">
        <div class="edit-window-wrapper">
            <form class="edit-window-form" @submit.prevent="saveNote(index)">
                <input type="text" v-model="note.title">
                <textarea type="text" v-model="note.content"></textarea>
                <div class="edit-window-footer">
                    <button class="btn">Изменить</button>
                    <button class="btn cancel" @click="cancelNote">Отмена</button>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            changeNote: []
        }
    },
    computed: {
        notes() {
            return this.$store.state.notes
        },
        noteIndex() {
            return this.$store.state.editingIndex
        },
    },
    mounted() {
        const data = localStorage.getItem('notes')
        if (data !== null) {
            const dataArray = JSON.parse(data);
            const note = dataArray[this.noteIndex]
            const newNote = {
                date: note.date,
                title: note.title,
                content: note.content
            }
            this.changeNote.push(newNote)
        } else {
            console.log('No data found in localStorage');
        }
    },
    methods: {
        saveNote(index) {
            this.$store.commit('saveNote', { index: -1, notes: this.changeNote })
        },
        cancelNote() {
            this.$store.commit('cancelNote', -1)
        }
    }
}
</script>