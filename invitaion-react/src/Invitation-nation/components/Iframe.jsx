
import React, {useEffect, useRef } from 'react';

const ScrollableIframe = () => {
  // Reference to the iframe element
  const iframeRef = useRef(null);

  // Function to handle scrolling in the iframe
  const scrollToElement = (elementId) => {
    if (!iframeRef.current) return;

    // Send a message to the iframe with the element ID
    iframeRef.current.contentWindow.postMessage(elementId, '*');
  };

  // Event listener to handle messages from the iframe
  const handleMessage = (event) => {
    // Ensure the message is coming from the iframe
    if (event.source === iframeRef.current.contentWindow) {
      const elementId = event.data;
      // Scroll to the element with the specified ID
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Attach message event listener when component mounts
  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="https://example.com"
      title="Embedded Website"
      width="100%"
      height="500px"
    />
  );
};

export default ScrollableIframe;


