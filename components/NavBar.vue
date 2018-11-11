<template>
  <div class="nav-container">
    <b-link to="/">Home</b-link>
    <b-link to="/">Timeline</b-link>
    <b-link to="/">Contact</b-link>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style lang="sass" scoped>
  .nav-container
    display: flex
    justify-content: space-around
</style>
