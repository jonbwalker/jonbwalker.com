<template>
  <b-container fluid class="bg-dark">
    <b-row class="justify-content-md-center">
      <b-col cols="12" class="site-title">
          <p class="typewriter-text">jonathan walker</p>
        </b-col>
    </b-row>

    <b-row class="justify-content-md-center">
      <b-col cols="12" md="auto" class="subtitle">
          web developer
      </b-col>
    </b-row>

    <b-row class="justify-content-md-center">
      <b-col cols="12" md="auto" class="self-image">
        <b-img fluid src="../assets/images/profile-round-squoosh.jpg" rounded="circle" alt="self-image" height="300" width="300"></b-img>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  export default {
      layout: 'app',
  }
</script>

<style lang="sass" scoped>
  @import url('https://fonts.googleapis.com/css?family=Quicksand:300&display=swap')
  html
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    font-weight: 200

  .container-fluid
    align-items: center
    background-size: cover
    justify-content: space-around
    text-align: center
    height: 100vh

  .site-title
    color: white
    font-size: 6vw
    font-weight: 400
    letter-spacing: 1px

  .subtitle
    animation: 8s ease 0s normal forwards 1 fadein
    color: white
    font-size: 4vw
    font-family: 'Quicksand', sans-serif
    font-weight: 200
    word-spacing: 5px

  .self-image
    animation: 8s ease 02s normal forwards 1 fadein
    margin-top: 20px
    padding-bottom: 2px

  .typewriter-text
      position: relative
      width: 7em
      margin: 0 auto
      border-right: 2px solid rgba(255,255,255,.75)
      text-align: center
      white-space: nowrap
      overflow: hidden


  @keyframes typewriter
    from 
      width: 0
    to
      width: 7em

  @keyframes typewriter-mobile
    from 
      width: 0
    to
      width: 7.2em

  @keyframes blinkTextCursor
    from
      border-right-color: rgba(255,255,255,.75)
    to
      border-right-color: transparent

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
      .typewriter-text
        animation: typewriter-mobile 2s steps(40) 1s 1 normal both, blinkTextCursor 500ms steps(40) infinite normal

  @media screen and (min-width: 1200px)
    .site-title
      font-size: 70px
    .subtitle
      font-size: 42px
    .self-image
      max-width: 375px
    .typewriter-text
      animation: typewriter 2s steps(40) 1s 1 normal both, blinkTextCursor 500ms steps(40) infinite normal
</style>
