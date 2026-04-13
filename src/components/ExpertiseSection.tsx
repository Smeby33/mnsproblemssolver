import React from 'react';
import { motion } from 'framer-motion';
const expertiseItems = [
{
  num: '01',
  title: 'Développement',
  desc: 'Applications, logiciels métiers, plateformes sur mesure.'
},
{
  num: '02',
  title: 'Conseil stratégique',
  desc: 'Structuration, optimisation, transformation digitale.'
},
{
  num: '03',
  title: 'Performance interne',
  desc: "Automatisation, systèmes d'information, efficacité opérationnelle."
}];

export const ExpertiseSection = () => {
  return (
    <section id="expertise" className="scroll-mt-32 bg-brand-black text-brand-white py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {expertiseItems.map((item, index) =>
          <motion.div
            key={index}
            className="group cursor-default"
            initial={{
              opacity: 0,
              y: 40
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
              delay: index * 0.2,
              ease: 'easeOut'
            }}>
            
              <div className="text-6xl md:text-7xl font-light text-brand-violet mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {item.num}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 relative inline-block">
                {item.title}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-violet transition-all duration-300 group-hover:w-full"></span>
              </h3>
              <p className="text-gray-400 font-light text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};