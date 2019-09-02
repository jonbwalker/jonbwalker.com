<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed class="nav-container">
    <b-navbar-brand href="#">jonbwalker</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">About</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'NavBar',
  }
</script>

<style lang="sass" scoped>
  .nav-container
    animation: fadein 6s

    @keyframes fadein
      from
        opacity: 0
      to
        opacity: 1
</style>
