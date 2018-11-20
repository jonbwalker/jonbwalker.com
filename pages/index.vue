<template>
  <b-container>
    <b-row>
      <nav-bar/>
    </b-row>

    <b-row>
      <b-col cols="12">
        <app-logo/>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <h1 class="site-title font-weight-thin">
          jonbwalker.com
        </h1>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <h2 class="subtitle">
          personal site built with vue.js
        </h2>
      </b-col>
    </b-row>

    <b-row class="links">
      <b-col cols="6">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
      </b-col>
      <b-col cols="6">
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import AppLogo from '~/components/AppLogo'
  import { NavBar } from "../components/Nav"
  export default {
    components: {
      NavBar,
      AppLogo
    }
  }
</script>

<style lang="sass" scoped>
  .container
    align-items: center
    animation: 3s ease 0s normal forwards 1 fadein
    justify-content: space-around
    text-align: center

  .site-title
    color: #2972a5
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    font-weight: 300
    font-size: 7vw
    letter-spacing: 1px
    width: auto

  .subtitle
    font-weight: 300
    font-size: 4vw
    color: #BE8635
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

