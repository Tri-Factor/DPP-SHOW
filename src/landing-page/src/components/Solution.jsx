import { motion } from 'framer-motion'
import { Shield, Link, Eye, Zap, TreePine, CheckCircle, TrendingUp } from 'lucide-react'

const Solution = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Imutável",
      description: "Cada informação é registrada permanentemente na blockchain, garantindo que os dados nunca possam ser alterados, criando um histórico confiável e auditável."
    },
    {
      icon: Eye,
      title: "Transparência Total",
      description: "Rastreabilidade completa da jornada do produto, desde a origem das fibras até o consumidor final, com todas as informações acessíveis em tempo real para verificação pública."
    },
    {
      icon: Zap,
      title: "Validação Automática",
      description: "Sistema inteligente que verifica automaticamente critérios de sustentabilidade e autenticidade, reduzindo erros humanos e garantindo consistência nas avaliações."
    }
  ]

  return (
    <section id="solution" className="py-20 bg-rosa-claro">
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
            className="inline-flex items-center space-x-2 bg-verde-sustentavel/12 text-verde-sustentavel px-5 py-2.5 rounded-full text-sm font-medium mb-4 border border-verde-sustentavel/15"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TreePine className="w-4 h-4" />
            <span>Nossa Solução</span>
          </motion.div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            <span className="text-verde-sustentavel">Looma:</span> A solução DPP
            <br />que une o físico ao digital
          </h2>
          
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Revolucionamos a transparência na indústria têxtil através da combinação única de 
            tecnologia blockchain avançada e validação automatizada inteligente, criando a 
            plataforma mais confiável para Digital Product Passport.
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
                className="absolute top-10 -right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Shield className="w-6 h-6 text-verde-sustentavel" />
              </motion.div>

              <motion.div
                className="absolute bottom-16 -left-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Link className="w-6 h-6 text-verde-sustentavel" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 bg-white rounded-xl p-3 shadow-lg border border-gray-100"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Eye className="w-6 h-6 text-verde-sustentavel" />
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
            <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-6 md:mb-8">
              Tecnologia de Ponta Que Gera Resultados Reais
            </h3>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 md:space-x-4 p-4 md:p-5 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 border border-white/50 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-verde-sustentavel/10 border-2 border-verde-sustentavel/20 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-verde-sustentavel" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Differentiators */}
        <motion.div
          className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/60 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Subtle decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-verde-sustentavel/8 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-verde-sustentavel/6 to-transparent rounded-full translate-y-16 -translate-x-16"></div>
          
          <div className="relative text-center max-w-4xl mx-auto">
            {/* Decorative line with icon */}
            <div className="flex items-center justify-center mb-6">
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-verde-sustentavel/30 to-transparent flex-1 max-w-20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="mx-4 flex items-center justify-center w-10 h-10 bg-gradient-to-br from-verde-sustentavel/10 to-verde-sustentavel/5 rounded-full border border-verde-sustentavel/20 shadow-sm relative"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                <TrendingUp className="w-5 h-5 text-verde-sustentavel" />
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-verde-sustentavel/20"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-verde-sustentavel/30 to-transparent flex-1 max-w-20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
            
            <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-4 md:mb-6">
              Por Que o Looma é Único no Mercado?
            </h3>
            
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Enquanto outras soluções dependem de processos manuais suscetíveis a erros e dados 
              limitados, o Looma oferece uma abordagem revolucionária baseada em blockchain 
              e automações, estabelecendo um novo padrão para DPP na indústria têxtil.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solution