import { useState, useEffect } from 'react';

export default function Homescreen({
  onPriceClick,
  isLoading,
  setIsLoading,
  data,
}) {
  console.log(data);

  return (
    <div className="homescreen">
      <div className="searchdiv">
        <div className="searchinp">
          <img src="/searchicon.png" alt="" className="searchicon" />
          <input
            type="text"
            name="searchinput"
            id="searchinput"
            className="searchinput"
            placeholder='Search with Product Code'
          />
        </div>
      </div>
    </div>
  );
}
