// import { useState, useEffect } from 'react';

// export default function Homescreen({
//   onPriceClick,
//   isLoading,
//   setIsLoading,
//   data,
// }) {
//   console.log(data);

//   return (
//     <div className="homescreen">
//       <div className="searchdiv">
//         <div className="searchinp">
//           <img src="/searchicon.png" alt="" className="searchicon" />
//           <input
//             type="text"
//             name="searchinput"
//             id="searchinput"
//             className="searchinput"
//             placeholder="Search with Product Code"
//           />
//         </div>
//       </div>
//       <div className="categoriesdiv">
//         <div className="category ">
//           <img src="/allitems.png" alt="caticon" className="caticon" />
//           <div className="cattag">All Items</div>
//         </div>
//         <div className="category catactive">
//           <img src="/allitems.png" alt="caticon" className="caticon" />
//           <div className="cattag">All Items</div>
//         </div>
//         <div className="category ">
//           <img src="/allitems.png" alt="caticon" className="caticon" />
//           <div className="cattag">All Items</div>
//         </div>
//         <div className="category catactive">
//           <img src="/allitems.png" alt="caticon" className="caticon" />
//           <div className="cattag">All Items</div>
//         </div>
//         <div className="category ">
//           <img src="/allitems.png" alt="caticon" className="caticon" />
//           <div className="cattag">All Items</div>
//         </div>
//         <div className="category catactive">
//           <img src="/allitems.png" alt="caticon" className="caticon" />
//           <div className="cattag">All Items</div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';

export default function Homescreen({
  onPriceClick,
  isLoading,
  setIsLoading,
  data,
  setSelectedItem,
  selectedItem,
  setSelectedPriceIndex,
  selectedPriceIndex,
  setActiveTab,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Items');

  // Extract unique categories
  const subcategories = Array.from(
    new Set(data.map((item) => item.subcategory))
  );

  // Filter data by category and search term
  const filteredData = data.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All Items' || item.subcategory === selectedCategory;
    const matchesSearch = item.productId
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="homescreen">
      {/* Search Bar */}
      <div className="searchdiv">
        <div className="searchinp">
          <img src="/searchicon.png" alt="" className="searchicon" />
          <input
            type="text"
            name="searchinput"
            id="searchinput"
            className="searchinput"
            placeholder="Search with Product Code"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Dynamic Categories */}
      <div className="categoriesdiv">
        <div
          className={`category ${
            selectedCategory === 'All Items' ? 'catactive' : ''
          }`}
          onClick={() => setSelectedCategory('All Items')}
        >
          <img src="/allitems.png" alt="caticon" className="caticon" />
          <div className="cattag">All Items</div>
        </div>
        {subcategories.map((cat) => (
          <div
            key={cat}
            className={`category ${
              selectedCategory === cat ? 'catactive' : ''
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            <img
              src={`/${cat.toLowerCase()}.png`}
              alt={`${cat} icon`}
              className="caticon"
            />
            <div className="cattag">{cat}</div>
          </div>
        ))}
      </div>

      {/* Render Filtered Items (optional section) */}
      <div className="itemsdiv">
        {filteredData.map((item) => (
          <div className="comp">
            <data className="itemcard">
              <div className="first">
                <img
                  src={item.imagelink}
                  alt="Product Image"
                  className="productimage"
                />
              </div>
              <div className="second">
                <div className="pillsection">
                  <div className="pilldiv">
                    <div className="pill">{item.category}</div>
                    <div className="pill">{item.subcategory}</div>
                  </div>
                  <div className="editbutton">
                    <div className="btn">
                      <img
                        src="/edit.png"
                        alt="editicon"
                        className="editicon"
                      />
                    </div>
                  </div>
                </div>
                <div className="medium">Product ID - {item.productId}</div>
                <div className="bottom">
                  <div
                    className="downloadbutton"
                    onClick={() => {
                      setSelectedItem(item);
                      setSelectedPriceIndex(0);
                      setActiveTab('productdesc');
                    }}
                  >
                    <div className="dwntag">Q1 : {item.tier1price}</div>
                    <div className="dwnicon">
                      <img
                        src="/download.png"
                        alt="download icon"
                        className="downicon"
                      />
                    </div>
                  </div>
                  <div
                    className="downloadbutton"
                    onClick={() => {
                      setSelectedItem(item);
                      setSelectedPriceIndex(1);
                      setActiveTab('productdesc');
                    }}
                  >
                    <div className="dwntag">Q2 : {item.tier2price}</div>
                    <div className="dwnicon">
                      <img
                        src="/download.png"
                        alt="download icon"
                        className="downicon"
                      />
                    </div>
                  </div>
                  <div
                    className="downloadbutton"
                    onClick={() => {
                      setSelectedItem(item);
                      setSelectedPriceIndex(2);
                      setActiveTab('productdesc');
                    }}
                  >
                    <div className="dwntag">Q3 : {item.tier3price}</div>
                    <div className="dwnicon">
                      <img
                        src="/download.png"
                        alt="download icon"
                        className="downicon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </data>
            <div className="sep"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
