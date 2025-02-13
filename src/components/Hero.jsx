import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

function Hero() {
    useGSAP(()=>{
        gsap.to("#hero",{
            duration:1,
            delay:1.5,
            opacity:1
        })
    },[])
  return (
    <div>
      <section className='w-full nav-height bg-black relative'>
            <div className='h-5/6 w-full flex-center flex-col'>
            <p id='hero' className='hero-title'>iPhone 15 Pro</p>
            </div>
      </section>
    </div>
    
  )
}

export default Hero
