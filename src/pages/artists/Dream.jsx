import React from 'react'
import ZeaukPic from "../../assets/ZeaukPic.jpg"
import ZeaukPic1 from "../../assets/artistImages/zeauk1.jpg"
import ZeaukPic2 from "../../assets/artistImages/zeauk2.jpg"
import ZeaukPic3 from "../../assets/artistImages/zeauk3.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import { faMixcloud } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'

export default function Dream() {
  return (
    <div className='max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl'>
      
      <div className="rounded-lg mt-10">

        <div className="grid lg:grid-cols-2 grid-cols-1 py-5">
          <div className='flex items-center shadow-lg bg-slate-50'>
            <img src={ZeaukPic} className="w-full h-full object-cover" />
          </div>
          <div className="p-5 flex items-center shadow-lg">
            <div>
            <h1>Dream</h1>
            <p>DREAM, also known as Dong Gyun, is a rising star in the music industry and a prominent figure in the Malaysian creative and nightlife scene. Born and raised in South Korea, DREAM moved to Malaysia to pursue his passion for music and has since gained notoriety for his unique sound and electrifying performances.</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 py-5">
          <div className='flex items-center shadow-lg '>
            <img src={ZeaukPic1} className="w-full h-full object-cover" />
          </div>
          <div className='flex items-center shadow-lg '>
            <img src={ZeaukPic2} className="w-full h-full object-cover" />
          </div>

          <div className="p-5 flex items-center shadow-lg lg:col-auto col-span-2">
            <div>

            <p>With a strong foundation in music theory and a degree in sound engineering, DREAM's expertise extends beyond the turntables. His ability to blend different genres of music seamlessly and read the crowd is a testament to his versatility and knowledge of music. This has earned him numerous guest residencies at major clubs and live music venues across Malaysia.

              <br/>
              <br/>
              In 2018, DREAM joined the prestigious Goldsounds DJ Academy, where he honed his skills and expanded his knowledge in music production and performance. Since then, he has made a name for himself as one of the top DJs in the country. DREAM's passion for music and dedication to his craft is evident in his performances, which are always filled with energy and excitement.
            </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-2 gap-2 py-5">
          <div className='flex items-center shadow-lg lg:col-span-1 col-span-2'>
            <img src={ZeaukPic3} className="w-full h-full object-cover" />
          </div>
          

          <div className="p-5 flex items-center shadow-lg lg:col-span-1 col-span-2">
            <div>

            <p>When he's not behind the decks, DREAM spends his time in the studio, producing music that is influenced by his Korean roots and his experiences in Malaysia. His music is a unique blend of Korean and Malaysian culture, and his signature sound has garnered him a dedicated fan base both in Malaysia and abroad.
            <br />
            <br />
            DREAM's meteoric rise to success is a testament to his talent, hard work, and dedication to his craft. As he continues to evolve as an artist, his future looks bright, and we can't wait to see what he has in store for us.</p>
            </div>
          </div>
        </div>
        <div className="text-center lg:w-1/4 mx-auto my-20 py-10">
          <h2 className='my-5'>Follow Up with Zeauk</h2>
          <ul className="my-5">
                <FontAwesomeIcon href='/' icon={faSpotify} className="social-icons mx-2" size='xl'/>
                <FontAwesomeIcon href='/' icon={faFacebook} className="social-icons mx-2" size='xl'/>
                <FontAwesomeIcon href='/' icon={faInstagram} className="social-icons mx-2" size='xl'/>
                <FontAwesomeIcon href='/' icon={faMixcloud} className="social-icons mx-2" size='xl'/>
                <FontAwesomeIcon href='/' icon={faEnvelope} className="social-icons mx-2" size='xl'/>
          </ul>
          <a href='/' className='btn '>links</a>
        </div>

      </div>
    </div>
  )
}
