import React from 'react'
import dansonPic1 from "../../assets/artistImages/danson1.jpg"
import dansonPic2 from "../../assets/artistImages/danson2.jpg"
import dansonPic3 from "../../assets/artistImages/danson3.jpg"
import dansonPic4 from "../../assets/artistImages/danson4.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import { faMixcloud } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'

export default function Danson() {
  return (
    <div className='max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl'>
      
      <div className="rounded-lg mt-10">

        <div className="grid lg:grid-cols-2 grid-cols-1 py-5">
          <div className='flex items-center shadow-lg bg-slate-50'>
            <img src={dansonPic1} className="w-full h-full object-cover" />
          </div>
          <div className="p-5 flex items-center shadow-lg">
            <div>
            <h1>Dan$on</h1>
            <p>Dan$on, a gifted singer and songwriter hailing from Malaysia, has a deep passion for R&B and Hip-Hop. At the tender age of 7, his mother encouraged him to take piano lessons, which ignited his love for singing and aptitude for music theory. However, familial pressure to focus on his studies put his musical aspirations on hold. Nevertheless, Dan$on remained determined to make music his career, and at 21, he returned to music at the persuasion of his best friend and fellow artist Brendonse7an.</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 py-5">
          <div className='flex items-center shadow-lg '>
            <img src={dansonPic2} className="w-full h-full object-cover" />
          </div>
          <div className='flex items-center shadow-lg '>
            <img src={dansonPic3} className="w-full h-full object-cover" />
          </div>

          <div className="p-5 flex items-center shadow-lg lg:col-auto col-span-2">
            <div>

            <p>Drawing inspiration from artists like Justin Bieber, Tory Lanez, and Chris Brown, Dan$on developed a unique sound that fuses elements of R&B and rap. Despite facing numerous challenges, Dan$on remained resolute and in 2020, he met mentor Benni O from Atlanta, Georgia, who has worked with the likes of Young Thug, T.I., and Future. Under Benni O's tutelage, Dan$on refined his vocal style and became even more adept at blending R&B and Hip-Hop.</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-2 gap-2 py-5">
          <div className='flex items-center shadow-lg lg:col-span-1 col-span-2'>
            <img src={dansonPic4} className="w-full h-full object-cover" />
          </div>
          

          <div className="p-5 flex items-center shadow-lg lg:col-span-1 col-span-2">
            <div>

            <p>Today, Dan$on is an integral part of the creative collective "Cloudnoise," and is hard at work on his upcoming catalog set to debut in 2023. Dan$on's music is a celebration of his unique cultural heritage and a testament to the power of perseverance and passion. In addition to his music career, Dan$on is also passionate about popularizing R&B in Malaysia and bringing it to the forefront of the music industry. With his talent, dedication, and drive, Dan$on is poised to leave a significant impact on the Malaysian music scene and beyond.</p>
            </div>
          </div>
        </div>
        <div className="text-center lg:w-1/4 mx-auto my-20 py-10">
          <h2 className='my-5'>Follow Up with Dan$on</h2>
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
