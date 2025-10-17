import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Pencil,
  Computer,
  Book,
  Rocket,
  Github,
  Instagram,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/harold-steven-cabrera-gonzalez-b02179206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 2,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/Steven0319",
  },
  {
    id: 3,
    logo: <Instagram size={30} strokeWidth={1} />,
    src: "https://www.instagram.com/im.st3v3n/profilecard/?igsh=MXZ1NWNuZ2huc3hqNw==",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "About Me",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Services",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Portfolio",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Collections & Customer Service Agent",
    subtitle: "Collections Department – Call Center, Costa Rica",
    description:
      "Since 2022, I’ve worked in an international call center managing high volumes of customer interactions in English and Spanish. I specialize in collections, negotiation, dispute resolution, and CRM tools like Salesforce. I handle pressure effectively and communicate with professionalism.",
    date: "2022 ",
  },
  {
    id: 2,
    title: "Frontend Developer",
    subtitle: "Freelance Projects",
    description:
      "As a freelance frontend developer, I’ve built responsive and interactive websites using React, TypeScript, and TailwindCSS. I focus on performance, clean code, translations, and intuitive user experiences. I also integrate external APIs and implement advanced state management with Context API.",
    date: "2025",
  },
  {
    id: 3,
    title: "Web Designer & Translator",
    subtitle: "Freelance / Personal Clients",
    description:
      "I offer custom web design services and content translation between English, Spanish, and Portuguese. I design visually appealing, mobile-friendly layouts and translate websites and marketing materials with cultural accuracy and SEO in mind.",
    date: "2025",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 3,
    text: "Years of Experience",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 2,
    endCounter: 50,
    text: "Completed Projects",
    lineRight: true,
    lineRightMobile: true,
  },
];

const CounterStats = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20">
      {dataCounter.map(
        ({ id, endCounter, text, lineRight, lineRightMobile }) => (
          <div
            key={id}
            className={`text-center ${lineRight ? "md:border-r md:pr-6" : ""} ${
              lineRightMobile ? "border-r pr-4" : ""
            }`}
          >
            <h3 className="text-4xl font-bold text-pink-500">{endCounter}+</h3>
            <p className="mt-2 text-gray-700">{text}</p>
          </div>
        )
      )}
    </section>
  );
};

export default CounterStats;

export const serviceData = [
  {
    icon: <Pencil />,
    title: "Web Design",
    description:
      "Creative and professional design of intuitive and attractive interfaces focused on user experience.",
  },
  {
    icon: <Computer />,
    title: "Web Development",
    description:
      "Custom websites tailored to your needs using modern technologies.",
  },
  {
    icon: <Book />,
    title: "Translation",
    description:
      "High-quality translation services to adapt your content accurately for global audiences.",
  },
  {
    icon: <Rocket />,
    title: "SEO",
    description:
      "Boost your online presence with advanced SEO strategies for better visibility and traffic.",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "E-commerce Platform",
    image: "/image-1.jpg",
    urlGithub: "https://github.com/Steven0319/E-commerce.git",
    urlDemo: "https://e-commerce-stevenapp.netlify.app/",
  },
  {
    id: 2,
    title: "Portfolio Page",
    image: "/image-2.jpg",
    urlGithub: "https://github.com/Steven0319/Portfolio.git",
    urlDemo: "https://portfolio-steven.netlify.app",
  },

  {
    id: 3,
    title: "Weather App Interactive",
    image: "/image-4.jpg",
    urlGithub: "https://github.com/Steven0319/Weather-APP.git",
    urlDemo: "https://weatherapp-stevenapp.netlify.app/",
  },
  {
    id: 4,
    title: "Store Platform",
    image: "/image-5.jpg",
    urlGithub: "https://github.com/Steven0319/My-first-store.git",
    urlDemo: "https://storeapp-steven.netlify.app/",
  },
  {
    id: 5,
    title: "Booking App",
    image: "/image-6.jpg",
    urlGithub: "https://github.com/Steven0319/Booking-App.git",
    urlDemo: "https://example.com/booking-app",
  },
  {
    id: 6,
    title: "Banking Page",
    image: "/image-7.jpg",
    urlGithub: "https://github.com/Steven0319/Landing-Page-Banking.git",
    urlDemo: "https://steven-bank.netlify.app/",
  },
  {
    id: 7,
    title: "Real Estate Page",
    image: "/image-8.jpg",
    urlGithub: "https://github.com/Steven0319/Real-Estate-Page.git",
    urlDemo: "https://stevenrealestate.netlify.app/",
  },
  {
    id: 8,
    title: "Web-Responsive",
    image: "/image-9.jpg",
    urlGithub: "https://github.com/Steven0319/Web-Responsive.git",
    urlDemo: "https://steventech.netlify.app/",
  },
  
  {
    id: 9,
    title: "Store-Website",
    image: "/image-10.jpg",
    urlGithub: "https://github.com/Steven0319/Store-Website.git",
    urlDemo: "https://store-website-qps3.onrender.com/",
  },

];
