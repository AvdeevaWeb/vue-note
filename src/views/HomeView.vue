<template>
  <div class="home">
    <Form />
    <List />
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import List from '@/components/List.vue'
export default {
  name: 'HomeView',
  components: {
    Form,
    List
  },
  data() {
    return {
    }
  },
  computed: {},
  methods: {}
}
</script>
