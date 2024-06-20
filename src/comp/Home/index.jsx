import React from 'react'
import { useState, useEffect } from 'react';
import './style.css';

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [, setIndex] = useState(1);
  const toRotate = [ "$ Hello World!", "$ Welcome to ACA, IIT Kanpur!" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, ])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) || "" : fullText.substring(0, text.length + 1) || "";

    setText(updatedText || "");

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="home-container pt-10 pb-20 bg-no-repeat bg-center bg-cover bg-gradient-to-b from-transparent to-slate-300" data-scroll-container>
      <div className="home-heading pt-20">
        <p className='text-8xl max-w-'>{text}</p>
      </div>
      <div className="home-paragraph flex justify-center pt-16">
        <p className='max-w-3xl text-2xl font-medium'>Association for Computing Activities (ACA) is the Computer Science society of IIT Kanpur. ACA organizes departmental activities right from freshers' to farewell in addition to several programming competitions and lectures.</p>
      </div>
    </section>
  )
}

export default Home