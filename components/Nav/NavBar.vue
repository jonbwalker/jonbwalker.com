<template>
  <div class="nav-container">
    <nav-item v-for="(link, i) in navLinks"
              :key="i"
              :link="link"
              :activeLink="isActive(link.url)"
              @click="toggleActive(link.url)"></nav-item>
  </div>
</template>

<script>
  import NavItem from "./NavItem";

  export default {
    name: 'NavBar',
    components: {NavItem},
    data() {
      return {
        navLinks: [
          {name: 'Home', url: '/'},
          {name: 'Timeline', url: '/timeline'},
          {name: 'Contact', url: '/contact'},
        ],
      }
    },
    methods: {
      isActive(url) {
        return this.activeLink === url
      },
      toggleActive(url) {
        return this.activeLink = url
      }
    },
    computed: {
      activeLink() {
        return this.$route.path;
      }
    },
  }
</script>

<style lang="sass" scoped>
  .nav-container
    animation: fadein 2s
    display: flex
    font-size: 20px
    justify-content: space-around
    margin: 25px 0 25px 0
    width: 100%

    @keyframes fadein
      from
        opacity: 0
      to
        opacity: 1
</style>
