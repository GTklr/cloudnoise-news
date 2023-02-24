import React from 'react'
import Transitions from '../components/transitions/TransitionZoom'
import cnLogo from "../assets/cnLogo.png"
import { Spotify } from 'react-spotify-embed'


import BlogList from "../components/BlogList";
import {useCollection} from "../hooks/useCollection"
import TransitionsIndiv from '../components/transitions/TransitionIndiv'
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const {documents: data} = useCollection('BlogPosts')
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
        
      }, 2000);
  
      // Clear the timeout if the component unmounts or the delay changes
      return () => clearTimeout(timer);
    }, []); // Only run the eff

  return (
    <Transitions>
      <div className='max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl'>
      
        
        <div className="rounded-lg mt-10 py-16 text-center">
          <img src={cnLogo} className="w-full h-full object-cover" />
          <h2>Latest releases</h2>

            <div className="grid lg:grid-cols-4 grid-cols-2 py-5">
              <div className="p-5 flex items-center shadow-lg">
                <h1>artwork1</h1>
              </div>
              <div className="p-5 flex items-center shadow-lg">
                <h1>artwork2</h1>
              </div>
              <div className="p-5 flex items-center shadow-lg">
                <h1>artwork3</h1>
              </div>
              <div className="p-5 flex items-center shadow-lg">
                <h1>artwork4</h1>
              </div>
            </div>
        </div>

        

        <div className="rounded-lg mt-10 text-center">
          <h2>Stream Cloudnoise</h2>

            <div className="grid lg:grid-cols-4 grid-cols-2 py-5">
              <div className='p-2'>
              <Spotify width="100%" link="https://open.spotify.com/playlist/1Fwb0en3zJmSA7oHu6OTZT?si=d7f992782abd4d03"/>
              </div>
              <div className='p-2'>
              <Spotify width="100%" link="https://open.spotify.com/playlist/1Fwb0en3zJmSA7oHu6OTZT?si=d7f992782abd4d03"/>
              </div>
              <div className='p-2'>
              <Spotify width="100%" link="https://open.spotify.com/playlist/1Fwb0en3zJmSA7oHu6OTZT?si=d7f992782abd4d03"/>
              </div>
              <div className='p-2'>
              <Spotify width="100%" link="https://open.spotify.com/playlist/1Fwb0en3zJmSA7oHu6OTZT?si=d7f992782abd4d03"/>
              </div>
              <div className='p-2'>
              <Spotify width="100%" link="https://open.spotify.com/playlist/1Fwb0en3zJmSA7oHu6OTZT?si=d7f992782abd4d03"/>
              </div>
            </div>

        </div>

        <div className="rounded-lg mt-10 pt-16 text-center">
          <h2>Latest news</h2>

          <div className="">
            {!isVisible && <div className="h-screen flex justify-center items-center">
                 <FontAwesomeIcon icon={faCloud} className="m-2 animate-bounce" size="2xl"/>
                  </div>}

            {isVisible && <TransitionsIndiv className="flex justify-center items-center h-screen">
                  <div className="md:col-span-2 ">
                        {data && <BlogList BlogDATA={data.slice(0, 4)} /> } 
                  </div>
            </TransitionsIndiv>}
          </div>
            
        </div>

    </div>
    </Transitions>
  )
}
