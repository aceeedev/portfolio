<template>
  <div>
    <Card v-if="condensed" :title="mainCard.title" :src="mainCard.image" :alt="alt" :links="mainCard.links" :date="mainCard.date" :tags="[]" :dots="false" :isDesktop="isDesktop">
      {{ mainCard.description }}
    </Card>

    <Card v-else v-for="(item, index) in journeyCards" :title="item.title" :src="item.image" :alt="alt" :links="item.links" :date="item.date" :tags="[]" :dots="index != journeyCards.length - 1" :isDesktop="isDesktop" style="margin-bottom: 30px;">
      {{ item.description }}
    </Card>
    
    <div class="center-align" style="margin-bottom: 45px">
      <NuxtImg v-if="journeyCards.length != 0" @click="toggleJourney()" :src="condensed ? '/icons/down.svg' : '/icons/up.svg'" width="64px" alt="Down Icon" style="filter: invert(62%) sepia(15%) saturate(760%) hue-rotate(102deg) brightness(95%) contrast(89%);" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { type Experience } from '~/constants/index';

  const props = defineProps<{
    mainCard: Experience;
    journeyCards: Array<Experience>;
    alt: string;
    isDesktop: boolean;
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
