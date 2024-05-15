<template>
    <div class="container">
        <div v-if="isMockup">
            <MockupDevice :currentPercentage="currentPercentage" :currentSectionIndex="currentSectionIndex" style="grid-column: 1;"/>
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
                        <NuxtImg src="/images/intro.png" height="200"; style="border-radius: 20px;"/>
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

                <Card src="/images/intro.png" title="Toki Alarm" :tags="['iOS', 'Flutter', 'SQLite']" :links="['https://apps.apple.com/us/app/toki-alarm-puzzle-alarm-clock/id1615680878', 'https://github.com/aceeedev/toki']" date="">
                    An alarm clock app for iOS with 950+ users that requires the user to solve a puzzle to turn off the alarm. 
                    Alongside the app, I created a business plan, marketing plan, and financials which resulted in a successful 
                    business.
                </Card>
            </section>

            <section id="experience">
                <h1>Experience</h1>
            </section>

            <section id="contact">
                <h1>Contact</h1>
            </section>
            <section id="ghost" style="height: 10vh;">

            </section>
        </div>

        <NavBar :sectionIndex="currentSectionIndex" style="grid-column: 3;"/>
    </div>
</template>

<script lang="ts">
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
        this.scrollFunc = this.throttle(this.scrollEvent, 10);
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
            this.isMockup = window.innerWidth > 770;
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
        // console.log(this.findVisibility(sections[5]))
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
            this.currentSectionIndex = i - 1;
            //console.log(this.currentSectionIndex);
            
            break;
          }
        } 
      },
      findVisibility(element: any) {
        const windowBottom = window.scrollY + window.innerHeight;
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const percentage = ((windowBottom - (elementTop - elementHeight)) / elementHeight) * 100;

        return percentage >= 100 ? 0 : (percentage <= 0 ? 0 : Math.round(percentage));
      },
        goToSection(sectionID: string) {
            const element = document.getElementById(sectionID);
            element!.scrollIntoView({behavior: 'smooth'}); 
        }
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
