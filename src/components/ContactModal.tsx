import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PhoneCallIcon, XIcon } from 'lucide-react';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-lg rounded-3xl border border-white/20 bg-white/10 p-8 text-white shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Modal de contact"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 inline-flex rounded-full border border-brand-violet/30 bg-brand-violet/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-violet">
                  Nous contacter
                </p>
                <h3 className="text-2xl font-bold leading-tight">Choisissez un numéro pour nous appeler</h3>
                <p className="mt-2 text-sm text-gray-200">Nous sommes disponibles pour échanger sur votre besoin.</p>
              </div>
              <button
                className="rounded-full border border-white/30 p-2 text-white transition-colors hover:bg-white/10"
                onClick={onClose}
                aria-label="Fermer la fenêtre"
              >
                <XIcon size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href="tel:074722554"
                className="group flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-center font-semibold transition-all duration-300 hover:border-brand-violet hover:bg-brand-violet/20"
              >
                <PhoneCallIcon size={18} className="transition-transform group-hover:scale-110" />
                074722554
              </a>
              <a
                href="tel:077120055"
                className="group flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-center font-semibold transition-all duration-300 hover:border-brand-violet hover:bg-brand-violet/20"
              >
                <PhoneCallIcon size={18} className="transition-transform group-hover:scale-110" />
                077120055
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
