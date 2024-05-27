<template>
  <div class="center-align" :style="gapStyle">
          <IconButton :href="LINKS.spotify.link" :newTab="true" :src="LINKS.spotify.icon" :size="iconSize" :highlighted="highlighted" />
          <IconButton :href="LINKS.github.link" :newTab="true" :src="LINKS.github.icon" :size="iconSize" :highlighted="highlighted" />
          <IconButton :href="LINKS.linkedin.link" :newTab="true" :src="LINKS.linkedin.icon" :size="iconSize" :highlighted="highlighted" />
      </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    iconSize: number,
    iconGap: number,
    highlighted: boolean,
  }>()
</script>

<script lang="ts">

  import { LINKS } from "~/constants/index" 


  export default {
    computed: {
      LINKS() {
        return LINKS;
      },
      gapStyle() {
        return `gap: ${this.iconGap}px;`;
      },
    }
  }
</script>

<style>

</style>