import { useState, useEffect } from 'react';

export default function Homescreen({ onPriceClick }) {
  const [data, setData] = useState([]);
  const [id, setID] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [base, setBase] = useState('');
  const [rq, setrq] = useState('');
  const [frq, setfrq] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://apjapi.vercel.app/getAllItems')
      .then((res) => res.json())
      .then((dataa) => {
        if (dataa.success) {
          setData(dataa.items);
          console.log('[Initial Load] Prices:', dataa.items);
        }
      })
      .catch((err) => console.error('❌ Error fetching prices:', err))
      .finally(() => setLoading(false));
  }, []);

  const [items, setItems] = useState(data);
  const [filter, setFilter] = useState('All Items');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setItems(data);
  }, [data]);

  const categories = [
    'All Items',
    ...new Set(data.map((item) => item.subcategory)),
  ];

  // Filter items based on selected category and search term
  const filteredItems = items.filter((item) => {
    const matchesCategory =
      filter === 'All Items' || item.subcategory === filter;
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
            {category}
          </div>
        ))}
      </div>
      <div className="itemsdiv">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            // <div key={item.id} className="itemcard">
            //   <img
            //     src={item.image}
            //     alt="Jewellery"
            //     className="itemimage"
            //     loading="lazy"
            //   />

            //   <div className="overlay-top">
            //     <div className="pillsection">
            //       <div className="pill">{item.material}</div>
            //       <div className="pill">{item.category}</div>
            //     </div>
            //     <div className="editsection">
            //       <div className="editbutton">
            //         <img src="/edit.png" alt="" className="editicon" />
            //       </div>
            //     </div>
            //   </div>

            //   <div className="overlay-bottom">
            //     <div className="code">Code - {item.id}</div>
            //     <div className="pricesection">
            //       <div className="price">
            //         <div className="priceamt">{item.totalPrice}</div>
            //         <img src="/download.png" alt="" className="downloadicon" />
            //       </div>
            //       <div className="price">
            //         <div className="priceamt">{item.RQ}</div>
            //         <img src="/download.png" alt="" className="downloadicon" />
            //       </div>
            //       <div className="price">
            //         <div className="priceamt">{item.FRQ}</div>
            //         <img src="/download.png" alt="" className="downloadicon" />
            //       </div>
            //     </div>
            //   </div>
            // </div>
            <div className="itemcard">
              <img
                src={item.image}
                alt="Jewellery Image"
                className="itemimage"
              />
              <div className="iteminfo">
                <div className="first">
                  <div className="pillsection">
                    <div className="pillone">{item.category}</div>
                    <div className="pilltwo">{item.subcategory}</div>
                  </div>
                  <div className="editbutton">
                    <img src="/edit.png" alt="" className="editbuttonicon" />
                  </div>
                </div>
                <div className="codename">
                  <div className="codetag">Product ID :</div>
                  <div className="code">{item.id}</div>
                </div>
                <div className="pricessection">
                  <div className="price" onClick={() => onPriceClick(item, 0)}>
                    <div className="priceamt">{item.pricing.base}</div>
                    <img src="/download.png" alt="" className="downloadicon" />
                  </div>
                  <div className="price" onClick={() => onPriceClick(item, 1)}>
                    <div className="priceamt">{item.pricing.franchise}</div>
                    <img src="/download.png" alt="" className="downloadicon" />
                  </div>
                  <div className="price" onClick={() => onPriceClick(item, 2)}>
                    <div className="priceamt">{item.pricing.retail}</div>
                    <img src="/download.png" alt="" className="downloadicon" />
                  </div>
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
