interface Feature {
  icon: string;
  feature: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Step {
  step: string;
  icon: string;
  title: string;
  description: string;
}

interface Data {
  features: Feature[];
  faqs: FAQ[];
  steps: Step[];
}