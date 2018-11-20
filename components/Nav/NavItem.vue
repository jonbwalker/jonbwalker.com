<template>
  <div>
    <b-link v-for="(link, i) in links"
            :key="i"
            :to="link.url"
            class="link-item">{{link.name}}</b-link>
  </div>
</template>

<script>
  export default {
    name: "NavItem",
    props: {
      links: {type: Array, required: true}
    }
  }
</script>

<style lang="sass" scoped>
  a
    color: #2972A5
    &:hover
      text-decoration: none
      color: #BE8635

  .link-item
    margin: 0 50px 0 50px

</style>
