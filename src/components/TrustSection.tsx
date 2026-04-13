import React from 'react';
import { motion } from 'framer-motion';
const achievements = [
'Digitalisation de processus électoraux',
"Développement d'applications mobiles",
"Accélération de croissance d'entreprises",
'Optimisation de systèmes internes'];

export const TrustSection = () => {
  return (
    <section id="confiance" className="scroll-mt-32 bg-brand-black text-brand-white py-32 md:py-48 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-32 text-center md:text-left"
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.3
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Institutions. Entreprises. Organisations.
          </h2>
          <p className="text-2xl md:text-3xl font-light text-gray-400">
            Ils nous font confiance pour des projets critiques.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {achievements.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}
                initial={{
                  opacity: 0,
                  x: isEven ? -50 : 50
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true,
                  amount: 0.4
                }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut'
                }}>
                
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-5xl font-light leading-tight border-l-4 border-brand-violet pl-6 md:pl-10 py-2">
                    {item}
                  </h3>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

};