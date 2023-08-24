import self from "../img/self.jpg"
import projCrud from "../img/projects/jlf-crud.jpg";
import projFloorDesigner from "../img/projects/jlf-floordesigner.jpg";
import projPostMachine from "../img/projects/jlf-postmachine.jpg";
import projReviewer from "../img/projects/jlf-reviewer.jpg";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Jennifer",
    lastName: "Fadriquela",
    initials: "jlf", 
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by tea (former coffee addict)'
        },
        {
            emoji: '🌎',
            text: 'based in Sydney'
        },
        {
            emoji: "💼",
            text: "Full Stack Developer at Standards Australia"
        },
        {
            emoji: "📧",
            text: "jenniferfadriquela@outlook.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/jengfad",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/jennifer-fadriquela-44091b7b",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "Hello! I'm Jennifer, currently a software developer that dabbles in backend and front-end stack. Trying my best to learn something new everyday (not just dev stuff, but life in general). When not coding, I like binging true crime documentaries.",
    skills:
        {
            proficientWith: ['C#', '.NET', 'Angular', 'React', 'SQL', 'Javascript', 'HTML/CSS', 'RxJs'],
            exposedTo: ['CMS: Umbraco/Kontent', 'NodeJs', 'Python', 'Azure CI/CD']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'ukulele',
            emoji: '🎵'
        },
        {
            label: 'true crime',
            emoji: '👮'
        },
        {
            label: 'badminton',
            emoji: '🏸'
        },
    ],
    portfolio: [
        {
            title: "Floor Designer",
            live: "https://jlf-floordesigner.netlify.app/",
            source: "https://github.com/jengfad/konva-floordesigner",
            description: "Floor Designer Prototype which uses React-Konva as main graphic library. It's currently the core PCF component to a Power Apps system but can also be a driver for a Custom React Web Application.",
            image: projFloorDesigner,
        },
        {
            title: "PostMachine",
            live: "https://jlf-postmachine.netlify.app/",
            source: "https://github.com/jengfad/post-machine",
            description: "An upgraded Postman clone which can execute multiple requests at once and results can be exported into Excel file.",
            image: projPostMachine,
        },
        {
            title: "Reviewer",
            live: "https://jlf-reviewer.netlify.app/",
            source: "https://github.com/jengfad/my-reviewer",
            description: "Originally a VCE clone that I used for reviewing Microsoft exams, it's generic enough to be used for general-reviewing purposes",
            image: projReviewer
        },
        {
            title: "CRUD App",
            live: "https://jlf-crud.netlify.app/",
            source: "https://github.com/jengfad/CodingTest",
            description: "CRUD Application in Nitro mode. It includes state management, server-side pagination, lazy-loading and form validations.",
            image: projCrud
        },
    ]
}