import React, { useEffect } from 'react';

const MiniAppDemo = () => {
  useEffect(() => {
    // Assuming setFrameReady is a hook/function that you call to notify that the frame is ready
    setFrameReady();
  }, []);

  return <div>Welcome to Mini App Demo!</div>;
};

export default MiniAppDemo;