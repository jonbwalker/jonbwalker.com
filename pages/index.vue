<template>
  <b-container fluid>
    <b-row>
      <nav-bar/>
    </b-row>

    <b-row class="section-1">
      <b-col cols="12">
        <h1 class="site-title">
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

  </b-container>
</template>

<script>
  import { NavBar } from "../components/Nav"
  export default {
    components: {
      NavBar,
    },
  }
</script>

<style lang="sass" scoped>
  html
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    font-weight: 200

  .container-fluid
    align-items: center
    background-image: url("../assets/images/lajolla.jpg")
    background-size: cover
    animation: 3s ease 0s normal forwards 1 fadein
    justify-content: space-around
    text-align: center
    height: 100vh

  .site-title
    color: black
    font-weight: 300
    font-size: calc(50px + (100 - 50) * ((100vw - 300px) / (1600 - 300)))
    letter-spacing: 1px
    padding-top: 60px
    width: auto

  .subtitle
    font-weight: 300
    font-size: 4vw
    color: black
    word-spacing: 5px
    padding-bottom: 15px

  @keyframes fadein
    0%
      opacity: 0
    50%
      opacity: 0
    100%
      opacity: 1
</style>

