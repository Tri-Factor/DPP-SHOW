import { motion } from 'framer-motion'
import { Wheat, Zap, Shirt, ShoppingBag, ArrowRight, CheckCircle } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Wheat,
      title: "Colheita",
      description: "Registro da origem das fibras naturais",
      details: "Localização, métodos de cultivo, e outras informações que comprovam a sustentabilidade são registradas e analisadas pela solução",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Zap,
      title: "Fiação",
      description: "Transformação das fibras em fios",
      details: "Desde o transporte até a fiação, cada etapa é monitorada para garantir que a cadeia produtiva seja mantida",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Shirt,
      title: "Confecção",
      description: "Produção das peças de vestuário",
      details: "São registrados quem produziu, onde e como, assim é possível tornar auditáveis a cadeia produtiva de cada SKU fabricado",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: ShoppingBag,
      title: "Venda",
      description: "Disponibilização para o consumidor final",
      details: "O transporte de loja em loja, a venda final, tudo é registrado em blockchain para garantir a rastreabilidade completa do produto",
      color: "from-rosa-etico to-rosa-terra"
    }
  ]

  return (
    <section className="py-20 bg-branco-algodao">
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
            className="inline-flex items-center space-x-2 bg-preto-bao/10 text-preto-bao px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ArrowRight className="w-4 h-4" />
            <span>Como Funciona</span>
          </motion.div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-preto-looma mb-4 md:mb-6">
            Rastreabilidade Completa
            <br />da <span className="text-verde-sustentavel">Origem</span> ao <span className="text-rosa-etico">Consumidor</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            O Looma acompanha cada etapa da cadeia produtiva têxtil, registrando dados 
            críticos em blockchain para garantir transparência total e práticas sustentáveis via DPP.
          </p>
        </motion.div>

        {/* Process Flow - Mobile and Desktop */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Step Number */}
                  <motion.div
                    className="w-8 h-8 bg-rosa-etico text-white rounded-full flex items-center justify-center text-sm font-bold mb-4 relative z-10"
                    whileHover={{ scale: 1.2 }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Icon Container */}
                  <motion.div
                    className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10`}
                    whileHover={{ y: -10, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-12 h-12 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-preto-bao mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4 max-w-48">
                    {step.description}
                  </p>
                  <p className="text-sm text-gray-500 text-center max-w-48 leading-relaxed">
                    {step.details}
                  </p>

                  {/* Arrow (except for last item) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-rosa-etico to-verde-sustentavel"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: (index + 1) * 0.2, duration: 0.8 }}
                      viewport={{ once: true }}
                      style={{ transformOrigin: 'left' }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Left Side - Number and Icon */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-rosa-etico text-white rounded-full flex items-center justify-center text-sm font-bold mb-4">
                    {index + 1}
                  </div>
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-rosa-etico to-verde-sustentavel mt-4" />
                  )}
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-preto-bao mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {step.description}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks