// Interfaces
type Link = Readonly<{
    link: string;
    icon: string;
}>;

type Section = Readonly<{
    title: string;
    subtitle: string;
    image: string;
}>;

type Project = Readonly<{
    title: string;
    description: string;
    image: string;
    links: Array<string | {link: string; name: string;}>;
    tags: Array<string>;
}>;

export type Experience = Readonly<{
    title: string;
    description: string;
    image: string;
    date: string;
    links: Array<string | {link: string; name: string;}>;
}>;


// Constants:
export const LINKS: Record<string, Link> = {
    'spotify': {
        'link': 'https://open.spotify.com/user/andrew03330?si=abf7a454d86942d3',
        'icon': '/icons/spotify.svg',
    },
    'github': {
        'link': 'https://github.com/aceeedev',
        'icon': '/icons/github.svg',
    },
    'linkedin': {
        'link': 'https://linkedin.com/in/andrew-michael-collins',
        'icon': '/icons/linkedin.svg',
    }
};

export const SECTIONS: Array<Section> = [
    {
        'title': 'Hello, Welcome!',
        'subtitle': 'This is my portfolio!',
        'image': '/images/sections/intro.png',
    },
    {
        'title': 'Learn About Me',
        'subtitle': 'and explore my music taste',
        'image': '/images/sections/about.jpg',
    },
    {
        'title': 'I <3 Projects',
        'subtitle': 'Check out what I\'m cooking',
        'image': '/images/sections/projects.jpg',
    },
    {
        'title': 'My Journey',
        'subtitle': 'Building community matters',
        'image': '/images/sections/experiences.jpg',
    },
    {
        'title': 'Let\'s Connect',
        'subtitle': 'Always open to have a chat',
        'image': '/images/sections/contact.jpg',
    },
];

export const PROJECTS: Array<Project> = [
    {
        'title': 'Toki Alarm',
        'description': 'An alarm clock app for iOS with 950+ users that requires the user to solve a puzzle to turn off the alarm. Alongside the app, I created a business plan, marketing plan, and financials which resulted in a successful business.',
        'image': '/images/projects/toki.png',
        'links': ['https://apps.apple.com/us/app/toki-alarm-puzzle-alarm-clock/id1615680878', 'https://github.com/aceeedev/toki'],
        'tags': ['iOS', 'Flutter', 'SQLite'],
    },
    {
        'title': 'Brickdle.com',
        'description': 'Parsed catalog of 19,000+ LEGO sets to create a daily Wordle-like game where users guess number of LEGO\'s in the picture. Over 2,000 plays in 37 countries in the first month!',
        'image': '/images/projects/brickdle.png',
        'links': [{'link': 'https://brickdle.com', 'name': 'Website'}, 'https://github.com/aceeedev/brickdle'],
        'tags': ['Web', 'Flutter', 'Firebase Analytics'],
    },
    {
        'title': 'Fist Bump',
        'description': 'Winner of 3rd Place in Hack for Humanity 2024 hackathon. Developed full-stack website and API to connect students with on-campus events with custom calendar view.',
        'image': '/images/projects/fist_bump.png',
        'links': ['https://devpost.com/software/fist-bump-wr63c8', 'https://github.com/LeoATX/humanityhack2024'],
        'tags': ['Web', 'Vue.js', 'REST API', 'Dart Shelf', 'NoSQL'],
    },
    {
        'title': 'Park, Bus, and Jam',
        'description': '3rd place winner in the INRIX Hack 2023. Wrote full-stack transportation app invented to find most optimal parking and public transportation for concerts.',
        'image': '/images/projects/pbj.png',
        'links': ['https://devpost.com/software/app-h2mex7', 'https://github.com/aceeedev/inrix-hack-23/tree/main'],
        'tags': ['Mobile App', 'Flutter', 'NoSQL', 'Flask', 'Python'],
    },
    {
        'title': 'Your Pitch',
        'description': 'Won 3rd place in the Santa Clara University ACM Winter Challenge 2022. Developing a daily-curated music mobile app with a custom album cover calendar for iOS and Android. Created a custom-made Spotify Web API Wrapper with OAUTH 2.0. Additionally implemented a website for Your Pitch.',
        'image': '/images/projects/your_pitch.jpg',
        'links': ['https://github.com/aceeedev/daily-spotify'],
        'tags': ['Mobile App', 'Flutter', 'OAuth 2.0', 'API Wrapper', 'NoSQL', 'Web'],
    },
    {
        'title': 'NestNotification',
        'description': '4th place winner of INRIX Hack 2022. Created a full-stack location-sharing mobile app for the safety of adolescents and young adults.',
        'image': '/images/projects/nest_notifications.png',
        'links': ['https://devpost.com/software/nestnotifications', 'https://github.com/aceeedev/INRIX-Hack-22'],
        'tags': ['Mobile', 'Flutter', 'Flask', 'REST API', 'SQLite'],
    },
    {
        'title': 'Learning Py',
        'description': 'Developed curriculum for novice programmers on Python and its applications through an informational website.',
        'image': '/images/projects/learning_py.png',
        'links': [{'link': 'https://py.andrewcollins.xyz/', 'name': 'Website'}],
        'tags': ['Web', 'Next.js', 'Netlify'],
    },
];

export const EXPERIENCES: Array<{main: Experience; journey: Array<Experience>;}> = [
    {
        'main': {
            'title': 'SCU HCI Lab, Academic Researcher',
            'description': 'Researching influence of tone and rhetoric using Valence-Arousal Model to improve UX of screen time messages on iOS. Collaborating with team of 5 through Agile and built with Swift.',
            'image': '/images/experiences/scu_hci_logo.jpeg',
            'date': 'Jan 2023 - Present',
            'links': [{'link': 'https://scuhci.com/', 'name': 'Website'}],
        },
        'journey': [], 
    },
    {
        'main': {
            'title': 'SCU ACM, President',
            'description': 'Responsible for managing 3 student-run hackathons (Hack for Humanity, INRIX Hack, and Roblox Hack) with 300+ participants each. Instructed technical workshops on Python/Flask and OpenAI to 200+ students.',
            'image': '/images/experiences/acm_logo.png',
            'date': 'Oct 2022 - Present',
            'links': [{'link': 'https://scuacm.com', 'name': 'Website'}, {'link': 'https://hackforhumanity.io', 'name': 'Hack for Humanity'}],
        },  
        'journey': [
            {
                'title': 'SCU ACM, President',
                'description': 'Leader stuff',
                'image': '/images/experiences/acm_logo.png',
                'date': 'Apr 2024 - Present',
                'links': [{'link': 'https://scuacm.com', 'name': 'Website'}],
            },  
            {
                'title': 'SCU ACM, Hackathon Coordinator',
                'description': 'Responsible for managing 3 student-run hackathons (Hack for Humanity, INRIX Hack, and Roblox Hack) with 300+ participants each',
                'image': '/images/experiences/acm_hackathon.jpg',
                'date': 'Apr 2023 - Apr 2024',
                'links': [{'link': 'https://hackforhumanity.io', 'name': 'Hack for Humanity'}, {'link': 'https://inrix.scuacm.com', 'name': 'INRIX Hack'}, {'link': 'https://roblox.scuacm.com', 'name': 'Roblox Hack'}],
            }, 
            {
                'title': 'SCU ACM, Underclassmen Representative',
                'description': 'Instructed technical workshops on Python/Flask and OpenAI to 200+ students. In charge of engaging the community and exposing the club to more underclassmen.',
                'image': '/images/experiences/acm_underclassmen.jpg',
                'date': 'Oct 2022 - Apr 2023',
                'links': [],
            }, 
        ],
    },
    {
        'main': {
            'title': 'SCU Video Game Design Club, Vice President',
            'description': 'Awarded Santa Clara University\'s Provisional Student Organization of the Year for fostering an interdisciplinary community of 125+ members.',
            'image': '/images/experiences/vgdc_vp.png',
            'date': 'Dec 2022 - Present',
            'links': [],
        }, 
        'journey': [
            {
                'title': 'SCU Video Game Design Club, Vice President',
                'description': '',
                'image': '/images/experiences/vgdc_vp.png',
                'date': 'Sept 2024 - Present',
                'links': [],
            }, 
            {
                'title': 'SCU Video Game Design Club, C.T.O.',
                'description': 'In charge of overseeing all technologies including GitHub (git project manager) and Unity (C#). Awarded Santa Clara University\'s Provisional Student Organization of the Year for fostering an interdisciplinary community of 125+ members.',
                'image': '/images/experiences/vgdc_cto.png',
                'date': 'Dec 2022 - Sept 2024',
                'links': [],
            }, 
        ],
    },
    {
        'main': {
            'title': 'NexStream Technical Education, Project Lead',
            'description': 'Coordinated team of students to create online virtual classroom web app using WebGL, Unity, and dedicated servers. Managed project vision, delegated tasks through a Scrum model, and handled documentation to keep team productive.',
            'image': '/images/experiences/nexstream.png',
            'date': 'Aug 2021 - Dec 2021',
            'links': [],
        },
        'journey': [],  
    }
]

// Functions:
export function goToSection(sectionID: string)  {
    const element = document.getElementById(sectionID);

    window.scrollTo({
      top: window.scrollY + element!.getBoundingClientRect().top, 
      behavior: "smooth",
    });
};
