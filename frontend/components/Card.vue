
<template>
  <div :style="computedStyle">
    <div>
      <div class="img-frame">
        <NuxtImg preload :src="src" width="200px" height="200" :alt="alt" style="border-radius: 12px;" />
      </div>
      
      <div v-if="dots" class="dotted-line"></div>
    </div>

    <div>
      <p style="font-size: 30px; font-weight: bold;">
        {{ title }}
      </p>

      <p v-if="date !== ''" style="font-size: 20;">
        {{ date }}
      </p>

      <div v-if="formattedLinks.length != 0" style="margin-bottom: 10px">
        <span v-for="(item, index) in formattedLinks">
          <a :href="item.link" target="_blank" style="text-decoration: underline solid var(--primaryColor); color: var(--primaryColor);">
            {{ item.name}}
          </a>
          
          {{ index != formattedLinks.length - 1 ? " | " : "" }}
        </span>
      </div>

      <p>
        <slot style="font-size: 25px"></slot>
      </p>

      <div class="wrap">
        <p v-if="tags.length != 0" v-for="(item, index) in tags" class="tag" style="font-size: 20px;">
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
    alt: string,
    title: string,
    tags: Array<string>,
    links: Array<string | {link: string; name: string;}>,
    date: string,
    dots: boolean,
    isDesktop: boolean,
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
    },
    computed: {
      formattedLinks() {
        return this.links.map((itm) => {
          if (typeof itm === "string") {
            return {
              'link': itm,
              'name': this.getHostnameFromRegex(itm),
            }
          }
          
          return itm;
        });
      },
      computedStyle() {
        return `display: flex; flex-direction: ${this.isDesktop ? 'row' : 'column'};`;
      },
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

  .dotted-line {
    height: 100%;
    width: 45%;
    border-right: thick dotted white;
  }

</style>