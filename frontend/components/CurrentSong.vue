<template>
    <div class="center-align" :style="divStyle">
        <div style="text-align: center;">
            <p>
                What I'm currently <br/> jamming out to 🕺
            </p>
            <p style="font-size: 16px; margin-top: 3px;">(Made with AWS & Spotify API)</p>
        </div>

        <a v-if="data.statusCode == 200" :href="data.body.href" target="_blank" style="cursor: pointer; display: flex; flex-direction: column; align-items: center;">
            <NuxtImg :src="data.body.image" height="200"; style="border-radius: 20px;"/>

            <p style="margin-bottom: 0px; margin-top: 10px; font-weight: bold; text-align: center;">
                {{ data.body.name }}
            </p>
            <p style="margin-top: 0px; text-align: center;">
                {{ data.body.artists }}
            </p>
        </a>
        <div v-else-if="data.statusCode == 204" style="display: flex; flex-direction: column; align-items: center;">
            <NuxtImg :src="DOG_PICS[Math.floor(Math.random()*DOG_PICS.length)]" height="200"; style="border-radius: 20px;"/>

            <p style="margin-top: 10px; text-align: center;">
                Currently not listening to anything <br/> so here's a pic of my dog &lt;3
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    // @ts-nocheck 

    const props = defineProps<{
        isDesktop: boolean,
    }>()
    
    const { data, error, pending: fetching } = await useFetch('https://h4f52gtqsk.execute-api.us-west-1.amazonaws.com/v1/get-current-song');
</script>

<script lang="ts">
    import { DOG_PICS } from '~/constants/index';

    export default {
        computed: {
            DOG_PICS() {
                return DOG_PICS;
            },
            divStyle() {
                return `margin-top: 50px; gap: 50px; display: flex; align-items: center; flex-direction: ${this.isDesktop ? 'row' : 'column'}`
            }
        }
    }
</script>

<style scoped>
    a {
        all: unset;
    }
</style>