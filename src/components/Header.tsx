import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';

type HeaderProps = {
  onOpenContactModal: () => void;
};

export const Header = ({ onOpenContactModal }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    label: 'Expertise',
    targetId: 'expertise'
  },
  {
    label: 'Écosystème',
    targetId: 'ecosysteme'
  },
  {
    label: 'Confiance',
    targetId: 'confiance'
  },
  {
    label: 'À propos',
    targetId: 'apropos'
  }];

  return (
    <>
      <motion.header
        initial={{
          y: -100,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}
        className={`fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50 transition-all duration-300 ${scrolled ? 'drop-shadow-2xl' : ''}`}>
        
        <div className="bg-white/95 backdrop-blur-md rounded-full px-6 py-2 md:py-2 flex items-center justify-between border border-white/20">
          {/* Logo */}
          <a href="#" aria-label="Retour en haut" className="flex items-center">
            <img
              src="/mnsblack.png"
              alt="MNS"
              className="h-16 w-auto md:h-16 object-contain"
              loading="eager"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) =>
            <a
              key={item.targetId}
              href={`#${item.targetId}`}
              className="text-sm font-medium text-gray-800 hover:text-brand-violet transition-colors">
              
                {item.label}
              </a>
            )}
          </nav>

          {/* Right CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2.5 bg-brand-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors" onClick={onOpenContactModal}>
              Nous contacter
            </button>
            <button
              className="md:hidden text-brand-black p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              
              {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          transition={{
            duration: 0.2
          }}
          className="fixed top-24 left-4 right-4 z-40 bg-white rounded-3xl shadow-2xl overflow-hidden md:hidden border border-gray-100">
          
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((item) =>
            <a
              key={item.targetId}
              href={`#${item.targetId}`}
              className="text-lg font-medium text-brand-black py-2 border-b border-gray-100 last:border-0"
              onClick={() => setMobileMenuOpen(false)}>
              
                  {item.label}
                </a>
            )}
              <button
              className="w-full mt-4 px-6 py-4 bg-brand-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}>
                Nous contacter
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

};