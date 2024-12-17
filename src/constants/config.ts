export const words = [
    {
        text: "Full Stack",
        className: " opacity-60 text-6xl font-extrabold font-jetbrains",
    },
    {
        text: "<",
        className: "text-6xl font-extrabold font-jetbrains",
    },
    {
        text: "Developer",
        className: "text-6xl font-extrabold font-jetbrains",
    },
    {
        text: " / >",
        className: "text-6xl font-extrabold font-jetbrains",
    },
];
export const navLinks = [
    {
        name: "welcome",
        path: "/",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "about me",
        path: "/more",
    },
];
export const projects = [
    {
        title: "Agency Report Portal",
        type: "Client/Production [Full Stack]",
        contractor: "Enat Employment Agency",
        description: `
        This full-stack app simplifies the management and tracking of visa applications, providing organizations with an efficient way to oversee the entire process. Built with Node.js and Express.js on the backend and a React frontend, the app allows users to track applicants’ progress, generate performance reports, and archive completed or inactive applications. With its intuitive interface and powerful features, it streamlines the visa process, making it more organized, efficient, and stress-free.
        `,
        tags: [
            "ReactJs",
            "ExpressJs",
            "PostgreSQL",
            "Sequelize",
            "React Query",
            "MaterialUI",
        ],
    },
    {
        title: "AI Prompt",
        type: "Personal Project [Full Stack]",
        description: `This is a Next.js app designed to help users create and share AI prompts easily. Whether you're brainstorming ideas or saving prompts for later use, the app provides a simple and user-friendly platform to make it happen.
        I integrated Google Authentication to let users log in securely and manage their sessions effortlessly. All prompts are stored in a MongoDB database, making it easy to save, retrieve, and share them whenever needed.
        The app is built with a clean, intuitive interface, making it simple for users to explore and organize their prompts. It's all about enabling creativity and collaboration in the AI space.`,
        githubLink: "https://github.com/YohannesHirko/aiPromptSharingPlatform",
        liveLink: "https://ai-prompt-sharing-platform-weld.vercel.app/",
        tags: ["MongoDB", "NextJS", "GoogleAuth", "ReactJS"],
    },
    {
        title: "AI Image Manipulation",
        type: "Personal Project [Full Stack]",
        description: `
        This AI-powered image manipulation web app, built with Next.js, offers users a range of advanced tools to transform their images effortlessly. With features like object removal, old image restoration, image recoloring, and generative fill for cropped areas, it empowers creativity and enhances image editing capabilities. The app integrates Cloudinary AI for seamless processing and includes a background removal tool for quick edits. To ensure secure access, it uses Clerk authentication with providers like Google Auth. Combining powerful functionality with a user-friendly interface, this app makes advanced image editing accessible to everyone.`,
        githubLink:
            "https://github.com/YohannesHirko/imageManipulationPlatformSaasStyle",
        liveLink: "https://image-manipulation-platform-saas-style.vercel.app/",
        tags: [
            "MongoDB",
            "NextJS",
            "GoogleAuth",
            "Clerk Auth",
            "Cloudinary AI",
            "API Integration",
        ],
    },
];
