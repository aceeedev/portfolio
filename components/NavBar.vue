<template>
  <div class="navbar">
    <IconButton href="home" :pointer="true" :newTab="false" src="_nuxt/assets/icons/home.svg" :size="36"/>
    <IconButton href="about" :pointer="true" :newTab="false" src="_nuxt/assets/icons/user.svg" :size="36"/>
    <IconButton href="projects" :pointer="true" :newTab="false" src="_nuxt/assets/icons/folder.svg" :size="36"/>
    <IconButton href="experience" :pointer="true" :newTab="false" src="_nuxt/assets/icons/briefcase.svg" :size="36"/>
    <IconButton href="contact" :pointer="true" :newTab="false" src="_nuxt/assets/icons/mail.svg" :size="36"/>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    sectionIndex: number,
  }>()
</script>

<style>
  .navbar {
    height: max(50vh, 300px);
    width: 60px;
    top: 25%;
    position: sticky; 
    box-sizing: border-box;
    border: 4px solid var(--gray);
    border-radius: 36px;
    display: grid;
  }
</style>