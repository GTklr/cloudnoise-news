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

export default function Zekke() {
  return (
    <div className='max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl'>
      
      <div className="rounded-lg mt-10">

        <div className="grid lg:grid-cols-2 grid-cols-1 py-5">
          <div className='flex items-center shadow-lg bg-slate-50'>
            <img src={ZeaukPic} className="w-full h-full object-cover" />
          </div>
          <div className="p-5 flex items-center shadow-lg">
            <div>
            <h1>Zekke</h1>
            <p>zekke, born Ezekiel, is a singer-songwriter, and producer whose music stands out for its raw and abstruse style. As a triple threat, he is highly skilled in all aspects of the music-making process, from writing and performing to producing and engineering. With a rapidly growing following, zekke is known for hits such as "DIVINE," "éros," and "INTERSTATE."</p>
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

            <p>zekke's journey began as a bedroom producer, spending countless hours honing his craft and experimenting with different sounds. His music draws inspiration from a wide range of artists, including Blackbear, Crywolf, Jaden Smith, Jeremy Zucker, and EDEN. zekke's unique sound and style are a testament to his dedication and passion for the art of music-making.</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-2 gap-2 py-5">
          <div className='flex items-center shadow-lg lg:col-span-1 col-span-2'>
            <img src={ZeaukPic3} className="w-full h-full object-cover" />
          </div>
          

          <div className="p-5 flex items-center shadow-lg lg:col-span-1 col-span-2">
            <div>

            <p>Through his music, zekke explores the complex emotions and experiences that define the human condition. His lyrics are deeply personal and introspective, reflecting on themes such as love, loss, and self-discovery. His music is a sonic expression of the full range of human emotions, capturing both the joy and pain of life's most profound moments.
            <br />
            <br />
            In his own words, zekke's music is about "experiencing the pain, the joy, the bittersweet. This is what I've created. I hope it inspires you." His artistry is a reflection of his willingness to be vulnerable and authentic in his music, creating a connection with his fans that is both intimate and powerful.
            
            <br/>
            <br/>
            With his unique sound and style, zekke is quickly becoming a rising star in the music industry. As he continues to grow and evolve as an artist, his music promises to inspire and captivate listeners around the world. Whether through his haunting vocals or intricate productions, zekke is a force to be reckoned with in the world of music.
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
