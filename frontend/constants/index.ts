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
        'description': 'Published full-stack puzzle alarm clock app for iOS with 1000+ users integrated with Apple\'s Game Center. Designed as a profitable solution to better waking up in the morning',
        'image': '/images/projects/toki.png',
        'links': ['https://apps.apple.com/us/app/toki-alarm-puzzle-alarm-clock/id1615680878', 'https://github.com/aceeedev/toki'],
        'tags': ['iOS', 'Flutter', 'SQLite'],
    },
    {
        'title': 'Brickdle.com',
        'description': 'Parsed 17000+ LEGO sets to create Wordle-like game where users guess number of LEGO\'s in images. Acquired 2.5K+ plays and 900+ visits across 37 countries in first month',
        'image': '/images/projects/brickdle.png',
        'links': [{'link': 'https://brickdle.com', 'name': 'Website'}, 'https://github.com/aceeedev/brickdle'],
        'tags': ['Web', 'Flutter', 'Firebase Analytics'],
    },
    {
        'title': 'Fist Bump',
        'description': 'Won 3rd Place in Hack for Humanity 2024 hackathon. Engineered full-stack website and API to connect students with on-campus events with custom calendar view',
        'image': '/images/projects/fist_bump.png',
        'links': ['https://devpost.com/software/fist-bump-wr63c8', 'https://github.com/LeoATX/humanityhack2024'],
        'tags': ['Web', 'Vue.js', 'REST API', 'Dart Shelf', 'NoSQL'],
    },
    {
        'title': 'Park, Bus, and Jam',
        'description': 'Won 3rd Place in INRIX Hack 2023 hackathon. Wrote full-stack transportation app invented to find most optimal parking and public transportation for concerts',
        'image': '/images/projects/pbj.png',
        'links': ['https://devpost.com/software/app-h2mex7', 'https://github.com/aceeedev/inrix-hack-23/tree/main'],
        'tags': ['Mobile App', 'Flutter', 'NoSQL', 'Flask', 'Python'],
    },
    {
        'title': 'Your Pitch',
        'description': 'Won 3rd place in SCU ACM Winter Challenge 2022. Developed daily-curated music mobile app with custom Spotify Web API Wrapper and OAuth 2.0 PKCE Flow',
        'image': '/images/projects/your_pitch.jpg',
        'links': ['https://github.com/aceeedev/daily-spotify'],
        'tags': ['Mobile App', 'Flutter', 'OAuth 2.0', 'API Wrapper', 'NoSQL', 'Web'],
    },
    {
        'title': 'NestNotification',
        'description': 'Won 4th place in INRIX Hack 2022 hackathon. Created a full-stack location-sharing mobile app for the safety of adolescents and young adults.',
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
            'title': 'SCU HCI Lab, Software Developer',
            'description': 'Created custom data analysis tools with Python and Pandas in a collaborative Jupyter environment to investigate redesigning screen time management tools for digital wellbeing. Developed iOS app in Swift to be used to deploy for live research study utilizing iOS screen time APIs. Collaborated and led a team of 6 through Agile system on Monday.com and Trello',
            'image': '/images/experiences/scu_hci_logo.jpeg',
            'date': 'Jan 2023 - Present',
            'links': [{'link': 'https://scuhci.com/', 'name': 'Website'}],
        },
        'journey': [], 
    },
    {
        'main': {
            'title': 'SCU ACM, President',
            'description': 'Managed and ran 3 student-run hackathons (Hack for Humanity, INRIX Hack, and Roblox Hack) with 300+ participants each to give students valuable industry skills and opportunities. Instructed technical workshops on Python/Flask, Fullstack development, personal projects, and OpenAI to 200+ students to teach importance of going beyond academia',
            'image': '/images/experiences/acm_logo.png',
            'date': 'Oct 2022 - Present',
            'links': [{'link': 'https://scuacm.com', 'name': 'Website'}, {'link': 'https://hackforhumanity.io', 'name': 'Hack for Humanity'}],
        },  
        'journey': [
            {
                'title': 'SCU ACM, President',
                'description': '',
                'image': '/images/experiences/acm_logo.png',
                'date': 'Apr 2024 - Present',
                'links': [{'link': 'https://scuacm.com', 'name': 'Website'}],
            },  
            {
                'title': 'SCU ACM, Hackathon Coordinator',
                'description': 'Managed and ran 3 student-run hackathons (Hack for Humanity, INRIX Hack, and Roblox Hack) with 300+ participants each to give students valuable industry skills and opportunities',
                'image': '/images/experiences/acm_hackathon.jpg',
                'date': 'Apr 2023 - Apr 2024',
                'links': [{'link': 'https://hackforhumanity.io', 'name': 'Hack for Humanity'}, {'link': 'https://inrix.scuacm.com', 'name': 'INRIX Hack'}, {'link': 'https://roblox.scuacm.com', 'name': 'Roblox Hack'}],
            }, 
            {
                'title': 'SCU ACM, Underclassmen Representative',
                'description': 'Instructed technical workshops on Python/Flask, Fullstack development, personal projects, and OpenAI to 200+ students to teach importance of going beyond academia',
                'image': '/images/experiences/acm_underclassmen.jpg',
                'date': 'Oct 2022 - Apr 2023',
                'links': [],
            }, 
        ],
    },
    {
        'main': {
            'title': 'SCU Video Game Design Club, Vice President',
            'description': 'Oversaw all technologies including GitHub (git project manager), Unity (C#), and web design in a collaborative space to encourage leadership and innovation. Awarded Santa Clara University’s Provisional Student Organization of the Year for fostering a creative space for expression for an interdisciplinary community of 125+ members',
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
                'description': 'Oversaw all technologies including GitHub (git project manager), Unity (C#), and web design in a collaborative space to encourage leadership and innovation. Awarded Santa Clara University’s Provisional Student Organization of the Year for fostering a creative space for expression for an interdisciplinary community of 125+ members',
                'image': '/images/experiences/vgdc_cto.png',
                'date': 'Dec 2022 - Sept 2024',
                'links': [],
            }, 
        ],
    },
    {
        'main': {
            'title': 'NexStream Technical Education, Technical Project Manager',
            'description': 'Coordinated team of students to create online virtual classroom web app (HTML, Unity, Linux virtual machines) to engage and connect students during the pandemic academically. Managed project vision, delegated tasks through a Scrum model, and handled documentation to keep team productive and meet milestones',
            'image': '/images/experiences/nexstream.jpg',
            'date': 'Aug 2021 - Dec 2021',
            'links': [],
        },
        'journey': [],  
    }
]

export const DOG_PICS: Array<string> = ['/images/misc/buddy.jpg', '/images/misc/maddie.jpg']

// Functions:
export function goToSection(sectionID: string) {
    const element = document.getElementById(sectionID);

    window.scrollTo({
      top: window.scrollY + element!.getBoundingClientRect().top, 
      behavior: "smooth",
    });
};
