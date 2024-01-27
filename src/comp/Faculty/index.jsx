import React from 'react'
import './styles.css';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const Faculty = () => {

  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const items = ["Dr.Manindra Agrawal", "Dr.Surendra Biswas", "Dr.Sumit Ganguly", "Dr.Rajat Moona","6753","765686"];

  // we want the scope to be always to be in the scope of the array so that the carousel is endless
  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;

  // so that the carousel is endless, we need to repeat the items twice
  // then, we slice the the array so that we only have 3 items visible at the same time
  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );
  const handleClick = (newDirection) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  return (
    <section className="faculty-container "  >
      <div className="header3">
        <h1 >Best Faculty Award</h1>
      </div>
      <div className="detail">
        <p className="para">Dr. Pankaj Jalote has instituted the CSE Best Teacher Award. The award includes a plaque given to the Professor. An appropriate citation written by the graduating batch is read out in praise of the professor selected for the award. The awardee is elected by the graduating BTech, MTech, and dual-degree students.</p>
        <p className="para">His research interest is in software engineering (software quality, software process improvement, software architecture analysis), and fault tolerant systems and reliability.</p>
      </div>



      <div className="wrapper">
        {/*AnimatePresence is necessary to show the items after they are deleted because only max. 3 are shown*/}
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item) => {
            // The layout prop makes the elements change its position as soon as a new one is added
            // The key tells framer-motion that the elements changed its position
            return (
              <motion.div
                className="card"
                key={item}
                layout
                custom={{
                  direction,
                  position: () => {
                    if (item === visibleItems[0]) {
                      return "left";
                    } else if (item === visibleItems[1]) {
                      return "center";
                    } else {
                      return "right";
                    }
                  },
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1 }}
              >
                {item}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>


      <div className="buttons">
        <motion.button whileTap={{ scale: 0.8 }} onClick={() => handleClick(-1)}>◀︎</motion.button>
        <motion.button whileTap={{ scale: 0.8 }} onClick={() => handleClick(1)}>▶︎</motion.button>
      </div>


    </section>
  )
}

const variants = {
  enter: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction }) => {
    return {
      scale: position() === "center" ? 1 : 0.7,
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: 1,
    };
  },
  exit: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

function getZIndex({ position, direction }) {
  const indexes = {
    left: direction > 0 ? 2 : 1,
    center: 2,
    right: direction > 0 ? 1 : 2,
  };
  return indexes[position()];
}

export default Faculty;