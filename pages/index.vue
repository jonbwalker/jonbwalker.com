  <template>
  <b-container fluid class="bg-dark">
    <b-row class="pt-5">
      <b-col class="site-title" offset="1" offset-sm="4">
        <p class="typewriter-text typewriter-animination-title">jonathan walker</p>
      </b-col>
    </b-row>

    <b-row class="">
      <b-col class="subtitle" offset="5" offset-sm="6">
        <p class="typewriter-text typewriter-animination-subtitle">web developer</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  layout: "app"
};
</script>

<style lang="sass" scoped>
  html
    font-family: 'Roboto', sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    font-weight: 200
  
  .container-fluid
    align-items: center
    background-size: cover
    justify-content: space-around
    text-align: center
    height: 100vh

  .site-title
    color: white
    font-family: 'Roboto', sans-serif
    font-size: 6vw
    font-weight: 400
    letter-spacing: 1px
    p
      margin: 0
      line-height: 1.1em

  .subtitle
    color: #f7ce4d
    font-size: 4vw
    font-family: 'Muli', sans-serif
    font-weight: 200
    word-spacing: 5px
    p
      margin: 0
      line-height: 1.1em


  .typewriter-text
    position: relative
    width: 7em
    border-right: 2px solid rgba(255,255,255,.75)
    text-align: center
    white-space: nowrap
    overflow: hidden

  .typewriter-animination-title
    animation: typewriter-mobile 2s steps(40) 1s 1 normal both, blinkTextCursor 500ms steps(40) infinite normal
  .typewriter-animination-subtitle
    animation: typewriter-mobile 1s steps(40) 2s 1 normal both, blinkTextCursor 500ms steps(40) infinite normal

  @keyframes revealRight
    0%
      transform: translateX(0)
    100%
      transform: translateX(300px)

  @keyframes typewriter
    from
      width: 0
    to
      width: 7.3em

  @keyframes typewriter-mobile
    from
      width: 0
    to
      width: 7.5em

  @keyframes blinkTextCursor
    from
      border-right-color: rgba(255,255,255,.75)
    to
      border-right-color: transparent

  @media screen and (max-width: 412px)
    .site-title
      font-size: 40px
    .subtitle
      font-size: 24px

  @media screen and (max-width: 768px)
    .typewriter-animination-title
      animation: typewriter-mobile 2s steps(40) 1s 1 normal both, blinkTextCursor 500ms steps(40) infinite normal
    .typewriter-animination-subtitle
      animation: typewriter-mobile 1s steps(40) 2s 1 normal both, blinkTextCursor 500ms steps(40) infinite normal

  @media screen and (min-width: 1200px)
    .site-title
      font-size: 70px
    .subtitle
      font-size: 42px
    .typewriter-animination-title
      animation: typewriter 2s steps(40) 1s 1 normal both, blinkTextCursor 500ms steps(40) infinite normal
    .typewriter-animination-subtitle
      animation: typewriter 1s steps(40) 2s 1 normal both, blinkTextCursor 500ms steps(40) infinite normal
</style>
