import { motion } from 'framer-motion'
import { AlertTriangle, EyeOff, TrendingDown, Users } from 'lucide-react'

const Problem = () => {
  const problems = [
    {
      icon: EyeOff,
      title: "Falta de Transparência",
      description: "Consumidores não conseguem verificar a origem e práticas de produção dos produtos que compram.",
      stat: "78%",
      statDesc: "dos consumidores não confiam nas informações fornecidas pelas marcas"
    },
    {
      icon: AlertTriangle,
      title: "Riscos Reputacionais",
      description: "Escândalos envolvendo práticas não éticas podem devastar a reputação e valor de mercado das empresas.",
      stat: "€2.3B",
      statDesc: "perda de valor de mercado em casos de escândalo"
    },
    {
      icon: TrendingDown,
      title: "Perda de Competitividade",
      description: "Marcas sem certificação confiável perdem espaço para concorrentes mais transparentes.",
      stat: "44%",
      statDesc: "dos consumidores pagam mais por produtos sustentáveis"
    },
    {
      icon: Users,
      title: "Desconfiança do Consumidor",
      description: "A falta de rastreabilidade gera incerteza e afasta consumidores conscientes.",
      stat: "71%",
      statDesc: "dos consumidores consideram sustentabilidade importante"
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
            className="inline-flex items-center space-x-2 bg-rosa-etico/10 text-rosa-etico px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>O Problema Atual</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-preto-bao mb-6">
            A Crise de <span className="text-rosa-etico">Confiança</span>
            <br />na Indústria da Moda
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A falta de transparência na cadeia produtiva têxtil está custando caro para as marcas e 
            frustrando consumidores que buscam fazer escolhas mais conscientes e sustentáveis.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-rosa-etico/10 rounded-full mb-4">
                <problem.icon className="w-6 h-6 text-rosa-etico" />
              </div>
              
              <h3 className="text-xl font-semibold text-preto-bao mb-3">
                {problem.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {problem.description}
              </p>
              
              <div className="border-t pt-4">
                <div className="text-2xl font-bold text-rosa-etico mb-1">
                  {problem.stat}
                </div>
                <div className="text-xs text-gray-500">
                  {problem.statDesc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statement */}
        <motion.div
          className="bg-branco-algodao rounded-3xl p-8 md:p-12 text-center shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-preto-bao mb-4 text-center">
              O Custo da Falta de <span className="text-rosa-etico">Transparência</span>
            </h3>
            
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed max-w-3xl mx-auto">
              Empresas têxteis enfrentam crises bilionárias quando práticas não sustentáveis são expostas. 
              A falta de um sistema confiável de rastreabilidade deixa as marcas vulneráveis e os 
              consumidores sem informações para tomar decisões conscientes.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-rosa-etico mb-2">66%</div>
                <div className="text-sm text-gray-600">dos consumidores consideram rastreabilidade importante</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-verde-sustentavel mb-2">2.5x</div>
                <div className="text-sm text-gray-600">melhor performance financeira com boa reputação sustentável</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-rosa-etico mb-2">€2.3B</div>
                <div className="text-sm text-gray-600">perda de valor em casos de escândalo</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Problem