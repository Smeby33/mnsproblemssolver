import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, ChevronDownIcon } from 'lucide-react';
export const HeroSection = () => {
  const projectMailto =
  'mailto:smebedoh33@gmail.com?subject=' +
  encodeURIComponent('Demande de rendez-vous - nouveau projet') +
  '&body=' +
  encodeURIComponent('Bonjour,\n\nJe souhaiterais avoir un eventuel rendez-vous ou une prise de contact pour discuter de mon projet.\n\nMerci.');

  const headline =
  'Nous ne faisons pas du digital. Nous créons de la croissance.';
  const words = headline.split(' ');
  const container = {
    hidden: {
      opacity: 0
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1 * i
      }
    })
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 40
    }
  };
  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-brand-black text-brand-white px-6 md:px-12 pb-16 md:pb-24 pt-32 overflow-hidden">
      {/* Atmospheric Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-brand-violet opacity-20 blur-[120px] md:blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-violet opacity-10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col gap-12 md:gap-24">
        {/* Massive Left-Aligned Headline */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-bold tracking-tighter leading-[0.9] text-left max-w-[95%] md:max-w-[85%] flex flex-wrap"
          variants={container}
          initial="hidden"
          animate="visible">
          
          {words.map((word, index) =>
          <motion.span
            key={index}
            variants={child}
            className="inline-block mr-3 sm:mr-4 md:mr-6 lg:mr-8 mb-2 md:mb-4">
            
              {word}
            </motion.span>
          )}
        </motion.h1>

        {/* Bottom Row: Subtitle & CTAs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-8">
          <motion.p
            className="text-lg md:text-xl font-light text-gray-300 max-w-md leading-relaxed"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 1.2,
              duration: 0.8,
              ease: 'easeOut'
            }}>
            
            Une équipe de consultants digitaux dédiée à transformer vos enjeux
            en performance mesurable.
          </motion.p>

          <motion.div
            className="flex items-center gap-3 sm:gap-4 w-full md:w-auto"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              ease: 'easeOut'
            }}>
            
            <a href={projectMailto} className="flex-1 md:flex-none px-6 sm:px-8 py-4 bg-brand-violet hover:bg-violet-500 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-center">
              Commencer un projet
            </a>
            <a href={projectMailto} aria-label="Commencer un projet" className="w-14 h-14 shrink-0 flex items-center justify-center bg-brand-violet hover:bg-violet-500 text-white rounded-full transition-all duration-300 transform hover:scale-105">
              <ArrowUpRightIcon size={24} strokeWidth={2} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 hidden md:block"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 2.2,
          duration: 1
        }}>
        
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut'
          }}>
          
          <ChevronDownIcon size={28} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>);

};