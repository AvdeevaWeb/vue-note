import { createStore } from 'vuex'

export default createStore({
  state: {
    notes: [],
    editingIndex: -1,
    activeIndex: 0
  },
  mutations: {
    addNote(state, payload) {
      state.notes.push(payload)
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    deleteNote(state, payload) {
      state.notes.splice(payload, 1)
      localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    editNote(state, payload) {
      state.editingIndex = payload
      state.activeIndex = payload

    },
    saveNote(state, payload) { 
      state.editingIndex = payload.index
      for (const note of payload.notes) {
        const newNotte = {
          date: note.date,
          title: note.title,
          content: note.content
        }
        state.notes[state.activeIndex] =  newNotte
        localStorage.setItem('notes', JSON.stringify(state.notes))
      }
    }, 
    updateNote(state, payload){
      state.notes.push(payload)
    },
    cancelNote(state, payload){
      state.editingIndex = payload
    }
    
  },
  actions: {
    dispatchNote({ commit }, note) {
      commit('addNote', note);
    }
  }
})
