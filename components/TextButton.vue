<template>
  <button 
    type="button" 
    class="btn"> 
    <slot> </slot> 
  </button>
</template>

<script setup lang="ts">
  const props = defineProps<{
    href: string,
    }>()
</script>

<script lang="ts">
  
</script>

<style>
  .btn {
    height: 65px;
    padding: 10px;
    border: 4px;
    border-style: solid;
    border-color: var(--primaryColor);
    border-radius: 50px;
    background-color: transparent;
    font-size: 35px;
    color: white;
    cursor: pointer;
  }
</style>