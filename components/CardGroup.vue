<template>
  <div>
    <Card v-if="condensed" :title="mainCard.title" :src="mainCard.image" :links="mainCard.links" :date="mainCard.date" :tags="[]">
      {{ mainCard.description }}
    </Card>
    <div v-if="!condensed" v-for="(item, index) in journeyCards">
      <Card :title="item.title" :src="item.image" :links="item.links" :date="item.date" :tags="[]">
        {{ item.description }}
      </Card>
      <div v-if="index != journeyCards.length - 1" class="dots-group" style="margin-bottom: 30px">
        <div class="dots"></div>
      </div>
    </div>
    
    <div class="center-align" style="margin-bottom: 45px">
      <NuxtImg v-if="journeyCards.length != 0" @click="toggleJourney()" :src="condensed ? '/icons/down.svg' : '/icons/up.svg'" width="64px" style="filter: invert(62%) sepia(15%) saturate(760%) hue-rotate(102deg) brightness(95%) contrast(89%);" />
    </div>  
  </div>
</template>

<script lang="ts" setup>
  import { type Experience } from '~/constants/index';

  const props = defineProps<{
    mainCard: Experience;
    journeyCards: Array<Experience>;
  }>();
</script>

<script lang="ts">
  export default {
    data:() => {
        return {
            condensed: true,
      }
    },
    methods: {
      toggleJourney() {
        this.condensed = !this.condensed;
      }
    }
  }
</script>

<style>
  .dots-group {
    display: flex;
    height: 100%;
  }

  .dots {
    overflow: hidden;
    word-wrap: break-word;
    color: #999;
    letter-spacing: 5px;
    writing-mode: tb-rl;
  }

  .dots:after {
    writing-mode: tb-rl;
    content: '.......................';
  }

</style>