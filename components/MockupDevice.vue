<template>
  <div class="mockup">
      <p class="center-align" style="font-size: 20px; font-weight: bold">Andrew Collins</p>

      <NuxtImg src="/images/sections/intro.png" class="styledImg" />

      <p class="indent" style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">Hello, Welcome!</p>
      <p class="indent" style="font-size: 25px; margin-top: 0px;">This is my portfolio!</p>

      <ProgressBar :percentage="percent" />
      
      <div class="center-align" style="gap: 30px; margin: 30px 0px 30px">
          <IconButton :href="previousHref()" src="/icons/previous_button.svg" :newTab="false" :pointer="true" :size="56"/>
          <IconButton href="" src="/icons/pause_button.svg" :newTab="false" :size="56"/>
          <IconButton :href="nextHref()" src="/icons/next_button.svg" :newTab="false" :pointer="true" :size="56"/>
      </div>

      <div class="center-align" style="gap: 20px;">
          <IconButton href="https://open.spotify.com/user/andrew03330?si=abf7a454d86942d3" :newTab="true" src="/icons/spotify.svg" :size="36"/>
          <IconButton href="https://github.com/aceeedev" :newTab="true" src="/icons/github.svg" :size="36"/>
          <IconButton href="https://linkedin.com/in/andrew-michael-collins/" :newTab="true" src="/icons/linkedin.svg" :size="36"/>
      </div>

  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    currentPercentage: number,
    currentSectionIndex: number
  }>()
</script>

<script lang="ts">
  const sectionIDs = ["home", "about", "projects", "experience", "contact"]

  export default {
    computed: {
      percent(): string  {
        return this.currentPercentage.toString()
      }
    },
    methods: {
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

<style scoped>
  .mockup {
    height: 96vh;
    width: max(25vw, 360px);
    padding: 10px;
    top: 2.5%;
    position: sticky; 
    box-sizing: border-box;
    border: 4px solid var(--gray);
    border-radius: 36px;
  }

  .indent {
      padding-left: 20px;
  }

  .styledImg {
    border-radius: 12px; 
    height: max(23vw, 330px); 
    display: block; 
    margin-right: auto;
    margin-left: auto;
  }
</style>