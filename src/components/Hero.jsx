import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'

function Hero() {
  const [videoSrc , setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrc = () =>{
    if(window.innerWidth<760){
      setVideoSrc(smallHeroVideo)
    }else{
      setVideoSrc(heroVideo)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize',handleVideoSrc);
  },[])

  useGSAP(() => {
    gsap.to("#hero", {
      duration: 1,
      delay: 1.5,
      opacity: 1
    })

    gsap.to("#cta",{
      duration:1,
      opacity:1,
      delay:1,
      y:-50      
    })


  }, [])
  return (
    <div>
      <section className='w-full nav-height bg-black relative'>
        <div className='h-5/6 w-full flex-center flex-col'>
          <p id='hero' className='hero-title'>iPhone 15 Pro</p>
          <div className='md:w-10/12 w-9/12'>
            <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
              <source src={videoSrc}/>
            </video>
          </div>
        </div>
        <div id='cta'  className='flex flex-col items-center opacity-0 translate-y-20'>
            <a href="#highlights" className='btn' >Buy</a>
            <p className='font-normal text-xl'>From $199/month or $999</p>
        </div>
      </section>
    </div>

  )
}

export default Hero
