import React from 'react';
import { motion } from 'framer-motion';
export const PromiseSection = () => {
  const lines = [
  'Une équipe.',
  'Une vision.',
  'Un objectif :',
  'votre croissance.'];

  return (
    <section id="apropos" className="scroll-mt-32 bg-brand-black text-brand-white py-40 md:py-64 px-6 flex items-center justify-center min-h-[80vh]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight flex flex-col gap-2 md:gap-4">
          {lines.map((line, index) => {
            const isAccent = index === lines.length - 1;
            return (
              <motion.span
                key={index}
                className={isAccent ? 'text-brand-violet' : 'text-white'}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  amount: 0.8
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3,
                  ease: 'easeOut'
                }}>
                
                {line}
              </motion.span>);

          })}
        </h2>
      </div>
    </section>);

};