<template>
  <div class="mockup">
      <p class="center-align" style="font-size: 20px; font-weight: bold;">Andrew Collins</p>

      <img style="border-radius: 12px; height: 360px; display: block; margin-left: auto; margin-right: auto;" src="~assets/images/intro.png" />

      <p class="indent" style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">Hello, Welcome!</p>
      <p class="indent" style="font-size: 25px; margin-top: 0px;">This is my portfolio!</p>

      <ProgressBar :percentage="percent" style="margin-top: 30px;"/>
      
      <div class="center-align" style="gap: 30px; margin: 30px 0px 30px">
          <IconButton :href="previousHref()" src="_nuxt/assets/icons/previous_button.svg" :newTab="false" :pointer="true" :size="56"/>
          <IconButton href="" src="_nuxt/assets/icons/pause_button.svg" :newTab="false" :size="56"/>
          <IconButton :href="nextHref()" src="_nuxt/assets/icons/next_button.svg" :newTab="false" :pointer="true" :size="56"/>
      </div>

      <div class="center-align" style="gap: 20px;">
        
          <IconButton href="https://open.spotify.com/user/andrew03330?si=abf7a454d86942d3" :newTab="true" src="_nuxt/assets/icons/spotify.svg" :size="36"/>
          <IconButton href="https://github.com/aceeedev" :newTab="true" src="_nuxt/assets/icons/github.svg" :size="36"/>
          <IconButton href="https://linkedin.com/in/andrew-michael-collins/" :newTab="true" src="_nuxt/assets/icons/linkedin.svg" :size="36"/>
      </div>

  </div>
</template>

<script lang="ts">
  const sectionIDs = ["home", "about", "projects", "experience", "contact"]
  let sections: NodeListOf<HTMLElement> | [] = [];

  export default {
    data() {
      return {
        currentPercentage: 1,
        currentSectionIndex: 0,
        lastKnownScrollPosition: 0,
        ticking: false,
        func: () => {},
      }
    },
    computed: {
      percent(): string  {
        return this.currentPercentage.toString()
      }
    },
    mounted() {
      sections = document.querySelectorAll('section');
      this.func = this.throttle(this.scrollEvent, 10);

      window.addEventListener('scroll', this.func);
    },
    destroyed() {
      window.removeEventListener('scroll', this.func);
    },
    methods: {
      throttle(callbackFn: any, limit: number) {
          let wait = false;                  
          return function () {              
              if (!wait) {                  
                  callbackFn.call();           
                  wait = true;               
                  setTimeout(function () {   
                      wait = false;          
                  }, limit);
              }
          }
      },
      scrollEvent() {
        console.log(this.findVisibility(sections[0]))
        console.log(this.findVisibility(sections[1]))
        console.log(this.findVisibility(sections[2]))
        console.log(this.findVisibility(sections[3]))
        console.log(this.findVisibility(sections[4]))
        console.log(`section id: ${this.currentSectionIndex}`)
        console.log("\n ")
        for (let i = sections.length - 1; i >= 0; i--) {
          //console.log(`i: ${i}`)
          let section = sections[i];
          let percent = this.findVisibility(section);
          //console.log(section.textContent);
          //console.log(percent);
          
          if (percent != 0) {
            this.currentPercentage = percent;
            this.currentSectionIndex = i - 1;
            //console.log(this.currentSectionIndex);
            
            break;
          }
        } 
      },
      findVisibility(element: any) {
        const windowBottom = window.scrollY + window.innerHeight;
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const percentage = ((windowBottom - (elementTop - elementHeight)) / elementHeight) * 100;

        return percentage >= 100 ? 0 : (percentage <= 0 ? 0 : Math.round(percentage));
      },
      previousHref(): string {
        let href = "home"

        if (this.currentSectionIndex > 0) {
          href = sectionIDs[this.currentSectionIndex - 1];
        }

        return href;
      },
      nextHref(): string {
        let href = "contact"

        if (this.currentSectionIndex < sectionIDs.length - 1) {
          href = sectionIDs[this.currentSectionIndex + 1];
        }

        return href;
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