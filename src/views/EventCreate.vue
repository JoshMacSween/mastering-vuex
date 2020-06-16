<template>
  <div>
    <h1>Create an event {{user.name}}</h1>
    <h2>This event was created by {{user.name}}, user no. {{user.id}}</h2>
    <ul>
      <li v-for="cat in categories" :key="cat">{{cat}}</li>
    </ul>
    <p>There are {{ catLength }} categories</p>
    <p>{{ getEvent(1) }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    getEvent() {
      return this.$store.getters.getEventById
    },
    catLength() {
      return this.$store.getters.catLength
    },
    ...mapState(['user', 'categories'])
  }
}

</script>

<style scoped>
</style>