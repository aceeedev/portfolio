<template>
  <div class="navbar">
    <IconButton href="home" :pointer="true" :newTab="false" src="/icons/home.svg" :size="36" :highlighted="sectionIndex == 0" />
    <IconButton href="about" :pointer="true" :newTab="false" src="/icons/user.svg" :size="36" :highlighted="sectionIndex == 1" />
    <IconButton href="projects" :pointer="true" :newTab="false" src="/icons/folder.svg" :size="36" :highlighted="sectionIndex == 2" />
    <IconButton href="experience" :pointer="true" :newTab="false" src="/icons/briefcase.svg" :size="36" :highlighted="sectionIndex == 3" />
    <IconButton href="contact" :pointer="true" :newTab="false" src="/icons/mail.svg" :size="36" :highlighted="sectionIndex == 4" />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    sectionIndex: number,
  }>()
</script>

<style scoped>
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