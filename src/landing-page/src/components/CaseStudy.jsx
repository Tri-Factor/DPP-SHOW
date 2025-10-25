import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, DollarSign, Shield, ArrowRight } from 'lucide-react'

const CaseStudy = () => {
  const impactData = [
    {
      icon: TrendingDown,
      title: "Queda nas Ações",
      value: "3.8%",
      description: "nos primeiros dias após o escândalo",
      color: "text-red-500"
    },
    {
      icon: DollarSign,
      title: "Perda de Valor",
      value: "€2.3B",
      description: "em valor de mercado perdido",
      color: "text-red-500"
    },
    {
      icon: TrendingDown,
      title: "Queda nas Vendas",
      value: "7%",
      description: "na receita líquida no trimestre seguinte",
      color: "text-red-500"
    }
  ]

  const preventionBenefits = [
    "Rastreabilidade completa da cadeia produtiva",
    "Detecção precoce de práticas inadequadas",
    "Transparência proativa com stakeholders",
    "Proteção da reputação e valor de marca"
  ]

  return (
    <section className="py-20 bg-rosa-claro">
      <div className="w-full max-w-none px-4 md:px-8 lg:px-16 xl:px-24">`
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Caso Real</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-preto-bao mb-6">
            O Custo da <span className="text-red-500">Falta de Transparência</span>
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Em 2017, uma grande marca de fast fashion enfrentou uma crise devastadora quando 
            foram reveladas práticas análogas ao trabalho escravo em sua cadeia produtiva.
          </p>
        </motion.div>

        {/* Case Study Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left - Story */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-preto-bao">O Escândalo</h3>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>2011:</strong> Condições inadequadas de trabalho são identificadas 
                  na cadeia produtiva da marca.
                </p>
                <p>
                  <strong>2017:</strong> O Tribunal Regional do Trabalho de São Paulo 
                  responsabiliza a empresa por trabalho análogo ao escravo.
                </p>
                <p>
                  <strong>Resultado:</strong> Crise de reputação global, perda bilionária 
                  de valor de mercado e queda significativa nas vendas.
                </p>
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-2">Lição Aprendida</h4>
              <p className="text-red-100">
                A falta de visibilidade e controle sobre a cadeia produtiva pode 
                resultar em consequências financeiras devastadoras e danos irreparáveis à reputação.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Impact Data */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-preto-bao mb-6">Impacto Financeiro</h3>
            
            {impactData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-red-50 p-3 rounded-full">
                    <item.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline space-x-2">
                      <span className={`text-2xl font-bold ${item.color}`}>
                        {item.value}
                      </span>
                      <span className="text-lg font-semibold text-preto-bao">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Prevention with BaoStamp */}
        <motion.div
          className="bg-gradient-to-r from-verde-sustentavel to-rosa-etico rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-8 h-8 text-verde-sustentavel" />
                <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold">
                  Como o Looma Teria Evitado Esta Crise
                </h3>
              </div>
              
              <p className="text-white/90 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
                Com rastreabilidade completa via DPP e validação automática, o Looma teria 
                identificado e alertado sobre as práticas inadequadas antes que se tornassem 
                um escândalo público, protegendo a reputação e o valor da empresa.
              </p>

              <motion.button
                className="bg-white text-verde-sustentavel font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Proteja sua marca agora</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-6">Benefícios de Prevenção:</h4>
              {preventionBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-verde-sustentavel rounded-full" />
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
            <div className="text-2xl md:text-3xl font-bold text-preto-looma mb-2">€2.3B</div>
            <div className="text-sm md:text-base text-gray-600">Valor que poderia ter sido preservado</div>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
            <div className="text-2xl md:text-3xl font-bold text-verde-sustentavel mb-2">100%</div>
            <div className="text-sm md:text-base text-gray-600">Transparência com Looma</div>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
            <div className="text-2xl md:text-3xl font-bold text-rosa-etico mb-2">0</div>
            <div className="text-sm md:text-base text-gray-600">Escândalos com rastreabilidade completa</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudy