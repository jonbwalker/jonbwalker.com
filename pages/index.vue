<template>
  <b-container fluid>
    <b-row>
      <b-col offset="1" cols="8" sm="4" class="section-1">
        <span class="site-title">
          jonbwalker
        </span>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="8" sm="4" class="section-2">
        <span class="subtitle">
          web developer
        </span>
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

  .section-1
    background: rgba(255,255,255,0.5)
    border-radius: 8px
    margin-top: 60px
    padding-bottom: 7px

  .site-title
    color: #343a40
    font-weight: 300
    font-size: 6vw
    letter-spacing: 1px

  .section-2
    background: rgba(0,0,0,0.4)
    border-radius: 8px
    margin-left: 12%
    padding-bottom: 2px
    margin-top: 14px

  .subtitle
    color: #85c9f3
    font-weight: 300
    font-size: 4vw
    word-spacing: 5px

  @keyframes fadein
    0%
      opacity: 0
    50%
      opacity: 0
    100%
      opacity: 1

  @media screen and (max-width: 576px)
      .site-title
        font-size: 40px
      .subtitle
        font-size: 24px

  @media screen and (min-width: 1200px)
    .site-title
      font-size: 70px
    .subtitle
      font-size: 48px
    .section-1, .section-2
      max-width: 375px
</style>
