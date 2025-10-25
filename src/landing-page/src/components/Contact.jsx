import { motion } from 'framer-motion'
import { Mail, MessageCircle, Calendar, ExternalLink, TreePine, Users } from 'lucide-react'

const Contact = () => {
  const teamMembers = [
    {
      name: "Erik Batista da Silva",
      linkedin: "https://www.linkedin.com/in/erik-batista-da-silva-455612215/",
      role: "Founder"
    },
    {
      name: "Rafaella Cavalcante",
      linkedin: "https://www.linkedin.com/in/rafaella-bianca-cavalcante/",
      role: "Founder"
    },
    {
      name: "Paula Kim",
      linkedin: "https://www.linkedin.com/in/paula-kweyeun-kim-b93aab36/",
      role: "Founder"
    },
    {
      name: "Yan Mendonça Coutinho",
      linkedin: "https://www.linkedin.com/in/yan-m-coutinho/",
      role: "Founder"
    }
  ]

  // Email configuration
  const sendEmail = (subject, body) => {
    const mailtoLink = `mailto:erikbatista1222@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink, '_blank')
  }

  // Calendar link
  const openCalendar = () => {
    window.open('https://calendar.app.google/HEhg7qgMv5Fas3Qu6', '_blank')
  }

  // Contact handlers
  const handleEmailContact = () => {
    const subject = "Interesse na Solução Looma DPP"
    const body = `Olá equipe Baobá,

Gostaria de saber mais sobre a solução Looma DPP e como ela pode beneficiar nossa empresa.

Informações da empresa:
- Nome da empresa: 
- Setor: 
- Tamanho da operação: 
- Principal desafio de transparência: 

Aguardo retorno para conversarmos.

Atenciosamente,`
    sendEmail(subject, body)
  }

  const handleScheduleMeeting = () => {
    openCalendar()
  }

  const contactOptions = [
    {
      icon: Mail,
      title: "E-mail",
      description: "Entre em contato conosco pelo e-mail para mais informações.",
      action: "Enviar E-mail",
      color: "from-rosa-etico to-rosa-terra",
      handler: handleEmailContact
    },
    {
      icon: Calendar,
      title: "Agendar reunião",
      description: "Agende uma reunião com nossa equipe para entender melhor o produto e se suas necessidades são atendidas.",
      action: "Agendar Reunião",
      color: "from-preto-looma to-cinza-grafite",
      handler: handleScheduleMeeting
    }
  ]

  return (
    <section id="contact" className="pt-20 pb-0 bg-rosa-claro">
      <div className="w-full max-w-none px-4 md:px-8 lg:px-16 xl:px-24">
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
            <Users className="w-4 h-4" />
            <span>Fale Conosco</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Pronto para Transformar
            <br />sua <span className="text-verde-sustentavel">Cadeia Produtiva</span>?
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Entre em contato com nossa equipe especializada e descubra como o Looma 
            pode fortalecer sua marca e conquistar a confiança dos consumidores.
          </p>
        </motion.div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative border border-white/60"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl mb-6 relative z-10`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <option.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">
                {option.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                {option.description}
              </p>

              {/* CTA Button */}
              <motion.button
                onClick={option.handler}
                className={`w-full bg-gradient-to-r ${option.color} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 relative z-10`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {option.action}
              </motion.button>

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

        {/* Team Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-3xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <TreePine className="w-8 h-8 text-verde-sustentavel" />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                Equipe Looma
              </h3>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Especialistas em blockchain, moda, sustentabilidade e transformação digital
              prontos para revolucionar sua cadeia produtiva.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.a
                key={index}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 block border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-verde-sustentavel to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-bold mb-1 group-hover:text-verde-sustentavel transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-gray-300 text-sm mb-3">{member.role}</p>
                  <div className="flex items-center justify-center space-x-1 text-gray-400 group-hover:text-verde-sustentavel transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-xs">LinkedIn</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex flex-col sm:flex-row gap-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact