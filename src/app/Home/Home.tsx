
import React from 'react'
import HomeVideo from './HomeComponents/HomeVideo'
import Discription from './HomeComponents/Discription'
import OurStory from './HomeComponents/OurStory' 
import Services from './HomeComponents/Services'
import Clinds from './HomeComponents/Clints'
import ClintSay from './HomeComponents/ClintSay'
import EndSection from './HomeComponents/EndSection'

function Home() {   
  return (
    <div className="min-h-screen  bg-black text-white">
      <HomeVideo />
      <div className=" w-full relative z-10 bg-white">
        <div className="hidden md:block">
          <Discription/>
        </div>
        <OurStory/>
        <Services />
        <Clinds/>
        <ClintSay/>
        <EndSection/>

      </div>
    </div>
  );

}

export default Home; 