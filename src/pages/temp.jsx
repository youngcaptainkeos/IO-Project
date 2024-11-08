import React, { useState, useEffect } from 'react';


function FandomFrenzy() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const generateContent = async (pageNumber) => {
    setLoading(true);
    const newContent = Array(20).fill('Addictive Reel');
    setContent((prevContent) => [...prevContent, ...newContent]);
    setLoading(false);
  };

  const handleScroll = () => {
    const bottom = document.documentElement.scrollHeight === window.innerHeight + window.scrollY;
    if (bottom && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    generateContent(page);
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div className="doom-scrolling-wrapper">

      <div className="video left">
        <video className="video-element" loop autoPlay muted>
          <source src="../assets/Subway surfers.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="content-area">
        <h1 className="title ">Endless Doom Scrolling</h1>
        {content.map((item, index) => (
          <div key={index} className="content-item">
            <p>{item}</p>
          </div>
        ))}
        {loading && <div className="loading">Loading more content...</div>}
      </div>

      <div className="video right">
        <video className="video-element" loop autoPlay muted>
          <source src="/assets/Subway surfers.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default FandomFrenzy;