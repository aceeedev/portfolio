<template>
  <div>
    <progress class="center-align" :value="percentage" max="100"></progress>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    percentage: string
  }>()
</script>

<script lang="ts">
  export default {
    methods: {
        getPercent(num: string) {
          let percent: string = parseFloat(num).toFixed(0) + "%";

          if (parseInt(num) >= 85) {
            percent += " - 10px";
          }

          return percent;
        },
      }
  }
</script>

<style>
  progress {
    direction: rtl;
    border-radius: 4px; 
    height: 8px;
    width: max(22%, 320px);
    display: block; 
    position: relative;
    margin-left: auto; 
    margin-right: auto;
    margin-top: 30px; 
    right: -6px
  }

  progress::-webkit-progress-bar {
    background-color: var(--primaryColor);
    border-radius: 4px;
  }

  progress::-webkit-progress-value {
    background-color: #686868;
    border-radius: 4px;
  }

  progress::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--primaryColor);
    position: relative;
    top: -6px; 
    right: calc(v-bind("getPercent(percentage)"));
  }

  progress::-moz-progress-bar {
      
  }

</style>