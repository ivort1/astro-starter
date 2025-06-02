import CalendarClock from '../src/components/icons/calendar-clock.svg';
import CustomizeComputer from '../src/components/icons/customize-computer.svg';
import LaptopCode from '../src/components/icons/laptop-code.svg';
import Rocket from '../src/components/icons/rocket.svg';

export interface Feature {
  icon: string;
  feature: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Step {
  step: string;
  icon: any;
  title: string;
  description: string;
}

// FEATURES
export const features: Feature[] = [
    {
      "icon": "Code",
      "feature": "100% Custom Site",
      "description": "Fully custom-coded websites—no WordPress, Wix, Squarespace, etc. Each site is uniquely designed and optimized for a fast, responsive online presence."
    },
    {
      "icon": "Editing",
      "feature": "Unlimited Edits",
      "description": "Enjoy unlimited revisions to perfect your site’s design and functionality, keeping your web presence up-to-date and user-friendly."
    },
    {
      "icon": "Maintenance",
      "feature": "Maintenance",
      "description": "Keep your website running smoothly with our proactive maintenance services, including regular updates, security checks, and performance optimization."
    },
    {
      "icon": "Server",
      "feature": "Hosting",
      "description": "Benefit from our secure and scalable hosting solutions that deliver fast load times, 99.9% uptime, and robust data protection."
    },
    {
      "icon": "WorldWideWeb",
      "feature": "Domain Name Registration",
      "description": "Establish your brand online with professional domain name registration that enhances credibility and boosts search engine visibility."
    },
    {
      "icon": "GoogleBusiness",
      "feature": "Google Business Profile",
      "description": "Enhance your local SEO with a fully optimized Google Business Profile, designed to attract more local customers and improve online visibility."
    },
    {
      "icon": "GoogleAnalytics",
      "feature": "Google Analytics",
      "description": "Gain actionable insights with integrated Google Analytics, helping you track user behavior, optimize performance, and drive conversions."
    },
    {
      "icon": "Stripe",
      "feature": "Stripe Integration",
      "description": "Streamline your online transactions and provide a frictionless and efficient e-commerce payment experience for your customers."
    }
];

// FAQs
export const faqs: FAQ[] = [
 {
      "question": "How long does it take to build a website?",
      "answer": "The timeline for building a website varies based on complexity and features. Typically, it takes 4-6 weeks from initial consultation to launch."
    },
    {
      "question": "What is your refund policy?",
      "answer": "The timeline for building a website varies based on complexity and features. Typically, it takes 4-6 weeks from initial consultation to launch."
    },
    {
      "question": "What is your refund policy?",
      "answer": "The timeline for building a website varies based on complexity and features. Typically, it takes 4-6 weeks from initial consultation to launch."
    },
    {
      "question": "What is your refund policy?",
      "answer": "The timeline for building a website varies based on complexity and features. Typically, it takes 4-6 weeks from initial consultation to launch."
    },
    {
      "question": "What is your refund policy?",
      "answer": "The timeline for building a website varies based on complexity and features. Typically, it takes 4-6 weeks from initial consultation to launch."
    }
];

// STEPS
export const steps: Step[] = [
    {
      "step": "1",
      "icon": CalendarClock,
      "title": "Schedule a Call",
      "description": "Discuss your vision, goals, and requirements to create a tailored plan for your website."
    },
    {
      "step": "2",
      "icon": CustomizeComputer,
      "title": "Approve the Design",
      "description": "We'll create a custom user interface and have you sign off on the design before development begins."
    },
    {
      "step": "3",
      "icon": LaptopCode,
      "title": "Development & Revisions",
      "description": "Present the site for your feedback and make unlimited revisions to ensure it meets your expectations."
    },
    {
      "step": "4",
      "icon": Rocket,
      "title": "Launch",
      "description": "Register your domain and launch your site, making it live for the world to see."
    }
];