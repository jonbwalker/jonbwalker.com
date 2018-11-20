<template>
    <div>
      <b-link v-for="(link, i) in links" :to="link.url" :key="i">{{link.name}}</b-link>
    </div>
</template>

<script>
    export default {
        name: "NavItem",
      props: {
          links: {type: Object, required: true}
      }
    }
</script>

<style lang="sass" scoped>
  a
    color: #2972A5

  a:hover
    text-decoration: none
    color: #BE8635
</style>
