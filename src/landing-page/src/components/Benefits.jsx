import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, DollarSign, Shield, Heart } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumento da Confiança",
      description: "Dados verificáveis e transparentes que comprovam práticas sustentáveis",
      impact: "71% dos consumidores valorizam transparência",
      color: "from-verde-sustentavel to-verde-sustentavel/70"
    },
    {
      icon: Award,
      title: "Reputação Fortalecida",
      description: "Diferenciação no mercado como marca verdadeiramente sustentável",
      impact: "2.5x melhor performance financeira",
      color: "from-rosa-etico to-rosa-terra"
    },
    {
      icon: Shield,
      title: "Proteção Contra Crises",
      description: "Prevenção de escândalos através de rastreabilidade completa",
      impact: "Evita perdas bilionárias de valor",
      color: "from-preto-bao to-cinza-grafite"
    },
    {
      icon: DollarSign,
      title: "Premium Price",
      description: "Justificativa para preços mais altos com valor agregado comprovado",
      impact: "44% pagam mais por sustentabilidade",
      color: "from-verde-sustentavel to-rosa-etico"
    },
    {
      icon: Users,
      title: "Engajamento do Cliente",
      description: "Conexão mais profunda com consumidores conscientes",
      impact: "Maior fidelização e advocacy",
      color: "from-rosa-etico to-verde-sustentavel"
    },
    {
      icon: Heart,
      title: "Impacto Social Real",
      description: "Contribuição para uma indústria têxtil mais ética e sustentável",
      impact: "Transformação positiva da indústria",
      color: "from-rosa-terra to-rosa-etico"
    }
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
            className="inline-flex items-center space-x-2 bg-verde-sustentavel/10 text-verde-sustentavel px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Award className="w-4 h-4" />
            <span>Benefícios Transformadores</span>
          </motion.div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-preto-looma mb-4 md:mb-6">
            Transforme Sua Marca com o
            <br /><span className="text-verde-sustentavel">Looma</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Mais do que uma solução DPP, o Looma é um investimento estratégico que fortalece 
            sua posição no mercado e constrói relacionamentos duradouros com consumidores.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <motion.div
                className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${benefit.color} rounded-2xl mb-4 md:mb-6 relative z-10`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-preto-looma mb-3 md:mb-4 relative z-10">
                {benefit.title}
              </h3>
              
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed relative z-10">
                {benefit.description}
              </p>

              {/* Impact */}
              <div className="bg-gray-50 rounded-xl p-3 md:p-4 relative z-10">
                <div className="text-xs md:text-sm text-gray-500 mb-1">Impacto Esperado</div>
                <div className="text-sm md:text-base font-semibold text-preto-looma">{benefit.impact}</div>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  background: `linear-gradient(to right, #74C69D, #E96E8C)` 
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* ROI Section */}
        <motion.div
          className="bg-gradient-to-r from-preto-bao to-cinza-grafite rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-branco-algodao mb-3 md:mb-4">
              Retorno Sobre Investimento
            </h3>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
              O Looma não é apenas um gasto, é um investimento estratégico com retorno 
              mensurável e impacto positivo imediato na sua marca.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
            <motion.div
              className="bg-white/10 rounded-xl p-4 md:p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl md:text-3xl font-bold text-verde-sustentavel mb-2">+25%</div>
              <div className="text-xs md:text-sm text-gray-300">Aumento no engajamento do cliente</div>
            </motion.div>

            <motion.div
              className="bg-white/10 rounded-xl p-4 md:p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl md:text-3xl font-bold text-rosa-etico mb-2">+15%</div>
              <div className="text-xs md:text-sm text-gray-300">Premium permitido no preço</div>
            </motion.div>

            <motion.div
              className="bg-white/10 rounded-xl p-4 md:p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl md:text-3xl font-bold text-verde-sustentavel mb-2">-80%</div>
              <div className="text-xs md:text-sm text-gray-300">Redução do risco reputacional</div>
            </motion.div>

            <motion.div
              className="bg-white/10 rounded-xl p-4 md:p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl md:text-3xl font-bold text-rosa-etico mb-2">2.5x</div>
              <div className="text-xs md:text-sm text-gray-300">Melhor performance vs. concorrentes</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits