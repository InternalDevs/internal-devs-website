"use client"

import { TrendingUp, Package, Bot, FileText, Activity, ArrowUpRight, ShoppingCart, Sparkles, Globe, BarChart3, Zap, CheckCircle2 } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useLanguage } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const solutionData = {
  en: {
    featured: {
      badge: "Featured Solution",
      title: "E-commerce AI Optimization",
      description: "Complete AI-powered toolkit for marketplace sellers. Automate your listings, outperform competitors, and scale across multiple platforms with intelligent optimization.",
      features: [
        "Automated title & description optimization",
        "SEO-enhanced content generation",
        "Real-time competitor analysis",
        "Multi-language listing generation",
        "Amazon, MercadoLibre, Shopify & more"
      ],
      cta: "Learn More",
      platforms: ["Amazon", "MercadoLibre", "Shopify", "eBay", "Walmart"]
    },
    solutions: [
      {
        icon: TrendingUp,
        title: "Sales Intelligence",
        description: "Real-time analytics and predictive insights to optimize sales performance and identify growth opportunities.",
        features: ["Revenue forecasting", "Lead scoring", "Pipeline optimization"]
      },
      {
        icon: Package,
        title: "Inventory Forecasting",
        description: "AI-powered demand prediction to optimize stock levels and eliminate costly stockouts or overstock.",
        features: ["Demand prediction", "Auto-replenishment", "Supplier optimization"]
      },
      {
        icon: Bot,
        title: "Enterprise AI Copilots",
        description: "Custom AI assistants trained on your company data to help teams make better decisions faster.",
        features: ["Custom training", "Multi-department", "Secure & private"]
      },
      {
        icon: FileText,
        title: "Document Intelligence",
        description: "Extract insights and automate data entry from invoices, contracts, and business documents.",
        features: ["OCR processing", "Data extraction", "Workflow automation"]
      },
      {
        icon: Activity,
        title: "Operational Analytics",
        description: "Real-time monitoring and analysis of operations for continuous improvement and cost optimization.",
        features: ["KPI dashboards", "Anomaly detection", "Process mining"]
      },
    ],
  },
  es: {
    featured: {
      badge: "Solucion Destacada",
      title: "Optimizacion de E-commerce con IA",
      description: "Kit completo de herramientas con IA para vendedores. Automatiza tus listados, supera a la competencia y escala en multiples plataformas con optimizacion inteligente.",
      features: [
        "Optimizacion automatica de titulos y descripciones",
        "Generacion de contenido mejorado para SEO",
        "Analisis de competencia en tiempo real",
        "Generacion de listados multi-idioma",
        "Amazon, MercadoLibre, Shopify y mas"
      ],
      cta: "Saber Mas",
      platforms: ["Amazon", "MercadoLibre", "Shopify", "eBay", "Walmart"]
    },
    solutions: [
      {
        icon: TrendingUp,
        title: "Inteligencia de Ventas",
        description: "Analitica en tiempo real e insights predictivos para optimizar el rendimiento de ventas e identificar oportunidades.",
        features: ["Pronostico de ingresos", "Puntuacion de leads", "Optimizacion de pipeline"]
      },
      {
        icon: Package,
        title: "Pronostico de Inventario",
        description: "Prediccion de demanda con IA para optimizar niveles de stock y eliminar faltantes o excesos costosos.",
        features: ["Prediccion de demanda", "Reposicion automatica", "Optimizacion de proveedores"]
      },
      {
        icon: Bot,
        title: "Copilotos de IA Empresarial",
        description: "Asistentes de IA personalizados entrenados con datos de tu empresa para ayudar a tomar mejores decisiones.",
        features: ["Entrenamiento personalizado", "Multi-departamento", "Seguro y privado"]
      },
      {
        icon: FileText,
        title: "Inteligencia de Documentos",
        description: "Extrae insights y automatiza la entrada de datos de facturas, contratos y documentos de negocio.",
        features: ["Procesamiento OCR", "Extraccion de datos", "Automatizacion de flujos"]
      },
      {
        icon: Activity,
        title: "Analitica Operacional",
        description: "Monitoreo y analisis en tiempo real de operaciones para mejora continua y optimizacion de costos.",
        features: ["Dashboards de KPIs", "Deteccion de anomalias", "Mineria de procesos"]
      },
    ],
  },
  zh: {
    featured: {
      badge: "精选解决方案",
      title: "电商AI优化",
      description: "为卖家提供完整的AI工具包。自动化您的列表，超越竞争对手，通过智能优化在多个平台上扩展业务。",
      features: [
        "自动标题和描述优化",
        "SEO增强内容生成",
        "实时竞争分析",
        "多语言列表生成",
        "亚马逊、MercadoLibre、Shopify等"
      ],
      cta: "了解更多",
      platforms: ["Amazon", "MercadoLibre", "Shopify", "eBay", "Walmart"]
    },
    solutions: [
      {
        icon: TrendingUp,
        title: "销售智能",
        description: "实时分析和预测洞察，优化销售绩效并识别增长机会。",
        features: ["收入预测", "线索评分", "管道优化"]
      },
      {
        icon: Package,
        title: "库存预测",
        description: "AI驱动的需求预测，优化库存水平，消除昂贵的缺货或积压。",
        features: ["需求预测", "自动补货", "供应商优化"]
      },
      {
        icon: Bot,
        title: "企业AI助手",
        description: "使用公司数据训练的定制AI助手，帮助团队更快做出更好的决策。",
        features: ["定制培训", "多部门", "安全私密"]
      },
      {
        icon: FileText,
        title: "文档智能",
        description: "从发票、合同和商业文档中提取洞察并自动化数据录入。",
        features: ["OCR处理", "数据提取", "工作流自动化"]
      },
      {
        icon: Activity,
        title: "运营分析",
        description: "实时监控和分析运营，以持续改进和优化成本。",
        features: ["KPI仪表板", "异常检测", "流程挖掘"]
      },
    ],
  },
}

export function SolutionsSection() {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal<HTMLDivElement>()
  const { ref: featuredRef, isRevealed: featuredRevealed } = useScrollReveal<HTMLDivElement>()
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal<HTMLDivElement>()
  const { t, language } = useLanguage()

  const data = solutionData[language] || solutionData.en

  return (
    <section className="relative py-28 lg:py-40 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#4FACFE]/5 via-[#7C6DFB]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#C56CF0]/5 via-[#7C6DFB]/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#7C6DFB]/50 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            headerRevealed 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7C6DFB]/10 border border-[#7C6DFB]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#7C6DFB]" />
            <span className="text-sm font-medium text-[#7C6DFB]">{t("solutions.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            {t("solutions.title")}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t("solutions.description")}
          </p>
        </div>

        {/* Featured E-commerce Solution */}
        <div 
          ref={featuredRef}
          className={`mt-16 transition-all duration-700 ${
            featuredRevealed 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-[#0a0a12] via-[#12121a] to-[#0a0a12] border border-[#7C6DFB]/20 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#4FACFE]/20 via-[#7C6DFB]/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-gradient-to-tr from-[#C56CF0]/20 via-[#7C6DFB]/10 to-transparent rounded-full blur-3xl" />
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#4FACFE]/20 to-[#C56CF0]/20 border border-[#7C6DFB]/30 mb-6">
                  <ShoppingCart className="w-4 h-4 text-[#7C6DFB]" />
                  <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">{data.featured.badge}</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-balance">
                  {data.featured.title}
                </h3>
                
                <p className="mt-4 text-white/70 text-lg leading-relaxed">
                  {data.featured.description}
                </p>

                {/* Features list */}
                <ul className="mt-8 space-y-3">
                  {data.featured.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-[#4FACFE] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] hover:opacity-90 text-white border-0 shadow-lg shadow-[#7C6DFB]/20"
                  >
                    <Link href="#contact">
                      {data.featured.cta}
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Platforms visualization */}
              <div className="relative">
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Center icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] flex items-center justify-center shadow-2xl shadow-[#7C6DFB]/30">
                    <Zap className="w-12 h-12 text-white" />
                  </div>

                  {/* Orbiting platform badges */}
                  {data.featured.platforms.map((platform, index) => {
                    const angle = (index * 72) - 90 // 360/5 = 72 degrees apart
                    const radius = 140
                    const x = Math.cos((angle * Math.PI) / 180) * radius
                    const y = Math.sin((angle * Math.PI) / 180) * radius
                    
                    return (
                      <div
                        key={platform}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-110"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                        }}
                      >
                        <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium whitespace-nowrap">
                          {platform}
                        </div>
                      </div>
                    )
                  })}

                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <circle 
                      cx="200" 
                      cy="200" 
                      r="140" 
                      fill="none" 
                      stroke="url(#gradient)" 
                      strokeWidth="1" 
                      strokeDasharray="8 8"
                      className="opacity-30"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4FACFE" />
                        <stop offset="50%" stopColor="#7C6DFB" />
                        <stop offset="100%" stopColor="#C56CF0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-8 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4FACFE] to-[#7C6DFB]">5+</div>
                    <div className="text-xs text-white/60">{language === 'es' ? 'Plataformas' : language === 'zh' ? '平台' : 'Platforms'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7C6DFB] to-[#C56CF0]">10+</div>
                    <div className="text-xs text-white/60">{language === 'es' ? 'Idiomas' : language === 'zh' ? '语言' : 'Languages'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C56CF0] to-[#4FACFE]">24/7</div>
                    <div className="text-xs text-white/60">{language === 'es' ? 'Optimizacion' : language === 'zh' ? '优化' : 'Optimization'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Solutions Grid */}
        <div 
          ref={gridRef}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {data.solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative p-6 bg-card border border-border rounded-xl transition-all duration-500 hover:border-[#7C6DFB]/30 hover:shadow-lg hover:shadow-[#7C6DFB]/5 ${
                gridRevealed 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: gridRevealed ? `${index * 100}ms` : '0ms'
              }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4FACFE]/10 via-[#7C6DFB]/10 to-[#C56CF0]/10 flex items-center justify-center mb-4 group-hover:from-[#4FACFE]/20 group-hover:via-[#7C6DFB]/20 group-hover:to-[#C56CF0]/20 transition-all duration-300">
                <solution.icon className="w-6 h-6 text-[#7C6DFB]" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                {solution.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#7C6DFB]" />
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {solution.description}
              </p>

              {/* Features tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {solution.features.map((feature, featureIndex) => (
                  <span 
                    key={featureIndex}
                    className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
