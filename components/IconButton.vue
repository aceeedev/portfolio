<template>
  <a v-if="newTab" :href="href" target="_blank" class="center-align">
    <img :src="src" :style="style"/>
  </a>
  <a v-else @click="goToSection(href)" class="center-align">
    <img :src="src" :style="style"/>
  </a>
</template>

<script setup lang="ts">
  const props = defineProps<{
    href: string,
    src: string, 
    size?: number,
    newTab?: {
      type: Boolean, 
      default: true,
    },
  }>()
</script>

<script lang="ts">
  export default {
    computed: {
      style (): string {
        if (this.size === null) {
          return "";

        }

        console.log(this.size);
        
        return `width: ${this.size}px`;
      },
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