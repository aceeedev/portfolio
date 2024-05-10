<template>
  <a v-if="newTab" :href="href" target="_blank" class="center-align" :style="aStyle">
    <img :src="src" :style="imgStyle"/>
  </a>
  <a v-else @click="goToSection(href)" class="center-align" :style="aStyle">
    <img :src="src" :style="imgStyle"/>
  </a>
</template>

<script setup lang="ts">
  const props = defineProps<{
    href: string;
    src: string;
    size?: number;
    newTab?: boolean;
    pointer?: boolean;
  }>()
</script>

<script lang="ts">
  export default {
    computed: {
      imgStyle(): string {
        if (this.size === null) {
          return "";
        }
        
        return `width: ${this.size}px`;
      },
      aStyle(): string {
        return (this.pointer || this.pointer === null) ? "cursor: pointer;" : "";
      }
    },
    methods: {
      goToSection(sectionID: string) {
        const element = document.getElementById(sectionID);
        element!.scrollIntoView({behavior: 'smooth'}); 
      }
    }
  }
</script>

<style>

</style>