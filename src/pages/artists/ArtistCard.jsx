import React from 'react'
import ZeaukPic from "../../assets/ZeaukPic.jpg"
import ZeaukLogo from "../../assets/logo/Artboard 2.png"
import BrendonLogo from "../../assets/logo/Artboard 3.png"
import MuratoneLogo from "../../assets/logo/Artboard 4.png"
import "./ArtistCard.css"
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';


export default function ArtistCard(){
    const containerRef = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end end"]
    });

    const { scrollYProgressBar } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

    const bottomShadowValue = useTransform(scrollYProgress, [0, 1], ['-100%', '0%']);

    const imageValueZeauk = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
    const imageValueBrendon = useTransform(scrollYProgress, [0, 1], ['-40%', '0%']);
    const imageValueMura = useTransform(scrollYProgress, [0, 1], ['75%', '0%']);

    const imageValue = useTransform(scrollYProgress, [0.5, 1], ['-100%', '0%']);
    const imageValue2 = useTransform(scrollYProgress, [0.5, 1], ['-100%', '0%']);
    const imageValue3 = useTransform(scrollYProgress, [0.5, 1], ['-100%', '0%']);
    const imageValue4 = useTransform(scrollYProgress, [0.5, 1], ['-100%', '0%']);

    const topShadowValue = useTransform(scrollYProgress, [0, 1], ['-25%', '100%']);
  
  return (
    // Container applies AND UP, meaning large and UP will have container, if SM:container, means SM and UP
        <div className='container '>
            <motion.div className="progress-bar" style={{ scaleX }} />

            <div className="h-screen flex items-center">
                <div className="p-10">
                    <h1>intro</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus delectus tempora illum impedit placeat.</p>
                </div>
            </div>

            <div className=" h-screen">
            <motion.div className="progress-bar" style={{ scaleX }} />
                <section className="h-screen flex flex-col items-center justify-center" ref={containerRef}>
                    <div className="py-5">
                        <motion.div className="" style={{ translateX: imageValueZeauk }}>
                            <motion.div className="" style={{ translateX: bottomShadowValue }}/>
                            <img src={ZeaukLogo} alt="" />
                            <motion.div className="" style={{ translateX: topShadowValue }} />
                        </motion.div>
                    </div>
                
                    <div className="py-5">
                        <motion.div className="img-inner" style={{ translateX: imageValueBrendon }}>
                            <motion.div className="" style={{ translateX: bottomShadowValue }}/>
                            <img src={BrendonLogo} alt="" />
                            <motion.div className="" style={{ translateX: topShadowValue }} />
                        </motion.div>
                    </div>
                
                    <div className="py-5">
                        <motion.div className="img-inner" style={{ translateX: imageValueMura }}>
                            <motion.div className="" style={{ translateX: bottomShadowValue }}/>
                            <img src={MuratoneLogo} alt="" />
                            <motion.div className="" style={{ translateX: topShadowValue }} />
                        </motion.div>
                    </div>
                    
                
                
                </section>
            </div>
        </div>
  )
}
