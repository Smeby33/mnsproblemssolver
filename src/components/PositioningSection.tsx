import React from 'react';
import { motion } from 'framer-motion';
export const PositioningSection = () => {
  return (
    <section className="bg-brand-white text-brand-black py-32 md:py-48 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold leading-tight mb-8"
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
            ease: 'easeOut'
          }}>
          
          Nous ne sommes pas une agence. Nous sommes une extension stratégique
          de votre entreprise.
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl font-light text-gray-600 max-w-2xl mx-auto"
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
            delay: 0.2,
            ease: 'easeOut'
          }}>
          
          Nous intervenons là où la performance est critique : croissance,
          digitalisation, optimisation.
        </motion.p>
      </div>
    </section>);

};