import React, { Children } from 'react'
import ZeaukPic from "../../assets/ZeaukPic.jpg"
import ZeaukLogo from "../../assets/logo/Artboard 2.png"
import BrendonLogo from "../../assets/logo/Artboard 3.png"
import MuratoneLogo from "../../assets/logo/Artboard 4.png"
import dreamLogo from "../../assets/logo/dreamLogo.png"
import zekkeLogo from "../../assets/logo/zekkeLogo.png"
import ivoryLogo from "../../assets/logo/ivoryLogo.png"
import eujuneLogo from "../../assets/logo/eujuneLogo.png"
import dansonLogo from "../../assets/logo/dansonLogo.png"

import "./ArtistCard.css"
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Intro from '../Intro'
import { Link } from 'react-router-dom'


function Item ({children}) {
    const containerRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start end', "end end"]
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
                <div className="h-screen flex items-center justify-center mx-auto lg:w-1/2 relative">
                    <div className='absolute top-80'>
                        <h1>the collective</h1>
                        <p>Wherever we fly, we fly higher</p>
                    </div>
                </div>
            </IntroText>
            

            

            <section className="h-fit items-center justify-center container mx-auto">
                <Item>
                 <Link to="/artist/brendonse7an"><img className='imgHover' src={BrendonLogo} alt=""/></Link>
                </Item>
                <Item>
                 <Link to="/artist/zeauk"><img className='imgHover' src={ZeaukLogo} alt=""/></Link>
                </Item>
                <Item>
                 <Link to="/artist/danson"><img  className='imgHover'src={dansonLogo} alt=""/></Link>
                </Item>
                
                <Item>
                 <Link to="/artist/dream"><img className='imgHover' src={dreamLogo} alt=""/></Link>
                </Item>
                <Item>
                 <Link to="/artist/ivory"><img className='imgHover' src={ivoryLogo} alt=""/></Link>
                </Item>
                <Item>
                 <Link to="/artist/zekke"><img  className='imgHover'src={zekkeLogo} alt=""/></Link>
                </Item>
                
                <Item>
                 <Link to="/artist/eujune"><img className='imgHover' src={eujuneLogo} alt=""/></Link>
                </Item>

                <Item>
                 <Link to="/artist/muratone"><img className='imgHover' src={MuratoneLogo} alt=""/></Link>
                </Item>
                
            </section>
            
            <div className="h-screen flex items-center ">
                <div className="text-center mx-auto">
                    <h1>Reach out to us</h1>
                    <p>Drop us an enquiry for bookings, collaborations and more</p>
                    <div className="pt-5">
                    <a href="/contact" className='btn animate-pulse lg:w-1/2 mx-auto'>contact</a>
                    </div>
                </div>
            </div>
            


        </div>
  )
}
