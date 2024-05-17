<template>
  <a v-if="newTab" :href="href" target="_blank" class="center-align" :style="aStyle">
    <NuxtImg :src="src" :style="imgStyle"/>
  </a>
  <a v-else @click="goToSection(href)" class="center-align" :style="aStyle">
    <NuxtImg :src="src" :style="imgStyle"/>
  </a>
</template>

<script setup lang="ts">
  const props = defineProps<{
    href: string;
    src: string;
    size?: number;
    newTab?: boolean;
    pointer?: boolean;
    highlighted: boolean;
  }>()
</script>

<script lang="ts">
  import { goToSection } from '~/constants/index';

  export default {
    computed: {
      imgStyle(): string {
        let style = "";

        if (this.highlighted) {
          style += "filter: invert(62%) sepia(15%) saturate(760%) hue-rotate(102deg) brightness(95%) contrast(89%);";
        }

        if (this.size !== null) {
          style += `width: ${this.size}px`;
        }
        
        return style;
      },
      aStyle(): string {
        return (this.pointer || this.pointer === null) ? "cursor: pointer;" : "";
      },
    },
  }
</script>

<style>

</style>