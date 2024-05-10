<template>
  <div class="mockup">
      <p class="center-align" style="font-size: 20px; font-weight: bold;">Andrew Collins</p>

      <img style="border-radius: 12px; height: 360px; display: block; margin-left: auto; margin-right: auto;" src="~assets/images/intro.png" />

      <p class="indent" style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">Hello, Welcome!</p>
      <p class="indent" style="font-size: 25px; margin-top: 0px;">This is my portfolio!</p>

      <ProgressBar :percentage="percent" style="margin-top: 30px;"/>
      
      <div class="center-align" style="gap: 30px; margin: 30px 0px 30px">
          <IconButton href="" src="_nuxt/assets/icons/previous_button.svg" :newTab="false" :pointer="true" :size="56"/>
          <IconButton href="" src="_nuxt/assets/icons/pause_button.svg" :newTab="false" :size="56"/>
          <IconButton href="" src="_nuxt/assets/icons/next_button.svg" :newTab="false" :pointer="true" :size="56"/>
      </div>

      <div class="center-align" style="gap: 20px;">
        
          <IconButton href="https://open.spotify.com/user/andrew03330?si=abf7a454d86942d3" :newTab="true" src="_nuxt/assets/icons/spotify.svg" :size="36"/>
          <IconButton href="https://github.com/aceeedev" :newTab="true" src="_nuxt/assets/icons/github.svg" :size="36"/>
          <IconButton href="https://linkedin.com/in/andrew-michael-collins/" :newTab="true" src="_nuxt/assets/icons/linkedin.svg" :size="36"/>
      </div>

  </div>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        currentPercentage: 1
      }
    },
    computed: {
      percent(): string  {
        return this.currentPercentage.toString()
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll(); 
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        console.log('here');
        const sections = document.querySelectorAll('section');

        for (let i = sections.length - 1; i > 0; --i) {
          let section = sections[i];
          let percent = this.findVisibility(section);

          if (percent > 0) {
            this.currentPercentage = percent;
            break;
          }
        }
      },
      findVisibility(element: any) {
        const windowBottom = window.scrollY + window.innerHeight;
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const percentage = ((windowBottom - (elementTop - elementHeight)) / elementHeight) * 100;

        return percentage >= 100 ? 100 : (percentage <= 0 ? 0 : Math.round(percentage));
      }
    }
  }
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