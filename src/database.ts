import CalendarClock from '../src/components/icons/calendar-clock.svg';
import CustomizeComputer from '../src/components/icons/customize-computer.svg';
import LaptopCode from '../src/components/icons/laptop-code.svg';
import Rocket from '../src/components/icons/rocket.svg';
import HeartHandshake from './components/icons/HeartHandshake.astro';

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
      "description": "Kickstart your digital journey by scheduling a call with our expert web development agency. During this initial consultation, we’ll dive into your business vision, goals, and online needs. We discuss everything from user experience and mobile responsiveness to SEO strategies that drive organic traffic. Our subscription service caters specifically to small businesses, ensuring every aspect of your website—design, development, hosting, domain registration, and even logo creation—is expertly managed. This personalized approach sets the stage for a robust online presence and positions your brand for success."
    },
    {
      "step": "2",
      "icon": CustomizeComputer,
      "title": "Approve the Design",
      "description": "Once we’ve captured your vision, our creative team crafts a custom, SEO-friendly design tailored to your brand. We create a modern, responsive user interface that not only looks sleek but is optimized for search engines, helping you reach more customers online. You’ll have the opportunity to review and approve the design, ensuring every element—from layout to color scheme—aligns with your business identity. Our design process is built to drive conversions, improve user engagement, and establish a strong foundation for your website’s development."
    },
    {
      "step": "3",
      "icon": LaptopCode,
      "title": "Development & Revisions",
      "description": "With your design approved, we move into development, transforming ideas into a fully functional, high-performance website. Our team employs the latest coding practices to build a site that is fast, secure, and optimized for SEO. We understand that perfection is a process—our subscription model includes unlimited revisions. This iterative approach allows us to refine every detail until your website not only meets but exceeds your expectations. Our comprehensive development process ensures that every piece is perfectly aligned with your business goals, resulting in a site that drives traffic and enhances your online reputation."
    },
    {
      "step": "4",
      "icon": Rocket,
      "title": "Launch",
      "description": "The final step is launching your website and making it live for the world to see. We handle all the technical details, including domain registration and reliable hosting, so you never have to worry about downtime or technical glitches. Our launch process is designed to ensure your site is fully optimized for search engines from day one. With our all-in-one web development subscription, your small business gets a polished online presence, ready to convert visitors into loyal customers. Enjoy the peace of mind that comes with knowing every aspect of your digital footprint is professionally managed."
    },
    {
      "step": "5",
      "icon": HeartHandshake,
      "title": "Ongoing Support",
      "description": "Once your website is launched, our dedicated team continuously monitors and maintains your online presence—ensuring your site stays secure, fast, and search engine optimized. Our subscription-based service includes regular performance updates, proactive troubleshooting, and 24/7 technical assistance to keep your website operating at peak efficiency. We empower your business to focus on growth without worrying about digital downtime and with our reliable ongoing support, your online presence remains cutting-edge, fully optimized for search engines, and perfectly aligned with your business objectives."
    }
];