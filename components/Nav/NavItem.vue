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
    color: #2972A5
    &:hover
      text-decoration: none
      color: #BE8635
  .active
    color: #BE8635
</style>
