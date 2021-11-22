import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const OnClickComponent = ({ cb }) => {
  const [currentPage, setCurrentPage] = useState('');

  const handleOnChange = (e) => {
    setCurrentPage(e.target.value.toLowerCase());
  };

  const handleOnClick = () => {
    cb(currentPage);
    document.getElementById('onClickInput').value = '';
  };

  return (
    <div>
      {/* onClick=\{\} */}
      <input type="text" name="" id="onClickInput" onChange={handleOnChange} />
      <button
        type="submit"
        onClick={handleOnClick}
      >
        Take me away!
      </button>
    </div>
  );
};

export default OnClickComponent;
