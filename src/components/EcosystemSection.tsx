import React from 'react';
import { motion } from 'framer-motion';

type Realization = {
  image: string;
  description: string;
  projectUrl?: string;
  isPlatformLink?: boolean;
};

type SupportPartner = {
  name: string;
  logo: string;
  category: string;
  realizations?: Realization[];
};

const supportPartners: SupportPartner[] = [
  
  {
    name: 'Ogooue Labs',
    logo: 'https://ecole241busi.netlify.app/assets/img/Ogooue-Labs-1-1024x421.png',
    category: 'Technique Formation',
    realizations: [
      {
        image: 'https://ogooue-labs.vercel.app/img/243236413_233648328778712_8204512260137836695_n-2-removebg-preview.png',
        description: 'Programme de formation aux metiers du numerique gratuit finance par differents partenaires.(Promo 9, 10, 11 et 12).',
        projectUrl: 'https://www.facebook.com/Ecole241',
        isPlatformLink: false
      },
      {
        image: 'https://ogooue-labs.vercel.app/img/kids.png',
        description: 'Programme d accompagnement et d initiation au digital et mise en place du paiement mobile sur la plateforme ecole241kids.',
        projectUrl: 'https://ecole241kids.com/',
        isPlatformLink: true
      }
    ]
  },
  {
    name: 'Armada Auto',
    logo: '/Armadalogo-noir.png',
    category: 'Secteur Privé',
    realizations: [
      {
        image: '/ArmadaApplogo-192.png',
        description: 'Réalisation d\'une plateforme de gestion de flotte automobile pour la société Armada Auto.',
        projectUrl: 'https://armadapwa.vercel.app/',
        isPlatformLink: true
      },
      {
        image: '/ArmadaApplogo-192.png',
        description: 'Version mobile de la plateforme de gestion de flotte automobile pour une accessibilité optimale sur tous les appareils.',
        projectUrl: 'https://www.goarmada.app/',
        isPlatformLink: true
      }
    ]
  },
  {
    name: 'Mia-Mia Grill',
    logo: '/Miamialogo.png',
    category: 'Secteur Privé',
    realizations: [
      {
        image: 'https://miamia-rust.vercel.app/Commande%20%20&%20Livraison.png',
        description: 'Réalisation d\'une plateforme de gestion de commande en ligne pour le restaurant Mia-Mia Grill, permettant une expérience client fluide et efficace.',
        projectUrl: 'https://miamia-rust.vercel.app/mia-mia-grill',
        isPlatformLink: true
      },
      {
        image: '/Miamialogo.png',
        description: 'Création de la landing page de la Mia-Mia Holding.',
        projectUrl: 'https://miamia-rust.vercel.app/',
        isPlatformLink: true
      }
    ]
  },
  {
    name: 'Mary mediclinic',
    logo: 'https://www.mary-mediclinic.com/assets/logo-mary-mediclinic-g24x-va6.png',
    category: 'Secteur Privé',
    realizations: [
      {
        image: 'https://www.mary-mediclinic.com/assets/logo-mary-mediclinic-g24x-va6.png',
        description: 'Réalisation d\'un site et  plateforme de prise de rendez-vous en ligne pour la Mary Mediclinic, permettant une expérience client fluide et efficace.',
        projectUrl: 'https://www.mary-mediclinic.com/',
        isPlatformLink: true
      },
      {
        image: 'https://www.mary-mediclinic.com/assets/logo-mary-mediclinic-g24x-va6.png',
        description: 'Mise en place du referencement de la landing page de la Mary Mediclinic.',
        projectUrl: 'https://www.google.com/search?q=mary+mediclinic&oq=mary+mediclinic&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIKCAEQABgKGBYYHjIICAIQABgWGB4yBwgDEAAY7wUyBwgEEAAY7wUyBwgFEAAY7wUyBwgGEAAY7wUyBggHEEUYPNIBCDQ1MjVqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8',
        isPlatformLink: false
      }
    ]
  },
  {
    name: 'POG\'UP Conciergerie',
    logo: 'https://pogup-conciergerie.com/img/logo.png',
    category: 'Secteur Privé',
    realizations: [
      {
        image: 'https://pogup-conciergerie.com/img/logo.png',
        description: 'Supervision technique de la réalisation de la POG\'UP Conciergerie, permettant une expérience client fluide et efficace.',
        projectUrl: 'https://play.google.com/store/apps/details?id=com.gytx.pogup_conciergerie',
        isPlatformLink: true
      }
    ]
  },
  {
    name: 'Complexe scolaire Ange Raphael',
    logo: '/angeraphael.png',
    category: 'Secteur Privé',
    realizations: [
      {
        image: '/angeraphael.png',
        description: 'Acompagnement technique et strategique pour l\'innovation et la digitalisation du complexe scolaire Ange Raphael et sa croissance.',
      }
    ]
  },
   {
    name: 'Chambre de Commerce du Gabon',
    logo: 'https://okafrancois.github.io/chambre-commerce/images/logo.jpg',
    category: 'Programme Institutionnel',
    realizations: [
      {
        image: 'chambredecommercegabonprojet.jpg',
        description: 'Supervision et création du programme \"Impact Jeunesse" menée par la Chambre de Commerce du Gabon et ogooue labs financé par Mm ISABELLE ESSONGHE dirèctrice du groupe CECA-GADIS .',
        
      },
      {
        image: '/chalbredecommerceprojet2.jpg',
        description: 'Partenaire technique et executif du programme \"De l\'Idée à la croissance durable" de la Chambre de Commerce du Gabon.',
        
      }
    ]
  },
  {
    name: 'afup technology',
    logo: '/logo-afup.jpeg',
    category: 'Startup & Innovation',
    realizations: [
      {
        image: 'afupportail.jpg',
        description: 'Réalisation de la landing page de la startup Afup Technology, spécialisée dans les solutions de paiement mobile et de commerce électronique.',
        projectUrl: 'https://afup-techportail.afup-tech.com/',
        isPlatformLink: true
      },
      {
        image: '/logomobilealouk.png',
        description: 'Création du portails de commande pour site de mariage personalisable et beaucoup d\'autres solution numériques .',
        projectUrl: 'https://alouk.afup-tech.com/',
        isPlatformLink: true
      }
    ]
  },
  {
    name: 'Mairie du 2ème Arrondissement Port-Gentil',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWlaOYhyYFhQvOsVhqVemcGdYlaPktzWayw&s',
    category: 'Institutionnel Local'
  },
  {
    name: 'Ambassade de France au Gabon',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS3ILUwRQRBzKC6FvXOzhexsW3cAGWLAuGRg&s',
    category: 'Coopération Internationale'
  },
  {
    name: 'FEG',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCIfTDV8UsMcv0D9Z7bSm4zyqoaaUy2RwXBg&s',
    category: 'Secteur Privé'
  },
  {
    name: 'PNPE',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4pNXDf8J7N3_91Q2_YQTLrs_q39M239yPOw&s',
    category: 'Programme National'
  },
  {
    name: "Société d'Incubation Numérique du Gabon",
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCY91T-wOP5-r79fbFybpPu38QiNdBDX0AQ&s',
    category: 'Innovation & Tech'
  },
  {
    name: 'Gabon Terre Avenir',
    logo: 'https://static.wixstatic.com/media/9dbdd2_4a65d72718f4493cae5668aefdefc721~mv2.png/v1/fill/w_222,h_222,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9dbdd2_4a65d72718f4493cae5668aefdefc721~mv2.png',
    category: 'Développement Durable'
  },
  {
    name: 'Initiative Jeunesse Autonome',
    logo: 'https://static.wixstatic.com/media/9dbdd2_f0a9aa8d6a254bd1872527a897348b39~mv2.jpg/v1/fill/w_1219,h_652,al_c/9dbdd2_f0a9aa8d6a254bd1872527a897348b39~mv2.jpg',
    category: 'Jeunesse & Formation'
  },
  {
    name: 'Organisation Internationale de la Francophonie',
    logo: 'https://dclic.francophonie.org/pluginfile.php/1/theme_mb2mcl/logo/1759242527/OIF_LOGO-BLOC%20MARQUE%20OIF_CMJN%20copie.jpg',
    category: 'Organisation Internationale'
  }
];

export const EcosystemSection = () => {
  return (
    <section id="ecosysteme" className="scroll-mt-32 bg-brand-white text-brand-black py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="max-w-3xl mb-20"
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
          
          <h2 className="text-3xl md:text-4xl font-light leading-relaxed">
            Nous collaborons avec un écosystème de partenaires technologiques,
            stratégiques et innovants pour délivrer des projets à fort impact.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {supportPartners.map((partner, index) =>
          <motion.div
            key={index}
            className="group relative flex flex-col items-center p-6 border border-gray-100 rounded-2xl bg-gray-50 hover:border-brand-violet hover:shadow-sm transition-all duration-500 overflow-hidden min-h-56"
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: 'easeOut'
            }}>

            <img
              src={partner.logo}
              alt={partner.name}
              className="h-18 w-18 object-contain rounded-md bg-white p-1 mb-4"
              loading="lazy"
            />
            <h3 className="text-sm font-semibold text-center text-brand-black mb-1">
              {partner.name}
            </h3>
            <p className="text-xs text-gray-500 text-center uppercase tracking-wide">
              {partner.category}
            </p>
            {partner.realizations &&
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/45 backdrop-blur-md p-4 overflow-y-auto">
                <h4 className="text-xs font-semibold tracking-wider uppercase text-gray-800 mb-3">
                  Realisations
                </h4>
                <div className="space-y-4">
                  {partner.realizations.map((realization, realizationIndex) =>
                  <div key={realizationIndex} className="rounded-xl bg-white/55 border border-white/60 p-3 shadow-sm">
                      <img
                      src={realization.image}
                      alt={`Realisation ${realizationIndex + 1} ${partner.name}`}
                      className="w-full h-20 object-contain bg-white/70 rounded-md mb-2"
                      loading="lazy"
                    />
                    <p className="text-[11px] leading-relaxed text-gray-700">
                      {realization.description}
                    </p>
                    {realization.projectUrl &&
                    <a
                      href={realization.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-2 text-[11px] font-semibold text-brand-violet hover:underline">
                        {realization.isPlatformLink ? 'Voir la plateforme' : 'Voir le programme'}
                      </a>
                    }
                  </div>
                  )}
                </div>
              </div>
            }
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};