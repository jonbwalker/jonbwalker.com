<template>
  <div>
    <b-link :to="link.url"
            :class="{'active': activeLink}">
      {{link.name}}
    </b-link>
  </div>
</template>

<script>
  export default {
    name: "NavItem",
    props: {
      link: {type: Object, required: true},
      activeLink: {type: Boolean, required: true}
    }
  }
</script>

<style lang="sass" scoped>
  a
    color: white
    &:hover
      text-decoration: none
      color: black
  .active
    color: black
</style>
