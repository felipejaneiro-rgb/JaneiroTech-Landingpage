

export type Language = 'pt' | 'en';

export type ServiceCategory = 'general' | 'data' | 'web' | 'automation';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  includes: string[];
  price: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Content {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    description: string;
    bullets: string[];
  };
  services: {
    title: string;
    ctaButton: string;
    modalCta: string;
    items: Service[];
  };
  process: {
    title: string;
    steps: { title: string; description: string }[];
  };
  portfolio: {
    title: string;
    items: PortfolioItem[];
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
    whatsapp: string;
    form: {
      nameLabel: string;
      companyLabel: string;
      emailLabel: string;
      emailError: string;
      phoneLabel: string;
      serviceLabel: string;
      messageLabel: string;
      submitButton: string;
      sending: string;
      successTitle: string;
      successMessage: string;
      sendNew: string;
      services: {
        general: string;
        data: string;
        web: string;
        automation: string;
      };
      conditional: {
        automation: string;
        data: string;
        web: string;
      }
    };
  };
  footer: {
    rights: string;
  };
}