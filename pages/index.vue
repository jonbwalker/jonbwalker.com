<template>
  <div>
    <nav-bar/>
    <section class="container">
      <div>
        <app-logo/>
        <h1 class="site-title font-weight-thin">
          jonbwalker.com
        </h1>
        <h2 class="subtitle">
          personal site built with vue.js
        </h2>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green">Documentation</a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey">GitHub</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import NavBar from "../components/NavBar"
  export default {
    components: {
      NavBar,
      AppLogo
    }
  }
</script>

<style lang="sass" scoped>
  .container
    animation: 3s ease 0s normal forwards 1 fadein
    min-height: 100vh
    display: flex
    justify-content: space-around
    align-items: center
    text-align: center

  .site-title
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    display: block
    font-weight: 300
    font-size: 100px
    color: #35495e
    letter-spacing: 1px

  .subtitle
    font-weight: 300
    font-size: 42px
    color: #526488
    word-spacing: 5px
    padding-bottom: 15px

  .links
    padding-top: 15px

  @keyframes fadein
    0%
      opacity: 0
    50%
      opacity: 0
    100%
      opacity: 1
</style>

