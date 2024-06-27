// import React from 'react';
// import './Faculty.css';

// const Faculty = () => {
//   const images = [
//     "https://www.cse.iitk.ac.in/users/isaha/profile2.jpg",
//     "https://www.cse.iitk.ac.in/profileimages/mainakc.jpg",
//     "https://www.cse.iitk.ac.in/profileimages/manindra.jpg",
//     "https://www.cse.iitk.ac.in/profileimages/nitin.jpg",
//     "https://www.cse.iitk.ac.in/users/rtewari/jabalpur.jpg",
//     "https://static.wixstatic.com/media/d77389_5645c8268f0c42508f2ecb15aa941aca~mv2.png/v1/fill/w_341,h_394,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Priyanka_Bagade_1.png",
//     "https://cse.iitk.ac.in/users/rmittal/me.jpg",
//     "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGT_WQb86XfkxDRDcSeOnE6NnYMSySY_IOCcA4xiPLp7__7lnrkU9f9NdZkV67HZFoU8C4gjPBRfEbmEFXxmw00h_sddVknuCVx0_gvXs"
//   ];

//   return (
//     <section className="faculty-container">
//       <div className="header3">
//         <h1>Best Faculty Award</h1>
//       </div>
//       <div className="detail">
//         <p className="para">
//           Dr. Pankaj Jalote has instituted the CSE Best Teacher Award. The award includes a plaque given to the Professor. An appropriate citation written by the graduating batch is read out in praise of the professor selected for the award. The awardee is elected by the graduating BTech, MTech, and dual-degree students.
//         </p>
//         <p className="para">
//           His research interest is in software engineering (software quality, software process improvement, software architecture analysis), and fault tolerant systems and reliability.
//         </p>
//       </div>
//       <div className="slider">
//         <div className="slide-track">
//           {[...images, ...images, ...images].map((src, index) => (
//             <div className="slide" key={index}>
//               <img src={src} alt={`Faculty ${index % images.length + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Faculty;
// NewsEvents.js
import React, { useEffect, useState } from 'react';
import './NewsEvents.css';

const NewsEvents = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/newsData.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setNewsData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (newsData.length === 0) {
    return <div>No news available.</div>;
  }

  return (
    <div className="news-events-container">
      <div className="main-content">
        <div className="main-article">
          <div className="u">
            <img src={newsData[0].image} alt="Main article" />
          </div>
          <div className="main-article-text">
            <div className="news-item-category">{newsData[0].title}</div>
            <div className="desc">{newsData[0].description}</div>
          </div>
        </div>
        <div className="news-list">
          {newsData.slice(1).map((item, index) => (
            <div className="news-item" key={index}>
              <div className="news-item-text">
                <div className="news-item-categories">{item.category}</div>
                <div className="news-item-description">{item.description}</div>
              </div>
              <img src={item.image} alt={item.category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;