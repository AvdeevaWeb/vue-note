<template>
    <div>
        <div class="card" v-for="(note, index) in notes" :key="index">
            <h2 class="title">{{ note.title }}</h2>
            <p>{{ note.content }}</p>
            <div class="card-footer">
                <img src="@/assets/img/i-edit.png" alt="#" @click="editNote(index)">
                <img src="@/assets/img/i-delete.png" alt="#" @click="deleteNote(index)">
                <p>{{ note.date }}</p>
            </div>
            <EditNote v-if="noteIndex !== -1" />
        </div>
    </div>
</template>

<script>
import EditNote from '@/components/Edit.vue'
export default {
    components: {
        EditNote
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
        const data = localStorage.getItem('notes');

        if (data !== null) {
            try {
                const dataArray = JSON.parse(data);
                for (const note of dataArray) {
                    this.$store.dispatch('dispatchNote', { title: note.title, content: note.content, date: note.date })
                }
            } catch (error) {
                console.error('Error parsing data from localStorage:', error)
            }
        } else {
            console.log('No data found in localStorage')
        }
    },
    methods: {
        deleteNote(index) {
            this.$store.commit('deleteNote', index)
        },
        editNote(index) {
            this.$store.commit('editNote', index)
            console.log(index)
        },
        
    }
}
</script>