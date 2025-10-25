import { motion } from 'framer-motion'
import { TreePine, Shield, Heart, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const teamLinks = [
    { name: "Erik Batista", url: "https://www.linkedin.com/in/erik-batista-da-silva-455612215/" },
    { name: "Rafaella Cavalcante", url: "https://www.linkedin.com/in/rafaella-bianca-cavalcante/" },
    { name: "Paula Kim", url: "https://www.linkedin.com/in/paula-kweyeun-kim-b93aab36/" },
    { name: "Yan Coutinho", url: "https://www.linkedin.com/in/yan-m-coutinho/" }
  ]

  return (
    <footer className="bg-gradient-to-b from-preto-looma to-cinza-grafite text-white">
      <div className="w-full max-w-none px-4 md:px-8 lg:px-16 xl:px-24 py-16">`
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <TreePine className="w-10 h-10 text-verde-sustentavel" />
                <Shield className="w-6 h-6 text-rosa-etico absolute -top-1 -right-1" />
              </div>
              <span className="text-3xl font-display font-bold">
                <span className="text-rosa-etico">Looma</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              A primeira solução de Passaporte Digital de Produto baseada em blockchain que garante 
              transparência total e práticas sustentáveis em toda a cadeia produtiva.
            </p>

            {/* Mission Statement */}
            <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="w-5 h-5 text-rosa-etico" />
                <span className="font-semibold text-branco-algodao">Nossa Missão</span>
              </div>
              <p className="text-gray-300 text-sm">
                Transformar a indústria têxtil através da transparência, 
                sustentabilidade e tecnologia blockchain.
              </p>
            </div>
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-branco-algodao mb-6">Soluções</h3>
            <ul className="space-y-3">
              {[
                "Rastreabilidade Blockchain",
                "Selo de Transparência",
                "Validação Automática",
                "Auditoria Digital",
                "Relatórios de Sustentabilidade"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="text-gray-300 hover:text-verde-sustentavel transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-branco-algodao mb-6">Equipe</h3>
            <ul className="space-y-3">
              {teamLinks.map((member, index) => (
                <motion.li key={index}>
                  <a
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-rosa-etico transition-colors group"
                  >
                    <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{member.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">Contato via LinkedIn</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} Looma by Equipe Baobá. Transformando a moda através da transparência.
            </p>

            {/* Tech Stack */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Powered by</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-verde-sustentavel rounded-full animate-pulse" />
                <span>Cartesi Rollups</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rosa-etico rounded-full animate-pulse" />
                <span>Blockchain</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-verde-sustentavel via-rosa-etico to-verde-sustentavel" />
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-verde-sustentavel/5 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 bg-rosa-etico/5 rounded-full"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </footer>
  )
}

export default Footer