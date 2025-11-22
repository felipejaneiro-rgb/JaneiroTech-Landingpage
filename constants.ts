

import { Content, Language } from './types';

export const CONTENT: Record<Language, Content> = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      portfolio: "Portfólio",
      contact: "Contato"
    },
    hero: {
      title: "Tecnologia acessível para impulsionar pequenos negócios",
      subtitle: "Informatizar o seu negócio não precisa ser tão complicado, nem tão caro.",
      description: "Engenharia de Dados, Análise, Automação, IA, Landingpages e Websites para impulsionar o seu negócio com eficiência e simplicidade.",
      ctaPrimary: "Agendar Conversa Gratuita",
      ctaSecondary: "Conhecer Serviços"
    },
    about: {
      title: "Sobre Felipe Janeiro",
      description: "Com 11 anos de experiência em TI, sou especialista em criar soluções inteligentes que simplificam o dia a dia. Meu propósito é ajudar microempreendedores a digitalizar seus processos, utilizando automação e dados para gerar valor real, sem a complexidade técnica habitual.",
      bullets: [
        "Soluções sob medida para sua realidade",
        "Foco total em eficiência e resultados",
        "Linguagem simples e acessível",
        "Experiência com IA aplicada a negócios",
        "Suporte consultivo humanizado"
      ]
    },
    services: {
      title: "Soluções para seu Negócio",
      ctaButton: "Ver detalhes",
      modalCta: "Quero este serviço",
      items: [
        {
          id: "data-eng",
          title: "Engenharia de Dados",
          shortDescription: "Organização e estruturação dos seus dados.",
          fullDescription: "Construção de pipelines de dados robustos para garantir que suas informações estejam sempre acessíveis, limpas e prontas para análise.",
          includes: ["Integração de fontes de dados", "Limpeza e tratamento", "Armazenamento seguro"],
          price: "Sob consulta",
          iconName: "Database"
        },
        {
          id: "data-analytics",
          title: "Análise de Dados",
          shortDescription: "Transforme números em decisões inteligentes.",
          fullDescription: "Dashboards interativos e relatórios que mostram a saúde do seu negócio em tempo real, permitindo tomadas de decisão baseadas em fatos.",
          includes: ["Dashboards (Power BI/Looker)", "KPIs personalizados", "Relatórios mensais"],
          price: "A partir de R$ 800,00",
          iconName: "BarChart"
        },
        {
          id: "landing-pages",
          title: "Criação de Landingpages",
          shortDescription: "Páginas de alta conversão para vendas.",
          fullDescription: "Desenvolvimento de páginas focadas em venda ou captura de leads, otimizadas para velocidade e mobile.",
          includes: ["Design moderno", "Copywriting básico", "Integração com WhatsApp/Email"],
          price: "A partir de R$ 600,00",
          iconName: "Layout"
        },
        {
          id: "websites",
          title: "Websites Pequenos",
          shortDescription: "Sua presença digital profissional.",
          fullDescription: "Sites institucionais leves e funcionais para apresentar sua empresa, produtos e serviços na internet.",
          includes: ["Até 5 páginas", "Otimização SEO básica", "Formulário de contato"],
          price: "A partir de R$ 1.200,00",
          iconName: "Globe"
        },
        {
          id: "automations",
          title: "Automação de Processos",
          shortDescription: "Elimine tarefas manuais repetitivas.",
          fullDescription: "Conecte seus aplicativos (planilhas, e-mail, CRM) para trabalharem sozinhos, economizando horas do seu dia.",
          includes: ["Mapeamento de processos", "Integração via API/Zapier/Make", "Testes e validação"],
          price: "Sob orçamento",
          iconName: "Workflow"
        },
        {
          id: "ai-consulting",
          title: "Consultoria em IA",
          shortDescription: "Inteligência Artificial aplicada ao negócio.",
          fullDescription: "Implementação de assistentes virtuais e ferramentas de IA para melhorar o atendimento e a produtividade.",
          includes: ["Chatbots personalizados", "Treinamento de equipe", "Ferramentas de produtividade"],
          price: "Sob orçamento",
          iconName: "Bot"
        }
      ]
    },
    process: {
      title: "Como funciona a Consultoria",
      steps: [
        { title: "Reunião Inicial", description: "Diagnóstico completo para entender suas dificuldades e expectativas." },
        { title: "Protótipo", description: "Desenvolvimento e entrega parcial para validação visual e funcional." },
        { title: "Aprovação", description: "Ajustes finos e verificação do conceito apresentado." },
        { title: "Desenvolvimento", description: "Execução completa da solução, testes rigorosos e documentação." },
        { title: "Entrega Final", description: "Treinamento, aceitação e encerramento do projeto." }
      ]
    },
    portfolio: {
      title: "Projetos em Destaque",
      items: [
        { id: 1, title: "Dashboard Financeiro", category: "Data Analytics", imageUrl: "https://picsum.photos/id/445/600/400" },
        { id: 2, title: "Landing Page Nutrição", category: "Web Development", imageUrl: "https://picsum.photos/id/60/600/400" },
        { id: 3, title: "Bot de Agendamento", category: "Automation", imageUrl: "https://picsum.photos/id/1/600/400" },
      ]
    },
    testimonials: {
      title: "O que dizem os clientes",
      items: [
        { id: 1, name: "Ricardo Silva", role: "Dono de Padaria", text: "Felipe me ajudou a automatizar o controle de estoque. Economizei 20 horas por mês!" },
        { id: 2, name: "Mariana Costa", role: "Advogada", text: "Minha landing page ficou profissional e aumentou meus leads em 40% no primeiro mês." },
        { id: 3, name: "João Souza", role: "Consultor Financeiro", text: "Simplificou a tecnologia e fez tudo parecer fácil de usar. Recomendo muito!" }
      ]
    },
    faq: {
      title: "Perguntas Frequentes",
      items: [
        { question: "Quanto custa uma consultoria?", answer: "Os valores variam conforme o escopo do projeto. Ofereço pacotes iniciais acessíveis para microempreendedores." },
        { question: "Em quanto tempo recebo o protótipo?", answer: "Dependendo da complexidade, entre 3 a 7 dias úteis após a reunião inicial." },
        { question: "Como funciona o pagamento?", answer: "Trabalhamos com duas modalidades para facilitar o seu investimento:\n\n🔹 **Pagamento Único** (Projetos Fechados)\n• Aceitamos Pix, Boleto ou Cartão de Crédito/Débito.\n\n🔹 **Assinatura Recorrente** (Manutenção/Suporte)\n• Valor mensal reduzido.\n• Aceitamos Cartão de Crédito e Boleto." },
        { question: "Você cria soluções personalizadas?", answer: "Sim! Nenhuma empresa é igual a outra. Tudo é adaptado para sua necessidade." }
      ]
    },
    contact: {
      title: "Pronto para transformar seu negócio?",
      subtitle: "Agende sua conversa gratuita e descubra como a tecnologia pode impulsionar seus resultados.",
      cta: "Agendar via WhatsApp",
      whatsapp: "Enviar Mensagem",
      form: {
        nameLabel: "Nome Completo",
        companyLabel: "Nome da Empresa / Marca",
        emailLabel: "E-mail",
        emailError: "Por favor, insira um e-mail válido.",
        phoneLabel: "Telefone / WhatsApp",
        serviceLabel: "Qual tipo de solução você busca?",
        messageLabel: "Mensagem (opcional)",
        submitButton: "Enviar Solicitação",
        sending: "Preparando envio...",
        successTitle: "Solicitação Enviada!",
        successMessage: "Obrigado pelo contato. O WhatsApp foi aberto para enviar sua mensagem. Retornarei em breve.",
        sendNew: "Enviar nova mensagem",
        services: {
          general: "Consultoria Geral / Não sei ainda",
          data: "Engenharia & Análise de Dados",
          web: "Websites & Landing Pages",
          automation: "Automação & Bots"
        },
        conditional: {
          automation: "Qual processo você gostaria de automatizar?",
          data: "Você já possui fontes de dados (planilhas, sistemas)?",
          web: "Você já possui identidade visual ou design?"
        }
      }
    },
    footer: {
      rights: "Todos os direitos reservados."
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact"
    },
    hero: {
      title: "Accessible technology to boost small businesses",
      subtitle: "Digitizing your business doesn't have to be complicated or expensive.",
      description: "Data Engineering, Analytics, Automation, AI, Landing Pages, and Websites to boost your business with efficiency and simplicity.",
      ctaPrimary: "Schedule Free Call",
      ctaSecondary: "View Services"
    },
    about: {
      title: "About Felipe Janeiro",
      description: "With 11 years of IT experience, I specialize in creating smart solutions that simplify daily operations. My purpose is to help micro-entrepreneurs digitize their processes using automation and data to generate real value, without the usual technical complexity.",
      bullets: [
        "Tailor-made solutions for your reality",
        "Total focus on efficiency and results",
        "Simple and accessible language",
        "Experience with AI applied to business",
        "Humanized consultative support"
      ]
    },
    services: {
      title: "Solutions for your Business",
      ctaButton: "View details",
      modalCta: "I want this service",
      items: [
        {
          id: "data-eng",
          title: "Data Engineering",
          shortDescription: "Organization and structuring of your data.",
          fullDescription: "Building robust data pipelines to ensure your information is always accessible, clean, and ready for analysis.",
          includes: ["Data source integration", "Cleaning and processing", "Secure storage"],
          price: "On request",
          iconName: "Database"
        },
        {
          id: "data-analytics",
          title: "Data Analytics",
          shortDescription: "Turn numbers into smart decisions.",
          fullDescription: "Interactive dashboards and reports showing your business health in real-time, enabling fact-based decision making.",
          includes: ["Dashboards (Power BI/Looker)", "Custom KPIs", "Monthly reports"],
          price: "Starting at R$ 800.00",
          iconName: "BarChart"
        },
        {
          id: "landing-pages",
          title: "Landing Pages",
          shortDescription: "High-conversion pages for sales.",
          fullDescription: "Development of pages focused on sales or lead capture, optimized for speed and mobile.",
          includes: ["Modern design", "Basic copywriting", "WhatsApp/Email integration"],
          price: "Starting at R$ 600.00",
          iconName: "Layout"
        },
        {
          id: "websites",
          title: "Small Websites",
          shortDescription: "Your professional digital presence.",
          fullDescription: "Lightweight and functional institutional sites to present your company, products, and services on the internet.",
          includes: ["Up to 5 pages", "Basic SEO optimization", "Contact form"],
          price: "Starting at R$ 1,200.00",
          iconName: "Globe"
        },
        {
          id: "automations",
          title: "Process Automation",
          shortDescription: "Eliminate repetitive manual tasks.",
          fullDescription: "Connect your apps (spreadsheets, email, CRM) to work by themselves, saving hours of your day.",
          includes: ["Process mapping", "API/Zapier/Make integration", "Testing and validation"],
          price: "On budget",
          iconName: "Workflow"
        },
        {
          id: "ai-consulting",
          title: "AI Consulting",
          shortDescription: "Artificial Intelligence applied to business.",
          fullDescription: "Implementation of virtual assistants and AI tools to improve customer service and productivity.",
          includes: ["Custom chatbots", "Team training", "Productivity tools"],
          price: "On budget",
          iconName: "Bot"
        }
      ]
    },
    process: {
      title: "How the Consulting Works",
      steps: [
        { title: "Initial Meeting", description: "Complete diagnosis to understand your difficulties and expectations." },
        { title: "Prototype", description: "Development and partial delivery for visual and functional validation." },
        { title: "Approval", description: "Fine-tuning and verification of the presented concept." },
        { title: "Development", description: "Complete execution of the solution, rigorous testing, and documentation." },
        { title: "Final Delivery", description: "Training, acceptance, and project closure." }
      ]
    },
    portfolio: {
      title: "Featured Projects",
      items: [
        { id: 1, title: "Financial Dashboard", category: "Data Analytics", imageUrl: "https://picsum.photos/id/445/600/400" },
        { id: 2, title: "Nutritionist Landing Page", category: "Web Development", imageUrl: "https://picsum.photos/id/60/600/400" },
        { id: 3, title: "Scheduling Bot", category: "Automation", imageUrl: "https://picsum.photos/id/1/600/400" },
      ]
    },
    testimonials: {
      title: "What clients say",
      items: [
        { id: 1, name: "Ricardo Silva", role: "Bakery Owner", text: "Felipe helped me automate inventory control. I saved 20 hours a month!" },
        { id: 2, name: "Mariana Costa", role: "Lawyer", text: "My landing page looks professional and increased my leads by 40% in the first month." },
        { id: 3, name: "João Souza", role: "Financial Consultant", text: "Simplified technology and made everything look easy to use. Highly recommend!" }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { question: "How much does consulting cost?", answer: "Prices vary according to scope. I offer accessible starter packages for micro-entrepreneurs." },
        { question: "How soon do I get the prototype?", answer: "Depending on complexity, between 3 to 7 business days after the initial meeting." },
        { question: "How does payment work?", answer: "We offer two flexible options:\n\n🔹 **One-time Payment** (Fixed Projects)\n• We accept Pix, Boleto, or Credit/Debit Card.\n\n🔹 **Recurring Subscription** (Maintenance)\n• Reduced monthly fee.\n• We accept Credit Card and Boleto." },
        { question: "Do you create custom solutions?", answer: "Yes! No business is the same. Everything is adapted to your needs." }
      ]
    },
    contact: {
      title: "Ready to transform your business?",
      subtitle: "Schedule your free chat and discover how technology can boost your results.",
      cta: "Schedule via WhatsApp",
      whatsapp: "Send Message",
      form: {
        nameLabel: "Full Name",
        companyLabel: "Company / Brand Name",
        emailLabel: "Email",
        emailError: "Please enter a valid email address.",
        phoneLabel: "Phone / WhatsApp",
        serviceLabel: "What kind of solution do you need?",
        messageLabel: "Message (optional)",
        submitButton: "Send Request",
        sending: "Preparing...",
        successTitle: "Request Sent!",
        successMessage: "Thank you. WhatsApp has been opened to send your message. I will be in touch soon.",
        sendNew: "Send new message",
        services: {
          general: "General Consulting / Not sure yet",
          data: "Data Engineering & Analytics",
          web: "Websites & Landing Pages",
          automation: "Automation & Bots"
        },
        conditional: {
          automation: "What process would you like to automate?",
          data: "Do you already have data sources (sheets, systems)?",
          web: "Do you already have a visual identity or design?"
        }
      }
    },
    footer: {
      rights: "All rights reserved."
    }
  }
};

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/janeirofelipe",
  whatsapp: "https://wa.me/5527996142978",
  email: "mailto:felipe.janeiro@gmail.com",
  linkedin: "https://linkedin.com/in/felipejaneiroliqui"
};