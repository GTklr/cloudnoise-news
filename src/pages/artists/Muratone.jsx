import React from 'react'
import ZeaukPic from "../../assets/ZeaukPic.jpg"
import MuratonePic1 from "../../assets/artistImages/muratone1.jpg"
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

export default function Muratone() {
  return (
    <div className='max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl'>
      
      <div className="rounded-lg mt-10">

        <div className="grid lg:grid-cols-2 grid-cols-1 py-5">
          <div className='flex items-center shadow-lg bg-slate-50'>
            <img src={MuratonePic1} className="w-full h-full object-cover" />
          </div>
          <div className="p-5 flex items-center shadow-lg">
            <div>
            <h1>Muratone</h1>
            <p>Muratone, formerly known as Reyza, is a force to be reckoned with in the music industry, and has been making waves since his debut in early 2012. His unique production and DJing style has captured the attention of fans and critics alike, as he seamlessly blends different sounds spanning multiple genres, including Bass House, Tech House, G House, and more.</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 py-5">
          <div className='flex items-center shadow-lg '>
            <img src={MuratonePic1} className="w-full h-full object-cover" />
          </div>
          <div className='flex items-center shadow-lg '>
            <img src={ZeaukPic2} className="w-full h-full object-cover" />
          </div>

          <div className="p-5 flex items-center shadow-lg lg:col-auto col-span-2">
            <div>

            <p>As a graduate of the prestigious GoldSounds DJ Academy, Muratone has honed his skills and developed a reputation for his exceptional DJing prowess. He has held multiple guest residencies at major clubs throughout Malaysia, showcasing his talent and versatility to fans and fellow artists alike.</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-2 gap-2 py-5">
          <div className='flex items-center shadow-lg lg:col-span-1 col-span-2'>
            <img src={ZeaukPic3} className="w-full h-full object-cover" />
          </div>
          

          <div className="p-5 flex items-center shadow-lg lg:col-span-1 col-span-2">
            <div>

            <p>Muratone's dedication to his craft is evident in his work, as he is constantly pushing the boundaries of what is possible in music. His innovative approach to production and DJing has earned him widespread acclaim, and he is regarded as one of the most exciting up-and-coming artists in the industry.
            <br />
            <br />
            Despite his success, Muratone remains humble and focused on his goals, always striving to improve and take his music to the next level. His passion for music is infectious, and he is an inspiration to aspiring artists around the world.
            <br/>
            <br/>
            As he continues to grow and evolve as an artist, there is no doubt that Muratone will continue to captivate audiences with his unique sound and undeniable talent. Whether he is performing live or in the studio, his passion and dedication to his craft are sure to make him a force to be reckoned with in the music industry for years to come.
            </p>
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
