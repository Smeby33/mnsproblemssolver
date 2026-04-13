import React from 'react';
import { motion } from 'framer-motion';
import { HandshakeIcon, TargetIcon, TrendingUpIcon } from 'lucide-react';
const diffItems = [
{
  icon: HandshakeIcon,
  title: 'Nous pensons en partenaires',
  desc: 'Nous nous intégrons à votre vision.'
},
{
  icon: TargetIcon,
  title: 'Nous livrons des résultats',
  desc: 'Chaque action est orientée impact.'
},
{
  icon: TrendingUpIcon,
  title: 'Nous optimisons votre croissance',
  desc: 'Moins de coûts, plus de performance.'
}];

export const DifferentiationSection = () => {
  return (
    <section className="bg-brand-white text-brand-black py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {diffItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="p-8 md:p-12 rounded-3xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group"
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.95
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1
                }}
                viewport={{
                  once: true,
                  amount: 0.3
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: 'easeOut'
                }}>
                
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-brand-violet group-hover:text-white transition-colors duration-500 text-brand-black">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 font-light text-lg">{item.desc}</p>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

};