<template>
  <b-container class="nav-container">
    <NavItem :links="navLinks"></NavItem>
  </b-container>
</template>

<script>
  import NavItem from "./NavItem";
  export default {
    name: 'NavBar',
    components: {NavItem},
    data() {
      return {
        navLinks: [
          { name: 'Home', url: '/home' },
          { name: 'Timeline', url: '/timeline' },
          { name: 'Contact', url: '/contact' },
        ]
      }
    }
  }
</script>

<style lang="sass" scoped>
  .nav-container
    justify-content: space-around
    margin-top: 25px
    font-size: 20px
    animation: fadein 2s

  @keyframes fadein
    from
      opacity: 0
    to
      opacity: 1
</style>
