<template>
  <b-container fluid>
    <b-row class="section-1">
      <b-col cols="12">
        <h1 class="site-title">
          jonbwalker
        </h1>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <h2 class="subtitle">
          web developer
        </h2>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  export default {
      layout: 'app'
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
    background: rgba(255,255,255,0.5)
    border-radius: 25px
    color: #343a40
    font-weight: 300
    font-size: calc(50px + (100 - 50) * ((100vw - 400px) / (1600 - 400)))
    letter-spacing: 1px
    margin-top: 60px
    margin-right: 32%
    margin-left: 6%
    padding-bottom: 7px
    width: 34%

  .subtitle
    color: #85c9f3
    background: rgba(0,0,0,0.4)
    border-radius: 25px
    font-weight: 300
    font-size: 4vw
    margin-right: 32%
    margin-left: 12%
    padding-bottom: 8px
    word-spacing: 5px
    width: 34%

  @keyframes fadein
    0%
      opacity: 0
    50%
      opacity: 0
    100%
      opacity: 1
</style>

