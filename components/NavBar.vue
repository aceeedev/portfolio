<template>
  <div class="navbar">
    <IconButton href="home" :newTab="false" src="_nuxt/assets/icons/home.svg" :size="36"/>
    <IconButton href="about" :newTab="false" src="_nuxt/assets/icons/user.svg" :size="36"/>
    <IconButton href="projects" :newTab="false" src="_nuxt/assets/icons/folder.svg" :size="36"/>
    <IconButton href="experience" :newTab="false" src="_nuxt/assets/icons/briefcase.svg" :size="36"/>
    <IconButton href="contact" :newTab="false" src="_nuxt/assets/icons/mail.svg" :size="36"/>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
  .navbar {
    height: 50vh;
    width: 60px;
    top: 25%;
    position: sticky; 
    box-sizing: border-box;
    border: 4px solid var(--gray);
    border-radius: 36px;
    display: grid;
  }
</style>