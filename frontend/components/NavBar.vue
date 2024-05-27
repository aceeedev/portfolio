<template>
  <div :style="navBarStyle">
    <IconButton href="home" :pointer="true" :newTab="false" src="/icons/home.svg" :size="36" :highlighted="sectionIndex == 0" />
    <IconButton href="about" :pointer="true" :newTab="false" src="/icons/user.svg" :size="36" :highlighted="sectionIndex == 1" />
    <IconButton href="projects" :pointer="true" :newTab="false" src="/icons/folder.svg" :size="36" :highlighted="sectionIndex == 2" />
    <IconButton href="experience" :pointer="true" :newTab="false" src="/icons/briefcase.svg" :size="36" :highlighted="sectionIndex == 3" />
    <IconButton href="contact" :pointer="true" :newTab="false" src="/icons/mail.svg" :size="36" :highlighted="sectionIndex == 4" />
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    sectionIndex: number,
    isDesktop: boolean,
  }>()
</script>

<script lang="ts">
  export default {
    computed: {
      navBarStyle() {
        return this.isDesktop ? `
          height: max(50vh, 300px);
          width: 60px;
          top: 25%;
          position: sticky; 
          box-sizing: border-box;
          border: 4px solid var(--gray);
          border-radius: 36px;
          display: grid;
        ` : `
          height: 60px;
          width: 60%;
          left: 20%;
          bottom: 10px;
          left: 20%;
          right: 0px; 
          z-index: 5;
          position: fixed;
          background-color: #121212;
          box-sizing: border-box;
          border: 4px solid var(--gray);
          border-radius: 36px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 10px;
        `;
      }
    }
  }
</script>
