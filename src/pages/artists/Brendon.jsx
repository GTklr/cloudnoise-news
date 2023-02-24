import React from 'react'
import BrendonPic1 from "../../assets/artistImages/brendon1.jpg"
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

export default function Brendonse7an() {
  return (
    <div className='max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl'>
      
      <div className="rounded-lg mt-10">

        <div className="grid lg:grid-cols-2 grid-cols-1 py-5">
          <div className='flex items-center shadow-lg bg-slate-50'>
            <img src={BrendonPic1} className="w-full h-full object-cover" />
          </div>
          <div className="p-5 flex items-center shadow-lg">
            <div>
            <h1>Brendonse7an</h1>
            <p>Born in 1995 in the bustling town of Ipoh, Brendon Tan, also known as Brendonse7an, is a multi-talented R&B/Fusion singer, songwriter, and producer. Since 2012, he has been crafting his own unique sound, honing his musical skills and expanding his musical repertoire. A skilled pianist, Brendon started playing the instrument at the age of 10 and has since pursued his passion for music.</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 py-5">
          <div className='flex items-center shadow-lg '>
            <img src={BrendonPic1} className="w-full h-full object-cover" />
          </div>
          <div className='flex items-center shadow-lg '>
            <img src={BrendonPic1} className="w-full h-full object-cover" />
          </div>

          <div className="p-5 flex items-center shadow-lg lg:col-auto col-span-2">
            <div>

            <p>Throughout his career, Brendon has honed his craft and expanded his musical palette, performing at small restaurants and cafes, as well as participating in commercial shoots and short films. With a desire to be a vital figure in the R&B industry, Brendonse7an is now shifting his musical concept towards Jazz/Korean RnB, drawing inspiration from renowned artists and producers such as Bryson Tiller, Crush, William Singe, and Chris Brown.</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-2 gap-2 py-5">
          <div className='flex items-center shadow-lg lg:col-span-1 col-span-2'>
            <img src={BrendonPic1} className="w-full h-full object-cover" />
          </div>
          

          <div className="p-5 flex items-center shadow-lg lg:col-span-1 col-span-2">
            <div>

            <p>Currently residing in Kuala Lumpur, Brendonse7an continues to strive for excellence and innovate in his music, always pushing the boundaries and exploring new avenues of creative expression.</p>
            </div>
          </div>
        </div>
        <div className="text-center lg:w-1/4 mx-auto my-20 py-10">
          <h2 className='my-5'>Follow Up with Brendonse7an</h2>
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
