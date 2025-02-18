import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Highlights() {
    useGSAP(()=>{
        gsap.to("#title",{opacity:1,y:0})
    },[])


  return (
    <div>
      <section className='w-screen overflow-hidden bg-zinc h-full common-padding' id="highlights">
        <div className='screen-max-width'>
            <div className='w-full md-12 md:flex items-end justify-between'>
                <h1 id='title' className='section-heading'>Get the highlights.</h1>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Highlights
