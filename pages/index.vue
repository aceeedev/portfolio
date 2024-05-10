<template>
    <div class="container">
        <MockupDevice style="grid-column: 1;"/>

        <div style="grid-column: 2;">
            <section class="hero" id="home">
                <h1 style="margin: 0px">I'm <span class="highlight">Andrew Collins</span></h1>
                <p>
                    I'm committed to fostering collaboration, communication, and the opportunity to 
                    learn from others! Please feel free to explore my work below or reach out to 
                    me here!
                </p>
                <div style="display: flex; gap: 50px">
                    <TextButton href="">Résumé</TextButton>
                    <TextButton href="">Projects!</TextButton>
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
                    In my spare time, I'll be found hiking vast lands, finding hidden indie music, or lost in a book.
                </p>
            </section>

            <section id="projects">
                <h1>Featured Projects</h1>
            </section>

            <section id="experience">
                <h1>Experience</h1>
            </section>

            <section id="contact">
                <h1>Contact</h1>
            </section>
        </div>

        <NavBar style="grid-column: 3;"/>
    </div>
</template>

<style>
    .container {
        display: grid;
        gap: 50px;
    }

    section {
        height: 100vh;
    }

    .hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>
