
import React, { useEffect, useRef } from 'react';

const TikTokEmbed = ({ videoId }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    
    // Add the script to the document
    document.body.appendChild(script);
    
    // Clean up
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  return (
    <div ref={containerRef} className="tiktok-embed-container">
      <blockquote
        className="tiktok-embed"
        cite={`https://www.tiktok.com/@pennstatefs/video/${videoId}`}
        data-video-id={videoId}
        style={{ maxWidth: '605px', minWidth: '325px' }}
      >
        <section>
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            href={`https://www.tiktok.com/@pennstatefs/video/${videoId}`}
          >
            @pennstatefs
          </a>
        </section>
      </blockquote>
    </div>
  );
};

export default TikTokEmbed;