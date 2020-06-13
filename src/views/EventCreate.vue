<template>
  <div>
    <!-- Old way of doing it, you can use name of computed properties in {{ computed }} -->
    <h1>Create an event {{user.name}}</h1>
    <h2>This event was created by {{user.name}}, user no. {{user.id}}</h2>
    <ul>
      <li v-for="cat in categories" :key="cat">{{cat}}</li>
    </ul>
    <p>There are {{ catLength }} categories</p>
  </div>
</template>

  // computed: {  // ONE WAY OF DOING IT, COURSE SUGGESTS ANOTHER WAY
  //   userName() {
  //     return this.$store.state.user.name
  //   },
  //   userID() {
  //     return this.$store.state.user.id
  //   }
  // }
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    ...mapState(['user', 'categories'])
  }
}

</script>

<style scoped>
</style>