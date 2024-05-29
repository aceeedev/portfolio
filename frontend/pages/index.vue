<template>
    <div :style="containerStyle">
        <div v-if="isMockup" :style="mockupStyle"></div>
        <MockupDevice v-if="isMockup" :percentage="currentPercentage" :sectionIndex="currentSectionIndex" />
        
        <div :style="contentStyle">
            <section class="hero fullscreenHeight" id="home" style="margin-top: 0;">
                <div v-if="!isMockup" class="img-frame" style="margin-bottom: 16px;">
                    <NuxtImg src="/images/sections/intro.png" width="200px" height="200" style="border-radius: 12px;"/>
                </div>

                <h1 style="margin: 0px">I'm <br v-if="!isDesktop" /> <span class="highlight">Andrew Collins</span></h1>
                <p>
                    I'm committed to fostering collaboration, communication, and the opportunity to 
                    learn from others! Please feel free to explore my work below or reach out to 
                    me here!
                </p>
                <div :style="heroButtonStyle" :class="isMockup ? '' : 'center-align'">
                    <TextButton href="/files/Andrew_Collins_Resume.pdf" target="_blank" style="display: flex; flex-direction: row; align-items: center; justify-content: center;">Résumé <NuxtImg src="/icons/file_text.svg" style="height: 32px; margin-left: 10px;" /> </TextButton>
                    <TextButton @click="goToSection('projects')" href="" target="">Projects!</TextButton>
                </div>
                <IconLinks v-if="!isMockup" :iconSize="64" :iconGap="20" :highlighted="false" style="margin-top: 16px"/>
            </section>

            <section id="about">
                <h1 id="about">About Me</h1>
                <p>
                    Hello my name is Andrew and I am a driven computer science and engineering student 
                    at Santa Clara University. Confident in my ability to thrive in collaborative environments 
                    and excited to learn new skills, I am eager to explore diverse opportunities and industries 
                    with a shared emphasis on technology, informing my professional career along the way. 
                </p>
                <p>
                    In my spare time, I'll be found hiking vast lands, lost in a book, brewing savory coffee, or finding hidden indie music.
                </p>

                <CurrentSong :isDesktop="isDesktop"/>
            </section>

            <section id="projects">
                <h1>Featured Projects</h1>
                <Card v-for="project in PROJECTS" :title="project.title" :src="project.image" :links="project.links" :tags="project.tags" date="" style="margin-bottom: 60px" :dots="false" :isDesktop="isDesktop">
                        {{ project.description }}
                </Card>
            </section>

            <section id="experience">
                <h1>Experience</h1>
                <CardGroup v-for="experience in EXPERIENCES" :mainCard="experience.main" :journeyCards="experience.journey" :isDesktop="isDesktop" style="margin-bottom: 60px;"></CardGroup>
            </section>

            <section id="contact" class="fullscreenHeight">
                <h1>Contact</h1>
                <div style="display: flex; flex-direction: column; align-items: center; margin-top: 35%;">
                    <p><a href="mailto:andrewmcollins3.com" class ="highlight" style="">andrewmcollins3@gmail.com</a></p>

                    <IconLinks :iconSize="48" :iconGap="24" :highlighted="false" />
                </div>
            </section>

            <div style="text-align: center;">
                <p>Hand crafted from Nuxt (Vue.js), CSS, and love!</p>
                <p style="font-size: 20px; margin-top: 0px;">©2024 by Andrew Collins</p>
            </div>
        </div>

        <NavBar :sectionIndex="currentSectionIndex" :isDesktop="isDesktop" :style="navBarStyle" />

        <div v-if="!isDesktop" style="height: 60px;"></div>
    </div>
</template>

<script setup lang="ts">
  const props = defineProps<{}>()
</script>

<script lang="ts">
    import { PROJECTS, EXPERIENCES, goToSection } from '~/constants/index';
    
    let sections: NodeListOf<HTMLElement> | [] = [];

  export default {
    data:() => {
        return {
            isMockup: true,
            isDesktop: true,
            currentPercentage: 1,
            currentSectionIndex: 0,
            scrollFunc: () => {},
      }
    },
    mounted() {
        // scrolling related   
        sections = document.querySelectorAll('section');
        this.scrollFunc = this.throttle(this.scrollEvent, 3);
        this.scrollFunc(); // initially set bar

        window.addEventListener('scroll', this.scrollFunc);

        // resize related
        this.checkScreenSize(); // initial screen size check

        window.addEventListener("resize", this.checkScreenSize);
    },
    unmounted() {
        window.removeEventListener('scroll', this.scrollFunc);
        window.removeEventListener("resize", this.checkScreenSize);
    },
    methods: {
        throttle(callbackFn: any, limit: number) {
          let wait = false;                  
          return function () {              
              if (!wait) {                  
                  callbackFn.call();           
                  wait = true;               
                  setTimeout(function () {   
                      wait = false;          
                  }, limit);
              }
          }
      },
      scrollEvent() {
        // console.log(this.findVisibility(sections[0]))
        // console.log(this.findVisibility(sections[1]))
        // console.log(this.findVisibility(sections[2]))
        // console.log(this.findVisibility(sections[3]))
        // console.log(this.findVisibility(sections[4]))
        // console.log(`section id: ${this.currentSectionIndex}`)
        // console.log("\n ")
        for (let i = sections.length - 1; i >= 0; i--) {
          //console.log(`i: ${i}`)
          let section = sections[i];
          let percent = this.findVisibility(section);
          //console.log(section.textContent);
          //console.log(percent);
          
          if (percent != 0) {
            this.currentPercentage = percent;
            this.currentSectionIndex = i;
            //console.log(this.currentSectionIndex);
            
            break;
          }
        } 
      },
      findVisibility(element: any) {
        const rect = element.getBoundingClientRect();

        let percent = ((rect.bottom - 10) / rect.height) * 100;
        percent = percent < 0 ? 0 : (percent > 100 ? 0 : percent);

        return percent;
      },
      checkScreenSize() {
        this.isMockup = window.innerWidth > 990 && window.innerHeight > 600;
        this.isDesktop = window.innerWidth > 660;
      },
    },
    computed: {
        PROJECTS() {
            return PROJECTS;
        },
        containerStyle() {
            return this.isDesktop ? `
                display: grid;
                gap: 50px;
            ` : `
                padding: 10px;
            `
        },
        heroButtonStyle() {
            return this.isDesktop ? 'display: flex; gap: 50px' : 'display: flex; gap: 30px;';
        },
        mockupStyle() {
            return this.isDesktop ? 'grid-column: 1; width: max(370px, min(25vw, 360px));' : '';
        },
        contentStyle() {
            return this.isDesktop ? 'grid-column: 2;' : ';';
        },
        navBarStyle() {
            return this.isDesktop ? 'grid-column: 3;' : ';';
        },
    }
  }
</script>

<style>
    section {
        margin-top: 10%;
    }

    .hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .fullscreenHeight {
        height: min(100vh, 1400px)
    }
</style>
