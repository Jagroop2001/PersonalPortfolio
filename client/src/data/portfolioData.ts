export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  url:string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  commentCount: number;
  image: string;
  path:string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "ChurnSence: AI-Powered Churn Prediction",
    category: "ML Web App",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    url:"https://github.com/Jagroop2001/ChurnSense"
  },
  {
    id: 2,
    title: "Street Foot Market Research",
    category: "Market Research",
    image: "src/public/korean-food-4409811_1280.jpg",
    url:"https://github.com/Jagroop2001/StreetFood-MarketResearch/blob/main/StreetFood.pdf"
  },
  {
    id: 3,
    title: "Styl-AI ",
    category: "Skincare & Fashion Recommender",
    image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    url:"https://github.com/Styl-AI"
  },
  {
    id: 4,
    title: "Fitness Tracker App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    url:"https://github.com/Jagroop2001/HealthCare"
  },
  
];

export const blogPosts: BlogPost[] = [
  {
    id: 2401687,
    title: "First 10 Seconds That Can Make or Break a Product",
    excerpt: "Explore the critical first moments that determine a product's success or failure in the market.",
    date: "Apr 12, 2025",
    commentCount: 2,
    path: "/jagroop2001/first-10-seconds-that-can-make-or-break-a-product-8ff",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 2267472,
    title: "✨It's 2025, But Jest🔧 is Still Rocking the Testing World 🚀",
    excerpt: "Discover why Jest remains a dominant force in the testing world for JavaScript developers in 2025.",
    date: "Feb 9, 2025",
    commentCount: 7,
    path: "/jagroop2001/its-2025-but-jest-is-still-rocking-the-testing-world-48g2",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 2225067,
    title: "Automate Linkedin post's content using Github Copilot.",
    excerpt: "Discover how to automate LinkedIn post content creation with GitHub Copilot.",
    date: "Jan 19, 2025",
    commentCount: 1,
    path: "/jagroop2001/automate-linkedin-posts-content-using-github-copilot-48lj",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 2222581,
    title: "Mindmapping: The Underrated Skill for Success in Life and Software Development",
    excerpt: "🚀 Are you tired of feeling overwhelmed and jumping headfirst into tasks without a plan?",
    date: "Jun2 18, 2023",
    commentCount: 19,
    path: "jagroop2001/mindmapping-the-underrated-skill-for-success-in-life-and-software-development-4npi",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 2206207,
    title: "Top HTML Interview Questions for Frontend Developers",
    excerpt: "Essential HTML interview questions to help frontend developers prepare for success.",
    date: "Jan 14, 2025",
    commentCount: 6,
    path: "/jagroop2001/top-html-interview-questions-for-frontend-developers-1l4e",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 2184616,
    title: "🎉 Let's Build an AI Twitter Post Project Using Gemini API, Next.js, and TailwindCSS 🚀",
    excerpt: "A step-by-step guide to building an AI-powered Twitter post project with Gemini API, Next.js, and TailwindCSS.",
    date: "Jan 1, 2025",
    commentCount: 19,
    path: "/jagroop2001/lets-build-an-ai-twitter-post-project-using-gemini-api-nextjs-and-tailwindcss-3194",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 2166467,
    title: "Build Your YouTube Video Transcriber with Streamlit & Youtube API's 🚀",
    excerpt: "Learn to create a YouTube video transcriber using Streamlit and YouTube APIs.",
    date: "Dec 20, 2024",
    commentCount: 11,
    path: "/jagroop2001/build-your-youtube-video-transcriber-with-streamlit-youtube-apis-5faf",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 2151281,
    title: "Let's Learn Unit Testing in Python with pytest! 🚀",
    excerpt: "A comprehensive guide to unit testing in Python using pytest for robust code.",
    date: "Dec 11, 2024",
    commentCount: 10,
    path: "/jagroop2001/lets-learn-unit-testing-in-python-with-pytest-2ba8",
    image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 2141361,
    title: "Learn TypeScript from A to Z 🚀",
    excerpt: "Master TypeScript with this complete guide from beginner to advanced concepts.",
    date: "Dec 6, 2024",
    commentCount: 18,
    path: "/jagroop2001/learn-typescript-from-a-to-z-3a11",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 2128949,
    title: "🚀 Why Code Review is Crucial in Software Development 🚀",
    excerpt: "Discover how code reviews boost code quality, catch bugs early, and foster team collaboration in software development!",
    date: "24 June, 2024",
    commentCount: 15,
    path: "/jagroop2001/why-code-review-is-crucial-in-software-development-28kp",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 2126232,
    title: "Let's Learn Generators in JavaScript 🚀",
    excerpt: "Dive into JavaScript generators to manage asynchronous code and iterators effectively.",
    date: "Nov 29, 2024",
    commentCount: 24,
    path: "/jagroop2001/lets-learn-generators-in-javascript-4566",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 2123814,
    title: "🚀 How a Browser Renders a Web Page",
    excerpt: "A functional journey through the process of how browsers render web pages.",
    date: "Nov 27, 2024",
    commentCount: 3,
    path: "/jagroop2001/how-a-browser-renders-a-web-page-a-functional-journey-c08",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 2121054,
    title: "🚀 Let’s Learn Event Loops in JavaScript! 🎡",
    excerpt: "Understand the JavaScript event loop and how it handles asynchronous operations.",
    date: "Nov 26, 2024",
    commentCount: 26,
    path: "/jagroop2001/lets-learn-event-loops-in-javascript-26k0",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 2118942,
    title: "Let's Learn Promises in JavaScript! 🚀",
    excerpt: "Master JavaScript Promises to handle asynchronous operations with ease.",
    date: "Nov 24, 2024",
    commentCount: 13,
    path: "/jagroop2001/lets-learn-promises-in-javascript-3ijo",
    image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  }
];