'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import StarBorderButton from '@/components/StarBorderButton';
import { motion } from 'motion/react';
import { FloatingPathsBackground } from '@/components/ui/floating-paths';
import { hasActiveSession } from '@/components/VisitTracker';

const contentFade = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const visibleInstant = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

export default function HeroSection() {
  const [skipIntro, setSkipIntro] = useState(false);

  useEffect(() => {
    setSkipIntro(hasActiveSession());
  }, []);

  const variants = skipIntro
    ? visibleInstant
    : contentFade;

  const copyTransition = skipIntro
    ? { duration: 0 }
    : { ...contentFade.visible.transition, delay: 2 };

  const imageTransition = skipIntro
    ? { duration: 0 }
    : { ...contentFade.visible.transition, delay: 2.25 };

  return (
    <FloatingPathsBackground position={-1} className="hero-paths">
      <section className="container hero">
        <motion.div
          className="hero-content hero-content-glass"
          initial={skipIntro ? 'visible' : 'hidden'}
          animate="visible"
          variants={{
            hidden: variants.hidden,
            visible: {
              ...variants.visible,
              transition: copyTransition,
            },
          }}
        >
          <h1 className="display-lg">Pioneers in Paper &amp; Board Manufacturing Across Bangladesh</h1>
          <p className="body-lg hero-lead">
            Al-Noor Paper &amp; Board Mills Ltd. is a sister concern of the Al-Noor Group of Industries, delivering white paper, newsprint, offset paper, and printing paper from our Kanchpur manufacturing complex.
          </p>
          <div className="hero-buttons">
            <StarBorderButton href="/products" variant="primary">Explore Products</StarBorderButton>
            <StarBorderButton href="/about" variant="secondary">Our Group</StarBorderButton>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-card"
          initial={skipIntro ? 'visible' : 'hidden'}
          animate="visible"
          variants={{
            hidden: variants.hidden,
            visible: {
              ...variants.visible,
              transition: imageTransition,
            },
          }}
        >
          <Image
            src="/3.png"
            alt="Al-Noor manufacturing facility interior"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 40vw"
            priority
          />
        </motion.div>
      </section>
    </FloatingPathsBackground>
  );
}
