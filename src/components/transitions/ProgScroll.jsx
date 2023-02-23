import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

export const ScrollAnimation = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  return (
    <section className="scroll-container" ref={containerRef}>
         <div className="copy">
        <h2>Lorem ipsum dolor sit amet</h2>
      </div>
      <div className="img-container">
        <motion.div className="img-inner">
            <motion.div className="bottom-shadow" />
            <img src={plant1} alt="a green plant" />
            <motion.div className="top-shadow" />
        </motion.div>

      </div>

    </section>
  )
}