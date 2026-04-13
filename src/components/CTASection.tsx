import React from 'react';
import { motion } from 'framer-motion';

type CTASectionProps = {
  onOpenContactModal: () => void;
};

export const CTASection = ({ onOpenContactModal }: CTASectionProps) => {
  const projectMailto =
  'mailto:smebedoh33@gmail.com?subject=' +
  encodeURIComponent('Demarrage de projet - demande de contact') +
  '&body=' +
  encodeURIComponent('Bonjour,\n\nJe souhaite demarrer un projet avec vous et programmer un premier echange.\n\nMerci.');

  return (
    <section className="bg-brand-black text-brand-white py-32 md:py-48 px-6 border-t border-gray-900 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-violet opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
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
          
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Vous avez un projet ambitieux ?
          </h2>
          <p className="text-5xl md:text-7xl font-bold mb-16 text-brand-violet">
            Parlons-en.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={projectMailto} className="w-full sm:w-auto px-10 py-5 bg-brand-violet hover:bg-violet-500 text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] text-center">
              Démarrer un projet
            </a>
            <button className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white hover:bg-white hover:text-brand-black text-white rounded-full font-bold text-lg transition-all duration-300" onClick={onOpenContactModal}>
              Prendre rendez-vous
            </button>
          </div>
        </motion.div>
      </div>
    </section>);

};