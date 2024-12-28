import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export interface SocialMediaItem {
  id: number;
  img?: string;
  icon?: any;
  link: string;
  tooltip: string;
  action?: "copy" | "link";
}

export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  //   { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Dedicated to solving problems and creating impactful, user-centric solutions through continuous learning and innovation.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end z-120",
    img: "/ca_studio.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Willing to collaborate remotely",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Using the latest technologies",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-left",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Software Engineer with a passion for 3D Creative Development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently building 3D Websites using webGL, React 3 Fiber and three.js",
    description: "What I'm working on",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 sm:w-40",
    titleClassName:
      "justify-start md:justify-start lg:justify-start absolute top-0 left-0",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "What can we build together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Landing Page",
    des: "A 3D landing page created using react 3 fiber",
    img: "/landingPage.png",
    iconLists: ["/re.svg", "/js.svg", "three.js-logo.png"],
    link: "https://3d-portfolio-landing-page.vercel.app/",
    gurl: "",
    gtext: "",
  },
  {
    id: 2,
    title: "3D Portal Scene",
    des: "3D portal scene created using react 3 fiber.",
    img: "/portalPage.png",
    iconLists: ["/re.svg", "/js.svg", "/three.js-logo.png"],
    link: "https://3d-portal-scene.vercel.app/",
    gurl: "",
    gtext: "",
  },
  {
    id: 3,
    title: "Inner Reality",
    des: "A Meditation app to practice meditations in a fast and simple way by setting up a custom duration or by following a guided meditation. ",
    img: "/meditationApp.png",
    iconLists: ["/re.svg", "/js.svg", "/ts.svg"],
    link: "https://inner-reality.vercel.app/",
    gurl: "",
    gtext: "",
  },
  {
    id: 4,
    title: "Online Store-3D Animated Website",
    des: "A 3D animated online apple store website in React, using Webgi (powered by Three.js) and GSAP. Imported 3D models and displayed them on the website using Webgi. Optimized 3D animations in React for mobile devices.",
    img: "/onlineStore.png",
    iconLists: ["/re.svg", "/js.svg", "/three.js-logo.png"],
    link: "https://online-store-3d-animated-website.vercel.app/",
    gurl: "",
    gtext: "",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Aaron was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Aaron was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Aaron was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Aaron was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Aaron was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Choicest Fruit, LLC",
    desc: "Co-founded a social enterprise offering targeted training programs in cutting-edge fields such as software development, electronics, and robotics engineering for youth aged 14-24, focusing on career awareness and readiness. I am spearheading the creation and execution of training programs in software development.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Alchemy Code Lab",
    desc: "I developed web applications utilizing RESTful APIs and gained extensive experience in building production-level web apps. I created full CRUD applications using React, Express, Node.js, JavaScript, Material UI, HTML, CSS, and JSON. I integrated third-party APIs using a Netlify proxy server and tested direct endpoints with Postman. Additionally, I worked with Supabase and PostgreSQL for backend development, created project repositories on GitHub, and deployed applications using Netlify and Heroku.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  //   {
  //     id: 3,
  //     title: "Freelance App Dev Project",
  //     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //     className: "md:col-span-2", // change to md:col-span-2
  //     thumbnail: "/exp3.svg",
  //   },
  //   {
  //     id: 4,
  //     title: "Lead Frontend Developer",
  //     desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //     className: "md:col-span-2",
  //     thumbnail: "/exp4.svg",
  //   },
];

export const socialMedia: SocialMediaItem[] = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/aaronEnyetu",
    tooltip: "Visit my GitHub",
    action: "link",
  },
  {
    id: 2,
    img: "/logo.png",
    link: "https://www.choicestfruit.com",
    tooltip: "Check out my startup",
    action: "link",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/aaron-enyetu/",
    tooltip: "Connect with me on LinkedIn",
    action: "link",
  },
  {
    id: 4,
    icon: faEnvelope,
    link: "mailto:aaronenyetu@gmail.com",
    tooltip: "Copy my email",
    action: "copy",
  },
];
