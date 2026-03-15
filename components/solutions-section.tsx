"use client"

import { TrendingUp, Package, Bot, FileText, Activity, ArrowUpRight, ShoppingCart } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useLanguage } from "@/lib/i18n"

const solutionData = {
  en: [
    {
      icon: ShoppingCart,
      title: "E-commerce AI Optimization",
      description: "AI-powered tools for marketplace sellers: automated title optimization, SEO-enhanced descriptions, competitor analysis, and multi-language listing generation for Amazon, MercadoLibre, Shopify and more.",
      highlight: true,
    },
    {
      icon: TrendingUp,
      title: "Sales Intelligence Systems",
      description: "Real-time analytics and insights to optimize sales performance and identify growth opportunities across all your channels.",
    },
    {
      icon: Package,
      title: "Inventory Forecasting AI",
      description: "Predictive models that optimize inventory levels and reduce stockouts and overstock situations using historical data.",
    },
    {
      icon: Bot,
      title: "Enterprise AI Copilots",
      description: "Intelligent assistants that help employees make better decisions with company data and automate repetitive tasks.",
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      description: "AI-powered document processing that extracts insights and automates data entry from invoices, contracts and more.",
    },
    {
      icon: Activity,
      title: "Operational Analytics",
      description: "Real-time monitoring and analysis of business operations for continuous improvement and cost optimization.",
    },
  ],
  es: [
    {
      icon: ShoppingCart,
      title: "Optimizacion de E-commerce con IA",
      description: "Herramientas impulsadas por IA para vendedores: optimizacion automatica de titulos, descripciones mejoradas para SEO, analisis de competencia y generacion de listados multi-idioma para Amazon, MercadoLibre, Shopify y mas.",
      highlight: true,
    },
    {
      icon: TrendingUp,
      title: "Sistemas de Inteligencia de Ventas",
      description: "Analitica en tiempo real e insights para optimizar el rendimiento de ventas e identificar oportunidades de crecimiento en todos tus canales.",
    },
    {
      icon: Package,
      title: "Pronostico de Inventario con IA",
      description: "Modelos predictivos que optimizan niveles de inventario y reducen faltantes y excesos usando datos historicos.",
    },
    {
      icon: Bot,
      title: "Copilotos de IA Empresarial",
      description: "Asistentes inteligentes que ayudan a empleados a tomar mejores decisiones con datos de la empresa y automatizar tareas repetitivas.",
    },
    {
      icon: FileText,
      title: "Inteligencia de Documentos",
      description: "Procesamiento de documentos con IA que extrae insights y automatiza la entrada de datos de facturas, contratos y mas.",
    },
    {
      icon: Activity,
      title: "Analitica Operacional",
      description: "Monitoreo y analisis en tiempo real de operaciones de negocio para mejora continua y optimizacion de costos.",
    },
  ],
  zh: [
    {
      icon: ShoppingCart,
      title: "电商AI优化",
      description: "为卖家提供的AI工具：自动标题优化、SEO增强描述、竞争分析，以及为亚马逊、MercadoLibre、Shopify等平台生成多语言列表。",
      highlight: true,
    },
    {
      icon: TrendingUp,
      title: "销售智能系统",
      description: "实时分析和洞察，优化销售绩效并识别所有渠道的增长机会。",
    },
    {
      icon: Package,
      title: "库存预测AI",
      description: "使用历史数据优化库存水平并减少缺货和积压情况的预测模型。",
    },
    {
      icon: Bot,
      title: "企业AI助手",
      description: "智能助手帮助员工利用公司数据做出更好的决策，并自动化重复任务。",
    },
    {
      icon: FileText,
      title: "文档智能",
      description: "AI驱动的文档处理，从发票、合同等中提取洞察并自动化数据录入。",
    },
    {
      icon: Activity,
      title: "运营分析",
      description: "实时监控和分析业务运营，以持续改进和优化成本。",
    },
  ],
}

export function SolutionsSection() {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal<HTMLDivElement>()
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal<HTMLDivElement>()
  const { t, language } = useLanguage()

  const solutions = solutionData[language] || solutionData.en

  return (
    <section className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#7C6DFB]/50 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`max-w-2xl transition-all duration-700 ${
            headerRevealed 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-sm font-medium text-[#7C6DFB] uppercase tracking-wider">{t("solutions.badge")}</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {t("solutions.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {t("solutions.description")}
          </p>
        </div>

        {/* Solutions grid */}
        <div 
          ref={gridRef}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative p-6 bg-card border rounded-xl transition-all duration-500 ${
                solution.highlight 
                  ? 'border-[#7C6DFB]/30 shadow-lg shadow-[#7C6DFB]/5' 
                  : 'border-border hover:border-foreground/20'
              } hover:shadow-md ${
                gridRevealed 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: gridRevealed ? `${index * 100}ms` : '0ms'
              }}
            >
              {solution.highlight && (
                <div className="absolute -top-3 left-6 px-3 py-1 text-xs font-medium bg-gradient-to-r from-[#4FACFE] via-[#7C6DFB] to-[#C56CF0] text-white rounded-full">
                  Featured
                </div>
              )}
              
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  solution.highlight 
                    ? 'bg-gradient-to-br from-[#4FACFE]/20 to-[#C56CF0]/20 text-[#7C6DFB]' 
                    : 'bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground'
                }`}>
                  <solution.icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    {solution.title}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
