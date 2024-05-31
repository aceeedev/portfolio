<template>
  <a v-if="href !== ''" :href="href" :target="target" class="btn"> 
    <slot> </slot> 
  </a> 
  <a v-else class="btn" rel="nofollow">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
  const props = defineProps<{
    href: string,
    target: string
  }>()
</script>

<style scoped>
  .btn {
    height: 42px;
    padding: 10px;
    border: 4px;
    border-style: solid;
    border-color: var(--primaryColor);
    border-radius: 50px;
    background-color: transparent;
    font-size: 35px;
    color: white;
    cursor: pointer;
    text-decoration: none; 
    white-space: nowrap;
  }
</style>