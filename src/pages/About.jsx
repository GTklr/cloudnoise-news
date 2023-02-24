import React from 'react'
import cnLogo from "../assets/cnLogo.png"


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
      
      
      <div className="rounded-lg mt-10 py-16">
      <img src={cnLogo} className="w-full h-full object-cover" />
        <div className="grid lg:grid-cols-1 grid-cols-1 py-5">
          
          <div className="p-5 flex items-center shadow-lg">
           
            <p>CLOUDNOISE, an international creative collective focusing on Asian talents, was founded in 2022 by Malaysian artists Brendon Tan, better known as Brendonse7an, Danson Tan, known as Dan$on, and Filipino multi-hyphenate artist Zeus Rectra, also known as zeauk. The collective features a diverse roster of artists, including Malaysian DJ and producer Muratone, KL-based Korean DJ "DREAM," Malaysia-born musician "eujune," triple threat artist "zekke," and more, with members hailing from various countries such as Malaysia, the Philippines, and Korea.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-2 gap-2 py-5">
          
          <div className='flex items-center shadow-lg '>
            <img src="" className="w-full h-full object-cover" />
          </div>

          <div className="p-5 flex items-center shadow-lg lg:col-auto col-span-2">
            <p>Since its founding, CLOUDNOISE has worked to connect people through their art and performances. Building their grassroots empire through focused fan interaction and national culture festivals, the collective has also promoted their roster with various live performances and shows across Malaysia.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-2 gap-2 py-5">
          
          <div className="p-5 flex items-center shadow-lg lg:col-span-1 col-span-2">
            <div>
              <p>Initially starting as a 3-member group, the collective has grown to include other creative acts, including alumnis of the Goldsounds DJ Academy such as Muratone, who has been heavily involved in the Malaysian music scene as a DJ and producer for almost a decade, and KL-based Korean DJ "DREAM." Later, CLOUDNOISE enlisted Malaysian musician and composer eujune, content writer and publicist Ivory Anne, and videographer and art director Ivan Sia, who founded IV Studios.
              <br />
              <br />
              In 2022, CLOUDNOISE performed across Kuala Lumpur and other parts of Malaysia, focusing on both Malaysian and English markets. To coincide with their journey, they are set to release their debut EP as CLOUDNOISE, "STARSTRUCK," which is anticipated to be released in 2023.
            </p>
            </div>
          </div>

          <div className='flex items-center shadow-lg lg:col-span-1 col-span-2'>
            <img src="" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </div>
  )
}
