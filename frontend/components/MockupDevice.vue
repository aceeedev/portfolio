<template>
  <div class="mockup">
      <p class="center-align" style="font-size: 30px; font-weight: bold; margin-top: 10px; margin-bottom: 10px; height: 5%;">Andrew Collins</p>

      <NuxtImg preload :src="SECTIONS[sectionIndex].image" class="styledImg" alt="Section Image" />
      
      <div style="height: 12%;">
        <p class="indent" style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">{{ SECTIONS[sectionIndex].title }}</p>
        <p class="indent" style="font-size: 25px; margin-top: 0px;">{{ SECTIONS[sectionIndex].subtitle}}</p>
      </div>
     
      <ProgressBar :percentage="percent" />
      
      <div class="center-align" style="gap: 30px; margin: 30px 0px 30px; height: max(5%, 56px)">
          <IconButton :href="previousHref()" src="/icons/previous_button.svg" ariaLabel="Previous Section" :newTab="false" :pointer="true" :size="56" :highlighted="false" />
          <IconButton href="" src="/icons/pause_button.svg" ariaLabel="Pause" :newTab="false" :size="56" :highlighted="false" />
          <IconButton :href="nextHref()" src="/icons/next_button.svg" ariaLabel="Next Section" :newTab="false" :pointer="true" :size="56" :highlighted="false" />
      </div>

      <IconLinks :iconSize="36" :iconGap="20" :highlighted="false" style="height: 5%" />

  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    percentage: number,
    sectionIndex: number,
  }>()
</script>

<script lang="ts">
  import { SECTIONS } from "~/constants/index" 

  const sectionIDs = ["home", "about", "projects", "experience", "contact"]

  export default {
    computed: {
      SECTIONS() {
        return SECTIONS;
      },
      percent(): string  {
        return this.percentage.toString()
      }
    },
    methods: {
      previousHref(): string {
        let href = "home"

        if (this.sectionIndex > 0) {
          href = sectionIDs[this.sectionIndex - 1];

          this.$emit('addToSectionIndex', -1)
        }
    
        return href;
      },
      nextHref(): string {
        let href = "contact"

        if (this.sectionIndex < sectionIDs.length - 1) {
          href = sectionIDs[this.sectionIndex + 1];

          this.$emit('addToSectionIndex', 1)
        }

        return href;
      }
    }
  }
</script>

<style scoped>
  .mockup {
    height: min(850px, 96vh);
    width: max(370px, min(25vw, 360px));
    padding: 10px;
    top: 50%;
    transform: translateY(-50%);
    position: fixed;
    box-sizing: border-box;
    border: 4px solid var(--gray);
    border-radius: 36px;
  }

  .indent {
      padding-left: 20px;
  }

  .styledImg {
    border-radius: 12px; 
    height: min(330px, 40%); 
    display: block; 
    margin-right: auto;
    margin-left: auto;
  }
</style>