import React, { useState } from 'react';

const useDocumentScrollThrottled = (callback) => {
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  const handleDocumentScroll = () => {
    const { scrollTop: currentScrollTop } = document.documentElement || document.body;

    setScrollPosition((previousPosition) => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    callback({ previousScrollTop, currentScrollTop });
  };

  callback();
};

export default useDocumentScrollThrottled;
