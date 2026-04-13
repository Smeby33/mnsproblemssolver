import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { LinkedinIcon, TwitterIcon } from 'lucide-react';

const FooterSignatureAnimation = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const ball = root.querySelector('[data-ball]');
      const trail = root.querySelector('[data-trail]');
      const paths = root.querySelectorAll<SVGPathElement>('path');
      const scene = root.querySelector('[data-scene]');

      if (!ball || !trail || !scene || paths.length === 0) {
        return;
      }

      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      const getTravelDistance = () => Math.max(scene.clientWidth - 28, 0);
      const getXForPercent = (percent: number) => {
        const raw = scene.clientWidth * (percent / 100) - 7;
        return Math.max(0, Math.min(raw, getTravelDistance()));
      };

      const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.35,
      });

      timeline.to(ball, {
        x: () => getXForPercent(39),
        duration: 1.35,
        ease: 'power3.inOut',
        onUpdate: () => {
          const x = Number(gsap.getProperty(ball, 'x'));
          gsap.set(trail, { width: x + 14 });
        },
      });

      timeline.to('[data-square]', { opacity: 0, duration: 0.25 }, '<0.05');
      timeline.to('[data-m-path]', { strokeDashoffset: 0, duration: 0.55, ease: 'power2.out' }, '<');

      timeline.to(ball, {
        x: () => getXForPercent(50),
        duration: 1,
        ease: 'power2.inOut',
        onUpdate: () => {
          const x = Number(gsap.getProperty(ball, 'x'));
          gsap.set(trail, { width: x + 14 });
        },
      }, '>-0.1');
      timeline.to('[data-star]', { opacity: 0, duration: 0.25 }, '<0.05');
      timeline.to('[data-n-path]', { strokeDashoffset: 0, duration: 0.5, ease: 'power2.out' }, '<');

      timeline.to(ball, {
        x: () => getXForPercent(61),
        duration: 1,
        ease: 'power2.inOut',
        onUpdate: () => {
          const x = Number(gsap.getProperty(ball, 'x'));
          gsap.set(trail, { width: x + 14 });
        },
      }, '>-0.05');
      timeline.to('[data-arrow]', { opacity: 0, duration: 0.2 }, '<0.05');
      timeline.to('[data-s-path]', { strokeDashoffset: 0, duration: 0.55, ease: 'power2.out' }, '<');

      timeline.to(ball, {
        x: getTravelDistance,
        duration: 1.25,
        ease: 'power3.inOut',
        onUpdate: () => {
          const x = Number(gsap.getProperty(ball, 'x'));
          gsap.set(trail, { width: x + 14 });
        },
      }, '>-0.05');

      timeline.to(ball, { scale: 0, duration: 0.25, ease: 'power2.inOut' }, '>-0.05');
      timeline.to('[data-subtext]', { opacity: 1, y: -10, duration: 0.6, ease: 'power2.out' });
      timeline.to({}, { duration: 1 });
      timeline.set(ball, { x: 0, scale: 1 });
      timeline.set(trail, { width: 0 });

      paths.forEach((path) => {
        const length = path.getTotalLength();
        timeline.set(path, { strokeDashoffset: length });
      });

      timeline.set('[data-square], [data-star], [data-arrow]', { opacity: 1 });
      timeline.set('[data-subtext]', { opacity: 0, y: 0 });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="mt-16 border-t border-white/10 pt-12"
      aria-hidden="true">

      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.03] px-4 py-8 backdrop-blur-sm sm:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-gray-500">
            Signature MNS
          </p>
        </div>

        <div
          data-scene
          className="relative mx-auto h-[220px] w-full max-w-[800px] overflow-hidden sm:h-[260px] md:h-[300px]">

          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/10" />
          <div
            data-trail
            className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-brand-violet/80 to-brand-violet"
            style={{ width: 0 }}
          />
          <div
            data-ball
            className="absolute left-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_40px_rgba(139,92,246,0.55)]"
          />

          <div
            data-square
            className="absolute left-[39%] top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 border-2 border-white/90 sm:h-10 sm:w-10"
          />
          <div
            data-star
            className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white sm:text-[28px]">
            ★
          </div>
          <div
            data-arrow
            className="absolute left-[61%] top-1/2 -translate-x-1/2 -translate-y-1/2 border-b-[10px] border-l-[20px] border-t-[10px] border-b-transparent border-l-white border-t-transparent sm:border-b-[12px] sm:border-l-[24px] sm:border-t-[12px]"
          />

          <svg
            className="absolute left-[39%] top-1/2 h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 sm:h-[60px] sm:w-[60px]"
            viewBox="0 0 60 60">
            <path
              data-m-path
              d="M5 50 L5 10 L30 40 L55 10 L55 50"
              fill="none"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            className="absolute left-[50%] top-1/2 h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 sm:h-[60px] sm:w-[60px]"
            viewBox="0 0 60 60">
            <path
              data-n-path
              d="M5 50 L5 10 L55 50 L55 10"
              fill="none"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            className="absolute left-[61%] top-1/2 h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 sm:h-[60px] sm:w-[60px]"
            viewBox="0 0 60 60">
            <path
              data-s-path
              d="M46 14 C39 7, 20 7, 15 18 C10 29, 24 32, 33 35 C43 38, 47 44, 41 51 C34 58, 18 57, 10 49"
              fill="none"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div
            data-subtext
            className="absolute left-1/2 top-[78%] -translate-x-1/2 text-center text-[11px] uppercase tracking-[0.5em] text-gray-500 opacity-0 sm:text-sm">
            Problem Solver
          </div>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#050505] text-gray-400 py-16 px-6 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-white text-xl font-bold mb-4 tracking-tight">
              MNS Problem Solver
            </h3>
            <p className="font-light text-sm max-w-xs">
              Une équipe de consultants digitaux dédiée à transformer vos enjeux
              en performance mesurable.
            </p>
          </div>

          <div className="md:text-center">
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <a
              href="mailto:contact@MNSproblemsolver.com"
              className="hover:text-brand-violet transition-colors duration-300">
              
              contact@MNSproblemsolver.com
            </a>
          </div>

          <div className="md:text-right">
            <h4 className="text-white font-semibold mb-4">Réseaux</h4>
            <div className="flex gap-4 md:justify-end">
              <a
                href="#"
                className="hover:text-brand-violet transition-colors duration-300">
                
                <LinkedinIcon size={20} />
              </a>
              <a
                href="#"
                className="hover:text-brand-violet transition-colors duration-300">
                
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
          <p>© 2026 MNS Problem Solver. Tous droits réservés.</p>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300">
            
            Mentions légales
          </a>
        </div>

        <FooterSignatureAnimation />
      </div>
    </footer>);

};