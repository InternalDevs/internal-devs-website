"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

export type Language = "en" | "es" | "zh"

type TranslationKey = string
type Translations = Record<TranslationKey, string>
type AllTranslations = Record<Language, Translations>

const translations: AllTranslations = {
  en: {
    // Header
    "nav.solutions": "Solutions",
    "nav.industries": "Industries",
    "nav.approach": "Our Approach",
    "nav.contact": "Contact",
    "nav.cta": "Schedule a Call",
    
    // Hero Slides
    "hero.slide1.badge": "AI Consulting & Engineering",
    "hero.slide1.title": "Transform Your Data Into",
    "hero.slide1.highlight": "Intelligent Systems",
    "hero.slide1.description": "We design and implement AI systems that analyze business data and automate critical processes for enterprises worldwide.",
    "hero.slide1.cta": "Schedule a Discovery Call",
    "hero.slide1.secondary": "Explore Solutions",
    
    "hero.slide2.badge": "Our Approach",
    "hero.slide2.title": "Methodology That",
    "hero.slide2.highlight": "Delivers Results",
    "hero.slide2.description": "From discovery to deployment, we follow a proven methodology that ensures your AI projects succeed and scale.",
    "hero.slide2.cta": "Learn Our Process",
    "hero.slide2.secondary": "View Case Studies",
    
    "hero.slide3.badge": "Why Choose Us",
    "hero.slide3.title": "Your Trusted Partner in",
    "hero.slide3.highlight": "AI Innovation",
    "hero.slide3.description": "A decade of experience building AI solutions that transform businesses and deliver measurable ROI.",
    "hero.slide3.cta": "Start Your Project",
    "hero.slide3.secondary": "Meet the Team",
    
    "hero.slide4.badge": "Industries We Serve",
    "hero.slide4.title": "AI Solutions Across",
    "hero.slide4.highlight": "Multiple Sectors",
    "hero.slide4.description": "From e-commerce to manufacturing, we bring AI-powered transformation to diverse industries.",
    "hero.slide4.cta": "Explore Industries",
    "hero.slide4.secondary": "View Solutions",
    
    // Stats
    "stats.years": "Years in the Market",
    "stats.solutions": "Solutions Delivered",
    "stats.retention": "Client Retention",
    "stats.monitoring": "Active Monitoring",
    
    // Features
    "feature.discovery": "Discovery & Analysis",
    "feature.design": "Solution Design",
    "feature.development": "Agile Development",
    "feature.support": "Continuous Support",
    "feature.experience": "10+ Years Experience",
    "feature.team": "Expert Team",
    "feature.partnership": "Long-term Partnership",
    "feature.results": "Proven Results",
    "feature.ecommerce": "E-commerce & Retail",
    "feature.manufacturing": "Manufacturing",
    "feature.healthcare": "Healthcare",
    "feature.financial": "Financial Services",
    
    // Trust indicators
    "trust.ai": "AI-Powered",
    "trust.data": "Data-Driven",
    "trust.automated": "Automated",
    "trust.scalable": "Scalable",
    
    // Scroll
    "scroll.explore": "Scroll to explore",
    
    // Problem Section
    "problem.title": "Most companies have data but don't know how to use it.",
    "problem.description1": "Companies generate massive amounts of data through CRMs, ERPs, marketplaces and operational systems. However, many organizations still rely on manual spreadsheets and disconnected tools to make decisions.",
    "problem.description2": "helps companies transform their data into intelligent systems that generate insights and automate processes.",
    "problem.disconnected.title": "Disconnected Data",
    "problem.disconnected.description": "Data siloed across multiple systems without integration",
    "problem.manual.title": "Manual Processes",
    "problem.manual.description": "Hours spent on spreadsheets and repetitive tasks",
    "problem.missed.title": "Missed Opportunities",
    "problem.missed.description": "Unable to identify patterns and predict outcomes",
    
    // Services Section
    "services.badge": "What We Do",
    "services.title": "AI Solutions for Modern Enterprises",
    "services.description": "We build custom AI systems that integrate with your existing infrastructure and deliver measurable business value.",
    "services.intelligence.title": "Data Intelligence",
    "services.intelligence.description": "Transform raw data into actionable insights with advanced analytics, predictive models, and intelligent dashboards.",
    "services.automation.title": "Process Automation",
    "services.automation.description": "Automate repetitive tasks and workflows with AI-powered systems that learn and improve over time.",
    "services.integration.title": "System Integration",
    "services.integration.description": "Connect disparate systems and data sources into a unified, intelligent ecosystem.",
    "services.custom.title": "Custom AI Development",
    "services.custom.description": "Build bespoke AI solutions tailored to your specific business challenges and objectives.",
    
    // Industries Section
    "industries.badge": "Industries",
    "industries.title": "AI Solutions Across Sectors",
    "industries.description": "We've delivered transformative AI solutions across multiple industries, understanding the unique challenges each sector faces.",
    
    // Process/Approach Section
    "approach.badge": "Methodology",
    "approach.title": "Our Approach to AI Excellence",
    "approach.description": "A proven methodology that combines technical expertise with deep business understanding to deliver AI solutions that truly transform.",
    "approach.step1.title": "Discovery",
    "approach.step1.description": "Deep dive into your business processes, data landscape, and objectives to identify high-impact AI opportunities.",
    "approach.step2.title": "Design",
    "approach.step2.description": "Architecture and solution design with clear milestones, KPIs, and integration specifications.",
    "approach.step3.title": "Develop",
    "approach.step3.description": "Agile development with continuous testing, validation, and stakeholder feedback loops.",
    "approach.step4.title": "Deploy",
    "approach.step4.description": "Seamless deployment with comprehensive training, documentation, and ongoing support.",
    
    // Why Section
    "why.badge": "Why InternalDevs",
    "why.title": "Your Partner in AI Transformation",
    "why.description": "We combine deep technical expertise with business acumen to deliver AI solutions that drive real results.",
    "why.experience.title": "Decade of Experience",
    "why.experience.description": "Over 10 years building AI systems for enterprises across industries.",
    "why.retention.title": "Client Retention",
    "why.retention.description": "85% of our clients continue working with us on multiple projects.",
    "why.projects.title": "Projects Delivered",
    "why.projects.description": "50+ successful AI implementations and counting.",
    "why.commitment.title": "Our Commitment",
    "why.commitment.item1": "Transparent communication at every stage",
    "why.commitment.item2": "Agile methodology with regular updates",
    "why.commitment.item3": "Knowledge transfer and documentation",
    "why.commitment.item4": "Long-term support and maintenance",
    "why.commitment.cta": "Start Your AI Journey",
    
    // Solutions Section
    "solutions.badge": "Case Studies",
    "solutions.title": "Example AI Solutions",
    "solutions.description": "Real-world implementations that demonstrate our capability to deliver transformative AI solutions.",
    
    // CTA Section
    "cta.title": "Ready to Transform Your Business with AI?",
    "cta.description": "Schedule a discovery call to discuss how we can help you leverage AI to automate processes, gain insights, and drive growth.",
    "cta.button": "Schedule a Discovery Call",
    "cta.secondary": "View Our Solutions",
    
    // Footer
    "footer.description": "AI Consulting & Engineering firm helping enterprises transform data into intelligent systems.",
    "footer.about": "About",
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.connect": "Connect",
    "footer.rights": "All rights reserved.",
  },
  es: {
    // Header
    "nav.solutions": "Soluciones",
    "nav.industries": "Industrias",
    "nav.approach": "Metodologia",
    "nav.contact": "Contacto",
    "nav.cta": "Agendar Llamada",
    
    // Hero Slides
    "hero.slide1.badge": "Consultoria e Ingenieria de IA",
    "hero.slide1.title": "Transforma Tus Datos en",
    "hero.slide1.highlight": "Sistemas Inteligentes",
    "hero.slide1.description": "Disenamos e implementamos sistemas de IA que analizan datos empresariales y automatizan procesos criticos para empresas en todo el mundo.",
    "hero.slide1.cta": "Agendar Llamada",
    "hero.slide1.secondary": "Explorar Soluciones",
    
    "hero.slide2.badge": "Nuestra Metodologia",
    "hero.slide2.title": "Metodologia que",
    "hero.slide2.highlight": "Entrega Resultados",
    "hero.slide2.description": "Desde el descubrimiento hasta la implementacion, seguimos una metodologia probada que asegura el exito de tus proyectos de IA.",
    "hero.slide2.cta": "Conocer Proceso",
    "hero.slide2.secondary": "Ver Casos de Exito",
    
    "hero.slide3.badge": "Por Que Elegirnos",
    "hero.slide3.title": "Tu Socio de Confianza en",
    "hero.slide3.highlight": "Innovacion con IA",
    "hero.slide3.description": "Una decada de experiencia construyendo soluciones de IA que transforman negocios y entregan ROI medible.",
    "hero.slide3.cta": "Iniciar Tu Proyecto",
    "hero.slide3.secondary": "Conocer al Equipo",
    
    "hero.slide4.badge": "Industrias que Servimos",
    "hero.slide4.title": "Soluciones de IA en",
    "hero.slide4.highlight": "Multiples Sectores",
    "hero.slide4.description": "Desde e-commerce hasta manufactura, llevamos transformacion con IA a diversas industrias.",
    "hero.slide4.cta": "Explorar Industrias",
    "hero.slide4.secondary": "Ver Soluciones",
    
    // Stats
    "stats.years": "Anos en el Mercado",
    "stats.solutions": "Soluciones Entregadas",
    "stats.retention": "Retencion de Clientes",
    "stats.monitoring": "Monitoreo Activo",
    
    // Features
    "feature.discovery": "Descubrimiento y Analisis",
    "feature.design": "Diseno de Solucion",
    "feature.development": "Desarrollo Agil",
    "feature.support": "Soporte Continuo",
    "feature.experience": "10+ Anos de Experiencia",
    "feature.team": "Equipo Experto",
    "feature.partnership": "Alianza a Largo Plazo",
    "feature.results": "Resultados Comprobados",
    "feature.ecommerce": "E-commerce y Retail",
    "feature.manufacturing": "Manufactura",
    "feature.healthcare": "Salud",
    "feature.financial": "Servicios Financieros",
    
    // Trust indicators
    "trust.ai": "Impulsado por IA",
    "trust.data": "Basado en Datos",
    "trust.automated": "Automatizado",
    "trust.scalable": "Escalable",
    
    // Scroll
    "scroll.explore": "Desplaza para explorar",
    
    // Problem Section
    "problem.title": "La mayoria de las empresas tienen datos pero no saben como usarlos.",
    "problem.description1": "Las empresas generan cantidades masivas de datos a traves de CRMs, ERPs, marketplaces y sistemas operativos. Sin embargo, muchas organizaciones aun dependen de hojas de calculo manuales y herramientas desconectadas para tomar decisiones.",
    "problem.description2": "ayuda a las empresas a transformar sus datos en sistemas inteligentes que generan insights y automatizan procesos.",
    "problem.disconnected.title": "Datos Desconectados",
    "problem.disconnected.description": "Datos en silos a traves de multiples sistemas sin integracion",
    "problem.manual.title": "Procesos Manuales",
    "problem.manual.description": "Horas gastadas en hojas de calculo y tareas repetitivas",
    "problem.missed.title": "Oportunidades Perdidas",
    "problem.missed.description": "Incapacidad de identificar patrones y predecir resultados",
    
    // Services Section
    "services.badge": "Que Hacemos",
    "services.title": "Soluciones de IA para Empresas Modernas",
    "services.description": "Construimos sistemas de IA personalizados que se integran con tu infraestructura existente y entregan valor de negocio medible.",
    "services.intelligence.title": "Inteligencia de Datos",
    "services.intelligence.description": "Transforma datos brutos en insights accionables con analitica avanzada, modelos predictivos y dashboards inteligentes.",
    "services.automation.title": "Automatizacion de Procesos",
    "services.automation.description": "Automatiza tareas y flujos de trabajo repetitivos con sistemas impulsados por IA que aprenden y mejoran con el tiempo.",
    "services.integration.title": "Integracion de Sistemas",
    "services.integration.description": "Conecta sistemas y fuentes de datos dispares en un ecosistema unificado e inteligente.",
    "services.custom.title": "Desarrollo de IA Personalizado",
    "services.custom.description": "Construye soluciones de IA a medida adaptadas a tus desafios y objetivos de negocio especificos.",
    
    // Industries Section
    "industries.badge": "Industrias",
    "industries.title": "Soluciones de IA en Todos los Sectores",
    "industries.description": "Hemos entregado soluciones de IA transformadoras en multiples industrias, entendiendo los desafios unicos que enfrenta cada sector.",
    
    // Process/Approach Section
    "approach.badge": "Metodologia",
    "approach.title": "Nuestro Enfoque hacia la Excelencia en IA",
    "approach.description": "Una metodologia probada que combina experiencia tecnica con profundo entendimiento del negocio para entregar soluciones de IA que realmente transforman.",
    "approach.step1.title": "Descubrimiento",
    "approach.step1.description": "Inmersion profunda en tus procesos de negocio, panorama de datos y objetivos para identificar oportunidades de IA de alto impacto.",
    "approach.step2.title": "Diseno",
    "approach.step2.description": "Arquitectura y diseno de solucion con hitos claros, KPIs y especificaciones de integracion.",
    "approach.step3.title": "Desarrollo",
    "approach.step3.description": "Desarrollo agil con pruebas continuas, validacion y ciclos de retroalimentacion con stakeholders.",
    "approach.step4.title": "Despliegue",
    "approach.step4.description": "Despliegue sin problemas con capacitacion completa, documentacion y soporte continuo.",
    
    // Why Section
    "why.badge": "Por Que InternalDevs",
    "why.title": "Tu Socio en la Transformacion con IA",
    "why.description": "Combinamos profunda experiencia tecnica con vision de negocio para entregar soluciones de IA que generan resultados reales.",
    "why.experience.title": "Decada de Experiencia",
    "why.experience.description": "Mas de 10 anos construyendo sistemas de IA para empresas en diversas industrias.",
    "why.retention.title": "Retencion de Clientes",
    "why.retention.description": "El 85% de nuestros clientes continuan trabajando con nosotros en multiples proyectos.",
    "why.projects.title": "Proyectos Entregados",
    "why.projects.description": "Mas de 50 implementaciones exitosas de IA y contando.",
    "why.commitment.title": "Nuestro Compromiso",
    "why.commitment.item1": "Comunicacion transparente en cada etapa",
    "why.commitment.item2": "Metodologia agil con actualizaciones regulares",
    "why.commitment.item3": "Transferencia de conocimiento y documentacion",
    "why.commitment.item4": "Soporte y mantenimiento a largo plazo",
    "why.commitment.cta": "Inicia Tu Viaje con IA",
    
    // Solutions Section
    "solutions.badge": "Casos de Exito",
    "solutions.title": "Ejemplos de Soluciones de IA",
    "solutions.description": "Implementaciones del mundo real que demuestran nuestra capacidad para entregar soluciones de IA transformadoras.",
    
    // CTA Section
    "cta.title": "Listo para Transformar Tu Negocio con IA?",
    "cta.description": "Agenda una llamada de descubrimiento para discutir como podemos ayudarte a aprovechar la IA para automatizar procesos, obtener insights e impulsar el crecimiento.",
    "cta.button": "Agendar Llamada de Descubrimiento",
    "cta.secondary": "Ver Nuestras Soluciones",
    
    // Footer
    "footer.description": "Consultoria e Ingenieria de IA ayudando a empresas a transformar datos en sistemas inteligentes.",
    "footer.about": "Acerca de",
    "footer.company": "Compania",
    "footer.services": "Servicios",
    "footer.connect": "Conectar",
    "footer.rights": "Todos los derechos reservados.",
  },
  zh: {
    // Header
    "nav.solutions": "解决方案",
    "nav.industries": "行业",
    "nav.approach": "我们的方法",
    "nav.contact": "联系我们",
    "nav.cta": "预约电话",
    
    // Hero Slides
    "hero.slide1.badge": "AI咨询与工程",
    "hero.slide1.title": "将您的数据转化为",
    "hero.slide1.highlight": "智能系统",
    "hero.slide1.description": "我们设计和实施AI系统，分析业务数据并为全球企业自动化关键流程。",
    "hero.slide1.cta": "预约咨询电话",
    "hero.slide1.secondary": "探索解决方案",
    
    "hero.slide2.badge": "我们的方法",
    "hero.slide2.title": "交付成果的",
    "hero.slide2.highlight": "方法论",
    "hero.slide2.description": "从发现到部署，我们遵循经过验证的方法论，确保您的AI项目成功并扩展。",
    "hero.slide2.cta": "了解我们的流程",
    "hero.slide2.secondary": "查看案例研究",
    
    "hero.slide3.badge": "为什么选择我们",
    "hero.slide3.title": "您在AI创新中的",
    "hero.slide3.highlight": "可信赖合作伙伴",
    "hero.slide3.description": "十年的经验，构建能够改变业务并提供可衡量ROI的AI解决方案。",
    "hero.slide3.cta": "开始您的项目",
    "hero.slide3.secondary": "认识团队",
    
    "hero.slide4.badge": "我们服务的行业",
    "hero.slide4.title": "跨越多个领域的",
    "hero.slide4.highlight": "AI解决方案",
    "hero.slide4.description": "从电子商务到制造业，我们为各行各业带来AI驱动的转型。",
    "hero.slide4.cta": "探索行业",
    "hero.slide4.secondary": "查看解决方案",
    
    // Stats
    "stats.years": "市场经验年数",
    "stats.solutions": "已交付解决方案",
    "stats.retention": "客户保留率",
    "stats.monitoring": "全天候监控",
    
    // Features
    "feature.discovery": "发现与分析",
    "feature.design": "解决方案设计",
    "feature.development": "敏捷开发",
    "feature.support": "持续支持",
    "feature.experience": "10年以上经验",
    "feature.team": "专家团队",
    "feature.partnership": "长期合作",
    "feature.results": "验证的成果",
    "feature.ecommerce": "电子商务与零售",
    "feature.manufacturing": "制造业",
    "feature.healthcare": "医疗保健",
    "feature.financial": "金融服务",
    
    // Trust indicators
    "trust.ai": "AI驱动",
    "trust.data": "数据驱动",
    "trust.automated": "自动化",
    "trust.scalable": "可扩展",
    
    // Scroll
    "scroll.explore": "向下滚动探索",
    
    // Problem Section
    "problem.title": "大多数公司拥有数据，但不知道如何使用。",
    "problem.description1": "公司通过CRM、ERP、市场和运营系统产生大量数据。然而，许多组织仍然依赖手动电子表格和断开连接的工具来做决策。",
    "problem.description2": "帮助公司将数据转化为生成洞察并自动化流程的智能系统。",
    "problem.disconnected.title": "断开的数据",
    "problem.disconnected.description": "数据分散在多个系统中，没有集成",
    "problem.manual.title": "手动流程",
    "problem.manual.description": "花费大量时间在电子表格和重复任务上",
    "problem.missed.title": "错失的机会",
    "problem.missed.description": "无法识别模式和预测结果",
    
    // Services Section
    "services.badge": "我们的服务",
    "services.title": "现代企业的AI解决方案",
    "services.description": "我们构建定制的AI系统，与您现有的基础设施集成，提供可衡量的业务价值。",
    "services.intelligence.title": "数据智能",
    "services.intelligence.description": "通过高级分析、预测模型和智能仪表板将原始数据转化为可操作的洞察。",
    "services.automation.title": "流程自动化",
    "services.automation.description": "使用能够学习和改进的AI驱动系统自动化重复任务和工作流程。",
    "services.integration.title": "系统集成",
    "services.integration.description": "将分散的系统和数据源连接成一个统一的智能生态系统。",
    "services.custom.title": "定制AI开发",
    "services.custom.description": "构建针对您特定业务挑战和目标量身定制的AI解决方案。",
    
    // Industries Section
    "industries.badge": "行业",
    "industries.title": "跨行业的AI解决方案",
    "industries.description": "我们在多个行业交付了变革性的AI解决方案，了解每个行业面临的独特挑战。",
    
    // Process/Approach Section
    "approach.badge": "方法论",
    "approach.title": "我们的AI卓越方法",
    "approach.description": "一种经过验证的方法论，结合技术专长和深入的业务理解，提供真正变革的AI解决方案。",
    "approach.step1.title": "发现",
    "approach.step1.description": "深入了解您的业务流程、数据格局和目标，以识别高影响力的AI机会。",
    "approach.step2.title": "设计",
    "approach.step2.description": "具有明确里程碑、KPI和集成规范的架构和解决方案设计。",
    "approach.step3.title": "开发",
    "approach.step3.description": "敏捷开发，持续测试、验证和利益相关者反馈循环。",
    "approach.step4.title": "部署",
    "approach.step4.description": "无缝部署，配有全面培训、文档和持续支持。",
    
    // Why Section
    "why.badge": "为什么选择InternalDevs",
    "why.title": "您的AI转型合作伙伴",
    "why.description": "我们将深厚的技术专长与商业敏锐度相结合，提供能够产生真实成果的AI解决方案。",
    "why.experience.title": "十年经验",
    "why.experience.description": "超过10年为各行业企业构建AI系统的经验。",
    "why.retention.title": "客户保留",
    "why.retention.description": "85%的客户继续与我们合作多个项目。",
    "why.projects.title": "已交付项目",
    "why.projects.description": "50多个成功的AI实施，且仍在增加。",
    "why.commitment.title": "我们的承诺",
    "why.commitment.item1": "每个阶段的透明沟通",
    "why.commitment.item2": "定期更新的敏捷方法论",
    "why.commitment.item3": "知识转移和文档",
    "why.commitment.item4": "长期支持和维护",
    "why.commitment.cta": "开始您的AI之旅",
    
    // Solutions Section
    "solutions.badge": "案例研究",
    "solutions.title": "AI解决方案示例",
    "solutions.description": "展示我们提供变革性AI解决方案能力的真实世界实施案例。",
    
    // CTA Section
    "cta.title": "准备好用AI改变您的业务了吗？",
    "cta.description": "预约咨询电话，讨论我们如何帮助您利用AI自动化流程、获得洞察并推动增长。",
    "cta.button": "预约咨询电话",
    "cta.secondary": "查看我们的解决方案",
    
    // Footer
    "footer.description": "AI咨询与工程公司，帮助企业将数据转化为智能系统。",
    "footer.about": "关于",
    "footer.company": "公司",
    "footer.services": "服务",
    "footer.connect": "联系",
    "footer.rights": "版权所有。",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && ["en", "es", "zh"].includes(saved)) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const languageNames: Record<Language, string> = {
  en: "English",
  es: "Espanol",
  zh: "中文",
}

export const languageFlags: Record<Language, string> = {
  en: "US",
  es: "ES", 
  zh: "CN",
}
