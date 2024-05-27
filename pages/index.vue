<template>
    <div class="container">
        <div v-if="isMockup">
            <MockupDevice :percentage="currentPercentage" :sectionIndex="currentSectionIndex" style="grid-column: 1;"/>
        </div>
        <div style="grid-column: 2;">
            <section class="hero" id="home" style="margin-top: 0; height: 100vh;">
                <h1 style="margin: 0px">I'm <span class="highlight">Andrew Collins</span></h1>
                <p>
                    I'm committed to fostering collaboration, communication, and the opportunity to 
                    learn from others! Please feel free to explore my work below or reach out to 
                    me here!
                </p>
                <div style="display: flex; gap: 50px">
                    <TextButton href="/files/Andrew_Collins_Resume.pdf" target="_blank">Résumé <NuxtImg src="/icons/file_text.svg" style="height: 32px;"/> </TextButton>
                    <TextButton @click="goToSection('projects')" href="" target="">Projects!</TextButton>
                </div>
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
                <div class="center-align" style="margin-top: 50px; gap: 50px; display: flex; align-items: center;">
                    <p style="text-align: center;">
                        What I'm currently <br> jamming out to 🕺  
                    </p>
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <NuxtImg src="/images/sections/intro.png" height="200"; style="border-radius: 20px;"/>
                        <p style="margin-bottom: 0px; margin-top: 10px; font-weight: bold; text-align: center;">
                            Oogway Ascends
                        </p>
                        <p style="margin-top: 0px; text-align: center;">
                            Hans Zimmer, John Powell
                        </p>
                    </div>
                </div>
            </section>

            <section id="projects">
                <h1>Featured Projects</h1>
                <Card v-for="project in PROJECTS" :title="project.title" :src="project.image" :links="project.links" :tags="project.tags" date="" style="margin-bottom: 60px" :dots="false">
                        {{ project.description }}
                </Card>
            </section>

            <section id="experience">
                <h1>Experience</h1>
                <CardGroup v-for="experience in EXPERIENCES" :mainCard="experience.main" :journeyCards="experience.journey" style="margin-bottom: 60px;"></CardGroup>
            </section>

            <section id="contact" style="height: 101vh;">
                <h1>Contact</h1>
            </section>
        </div>

        <NavBar :sectionIndex="currentSectionIndex" style="grid-column: 3;"/>
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
            isDesktop: true,
            isMockup: true,
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
        checkScreenSize() {
            this.isMockup = window.innerWidth > 990;
        },
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
    },
    computed: {
        PROJECTS() {
            return PROJECTS;
        },
    }
  }
</script>

<style>
    .container {
        display: grid;
        gap: 50px;
    }

    section {
        margin-top: 10%;
    }

    .hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>
