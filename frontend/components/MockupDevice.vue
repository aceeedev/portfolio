<template>
  <div class="mockup">
      <p class="center-align" style="font-size: 30px; font-weight: bold; margin-top: 10px; margin-bottom: 10px;">Andrew Collins</p>

      <NuxtImg :src="SECTIONS[sectionIndex].image" class="styledImg" />

      <p class="indent" style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">{{ SECTIONS[sectionIndex].title }}</p>
      <p class="indent" style="font-size: 25px; margin-top: 0px;">{{ SECTIONS[sectionIndex].subtitle}}</p>

      <ProgressBar :percentage="percent" />
      
      <div class="center-align" style="gap: 30px; margin: 30px 0px 30px">
          <IconButton :href="previousHref()" src="/icons/previous_button.svg" :newTab="false" :pointer="true" :size="56" :highlighted="false" />
          <IconButton href="" src="/icons/pause_button.svg" :newTab="false" :size="56" :highlighted="false" />
          <IconButton :href="nextHref()" src="/icons/next_button.svg" :newTab="false" :pointer="true" :size="56" :highlighted="false" />
      </div>

      <IconLinks :iconSize="36" :iconGap="20" :highlighted="false"/>

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