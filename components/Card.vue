
<template>
  <div class="center-align">
    <NuxtImg :src="src" height="200" style="border-radius: 12px; margin-right: 30px;" />

    <div>
      <p style="font-size: 30px; font-weight: bold;">
        {{ title }}
      </p>

      <p v-if="date !== ''" style="font-size: 20;">
        {{ date }}
      </p>

      <div v-if="links.length != 0" style="margin-bottom: 10px">
        <span v-for="(item, index) in links">
          <a href="item" target="_blank" style="text-decoration: underline solid var(--primaryColor); color: var(--primaryColor);">
            {{ getHostnameFromRegex(item) }}
          </a>
          
          {{ index != links.length - 1 ? " | " : "" }}
        </span>
      </div>

      <p>
        <slot style="font-size: 25px"></slot>
      </p>

      <div class="wrap">
        <p v-if="tags.length != 0" v-for="(item, index) in tags" class="tag">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // @ts-nocheck 

  const props = defineProps<{
    src: string,
    title: string,
    tags: Array<string>,
    links: Array<string>,
    date: string,
  }>()
</script>

<script lang="ts">
  export default {
    methods: {
      getHostnameFromRegex(url: string): string {
          const host = new URL(url).host;
          const dots = host.split('.');
          const domain = dots.at(-2).replace(/\d/g, '');

          return domain.charAt(0).toUpperCase() + domain.slice(1);
      }
    }
  }
</script>

<style scoped>
  p {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 25px;
  }

  span {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 20px;
  }

  .wrap {
    display: flex; 
    flex-wrap: wrap;
    gap: 10px;
  }

  .tag {
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border: 4px;
    border-style: solid;
    border-color: var(--primaryColor);
    border-radius: 50px;
    background-color: transparent;
    font-size: 25px;
  }
</style>