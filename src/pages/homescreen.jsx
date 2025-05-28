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
            placeholder="Search with Product Code"
          />
        </div>
      </div>
      <div className="categoriesdiv">
        <div className="category catactive">
          <img src="/allitems.png" alt="caticon" className="caticon" />
          <div className="cattag">All Items</div>
        </div>
      </div>
    </div>
  );
}
