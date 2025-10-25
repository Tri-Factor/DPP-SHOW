import { motion } from 'framer-motion'
import { Shield, Link, Eye, Zap, TreePine, CheckCircle } from 'lucide-react'

const Solution = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Imutável",
      description: "Dados registrados de forma permanente e verificável, impossíveis de alterar ou falsificar."
    },
    {
      icon: Eye,
      title: "Transparência Total",
      description: "Rastreabilidade completa desde matéria-prima até produto final, acessível publicamente."
    },
    {
      icon: Link,
      title: "Cartesi Rollups",
      description: "Tecnologia avançada que processa grandes volumes de dados com eficiência e segurança."
    },
    {
      icon: Zap,
      title: "Validação Automática",
      description: "Critérios de sustentabilidade verificados automaticamente, eliminando erro humano."
    }
  ]

  const differentiators = [
    "Maior nível de transparência com blockchain",
    "Eliminação do fator humano nas validações",
    "Massa de dados rica e detalhada via Cartesi",
    "Impacto negativo para empresas sem a solução DPP"
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
            className="inline-flex items-center space-x-2 bg-verde-sustentavel/10 text-verde-sustentavel px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TreePine className="w-4 h-4" />
            <span>Nossa Solução</span>
          </motion.div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-preto-looma mb-4 md:mb-6">
            <span className="text-verde-sustentavel">Looma:</span> A Primeira
            <br />Solução DPP Blockchain
          </h2>
          
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Uma solução revolucionária de Passaporte Digital de Produto que combina tecnologia 
            blockchain com validação automatizada para criar a plataforma de transparência 
            mais confiável da indústria têxtil.
          </p>
        </motion.div>

        {/* Main Visual + Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Central DPP */}
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-verde-sustentavel to-rosa-etico rounded-full flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center text-white">
                  <TreePine className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4" />
                  <div className="text-xl md:text-2xl font-display font-bold mb-1">Looma</div>
                  <div className="text-xs md:text-sm opacity-90">Digital Product Passport</div>
                </div>
                
                {/* Rotating border */}
                <motion.div
                  className="absolute inset-0 border-4 border-dashed border-white/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-10 -right-4 bg-white rounded-xl p-3 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Shield className="w-6 h-6 text-verde-sustentavel" />
              </motion.div>

              <motion.div
                className="absolute bottom-16 -left-4 bg-white rounded-xl p-3 shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Link className="w-6 h-6 text-rosa-etico" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 bg-white rounded-xl p-3 shadow-lg"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Eye className="w-6 h-6 text-preto-bao" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-display font-bold text-preto-looma mb-6 md:mb-8">
              Tecnologia Que Transforma Confiança em Resultado
            </h3>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-verde-sustentavel to-rosa-etico rounded-full flex items-center justify-center">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-preto-looma mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Differentiators */}
        <motion.div
          className="bg-gradient-to-r from-preto-bao to-cinza-grafite rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-branco-algodao mb-4 md:mb-6">
                Como o Looma se Diferencia
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 leading-relaxed">
                Enquanto outras soluções dependem de verificações manuais e dados limitados, 
                o Looma oferece uma abordagem completamente nova baseada em tecnologia 
                blockchain e automação inteligente para Passaportes Digitais de Produto.
              </p>
            </div>

            <div className="space-y-4">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-verde-sustentavel flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solution