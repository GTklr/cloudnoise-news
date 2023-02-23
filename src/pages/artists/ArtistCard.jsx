import React, { Children } from 'react'
import ZeaukPic from "../../assets/ZeaukPic.jpg"
import ZeaukLogo from "../../assets/logo/Artboard 2.png"
import BrendonLogo from "../../assets/logo/Artboard 3.png"
import MuratoneLogo from "../../assets/logo/Artboard 4.png"
import "./ArtistCard.css"
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Intro from '../Intro'
import { Link } from 'react-router-dom'


function Item ({children}) {
    const containerRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["100", "end end"]
    });

    const imageValueZeauk = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
    
    return(
        <div ref={containerRef}>
            <motion.div className="my-5"style={{ translateX: imageValueZeauk }} >
                {children}
            </motion.div>
        </div>
    )
}


function IntroText({children}) {
    /** add this bit **/
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const variants = {
        /** this is the "visible" key and it's respective style object **/
        visible: { opacity: 1, y: 0 },
        /** this is the "hidden" key and it's respective style object **/
        hidden: { opacity: 0, y: -25 }
      };

      function update() {
        if (scrollY?.current < 150) {
          setHidden(false);
        } else {
          setHidden(true);
        }
      }
  
    /** add this useEffect hook to return events everytime the scrollY changes **/
    useEffect(() => {
      return scrollY.onChange(() => update());
    });
  
    return (
        <motion.div  variants={variants} animate={hidden ? "hidden" : "visible"} transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}>
            {children}
        </motion.div>
    );
  }

export default function ArtistCard(){
   
  return (
    // Container applies AND UP, meaning large and UP will have container, if SM:container, means SM and UP
        <div className=' px-10 pr-10 pl-10 lg:container container top-0 mx-auto lg:w-1/2'>

            <IntroText >
                <div className="h-screen flex items-center justify-center mx-auto lg:w-1/2">
                    <div>
                        <h1>the collective</h1>
                        <p>Wherever we fly, we fly higher</p>
                    </div>
                </div>
            </IntroText>
            

            

            <section className="h-fit items-center justify-center container mx-auto">
                <Item>
                 <Link to="/artists/zeauk"><img src={BrendonLogo} alt=""/></Link>
                </Item>
                <Item>
                 <img className='imgHover' src={ZeaukLogo} alt="" />
                </Item>
                <Item>
                 <img src={MuratoneLogo} alt="" />
                </Item>
                
                <Item>
                 <img src={BrendonLogo} alt="" />
                </Item>
                <Item>
                 <img src={ZeaukLogo} alt="" />
                </Item>
                <Item>
                 <img src={MuratoneLogo} alt="" />
                </Item>
                
                <Item>
                 <img src={BrendonLogo} alt="" />
                </Item>
                <Item>
                 <img src={ZeaukLogo} alt="" />
                </Item>
                <Item>
                 <img src={MuratoneLogo} alt="" />
                </Item>
                
            </section>
            
            <div className="h-screen flex items-center">
                <div className="text-center">
                    <h1>Outtro</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus delectus tempora illum impedit placeat.</p>
                    <a href="/" className='btn animate-pulse lg:w-1/2 mx-auto'>Bookings </a>
                </div>
            </div>
            


        </div>
  )
}
