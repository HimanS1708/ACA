import React from 'react'
import background from '../../assets/home_bg.png'
import './style.css';
function Home() {
  return (
    <section className="home-container pt-20 pb-20 bg-no-repeat bg-center bg-cover" data-scroll-container>
      <div className="home-heading pt-20">
        <p className='text-8xl'>$ Hello World!_</p>
      </div>
      <div className="home-paragraph flex justify-center pt-16">
        <p className='max-w-3xl text-2xl'>Association for Computing Activities (ACA) is the Computer Science society of IIT Kanpur. ACA organizes departmental activities right from freshers’ to farewell in addition to several programming competitions and lectures.</p>
      </div>
    </section>
  )
}

export default Home