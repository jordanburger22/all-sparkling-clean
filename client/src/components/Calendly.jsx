import React, { useEffect } from 'react';

function Calendly() {
  useEffect(() => {
    // Create a script element for the Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    // Set up the attributes for the Calendly inline widget
    script.onload = () => {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/jordan-burger/fsjs-outreach',
        parentElement: document.querySelector('.calendly-inline-widget'),
        prefill: {},
      });
    };

    // Add the script to the document
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget" style={{ minWidth: '600px', height: '500px' }}></div>
  );
}

export default Calendly;
