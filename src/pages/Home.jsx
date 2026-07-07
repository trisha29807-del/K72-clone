import React from 'react'
import Video from '../components/home/Video.jsx'
import HomeHeroText from '../components/home/HomeHeroText.jsx'
import HomeBottomText from '../components/home/HomeBottomText.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {
  useGSAP(() => {
    gsap.to('.moveX', {
      x: '-100%',
      duration: 10,
      repeat: -1,
      ease: 'linear'
    })
  }, [])

  return (
    <div>
      <div className = 'h-screen w-screen fixed'>
        <Video />
      </div>
      <div className = 'h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home
