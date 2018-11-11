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
    margin-top: 25px
    font-size: 20px
    animation: fadein 2s

  a
    color: #2972A5

  a:hover
    text-decoration: none
    color: #BE8635

  @keyframes fadein
    from
      opacity: 0
    to
      opacity: 1
</style>
