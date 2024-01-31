<template>
    <div class="form">
        <form @submit.prevent="addNote">
            <div>
                <label>Добавить новую заметку</label>
                <input type="text" v-model="newNote.title" placeholder="Заголовок" required>
                <textarea type="text" v-model="newNote.content" placeholder="Текст"/>
                <button class="btn" type="submit">Добавить</button>
            </div>
            
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newNote: {
                date: new Date().toISOString().substring(0, 10),
                title: '',
                content: ''
            },
        }
    },
    methods: {
        addNote() {
            this.$store.commit('addNote', this.newNote)
            this.newNote = {
                date: new Date().toISOString().substring(0, 10),
                title: '',
                content: ''
            }
        }
    },
}
</script>