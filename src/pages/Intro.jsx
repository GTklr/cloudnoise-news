import React from 'react'
import Hero1 from '../components/intro/Hero1'
import TransitionsZoom from '../components/transitions/TransitionZoom'
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from '@fortawesome/free-solid-svg-icons'

export default function Intro() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
    }, 1000);

    // Clear the timeout if the component unmounts or the delay changes
    return () => clearTimeout(timer);
  }, []); // Only run the eff

  return (
    <div>
        {!isVisible && <div className="h-screen flex justify-center items-center">
          <FontAwesomeIcon icon={faCloud} className="m-2 animate-bounce" size="2xl"/>
        </div>}

        {isVisible && <TransitionsZoom>
          <Hero1 />
        </TransitionsZoom>}
    </div>
    
  )
}