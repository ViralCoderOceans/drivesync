"server-only";

interface ISiteConfig {
  domain: string;
  shortName: string;
  baseUrl: string;
  applicationName: string;
  title: string;
  description: string;
  logo: string;
  keywords: string[];
  publisher: string;
  twitter: {
    username: string;
    url: string;
    title: string;
    description: string;
  };
  organization: {
    name: string;
    url: string;
    logo: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    images: {
      url: string;
      alt?: string;
      secureUrl?: string;
      type?: string;
      width?: string | number;
      height?: string | number;
    }[];
  };
  social: {
    title: string;
    url: string;
  }[];
  authors: {
    name: string;
    url: string;
  }[];
  xml?: string;
  landingPageData?: any;
}

const SiteConfig: ISiteConfig = {
  domain: "DriveSync",
  shortName: "DriveSync",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  applicationName: "DriveSync",
  title: "DriveSync",
  description: "DriveSync's description",
  logo: "/assets/images/coderoceans-logo.png",
  keywords: ["DriveSync"],
  publisher: "DriveSync",
  twitter: {
    username: "username",
    url: "https://exmple.com",
    title: "title",
    description: "description",
  },
  organization: {
    name: "DriveSync",
    url: "url",
    logo: "/assets/images/driveSync.svg",
  },
  seo: {
    title: "DriveSync",
    description: "DriveSync's description",
    keywords: ["DriveSync"],
    images: [],
  },
  social: [],
  authors: [],
  xml: "",
  landingPageData: {
    logo: {
      name: "DriveSync",
      imgSource: "/assets/images/driveSync.svg",
    },
    navbar: {
      menus: [
        {
          id: "nav-home",
          name: "Home",
          slug: "/#home",
        },
        {
          id: "nav-what-we-can-do",
          name: "What we can do?",
          slug: "/#what-we-can-do-for-you",
        },
        // {
        //   id: "nav-faqs",
        //   name: "FAQs",
        //   slug: "/#faqs",
        // },
        // {
        //   id: "nav-changelogs",
        //   name: "Changelogs",
        //   slug: "/changelogs",
        // },
        // {
        //   id: "nav-blogs",
        //   name: "Blogs",
        //   slug: "/blogs",
        // },
      ],
      button: {
        text: "Go to Dashboard",
        redirect: "https://app.story-generator.jagodana.com",
      },
    },
    footer: {
      menus: [
        {
          id: "footer-demo",
          name: "Demo",
          slug: "/#home",
        },
        {
          id: "footer-how-it-works",
          name: "How it works?",
          slug: "/#how-it-works",
        },
        {
          id: "nav-faqs",
          name: "FAQs",
          slug: "/#faqs",
        },
        {
          id: "nav-changelogs",
          name: "Changelogs",
          slug: "/changelogs",
        },
        {
          id: "nav-blogs",
          name: "Blogs",
          slug: "/blogs",
        },
        {
          id: "footer-terms-of-service",
          name: "Terms of Service",
          slug: "/docs/terms-of-service",
        },
        {
          id: "footer-privacy-policy",
          name: "Privacy Policy",
          slug: "/docs/privacy-policy",
        },
      ],
      company: {
        name: "JagodanaStudio",
        redirect: "/#home",
      },
      copyRights: "Story Generator. All rights",
    },
    sectionsController: [
      {
        id: "hero-section",
        order: 1,
        type: "showcase",
        verticalFlow: "ltr",
        headingText: [
          "First Digital Engineering",
          "Solutions for Agile Innovations",
        ],
        subText: "Accelerate Your Path to Market Leadership",
        button: {
          text: "Let's start the conversation!",
          redirect: "/#home",
        },
        videoSource: "/assets/gifs/hero-section-gif.json",
      },
      {
        id: "what-we-can-do-for-you",
        order: 2,
        type: "cards",
        miniHeadingText: "SAVE TIME",
        headingText: "What we can do for you",
        subText: [],
        cards: [
          {
            number: 1,
            heading: "Market Research",
            subText:
              "At DriveSync, we partner with experienced management companies and creative market research agencies. With a focus on excellence, we help our clients conquer engineering obstacles and hit new heights. Our approach integrates strategic thinking, cutting-edge technologies, and a deep understanding of the challenges. We excel in survey technology, data processing, and process automation, and are committed to innovation and progress.",
            imgSource: "/assets/icons/researchIcon.svg",
            redirect: "/#home",
          },
          {
            number: 2,
            heading: "AI-Driven Engineering",
            subText:
              "We're dedicated to fostering AI-driven innovation and agile methodologies in digital engineering. Collaborating with startups, from emerging ventures to VC-backed leaders, equips us with the expertise to accelerate market leadership. Integrating refined AI and Agile processes optimizes efficiency and revenue. Our commitment extends to actively investing in startups with groundbreaking business models. Advanced digital product engineering, including AI, ML, Scrum, Agile, and DevOps, modernizes and elevates products.",
            imgSource: "/assets/icons/codeIcon.svg",
            redirect: "/#home",
          },
          {
            number: 3,
            heading: "Startup Ecosystem",
            subText:
              "As a solution-centric engineering enterprise, DriveSync has tackled various challenges across sectors like Market Research, Hospitality, Healthcare, Education and more. We embrace modern computing, cloud infrastructures, and cutting-edge AI technologies like Machine Learning, Augmented Reality, and Virtual Reality to push the boundaries of innovation. Our big data, predictive AI, and generative AI capabilities have led to remarkable achievements, as demonstrated by numerous case studies.",
            imgSource: "/assets/icons/rocketIcon.svg",
            redirect: "/#home",
          },
        ],
      },
      {
        id: "case-studies",
        order: 3,
        type: "caseStudies",
        miniHeadingText: "Case Studies",
        headingText: "What we are working on now",
        subText: [],
        cards: [
          {
            number: 1,
            heading: "Digital Transformation of a Leading Port Management Firm",
            subText: "Employed a hybrid Model solution with LLMs",
            imgSource:
              "/assets/icons/digital-transformation-of-a-leading-port-management-firm.svg",
            redirect: "/#home",
          },
          {
            number: 2,
            heading: "Instagram account analyzer",
            subText: "ChatGPT integration",
            imgSource: "/assets/icons/embracing-ai-powered-tools.svg",
            redirect: "/#home",
          },
          {
            number: 3,
            heading: "Intuify's journey",
            subText: "Embracing ai-powered tools for market research",
            imgSource: "/assets/icons/insta-acc-analyzer.svg",
            redirect: "/#home",
          },
          {
            number: 4,
            heading: "Tech startup",
            subText: "Symbiosys",
            imgSource: "/assets/icons/tech-startup.svg",
            redirect: "/#home",
          },
        ],
      },
      {
        id: "stats",
        order: 4,
        type: "stats",
        headingText: "",
        subText: "",
        stats: [
          {
            id: "celebration",
            numbers: "10+",
            title: "Years Experience",
            imgSrc: "/assets/icons/celebration.svg",
          },
          {
            id: "team",
            numbers: "100+",
            title: "Engineering Team",
            imgSrc: "/assets/icons/team.svg",
          },
          {
            id: "mobile-app-developing",
            numbers: "120+",
            title: "Mobile Apps Developed",
            imgSrc: "/assets/icons/mobile-app-developing.svg",
          },
          {
            id: "clients",
            numbers: "250+",
            title: "Clients Served",
            imgSrc: "/assets/icons/clients.svg",
          },
          {
            id: "success-stories",
            numbers: "600+",
            title: "Success Stories",
            imgSrc: "/assets/icons/success-stories.svg",
          },
        ],
      },
      {
        id: "partners",
        order: 5,
        type: "partners",
        miniHeadingText: "You're in good company",
        headingText: "Trusted by global partners",
        subText: "",
        partners: [
          {
            id: "test-company-1",
            imgSrc: "",
          },
          {
            id: "test-company-2",
            imgSrc: "",
          },
          {
            id: "test-company-3",
            imgSrc: "",
          },
          {
            id: "test-company-4",
            imgSrc: "",
          },
          {
            id: "test-company-5",
            imgSrc: "",
          },
          {
            id: "test-company-6",
            imgSrc: "",
          },
          {
            id: "test-company-7",
            imgSrc: "",
          },
        ],
      },
      {
        id: "testimonial",
        order: 6,
        type: "testimonial",
        miniHeadingText: "DON'T TRUST US. TRUST THEM.",
        headingText: "What people say.",
        subText: [],
        reviews: [
          {
            name: "Testimonial 1",
            subText: "User from test",
            imgSource: "/assets/images/testimonials/dp.jpeg",
            review:
              "Lorem ipsum dolor sit amet. Ea quam sunt eos temporibus iste qui dolor aliquid sed quia voluptatum aut voluptatem perferendis. Quo perferendis velit ut voluptatum nisi id perferendis voluptas est beatae repellat in asperiores perferendis.",
            rating: 5,
          },
          {
            name: "Testimonial 2",
            subText: "User from test",
            imgSource: "/assets/images/testimonials/dp.jpeg",
            review:
              "Lorem ipsum dolor sit amet. Ea quam sunt eos temporibus iste qui dolor aliquid sed quia voluptatum aut voluptatem perferendis. Quo perferendis voluptas est beatae repellat in asperiores perferendis.",
            rating: 4,
          },
          {
            name: "Testimonial 3",
            subText: "User from test",
            imgSource: "/assets/images/testimonials/dp.jpeg",
            review:
              "Lorem ipsum dolor sit amet. Ea quam sunt eos temporibus iste qui dolor aliquid sed quia voluptatum aut voluptatem perferendis. Quo perferendis.",
            rating: 5,
          },
          {
            name: "Testimonial 4",
            subText: "User from test",
            imgSource: "/assets/images/testimonials/dp.jpeg",
            review:
              "Lorem ipsum dolor sit amet. Ea quam sunt eos temporibus iste qui dolor aliquid sed quia voluptatum aut voluptatem perferendis. Quo perferend voluptas est beatae repellat in asperiores perferendis.",
            rating: 3,
          },
          {
            name: "Testimonial 5",
            subText: "User from test",
            imgSource: "/assets/images/testimonials/dp.jpeg",
            review:
              "Lorem ipsum dolor sit amet. Ea quam sunt eos temporibus iste qui dolor aliquid sed quia voluptatum aut voluptatem perferendis. Quo perferendi perferendis.",
            rating: 3,
          },
          {
            name: "Testimonial 6",
            subText: "User from test",
            imgSource: "/assets/images/testimonials/dp.jpeg",
            review:
              "Lorem ipsum dolor sit amet. Ea quam sunt eos temporibus iste qui dolor aliquid sed quia voluptatum voluptas est beatae repellat in asperiores perferendis.",
            rating: 4,
          },
        ],
      },
      {
        id: "form",
        order: 7,
        type: "form",
        headingText: "Interested in working with us?",
        subText: "Let's build, launch & grow",
        fields: [
          {
            name: "firstName",
            labelText: "First Name",
            placeholder: "Enter First Name",
            type: "text",
            isFullWidth: false,
          },
          {
            name: "lastName",
            labelText: "Last Name",
            placeholder: "Enter Last Name",
            type: "text",
            isFullWidth: false,
          },
          {
            name: "contactNumber",
            labelText: "Contact Number",
            placeholder: "Enter Contact Number",
            type: "phoneNumber",
            isFullWidth: false,
          },
          {
            name: "email",
            labelText: "Email Address",
            placeholder: "Enter Email Address",
            type: "email",
            isFullWidth: false,
          },
          {
            name: "message",
            labelText: "How can we assist you?",
            placeholder: "Type...",
            type: "textarea",
            isFullWidth: true,
          },
        ],
      },
    ],
    themeColor: {
      bgGradient: ["#0d71af", "#268ac8"],
      shapesGradient: ["#084b74", "#268ac8"],
    },
  },
};

export default SiteConfig;
