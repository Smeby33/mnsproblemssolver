import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';

type Project = {
  badge: string;
  title: string;
  description: string;
  image: string;
  url: string;
};

const projects: Project[] = [
  {
    badge: 'Projet client prive',
    title: 'Odile & Jean-Pierre',
    description:
      "Site de mariage avec reservation et billet d'invitation pour un particulier.",
    image: 'https://i.pinimg.com/originals/b5/fc/f7/b5fcf796ae649df7498ee24fab99bd01.jpg',
    url: 'https://odile-jean-pierre.vercel.app/'
  },
  {
    badge: 'Projet vision interne',
    title: 'Ayele Swart',
    description:
      'Mini-market en ligne avec commandes specifiques hors magasin et livraison.',
    image: 'https://africa.iclei.org/wp-content/uploads/2025/11/Market-photo-Malawi-Strengthening-markets-.jpg',
    url: 'https://ayele-swart.vercel.app/'
  },
  {
    badge: 'Projet PME',
    title: 'Mia Portal',
    description:
      'Portail centralisant les liens des differents sites du groupe Mia pour mieux servir ses clients.',
    image: 'https://www.acxionpme.ca/wp-content/uploads/2020/11/4-etapes-strategie-commerciale.jpg',
    url: 'https://miamia-rust.vercel.app/'
  }
];

export const RealizationsSection = () => {
  const [activeProjectUrl, setActiveProjectUrl] = useState(projects[0].url);
  const activeProject =
    projects.find((project) => project.url === activeProjectUrl) ?? projects[0];

  return (
    <section id="realisations" className="scroll-mt-32 bg-brand-white px-6 py-24 text-brand-black md:py-36">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="mb-4 inline-flex rounded-full border border-brand-violet/40 bg-brand-violet/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-violet">
            Quelques realisations
          </p>
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Des projets concrets qui transforment des besoins reels en experiences digitales.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-10">
          <motion.div
            className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 shadow-[0_35px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="mb-4 flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-black/30 px-4 py-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-brand-violet">Projet actif</p>
                <h3 className="text-lg font-semibold text-white">{activeProject.title}</h3>
              </div>
              <a
                href={activeProject.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold transition-colors hover:border-brand-violet"
              >
                Ouvrir
                <ArrowUpRightIcon size={16} />
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white">
              <iframe
                key={activeProject.url}
                src={activeProject.url}
                title={`Apercu ${activeProject.title}`}
                className="h-[420px] w-full bg-white md:h-[560px]"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-xs text-gray-300">
              Si le site refuse l&#39;affichage en iframe, utilisez le bouton Ouvrir pour voir le projet dans un nouvel onglet.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {projects.map((project, index) => {
              const isActive = project.url === activeProject.url;
              return (
                <motion.button
                  key={project.url}
                  type="button"
                  onClick={() => setActiveProjectUrl(project.url)}
                  className={`group relative overflow-hidden rounded-3xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-brand-violet bg-brand-violet/20 shadow-[0_0_35px_rgba(139,92,246,0.25)]'
                      : 'border-white/20 bg-white/10 backdrop-blur-xl hover:border-brand-violet/60 hover:bg-white/15'
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
                >
                  <div className="relative mb-3 overflow-hidden rounded-2xl border border-white/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>

                  <h4 className="mb-2 text-lg font-semibold text-black">{project.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-800">{project.description}</p>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
