export interface GoalItem {
  num: string;
  text: string;
}

export interface LevelGoals {
  title: string;
  goals: GoalItem[];
}

export interface CourseDetail {
  id: string;
  title: string;
  color: string;
  description: string;
  learnItems: string[];
  image: string;
}

export interface Testimonial {
  text: string;
  name: string;
  detail: string;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  featured: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const LEVEL_GOALS: LevelGoals[] = [
  {
    title: "From 0 & Beginner Level",
    goals: [
      { num: "/01", text: "Learn how to dance for yourself" },
      { num: "/03", text: "Open your femininity and confidence" },
      { num: "/02", text: "Become more flexible and fluid" },
      { num: "/04", text: "Learn the dance foundation of Heels" },
    ],
  },
  {
    title: "Intermediate Level",
    goals: [
      { num: "/01", text: "Learn and master heels technique" },
      { num: "/03", text: "Develop flexibility and strength" },
      { num: "/02", text: "Improve your turns and balance" },
      { num: "/04", text: "Enhance performance and musicality" },
    ],
  },
];

export const COURSES: CourseDetail[] = [
  {
    id: "beginners",
    title: "High Heels from 0 / Beginners Course",
    color: "#8B1A1A",
    description:
      "A foundation dance training program for people who have never danced before, beginners, or dancers of other styles who want to begin their heels dance journey.",
    learnItems: [
      "Basic heels technique and posture",
      "Feminine movement vocabulary",
      "Floor work and transitions",
      "Choreography and musicality basics",
      "Confidence building exercises",
      "Solo performance preparation",
    ],
    image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=700&q=80",
  },
  {
    id: "intermediate",
    title: "High Heels Intermediate Course",
    color: "#8B1A1A",
    description:
      "A technique training program for dancers confident in their heels foundation who are looking to elevate their skills in technique, balance, flexibility, and performance.",
    learnItems: [
      "Advanced heels technique refinement",
      "Pirouettes and complex turns",
      "Flexibility and strength training",
      "Artistic expression and stage presence",
      "Musicality and performance skills",
      "Advanced solo choreography",
    ],
    image: "https://images.unsplash.com/photo-1545959570-a94084071b5d?w=700&q=80",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Kristi's class completely changed how I carry myself. I came in never having danced before and left feeling like a completely different — more confident — version of myself.",
    name: "Mia K.",
    detail: "Beginners Course Graduate",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    text: "The technique program is no joke — my turns and balance improved so much in just 3 weeks. The filming at the end was a bonus I'll treasure forever.",
    name: "Sofia R.",
    detail: "Intermediate Course Graduate",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    text: "I've taken heels classes in NYC and Miami — Rozez Dance is on another level. Kristi sees every student individually and pushes you to your best. Worth every penny.",
    name: "Alicia T.",
    detail: "Returning Student",
    avatar: "https://i.pravatar.cc/100?img=25",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "beginners",
    name: "Beginners Course",
    description: "High Heels from 0 — perfect for first-timers and dancers of other styles",
    price: 349,
    period: "for the full 3-week program",
    features: [
      "7 classes (1.5h each)",
      "2× per week schedule",
      "Professional solo filming",
      "West Hollywood studio",
      "Access to student community",
    ],
    featured: false,
  },
  {
    id: "intermediate",
    name: "Intermediate Course",
    description: "Advanced heels technique — for dancers ready to elevate to the next level",
    price: 399,
    period: "for the full 3-week program",
    features: [
      "7 classes (1.5h each)",
      "2× per week schedule",
      "Professional solo filming",
      "West Hollywood studio",
      "Access to student community",
    ],
    featured: true,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Do I need prior dance experience?",
    answer:
      "Not at all for the Beginners Course — it's designed for people who have never danced before. For the Intermediate Course, you should have completed a heels foundations program or have equivalent experience.",
  },
  {
    question: "What should I wear?",
    answer:
      "Comfortable dance or activewear that allows full movement. For heels class, bring or wear heels (pumps or strappy heels, 3–4 inch recommended). Beginners can start in sneakers.",
  },
  {
    question: "Where is the studio located?",
    answer:
      "We are located in West Hollywood, Los Angeles. The exact address will be shared upon booking confirmation.",
  },
  {
    question: "What is the professional filming at the end?",
    answer:
      "On the final class, a professional videographer will film each student's solo performance in a choreographed piece we learn throughout the program. You'll receive the video as a keepsake.",
  },
  {
    question: "Can I join mid-program?",
    answer:
      "We recommend starting from day one to get the full experience, especially since we build choreography progressively. Please contact us if you have a special situation.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "Full refunds are available up to 7 days before the program start date. After that, spots can be transferred to a future season.",
  },
];

export const INSTAGRAM_IMAGES = [
  { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80", alt: "Dance class" },
  { src: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400&q=80", alt: "Performance" },
  { src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&q=80", alt: "Heels class" },
  { src: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=400&q=80", alt: "Studio" },
];
