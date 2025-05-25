// import React, { useState, useEffect } from 'react';

// export default function AddItemPage() {
//   const [pricesData, setPricesData] = useState([]);
//   const [category, setCategory] = useState('');
//   const [subcategory, setSubcategory] = useState('');
//   const [grossWeight, setGrossWeight] = useState('');
//   const [materialsUsed, setMaterialsUsed] = useState([]);
//   const [newMaterial, setNewMaterial] = useState({
//     category: '',
//     item: '',
//     quantity: '',
//   });

//   const subcategories = [
//     'Necklace',
//     'Ring',
//     'Earring',
//     'Bracelet',
//     'Bangle',
//     'Pendant',
//     'Anklet',
//     'Kada',
//     'Maang Tikka',
//     'Chain',
//   ];

//   useEffect(() => {
//     fetch('https://apjapi.vercel.app/getAllPrices')
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           setPricesData(data.PRICES);
//         }
//       })
//       .catch((err) => console.error('Failed to fetch prices:', err));
//   }, []);

//   const handleAddMaterial = () => {
//     const { category, item, quantity } = newMaterial;
//     if (!category || !item || !quantity) return;

//     setMaterialsUsed([...materialsUsed, { category, item, quantity }]);
//     setNewMaterial({ category: '', item: '', quantity: '' });
//   };

//   const handleSave = () => {
//     if (
//       !category ||
//       !subcategory ||
//       !grossWeight ||
//       materialsUsed.length === 0
//     ) {
//       alert('Please fill all fields and add at least one material.');
//       return;
//     }

//     // Transform materialsUsed into backend format
//     const transformedMaterials = [];

//     materialsUsed.forEach(({ category, item, quantity }) => {
//       if (!category || !item || !quantity) return;

//       let existingGroup = transformedMaterials.find(
//         (group) => group.docname === category
//       );

//       if (!existingGroup) {
//         existingGroup = { docname: category };
//         transformedMaterials.push(existingGroup);
//       }

//       existingGroup[item] = parseFloat(quantity);
//     });

//     const newItem = {
//       category,
//       subcategory,
//       grossWeight: parseFloat(grossWeight),
//       materialsUsed: transformedMaterials,
//     };

//     fetch('https://apjapi.vercel.app/addItem', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newItem),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           alert('Item saved successfully!');
//           // Reset form
//           setCategory('');
//           setSubcategory('');
//           setGrossWeight('');
//           setMaterialsUsed([]);
//           setNewMaterial({ category: '', item: '', quantity: '' });
//         } else {
//           alert('Failed to save item.');
//         }
//       })
//       .catch((err) => {
//         console.error('Error saving item:', err);
//         alert('An error occurred while saving the item.');
//       });
//   };

//   const getItemsForCategory = (categoryName) => {
//     const categoryData = pricesData.find((cat) => cat.docname === categoryName);
//     if (!categoryData) return [];

//     return Object.keys(categoryData).filter(
//       (key) => key !== 'docname' && key !== 'MAKING' && key !== 'WASTAGE'
//     );
//   };

//   return (
//     <div className="additems-container">
//       <h2 className="additems-title">Add New Ornament</h2>

//       <div className="additems-field">
//         <label className="additems-label">Category:</label>
//         <select
//           value={category}
//           onChange={(e) => {
//             setCategory(e.target.value);
//             setNewMaterial({
//               ...newMaterial,
//               category: e.target.value,
//               item: '',
//             });
//           }}
//           className="additems-input"
//         >
//           <option value="">Select</option>
//           {pricesData.map((cat) => (
//             <option key={cat.docname} value={cat.docname}>
//               {cat.docname}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="additems-field">
//         <label className="additems-label">Subcategory:</label>
//         <select
//           value={subcategory}
//           onChange={(e) => setSubcategory(e.target.value)}
//           className="additems-input"
//         >
//           <option value="">Select</option>
//           {subcategories.map((subcat) => (
//             <option key={subcat} value={subcat}>
//               {subcat}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="additems-field">
//         <label className="additems-label">Gross Weight (gms):</label>
//         <input
//           type="number"
//           value={grossWeight}
//           onChange={(e) => setGrossWeight(e.target.value)}
//           className="additems-input"
//         />
//       </div>

//       <div className="additems-materials">
//         <h3 className="additems-subtitle">Materials Used</h3>

//         <div className="additems-material-row">
//           <div className="additems-field">
//             <label className="additems-label">Material Category:</label>
//             <select
//               value={newMaterial.category}
//               onChange={(e) =>
//                 setNewMaterial({
//                   ...newMaterial,
//                   category: e.target.value,
//                   item: '',
//                 })
//               }
//               className="additems-input"
//             >
//               <option value="">Select</option>
//               {pricesData.map((cat) => (
//                 <option key={cat.docname} value={cat.docname}>
//                   {cat.docname}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="additems-field">
//             <label className="additems-label">Item:</label>
//             <select
//               value={newMaterial.item}
//               onChange={(e) =>
//                 setNewMaterial({ ...newMaterial, item: e.target.value })
//               }
//               className="additems-input"
//               disabled={!newMaterial.category}
//             >
//               <option value="">Select</option>
//               {getItemsForCategory(newMaterial.category).map((item) => (
//                 <option key={item} value={item}>
//                   {item}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="additems-field">
//             <label className="additems-label">Quantity:</label>
//             <input
//               type="number"
//               value={newMaterial.quantity}
//               onChange={(e) =>
//                 setNewMaterial({ ...newMaterial, quantity: e.target.value })
//               }
//               className="additems-input"
//               disabled={!newMaterial.item}
//             />
//           </div>

//           <button
//             onClick={handleAddMaterial}
//             className="additems-button additems-button-small"
//           >
//             Add
//           </button>
//         </div>

//         <ul className="additems-material-list">
//           {materialsUsed.map((mat, idx) => (
//             <li key={idx} className="additems-material-item">
//               {mat.quantity} units of {mat.item} ({mat.category})
//             </li>
//           ))}
//         </ul>
//       </div>

//       <button onClick={handleSave} className="additems-button">
//         Save Ornament
//       </button>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';

// export default function AddItemPage() {
//   const [pricesData, setPricesData] = useState([]);
//   const [category, setCategory] = useState('');
//   const [subcategory, setSubcategory] = useState('');
//   const [grossWeight, setGrossWeight] = useState('');
//   const [grossWeightAmount, setGrossWeightAmount] = useState('');

//   const subcategories = [
//     'Necklace',
//     'Ring',
//     'Earring',
//     'Bracelet',
//     'Bangle',
//     'Pendant',
//     'Anklet',
//     'Kada',
//     'Maang Tikka',
//     'Chain',
//   ];

//   useEffect(() => {
//     fetch('https://apjapi.vercel.app/getAllPrices')
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           console.log('[Initial Load] Prices:', data.PRICES);
//           setPricesData(data.PRICES);
//         }
//       })
//       .catch((err) => console.error('Failed to fetch prices:', err));
//   }, []);

//   const [selectedItems, setSelectedItems] = useState([]);
//   const [newItem, setNewItem] = useState('');

//   const getAllMaterialOptions = () => {
//     const materials = [];

//     pricesData.forEach((category) => {
//       Object.entries(category).forEach(([key, value]) => {
//         if (key !== 'docname' && key !== 'MAKING' && key !== 'WASTAGE') {
//           materials.push({
//             label: key,
//             category: category.docname,
//             price: Number(value[0]), // use first price tier
//           });
//         }
//       });
//     });

//     return materials;
//   };

//   const allOptions = getAllMaterialOptions();

//   const handleAddItem = () => {
//     if (!newItem) return;

//     const item = allOptions.find((opt) => opt.label === newItem);
//     if (!item) return;

//     setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
//     setNewItem('');
//   };

//   const updateQuantity = (index, qty) => {
//     const updated = [...selectedItems];
//     updated[index].quantity = Number(qty);
//     setSelectedItems(updated);
//   };

//   const deleteItem = (index) => {
//     const updated = [...selectedItems];
//     updated.splice(index, 1);
//     setSelectedItems(updated);
//   };

//   const totalCt = selectedItems.reduce((sum, item) => {
//     return sum + (item.label.toLowerCase().includes('ct') ? item.quantity : 0);
//   }, 0);

//   const netWeight = grossWeightAmount
//     ? (grossWeightAmount - totalCt * 0.2).toFixed(2)
//     : '';

//   return (
//     <div className="additems-container">
//       <div className="additemheading">Add A Product</div>
//       <div className="additems-field">
//         {/* <label className="additems-label">Category:</label> */}
//         <select
//           value={category}
//           onChange={(e) => {
//             setCategory(e.target.value);
//             setNewMaterial({
//               ...newMaterial,
//               category: e.target.value,
//               item: '',
//             });
//           }}
//           className="additems-input"
//         >
//           <option value="">Select the Category</option>
//           {pricesData.map((cat) => (
//             <option key={cat.docname} value={cat.docname}>
//               {cat.docname}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="additems-field">
//         {/* <label className="additems-label">Subcategory:</label> */}
//         <select
//           value={subcategory}
//           onChange={(e) => setSubcategory(e.target.value)}
//           className="additems-input"
//         >
//           <option value="">Select the Type of Jewellery</option>
//           {subcategories.map((subcat) => (
//             <option key={subcat} value={subcat}>
//               {subcat}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="additemheadingsmall">Gross Weight</div>
//       <div className="grossweightsection">
//         <select
//           value={grossWeight}
//           onChange={(e) => setGrossWeight(e.target.value)}
//           className="additems-input"
//           id=""
//         >
//           <option value="">Select the Purity</option>
//           {pricesData.find((category) => category.docname === 'GOLD') &&
//             Object.keys(
//               pricesData.find((category) => category.docname === 'GOLD')
//             )
//               .filter((key) => key.endsWith('k')) // only include keys ending in 'k'
//               .map((subcat) => (
//                 <option key={subcat} value={subcat}>
//                   {subcat}
//                 </option>
//               ))}
//         </select>
//         <input
//           type="number"
//           name="Gross Weight Grams"
//           id="GrossWeight"
//           className="grosswtinp"
//           placeholder="Weight"
//           value={grossWeightAmount}
//           onChange={(e) =>
//             setGrossWeightAmount(parseFloat(e.target.value) || 0)
//           }
//         />
//         <div className="unit">gms</div>
//       </div>

//       <div className="additemheadingsmall">Items Used</div>

//       <div className="itemsused-section">
//         {selectedItems.map((item, index) => (
//           <div key={index} className="itemsused-row">
//             <div className="item-name">{item.label}</div>
//             <input
//               type="number"
//               value={item.quantity}
//               onChange={(e) => updateQuantity(index, e.target.value)}
//               className="item-qty-input"
//             />
//             <span className="unit">ct</span>
//             <button onClick={() => deleteItem(index)} className="delete-btn">
//               <img src="/delete.png" alt="Delete Icon" className="delicon" />
//             </button>
//             <div className="item-total">
//               ₹{(item.quantity * item.price).toLocaleString()}
//             </div>
//           </div>
//         ))}

//         <div className="additem-dropdown-row">
//           <select
//             value={newItem}
//             onChange={(e) => setNewItem(e.target.value)}
//             className="additems-input"
//           >
//             <option value="">Select field</option>
//             {allOptions.map((opt) => (
//               <option key={opt.label} value={opt.label}>
//                 {opt.label} - {opt.price}
//               </option>
//             ))}
//           </select>
//           <button onClick={handleAddItem} className="add-btn">
//             Add
//           </button>
//         </div>
//       </div>

//       <div className="netwt">
//         <div className="additemheadingsmall">Net Weight</div>
//         <div className="netwtval">{netWeight ? `${netWeight} gms` : '-'}</div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';

export default function AddItemPage() {
  const [pricesData, setPricesData] = useState([]);
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [grossWeight, setGrossWeight] = useState('');
  const [grossWeightAmount, setGrossWeightAmount] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [total, setTotal] = useState(0);
  const [codeprefix, setCodePrefix] = useState('');
  const [codeSuffix, setCodeSuffix] = useState('');

  const subcategories = [
    'Necklace',
    'Ring',
    'Earring',
    'Bracelet',
    'Bangle',
    'Pendant',
    'Anklet',
    'Kada',
    'Maang Tikka',
    'Chain',
  ];

  useEffect(() => {
    fetch('https://apjapi.vercel.app/getAllPrices')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPricesData(data.PRICES);
        }
      })
      .catch((err) => console.error('Failed to fetch prices:', err));
  }, []);

  const getAllMaterialOptions = () => {
    const materials = [];
    pricesData.forEach((cat) => {
      Object.entries(cat).forEach(([key, value]) => {
        if (key !== 'docname' && key !== 'MAKING' && key !== 'WASTAGE') {
          materials.push({
            label: key,
            category: cat.docname,
            price: Number(value[0]),
          });
        }
      });
    });
    return materials;
  };

  const allOptions = getAllMaterialOptions();

  const handleAddItem = () => {
    if (!newItem) return;
    const item = allOptions.find((opt) => opt.label === newItem);
    if (!item) return;
    setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    setNewItem('');
  };

  const updateQuantity = (index, qty) => {
    const updated = [...selectedItems];
    updated[index].quantity = Number(qty);
    setSelectedItems(updated);
  };

  const deleteItem = (index) => {
    const updated = [...selectedItems];
    updated.splice(index, 1);
    setSelectedItems(updated);
  };

  const getNetWeight = () => {
    if (!grossWeightAmount || isNaN(grossWeightAmount)) return '';
    const totalCtQty = selectedItems.reduce(
      (sum, item) => sum + Number(item.quantity),
      0
    );
    const deduction = totalCtQty * 0.2;
    return (grossWeightAmount - deduction).toFixed(2);
  };

  const netWeight = getNetWeight();
  const goldWastage =
    pricesData.find((cat) => cat.docname === 'GOLD')?.WASTAGE?.[0] ?? '-';

  function getGoldRate(k, n) {
    const goldRate =
      pricesData.find((cat) => cat.docname === 'GOLD')?.[k]?.[n] ?? '-';
    return goldRate;
  }

  function getMakingCharges(k, i, n) {
    var goldRate = '';
    if (i === 'POLKI') {
      if (n == 0) {
        goldRate =
          pricesData.find((cat) => cat.docname === i)?.MAKING?.[k] ?? '-';
      } else {
        goldRate =
          pricesData.find((cat) => cat.docname === i)?.VICTORIAN?.[k] ?? '-';
      }
    } else {
      goldRate =
        pricesData.find((cat) => cat.docname === i)?.MAKING?.[k] ?? '-';
    }
    return goldRate;
  }

  function calcMaking(k, n) {
    return k * n;
  }

  function calcWastage(k, n) {
    return (k * n) / 100;
  }

  useEffect(() => {
    const totalPrice = selectedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  }, [selectedItems]);

  const codes = ['GNS', 'DNS', 'PNS'];
  const finalProductCode = `${codeprefix}${codeSuffix}`;
  const [polkiType, setPolkiType] = useState(0); // default
  useEffect(() => {
    if (category === 'GOLD') setCodePrefix('GNS');
    else if (category === 'DIAMONDS') setCodePrefix('DNS');
    else if (category === 'POLKI') setCodePrefix('PNS');
  }, [category]);

  return (
    <div className="additems-container">
      <div className="additemheading">Add Product</div>
      <div className="additems-field">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="additems-input"
        >
          <option value="">Select the Category</option>
          {pricesData.map((cat) => (
            <option key={cat.docname} value={cat.docname}>
              {cat.docname}
            </option>
          ))}
        </select>
      </div>
      <div className="additems-field">
        <select
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
          className="additems-input"
        >
          <option value="">Select the Type of Jewellery</option>
          {subcategories.map((subcat) => (
            <option key={subcat} value={subcat}>
              {subcat}
            </option>
          ))}
        </select>
      </div>
      <div className="additemheadingsmall">
        Product Code - {finalProductCode}
      </div>
      <div className="grossweightsection">
        <select
          value={codeprefix}
          onChange={(e) => setCodePrefix(e.target.value)}
          className="additems-input"
        >
          <option value="">Select Code Prefix</option>
          {codes.map((goldType) => (
            <option key={goldType} value={goldType}>
              {goldType}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Code"
          className="grosswtinp"
          value={codeSuffix}
          onChange={(e) => setCodeSuffix(parseFloat(e.target.value))}
        />
      </div>
      <div className="additemheadingsmall">Gross Weight</div>
      <div className="grossweightsection">
        <select
          value={grossWeight}
          onChange={(e) => setGrossWeight(e.target.value)}
          className="additems-input"
        >
          <option value="">Select the Purity</option>
          {pricesData.find((cat) => cat.docname === 'GOLD') &&
            Object.keys(pricesData.find((cat) => cat.docname === 'GOLD'))
              .filter((key) => key.endsWith('k'))
              .map((goldType) => (
                <option key={goldType} value={goldType}>
                  {goldType}
                </option>
              ))}
        </select>

        <input
          type="number"
          placeholder="Weight"
          className="grosswtinp"
          value={grossWeightAmount}
          onChange={(e) => setGrossWeightAmount(parseFloat(e.target.value))}
        />
        <div className="unit">gms</div>
      </div>
      <div className="additemheadingsmall">Items Used</div>
      <div className="itemsused-section">
        {selectedItems.map((item, index) => (
          <div key={index} className="itemsused-row">
            <div className="item-name">{item.label}</div>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(index, e.target.value)}
              className="item-qty-input"
            />
            <span className="unit">ct</span>
            <button onClick={() => deleteItem(index)} className="delete-btn">
              <img src="/delete.png" alt="Delete Icon" className="delicon" />
            </button>
            <div className="item-total">
              ₹{(item.quantity * item.price).toLocaleString()}
            </div>
          </div>
        ))}

        <div className="additem-dropdown-row">
          <select
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="additems-input"
          >
            <option value="">Select field</option>
            {allOptions.map((opt) => (
              <option key={opt.label} value={opt.label}>
                {opt.label} - ₹{opt.price}
              </option>
            ))}
          </select>
          <button onClick={handleAddItem} className="add-btn">
            Add
          </button>
        </div>
      </div>
      <div className="netwt">
        <div className="additemheadingsmall2">Net Weight</div>
        <div className="netwtval">{netWeight ? `${netWeight} gms` : '-'}</div>
      </div>
      <div className="netwt">
        <div className="additemheadingsmall2">+ Wastage</div>
        <div className="netwtval">{goldWastage} %</div>
        <div className="netwtval finprice">
          {calcWastage(
            goldWastage,
            getGoldRate(grossWeight, 0) * netWeight
          ).toFixed(1)}{' '}
          ₹
        </div>
      </div>
      <div className="netwt">
        <div className="additemheadingsmall2">
          x {grossWeight ? grossWeight : '-'} Rate
        </div>
        <div className="netwtval">{getGoldRate(grossWeight, 0)} ₹</div>
        <div className="netwtval finprice">
          {(getGoldRate(grossWeight, 0) * netWeight).toFixed(1)} ₹
        </div>
      </div>
      <div className="netwt">
        <div className="additemheadingsmall2">+ Making Charges</div>
        {category == 'POLKI' ? (
          <>
            <div className="netwtval">
              {polkiType == 0
                ? getMakingCharges(0, category, 0)
                : getMakingCharges(0, category, 1)}{' '}
              ₹/gm
            </div>
            <div className="netwtval finprice">
              {(
                (polkiType == 0
                  ? getMakingCharges(0, category, 0)
                  : getMakingCharges(0, category, 1)) * netWeight
              ).toFixed(1)}{' '}
              ₹
            </div>
          </>
        ) : (
          <>
            <div className="netwtval">
              {getMakingCharges(0, category, 0)} ₹/gm
            </div>
            <div className="netwtval finprice">
              {(getMakingCharges(0, category, 0) * netWeight).toFixed(1)} ₹
            </div>
          </>
        )}
      </div>
      {category == 'POLKI' ? (
        <div className="netwt">
          <select
            name="polki making"
            id="polkimaking"
            className="additems-input polkiselect"
            value={polkiType}
            onChange={(e) => {
              setPolkiType(e.target.value);
            }}
          >
            <option value={0}>MAKING</option>
            <option value={1}>VICTORIAN MC</option>
          </select>
        </div>
      ) : (
        <></>
      )}
      <div className="netwt">
        <div className="additemheadingsmall">SubTotal</div>
        {/* <div className="netwtval">{getMakingCharges(0)} ₹/gm</div> */}
        <div className="netwtval finprice">
          {(
            calcWastage(goldWastage, getGoldRate(grossWeight, 0) * netWeight) +
            getGoldRate(grossWeight, 0) * netWeight +
            (polkiType == 0 && category == 'POLKI'
              ? getMakingCharges(0, category, 0)
              : getMakingCharges(0, category, 1)) *
              netWeight +
            total
          ).toFixed(1)}
          ₹
        </div>
      </div>
      <div className="netwt">
        <div className="additemheadingsmall2">3% GST</div>
        {/* <div className="netwtval">{getMakingCharges(0)} ₹/gm</div> */}
        <div className="netwtval finprice">
          {calcWastage(
            3,
            calcWastage(goldWastage, getGoldRate(grossWeight, 0) * netWeight) +
              getGoldRate(grossWeight, 0) * netWeight +
              (polkiType == 0 && category == 'POLKI'
                ? getMakingCharges(0, category, 0)
                : getMakingCharges(0, category, 1)) *
                netWeight +
              total
          ).toFixed(1)}
          ₹
        </div>
      </div>
      <div className="netwt">
        <div className="additemheadingsmall">Grand Total</div>
        {/* <div className="netwtval">{getMakingCharges(0)} ₹/gm</div> */}
        <div className="netwtval finprice">
          {(
            calcWastage(goldWastage, getGoldRate(grossWeight, 0) * netWeight) +
            getGoldRate(grossWeight, 0) * netWeight +
            (polkiType == 0 && category == 'POLKI'
              ? getMakingCharges(0, category, 0)
              : getMakingCharges(0, category, 1)) *
              netWeight +
            total +
            calcWastage(
              3,
              calcWastage(
                goldWastage,
                getGoldRate(grossWeight, 0) * netWeight
              ) +
                getGoldRate(grossWeight, 0) * netWeight +
                (polkiType == 0 && category == 'POLKI'
                  ? getMakingCharges(0, category, 0)
                  : getMakingCharges(0, category, 1)) *
                  netWeight +
                total
            )
          ).toFixed(1)}
          ₹
        </div>
      </div>{' '}
      <div className="buttonsectionaddpage">
        <div className="savebutton">Save Product</div>
        <div className="savebutton">Add as Draft</div>
        <div className="savebutton">Upload Picture</div>
      </div>
    </div>
  );
}
