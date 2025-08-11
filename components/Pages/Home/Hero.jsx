
import Hquery from '@/components/Utilities/Search/Filter/Hquery'
import SmallArrowDown from '@/lib/svg/SmallArrowDown'
import SmallArrowUp from '@/lib/svg/SmallArrowUp'
import React from 'react'

const Hero = () => {
  return (
    <React.Fragment>
      <section className="hero">
        <div className="hero-bg">
          <div className="bg-image">
            <img src="/assets/images/hero.avif" alt="" />
          </div>

          <div className="bg-text">
            <div className="bg-text-top">
              <a href="">Commercial</a>
              <a href="">Residential</a>
              <a href="">Lands</a>
            </div>

            <div className="bg-text-mid">
              <h1>Build Your Future, One Property At A Time.</h1>
              <p>Own your world one property at a time, Own your world
                one property at a time, Own your world one property at a time, Own
                your world one property at a time</p>
            </div>

            <div className="bg-text-bottom">
              <h2>Find Your Choice Property</h2>
              <Hquery />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Hero