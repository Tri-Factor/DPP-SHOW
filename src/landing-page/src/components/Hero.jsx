import { motion } from 'framer-motion'
import { TreePine, Shield, Leaf } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-preto-looma to-cinza-grafite overflow-hidden m-0 p-0 block top-0">
      {/* Background Elements - Fixed positioning */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-16 md:top-20 left-4 md:left-10 w-16 h-16 md:w-32 md:h-32 bg-rosa-etico/10 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 md:bottom-32 right-4 md:right-20 w-12 h-12 md:w-24 md:h-24 bg-verde-sustentavel/10 rounded-full"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="w-full h-full flex items-center px-4 md:px-8 lg:px-16 xl:px-24 py-8 md:py-16 relative z-10">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">`
          
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:pr-8 xl:pr-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo/Brand */}
            <motion.div
              className="flex items-center justify-center lg:justify-start mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <TreePine className="w-8 h-8 md:w-10 md:h-10 text-verde-sustentavel" />
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-rosa-etico absolute -top-1 -right-1" />
                </div>
                <span className="text-2xl md:text-3xl font-display font-bold text-branco-algodao">
                  <span className="text-rosa-etico">Looma</span>
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-branco-algodao leading-tight mb-4 md:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transforme a 
              <span className="text-rosa-etico"> transparência</span>
              <br />
              em vantagem 
              <span className="text-verde-sustentavel"> competitiva</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Uma solução revolucionária de <strong className="text-branco-algodao">Passaporte Digital de Produto (DPP)</strong> que 
              conecta o <strong className="text-verde-sustentavel">mundo físico ao blockchain</strong>, realizando 
              <strong className="text-rosa-etico"> medições reais</strong> em cada etapa da cadeia produtiva têxtil 
              para garantir <strong className="text-branco-algodao">transparência autêntica</strong>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.button
                className="bg-rosa-etico hover:bg-rosa-terra text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fale com nosso time
              </motion.button>
              <motion.button
                className="border-2 border-verde-sustentavel text-verde-sustentavel hover:bg-verde-sustentavel hover:text-preto-looma font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Saiba mais
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-verde-sustentavel" />
                <span className="text-xs md:text-sm">Blockchain Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="w-4 h-4 md:w-5 md:h-5 text-verde-sustentavel" />
                <span className="text-xs md:text-sm">100% Transparente</span>
              </div>
              <div className="flex items-center space-x-2">
                <TreePine className="w-4 h-4 md:w-5 md:h-5 text-verde-sustentavel" />
                <span className="text-xs md:text-sm">Sustentabilidade Verificada</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end lg:pl-8 xl:pl-16"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative">
              {/* Main Circle */}
              <motion.div
                className="w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-rosa-etico/20 to-verde-sustentavel/20 backdrop-blur-sm border border-white/10 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {/* Inner Content */}
                <div className="text-center">
                  <TreePine className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-verde-sustentavel mx-auto mb-3 md:mb-4" />
                  <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold text-branco-algodao mb-1 md:mb-2">
                    Looma
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                    DPP Têxtil
                  </p>
                </div>
              </motion.div>

              {/* Floating Elements - Fixed positioning */}
              <motion.div
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 lg:-top-6 lg:-right-6 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-rosa-etico/30 rounded-full flex items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Shield className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-rosa-etico" />
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 lg:-bottom-6 lg:-left-6 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-verde-sustentavel/30 rounded-full flex items-center justify-center"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Leaf className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-verde-sustentavel" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-400 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-2 md:h-3 bg-gray-400 rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero