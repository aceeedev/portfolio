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

          // calculate hyperbolic tangent func for offset, crazy math
          // const x = parseFloat(num);
          // const rate = 50.0;
          // const scale = 10.0;
          // let offset = ((Math.E^(x/rate) - Math.E^(-1*x/rate)) / (Math.E^(x/rate) + Math.E^(-1*x/rate))) * scale
          
          // offset fix for now:
          // upper bound
          if (parseInt(num) >= 75) {
            percent += " - 2px";
          }
          if (parseInt(num) >= 80) {
            percent += " - 2px";
          }
          if (parseInt(num) >= 85) {
            percent += " - 2px";
          }
          if (parseInt(num) >= 90) {
            percent += " - 2px";
          }
          if (parseInt(num) >= 95) {
            percent += " - 2px";
          }

          // lower bound
          if (parseInt(num) <= 5) {
            percent += " + 2px";
          }
          if (parseInt(num) <= 10) {
            percent += " + 2px";
          }
          if (parseInt(num) <= 15) {
            percent += " + 2px";
          }
          if (parseInt(num) <= 20) {
            percent += " + 2px";
          }
          if (parseInt(num) <= 25) {
            percent += " + 2px";
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