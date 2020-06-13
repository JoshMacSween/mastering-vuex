<template>
  <div>
    <h1>Create an event {{userName}}</h1>
    <h2>This event was created by {{userName}}, user no. {{userID}}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.state.user.name
    },
    userID() {
      return this.$store.state.user.id
    }
  }
}
</script>

<style scoped>

</style>