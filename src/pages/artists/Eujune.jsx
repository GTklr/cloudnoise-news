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

export default function Eujune() {
  return (
    <div className='max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl'>
      
      <div className="rounded-lg mt-10">

        <div className="grid lg:grid-cols-2 grid-cols-1 py-5">
          <div className='flex items-center shadow-lg bg-slate-50'>
            <img src={ZeaukPic} className="w-full h-full object-cover" />
          </div>
          <div className="p-5 flex items-center shadow-lg">
            <div>
            <h1>Eujune</h1>
            <p>eujune is a highly talented keyboardist and composer based in the vibrant city of Kuala Lumpur. His passion for music knows no bounds, as he has spent years exploring various genres from classical to hip-hop, and everything in between. Influenced by the likes of Jay Chou and Jay-Z, eujune has developed a unique style that blends different elements to create something truly special.</p>
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

            <p>As a valued member of CLOUDNOISE, eujune serves as the collective's resident sessionist, assistant producer, and hypeman. His contributions have been invaluable, helping to shape the sound and direction of the group. Whether he is laying down complex keyboard riffs or adding his own personal touch to a production, eujune is a key player in the success of CLOUDNOISE.
                <br/>
                <br/>
                In his free time, eujune is a devoted fan of the music he creates with CLOUDNOISE. He can often be found listening to their unreleased songs on repeat, eagerly sharing them with his friends, and urging the group to release them as soon as possible. In his own words, "we're sitting on a fucking goldmine, and the world needs to listen to us." This level of dedication and passion is a true reflection of eujune's character, and it is clear that he has a bright future ahead of him.   
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

            <p>eujune's talent and hard work have not gone unnoticed in the industry, as he has received recognition and praise from many notable figures. With each new release, he continues to push the boundaries of what is possible in music, creating something fresh and exciting with each new project.
            <br />
            <br />
            As CLOUDNOISE continues to grow and evolve, eujune's contributions will undoubtedly be a crucial factor in their success. With his talent and passion, there is no limit to what he can achieve, and his future as a keyboardist, composer, and producer is looking brighter than ever.
            </p>
            </div>
          </div>
        </div>
        <div className="text-center lg:w-1/4 mx-auto my-20 py-10">
          <h2 className='my-5'>Follow Up with Zekke</h2>
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
