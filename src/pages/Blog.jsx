
import BlogList from "../components/BlogList";
import {useCollection} from "../hooks/useCollection"
import TransitionsIndiv from '../components/transitions/TransitionIndiv'
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from '@fortawesome/free-solid-svg-icons'

export default function Blog() {
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
      <div className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
            {!isVisible && <div className="h-screen flex justify-center items-center">
                 <FontAwesomeIcon icon={faCloud} className="m-2 animate-bounce" size="2xl"/>
                  </div>}

            {isVisible && <TransitionsIndiv className="flex justify-center items-center h-screen">
                  <div className="py-16 md:col-span-2 ">
                        <h1 className="text-center font-bold">News & Updates</h1>
                        {data && <BlogList BlogDATA={data} /> } 
                  </div>
            </TransitionsIndiv>}
      </div>
  )
}
