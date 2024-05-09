<template>
  <div class="mockup">
      <p class="center-align" style="font-size: 20px; font-weight: bold;">Andrew Collins</p>

      <img style="border-radius: 12px; height: 300px; display: block; margin-left: auto; margin-right: auto;" src="~assets/images/intro.png" />

      <p class="indent" style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">Hello, Welcome!</p>
      <p class="indent" style="font-size: 25px; margin-top: 0px;">This is my portfolio!</p>

      <ProgressBar percentage="33" style="margin-top: 30px;"/>
      
      <div class="center-align" style="gap: 30px; margin: 30px 0px 30px">
          <IconButton href="" src="_nuxt/assets/icons/previous_button.svg" />
          <IconButton href="" src="_nuxt/assets/icons/pause_button.svg" />
          <IconButton href="" src="_nuxt/assets/icons/next_button.svg" />
      </div>

      <div class="center-align" style="gap: 20px;">
        
          <IconButton href="https://open.spotify.com/user/andrew03330?si=abf7a454d86942d3" src="_nuxt/assets/icons/spotify.svg" :size="48"/>
          <IconButton href="https://github.com/aceeedev" src="_nuxt/assets/icons/github.svg" :size="48"/>
          <IconButton href="https://linkedin.com/in/andrew-michael-collins/" src="_nuxt/assets/icons/linkedin.svg" :size="48"/>
      </div>

  </div>
</template>

<script lang="ts" setup>

</script>

<style>
  .mockup {
      height: 96vh;
      width: 400px;
      top: 10px;
      position: sticky; 
      box-sizing: border-box;
      border: 4px solid var(--gray);
      border-radius: 36px;
  }

  .indent {
      padding-left: 40px;
  }
</style>