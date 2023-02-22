import React from 'react'
import ZeaukPic from "../../assets/DSC03303.jpg"
import BrendonPic from "../../assets/BrendonPic.jpg"
import DansonPic from "../../assets/dansonpic.jpg"

export default function ArtistCard() {
  return (
    // Container applies AND UP, meaning large and UP will have container, if SM:container, means SM and UP
    <div className='text-center mx-auto mt-5 mb-5 sm:container'>
        <div className="m-10">
            <h1>The collective </h1>
        </div>
        <div className=" lg:mx-auto grid grid-cols-2 m-2 gap-2 gap-y-5 lg:grid-cols-1">
            <div className='ZOOK h-fit overflow-hidden shadow-2xl '>

                <div className="lg:grid lg:grid-cols-2">
                    <div className=" lg:h-1/2">
                        <img src={ZeaukPic} className="w-full h-64 lg:h-96 object-cover " />
                    </div>

                    <div className='p-2 lg:flex lg:justify-center lg:items-center'>
                        <div>
                            <p className='lg:text-5xl lg:mb-5 lg:font-bold'>Zeauk</p>
                            <p className='hidden lg:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorem odit voluptatibus, voluptates ut maxime ratione quas magnam officia dicta similique est placeat ullam rerum mollitia possimus aliquid perferendis laboriosam?</p>
                        </div>
                    </div> 
                </div>
            </div>


            <div className='ZOOK h-fit overflow-hidden shadow-2xl '>

                <div className="lg:grid lg:grid-cols-2">
                    <div className=" lg:h-1/2 lg:order-last">
                        <img src={BrendonPic} className="w-full h-64 lg:h-96 object-cover lg:object-top" />
                    </div>

                    <div className='p-2 lg:flex lg:justify-center lg:items-center'>
                        <div>
                            <p className='lg:text-5xl lg:mb-5 lg:font-bold'>BrendonSe7an</p>
                            <p className='hidden lg:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorem odit voluptatibus, voluptates ut maxime ratione quas magnam officia dicta similique est placeat ullam rerum mollitia possimus aliquid perferendis laboriosam?</p>
                        </div>
                    </div> 
                </div>
            </div>
            
            <div className='ZOOK h-fit overflow-hidden shadow-2xl '>

                <div className="lg:grid lg:grid-cols-2">
                    <div className=" lg:h-1/2 ">
                        <img src={DansonPic} className="w-full h-64 lg:h-96 object-cover lg:object-top" />
                    </div>

                    <div className='p-2 lg:flex lg:justify-center lg:items-center'>
                        <div>
                            <p className='lg:text-5xl lg:mb-5 lg:font-bold'>Dan$on</p>
                            <p className='hidden lg:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorem odit voluptatibus, voluptates ut maxime ratione quas magnam officia dicta similique est placeat ullam rerum mollitia possimus aliquid perferendis laboriosam?</p>
                        </div>
                    </div> 
                </div>
            </div>

            <div className='ZOOK h-fit overflow-hidden shadow-2xl '>

                <div className="lg:grid lg:grid-cols-2 ">
                    <div className=" lg:h-1/2 lg:order-last">
                        <img src={DansonPic} className="w-full h-64 lg:h-96 object-cover lg:object-top" />
                    </div>

                    <div className='p-2 lg:flex lg:justify-center lg:items-center'>
                        <div>
                            <p className='lg:text-5xl lg:mb-5 lg:font-bold'>Dan$on</p>
                            <p className='hidden lg:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorem odit voluptatibus, voluptates ut maxime ratione quas magnam officia dicta similique est placeat ullam rerum mollitia possimus aliquid perferendis laboriosam?</p>
                        </div>
                    </div> 
                </div>
            </div>

        </div>
    </div>
  )
}
