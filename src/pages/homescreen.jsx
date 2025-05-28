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
          <data className="itemcard"></data>
        ))}
      </div>
    </div>
  );
}
