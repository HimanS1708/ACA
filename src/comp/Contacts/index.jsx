import React from 'react'
import img1 from '../../assets/Rohan ravi.jpg'
import img2 from '../../assets/yashas.jpg'
import img3 from '../../assets/Apoorva.jpg'
import img4 from '../../assets/geetika.jpg'
import './style.css'

function Contacts() {
  return (
    <section className="contact-container bg-black pt-8 pb-10" id='contacts'>
        <div className='header'>
            <h1 className='text-white text-7xl font-semibold'>Contact Us</h1>
        </div>
        <div className="card-container pt-10 ">
            <div className="row1 grid grid-cols-2 justify-items-center">
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pr-10 pl-10 pt-10" id='card'>
                    <img class="rounded-t-lg h-80" src={img1} alt="Rohan ki photo" />
                    <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rohan Ravi</h5>
                        <div className="socials flex justify-center pt-5">
                            <a className="github fa-brands fa-github duration-500"></a>
                            <a className="envelope fa-regular fa-envelope duration-500"></a>
                            <a className="linkedin fa-brands fa-linkedin duration-500"></a>
                            <a className="instagram fa-brands fa-instagram duration-500"></a>
                        </div>
                    </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pr-8 pl-10 pt-10" id='card'>
                    <img class="rounded-t-lg h-70" src={img2} alt="Yashas ki photo" />
                    <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Yashas D</h5>
                        <div className="socials flex justify-center pt-5">
                            <a className="github fa-brands fa-github duration-500"></a>
                            <a className="envelope fa-regular fa-envelope duration-500"></a>
                            <a className="linkedin fa-brands fa-linkedin duration-500"></a>
                            <a className="instagram fa-brands fa-instagram duration-500"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row2 grid grid-cols-2 justify-items-center pt-20">
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pr-10 pl-10 pt-10" id='card'>
                    <img class="rounded-t-lg max-h-80" src={img3} alt="Apoorva ki photo" />
                    <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Apoorva Gupta</h5>
                        <div className="socials flex justify-center pt-5">
                            <a className="github fa-brands fa-github duration-500"></a>
                            <a className="envelope fa-regular fa-envelope duration-500"></a>
                            <a className="linkedin fa-brands fa-linkedin duration-500"></a>
                            <a className="instagram fa-brands fa-instagram duration-500"></a>
                        </div>
                    </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pr-10 pl-10 pt-10" id='card'>
                    <img class="rounded-t-lg max-h-80" src={img4} alt="Geetika ki photo" />
                    <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Geetika Gupta</h5>
                        <div className="socials flex justify-center pt-5">
                            <a className="github fa-brands fa-github duration-500"></a>
                            <a className="envelope fa-regular fa-envelope duration-500"></a>
                            <a className="linkedin fa-brands fa-linkedin duration-500"></a>
                            <a className="instagram fa-brands fa-instagram duration-500"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacts