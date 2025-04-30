// import { useState } from 'react';

// export default function Homescreen() {
//   const data = [
//     {
//       id: 'ORN001',
//       name: 'Royal Antique Necklace',
//       category: 'Necklace',
//       material: 'Gold',
//       purity: '22K',
//       grossWeight: 50,
//       netWeight: 48,
//       stoneWeight: 2,
//       stoneType: 'Ruby',
//       wastagePercent: 10,
//       makingChargesPerGram: 200,
//       pricePerGram: 5800,
//       totalMakingCharges: 9600,
//       totalPrice: 313600,
//       image: '/images/necklace1.jpg',
//       description:
//         'Handcrafted antique-style necklace with ruby embellishments.',
//     },
//     {
//       id: 'ORN002',
//       name: 'Classic Wedding Ring',
//       category: 'Ring',
//       material: 'Gold',
//       purity: '18K',
//       grossWeight: 6,
//       netWeight: 6,
//       stoneWeight: 0,
//       stoneType: '',
//       wastagePercent: 8,
//       makingChargesPerGram: 180,
//       pricePerGram: 4800,
//       totalMakingCharges: 1080,
//       totalPrice: 32544,
//       image: '/images/ring1.jpg',
//       description: 'Elegant gold wedding ring in polished 18K gold.',
//     },
//     {
//       id: 'ORN003',
//       name: 'Princess Diamond Earrings',
//       category: 'Earring',
//       material: 'Gold',
//       purity: '18K',
//       grossWeight: 10,
//       netWeight: 8,
//       stoneWeight: 2,
//       stoneType: 'Diamond',
//       wastagePercent: 8,
//       makingChargesPerGram: 250,
//       pricePerGram: 5000,
//       totalMakingCharges: 2000,
//       totalPrice: 50800,
//       image: '/images/earring1.jpg',
//       description: '18K gold earrings studded with diamonds for a royal look.',
//     },
//     {
//       id: 'ORN004',
//       name: 'Modern Silver Cuff',
//       category: 'Bracelet',
//       material: 'Silver',
//       purity: '92.5',
//       grossWeight: 22,
//       netWeight: 22,
//       stoneWeight: 0,
//       stoneType: '',
//       wastagePercent: 5,
//       makingChargesPerGram: 60,
//       pricePerGram: 75,
//       totalMakingCharges: 1320,
//       totalPrice: 2970,
//       image: '/images/bracelet1.jpg',
//       description: 'Minimalist sterling silver cuff with high polish.',
//     },
//     {
//       id: 'ORN005',
//       name: 'Traditional Bridal Bangles',
//       category: 'Bangle',
//       material: 'Gold',
//       purity: '22K',
//       grossWeight: 40,
//       netWeight: 39,
//       stoneWeight: 1,
//       stoneType: 'CZ',
//       wastagePercent: 10,
//       makingChargesPerGram: 190,
//       pricePerGram: 5800,
//       totalMakingCharges: 7410,
//       totalPrice: 271110,
//       image: '/images/bangle1.jpg',
//       description: 'Bridal gold bangles with fine cubic zirconia details.',
//     },
//     {
//       id: 'ORN006',
//       name: 'Engraved Gold Pendant',
//       category: 'Pendant',
//       material: 'Gold',
//       purity: '22K',
//       grossWeight: 12,
//       netWeight: 12,
//       stoneWeight: 0,
//       stoneType: '',
//       wastagePercent: 6,
//       makingChargesPerGram: 170,
//       pricePerGram: 5800,
//       totalMakingCharges: 2040,
//       totalPrice: 77736,
//       image: '/images/pendant1.jpg',
//       description: 'Customizable gold pendant with floral engraving.',
//     },
//     {
//       id: 'ORN007',
//       name: 'Elegant Anklet Pair',
//       category: 'Anklet',
//       material: 'Silver',
//       purity: '92.5',
//       grossWeight: 30,
//       netWeight: 30,
//       stoneWeight: 0,
//       stoneType: '',
//       wastagePercent: 5,
//       makingChargesPerGram: 55,
//       pricePerGram: 75,
//       totalMakingCharges: 1650,
//       totalPrice: 3900,
//       image: '/images/anklet1.jpg',
//       description: 'Sterling silver anklets with traditional charm design.',
//     },
//     {
//       id: 'ORN008',
//       name: 'Kids Adjustable Kada',
//       category: 'Kada',
//       material: 'Gold',
//       purity: '22K',
//       grossWeight: 15,
//       netWeight: 14.5,
//       stoneWeight: 0.5,
//       stoneType: 'Emerald',
//       wastagePercent: 9,
//       makingChargesPerGram: 160,
//       pricePerGram: 5800,
//       totalMakingCharges: 2320,
//       totalPrice: 101790,
//       image: '/images/kada1.jpg',
//       description: 'Adjustable gold kada for kids with emerald highlight.',
//     },
//     {
//       id: 'ORN009',
//       name: 'Bridal Gold Maang Tikka',
//       category: 'Maang Tikka',
//       material: 'Gold',
//       purity: '22K',
//       grossWeight: 18,
//       netWeight: 17.5,
//       stoneWeight: 0.5,
//       stoneType: 'Polki',
//       wastagePercent: 12,
//       makingChargesPerGram: 210,
//       pricePerGram: 5800,
//       totalMakingCharges: 3675,
//       totalPrice: 124290,
//       image: '/images/tikka1.jpg',
//       description: 'Heavily embellished bridal maang tikka with Polki stones.',
//     },
//     {
//       id: 'ORN010',
//       name: 'Gents Gold Chain',
//       category: 'Chain',
//       material: 'Gold',
//       purity: '22K',
//       grossWeight: 25,
//       netWeight: 25,
//       stoneWeight: 0,
//       stoneType: '',
//       wastagePercent: 7,
//       makingChargesPerGram: 180,
//       pricePerGram: 5800,
//       totalMakingCharges: 4500,
//       totalPrice: 159375,
//       image: '/images/chain1.jpg',
//       description: 'Sturdy and elegant 22K gold chain for men.',
//     },
//   ];

//   const [items, setItems] = useState(data);
//   const [filter, setFilter] = useState('All Items');

//   return (
//     <div className="homescreen">
//       <div className="searchbar">
//         <input
//           type="text"
//           name="Searchinput"
//           id="searchinput"
//           className="searchinput"
//           placeholder="Search with Product Id."
//         />
//         <div className="searchbutton">
//           <img src="/search.png" alt="" className="searchicon" />
//         </div>
//       </div>
//       <div className="categoriesdiv">
//         <div className="category activecat">
//           <img src="/all.png" alt="All" className="caticon" /> All Items
//         </div>
//         <div className="category">
//           <img src="/necklace.png" alt="All" className="caticon" /> Necklace
//         </div>
//         <div className="category">
//           <img src="/earrings.png" alt="All" className="caticon" /> Earrings
//         </div>
//         <div className="category">
//           <img src="/rings.png" alt="All" className="caticon" /> Rings
//         </div>
//         <div className="category">
//           <img src="/bracelet.png" alt="All" className="caticon" /> Bracelets
//         </div>
//       </div>
//       <div className="itemsdiv">
//         <div className="itemcard">
//           <img
//             src="https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery.jpg"
//             alt=""
//             className="prodimg"
//           />
//           <div className="iteminfo">
//             <div className="codename">Code - APJ00234</div>
//             <div className="codename catname">Category - Gold : Necklace</div>
//           </div>
//         </div>
//         <div className="itemcard">
//           <img
//             src="https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery.jpg"
//             alt=""
//             className="prodimg"
//           />
//           <div className="iteminfo">
//             <div className="codename">Code - APJ00234</div>
//             <div className="codename catname">Category - Gold : Necklace</div>
//           </div>
//         </div>
//         <div className="itemcard">
//           <img
//             src="https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery.jpg"
//             alt=""
//             className="prodimg"
//           />
//           <div className="iteminfo">
//             <div className="codename">Code - APJ00234</div>
//             <div className="codename catname">Category - Gold : Necklace</div>
//           </div>
//         </div>
//         <div className="itemcard">
//           <img
//             src="https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery.jpg"
//             alt=""
//             className="prodimg"
//           />
//           <div className="iteminfo">
//             <div className="codename">Code - APJ00234</div>
//             <div className="codename catname">Category - Gold : Necklace</div>
//           </div>
//         </div>
//         <div className="itemcard">
//           <img
//             src="https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery.jpg"
//             alt=""
//             className="prodimg"
//           />
//           <div className="iteminfo">
//             <div className="codename">Code - APJ00234</div>
//             <div className="codename catname">Category - Gold : Necklace</div>
//           </div>
//         </div>
//         <div className="itemcard">
//           <img
//             src="https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery.jpg"
//             alt=""
//             className="prodimg"
//           />
//           <div className="iteminfo">
//             <div className="codename">Code - APJ00234</div>
//             <div className="codename catname">Category - Gold : Necklace</div>
//           </div>
//         </div>
//         <div className="itemcard">
//           <img
//             src="https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery.jpg"
//             alt=""
//             className="prodimg"
//           />
//           <div className="iteminfo">
//             <div className="codename">Code - APJ00234</div>
//             <div className="codename catname">Category - Gold : Necklace</div>
//           </div>
//         </div>
//         <div className="itemcard">
//           <img
//             src="https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery.jpg"
//             alt=""
//             className="prodimg"
//           />
//           <div className="iteminfo">
//             <div className="codename">Code - APJ00234</div>
//             <div className="codename catname">Category - Gold : Necklace</div>
//           </div>
//         </div>
//         <div className="itemcard">
//           <img
//             src="https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery.jpg"
//             alt=""
//             className="prodimg"
//           />
//           <div className="iteminfo">
//             <div className="codename">Code - APJ00234</div>
//             <div className="codename catname">Category - Gold : Necklace</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';

export default function Homescreen() {
  const data = [
    {
      id: 'ORN001',
      name: 'Royal Antique Necklace',
      category: 'Necklace',
      material: 'Gold',
      purity: '22K',
      grossWeight: 50,
      netWeight: 48,
      stoneWeight: 2,
      stoneType: 'Ruby',
      wastagePercent: 10,
      makingChargesPerGram: 200,
      pricePerGram: 5800,
      totalMakingCharges: 9600,
      totalPrice: 313600,
      image: '/images/necklace1.jpg',
      description:
        'Handcrafted antique-style necklace with ruby embellishments.',
    },
    {
      id: 'ORN002',
      name: 'Classic Wedding Ring',
      category: 'Ring',
      material: 'Gold',
      purity: '18K',
      grossWeight: 6,
      netWeight: 6,
      stoneWeight: 0,
      stoneType: '',
      wastagePercent: 8,
      makingChargesPerGram: 180,
      pricePerGram: 4800,
      totalMakingCharges: 1080,
      totalPrice: 32544,
      image: '/images/ring1.jpg',
      description: 'Elegant gold wedding ring in polished 18K gold.',
    },
    {
      id: 'ORN003',
      name: 'Princess Diamond Earrings',
      category: 'Earring',
      material: 'Gold',
      purity: '18K',
      grossWeight: 10,
      netWeight: 8,
      stoneWeight: 2,
      stoneType: 'Diamond',
      wastagePercent: 8,
      makingChargesPerGram: 250,
      pricePerGram: 5000,
      totalMakingCharges: 2000,
      totalPrice: 50800,
      image: '/images/earring1.jpg',
      description: '18K gold earrings studded with diamonds for a royal look.',
    },
    {
      id: 'ORN004',
      name: 'Modern Silver Cuff',
      category: 'Bracelet',
      material: 'Silver',
      purity: '92.5',
      grossWeight: 22,
      netWeight: 22,
      stoneWeight: 0,
      stoneType: '',
      wastagePercent: 5,
      makingChargesPerGram: 60,
      pricePerGram: 75,
      totalMakingCharges: 1320,
      totalPrice: 2970,
      image: '/images/bracelet1.jpg',
      description: 'Minimalist sterling silver cuff with high polish.',
    },
    {
      id: 'ORN005',
      name: 'Traditional Bridal Bangles',
      category: 'Bangle',
      material: 'Gold',
      purity: '22K',
      grossWeight: 40,
      netWeight: 39,
      stoneWeight: 1,
      stoneType: 'CZ',
      wastagePercent: 10,
      makingChargesPerGram: 190,
      pricePerGram: 5800,
      totalMakingCharges: 7410,
      totalPrice: 271110,
      image: '/images/bangle1.jpg',
      description: 'Bridal gold bangles with fine cubic zirconia details.',
    },
    {
      id: 'ORN006',
      name: 'Engraved Gold Pendant',
      category: 'Pendant',
      material: 'Gold',
      purity: '22K',
      grossWeight: 12,
      netWeight: 12,
      stoneWeight: 0,
      stoneType: '',
      wastagePercent: 6,
      makingChargesPerGram: 170,
      pricePerGram: 5800,
      totalMakingCharges: 2040,
      totalPrice: 77736,
      image: '/images/pendant1.jpg',
      description: 'Customizable gold pendant with floral engraving.',
    },
    {
      id: 'ORN007',
      name: 'Elegant Anklet Pair',
      category: 'Anklet',
      material: 'Silver',
      purity: '92.5',
      grossWeight: 30,
      netWeight: 30,
      stoneWeight: 0,
      stoneType: '',
      wastagePercent: 5,
      makingChargesPerGram: 55,
      pricePerGram: 75,
      totalMakingCharges: 1650,
      totalPrice: 3900,
      image: '/images/anklet1.jpg',
      description: 'Sterling silver anklets with traditional charm design.',
    },
    {
      id: 'ORN008',
      name: 'Kids Adjustable Kada',
      category: 'Kada',
      material: 'Gold',
      purity: '22K',
      grossWeight: 15,
      netWeight: 14.5,
      stoneWeight: 0.5,
      stoneType: 'Emerald',
      wastagePercent: 9,
      makingChargesPerGram: 160,
      pricePerGram: 5800,
      totalMakingCharges: 2320,
      totalPrice: 101790,
      image: '/images/kada1.jpg',
      description: 'Adjustable gold kada for kids with emerald highlight.',
    },
    {
      id: 'ORN009',
      name: 'Bridal Gold Maang Tikka',
      category: 'Maang Tikka',
      material: 'Gold',
      purity: '22K',
      grossWeight: 18,
      netWeight: 17.5,
      stoneWeight: 0.5,
      stoneType: 'Polki',
      wastagePercent: 12,
      makingChargesPerGram: 210,
      pricePerGram: 5800,
      totalMakingCharges: 3675,
      totalPrice: 124290,
      image: '/images/tikka1.jpg',
      description: 'Heavily embellished bridal maang tikka with Polki stones.',
    },
    {
      id: 'ORN010',
      name: 'Gents Gold Chain',
      category: 'Chain',
      material: 'Gold',
      purity: '22K',
      grossWeight: 25,
      netWeight: 25,
      stoneWeight: 0,
      stoneType: '',
      wastagePercent: 7,
      makingChargesPerGram: 180,
      pricePerGram: 5800,
      totalMakingCharges: 4500,
      totalPrice: 159375,
      image: '/images/chain1.jpg',
      description: 'Sturdy and elegant 22K gold chain for men.',
    },
  ];

  const [items, setItems] = useState(data);
  const [filter, setFilter] = useState('All Items');
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique categories from data
  const categories = [
    'All Items',
    ...new Set(data.map((item) => item.category)),
  ];

  // Filter items based on selected category and search term
  const filteredItems = items.filter((item) => {
    const matchesCategory = filter === 'All Items' || item.category === filter;
    const matchesSearch =
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle category filter change
  const handleCategoryChange = (category) => {
    setFilter(category);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="homescreen">
      <div className="searchbar">
        <input
          type="text"
          name="Searchinput"
          id="searchinput"
          className="searchinput"
          placeholder="Search with Product Id or Name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="searchbutton">
          <img src="/search.png" alt="" className="searchicon" />
        </div>
      </div>
      <div className="categoriesdiv">
        {categories.map((category) => (
          <div
            key={category}
            className={`category ${filter === category ? 'activecat' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            <img
              src={`/${category.toLowerCase().replace(' ', '')}.png`}
              alt={category}
              className="caticon"
            />
            {/* <div className="catcircle"></div> */}
            {category}
          </div>
        ))}
      </div>
      <div className="itemsdiv">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="itemcard">
              <img
                src={item.image}
                alt={item.name}
                className="prodimg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery.jpg';
                }}
              />

              <div className="iteminfo">
                <div className="codename">Code - {item.id}</div>
                <div className="codename catname">
                  Category - {item.material} : {item.category}
                </div>
                <div className="codename">
                  Price - ₹{item.totalPrice.toLocaleString()}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-items">No items found matching your criteria.</div>
        )}
      </div>
    </div>
  );
}
