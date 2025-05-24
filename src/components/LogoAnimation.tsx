
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LogoAnimation: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const pratikLetters = 'ratik'.split(''); // Exclude 'P'
  const portfolioLetters = 'ortfolio'.split(''); // Exclude 'P'

  return (
    <div
      className="relative cursor-pointer flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Always-visible "P" */}
      <span className="text-2xl font-bold text-accent">P</span>

      <div className="relative">
        {/* "ratik" part of Pratik that fades out */}
        <motion.div
          className="flex"
          animate={{
            opacity: isHovered ? 0 : 1,
            x: isHovered ? -10 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {pratikLetters.map((letter, i) => (
            <span key={`pratik-${i}`} className="text-2xl font-bold">
              {letter}
            </span>
          ))}
        </motion.div>

        {/* "ortfolio" part that fades in */}
        <motion.div
          className="flex absolute top-0 left-0"
          initial={{ opacity: 0, x: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : 10
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {portfolioLetters.map((letter, i) => (
            <motion.span
              key={`portfolio-${i}`}
              initial={{ y: 10, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
              transition={{
                duration: 0.3,
                delay: i * 0.03,
                ease: 'easeOut'
              }}
              className="text-2xl font-bold"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoAnimation;
