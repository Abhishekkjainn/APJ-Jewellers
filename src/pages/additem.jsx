// import React, { useState, useEffect } from 'react';

// const materialCatalog = {
//   Gold: [
//     { name: '14K', unit: 'gms' },
//     { name: '18K', unit: 'gms' },
//   ],
//   Silver: [{ name: '925', unit: 'gms' }],
//   Platinum: [{ name: '950', unit: 'gms' }],
//   Gemstone: [
//     { name: 'Ruby', unit: 'pieces' },
//     { name: 'Diamond', unit: 'pieces' },
//   ],
// };

// const categories = ['Gold', 'Silver', 'Platinum', 'Gemstone'];
// const subcategories = ['Necklace', 'Bangles', 'Rings', 'Earrings'];

// export default function AddItemPage() {
//   const [category, setCategory] = useState('');
//   const [subcategory, setSubcategory] = useState('');
//   const [grossWeight, setGrossWeight] = useState('');
//   const [materialsUsed, setMaterialsUsed] = useState([]);
//   const [newMaterial, setNewMaterial] = useState({
//     category: '',
//     item: '',
//     quantity: '',
//   });
//   const [availableItems, setAvailableItems] = useState([]);

//   useEffect(() => {
//     if (newMaterial.category && materialCatalog[newMaterial.category]) {
//       setAvailableItems(materialCatalog[newMaterial.category]);
//     } else {
//       setAvailableItems([]);
//     }
//   }, [newMaterial.category]);

//   const handleAddMaterial = () => {
//     if (!newMaterial.category || !newMaterial.item || !newMaterial.quantity)
//       return;
//     const unit = materialCatalog[newMaterial.category].find(
//       (i) => i.name === newMaterial.item
//     )?.unit;
//     setMaterialsUsed([...materialsUsed, { ...newMaterial, unit }]);
//     setNewMaterial({ category: '', item: '', quantity: '' });
//   };

//   const generateID = () => {
//     const existing = JSON.parse(localStorage.getItem('ornaments') || '[]');
//     const idNum = existing.length + 1;
//     return `APJ${idNum.toString().padStart(3, '0')}`;
//   };

//   const handleSave = () => {
//     if (!category || !subcategory || !grossWeight || materialsUsed.length === 0)
//       return;
//     const newItem = {
//       id: generateID(),
//       category,
//       subcategory,
//       grossWeight,
//       materialsUsed,
//     };
//     const existing = JSON.parse(localStorage.getItem('ornaments') || '[]');
//     localStorage.setItem('ornaments', JSON.stringify([...existing, newItem]));

//     // Reset
//     setCategory('');
//     setSubcategory('');
//     setGrossWeight('');
//     setMaterialsUsed([]);
//     setNewMaterial({ category: '', item: '', quantity: '' });
//     alert('Item saved!');
//   };

//   return (
//     <div className="addpage-container">
//       <h2 className="addpage-title">Add New Ornament</h2>

//       <div className="addpage-field">
//         <label>Category:</label>
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="addpage-input"
//         >
//           <option value="">Select</option>
//           {categories.map((c) => (
//             <option key={c}>{c}</option>
//           ))}
//         </select>
//       </div>

//       <div className="addpage-field">
//         <label>Subcategory:</label>
//         <select
//           value={subcategory}
//           onChange={(e) => setSubcategory(e.target.value)}
//           className="addpage-input"
//         >
//           <option value="">Select</option>
//           {subcategories.map((s) => (
//             <option key={s}>{s}</option>
//           ))}
//         </select>
//       </div>

//       <div className="addpage-field">
//         <label>Gross Weight (gms):</label>
//         <input
//           type="number"
//           value={grossWeight}
//           onChange={(e) => setGrossWeight(e.target.value)}
//           className="addpage-input"
//         />
//       </div>

//       <div className="addpage-materials">
//         <h3>Materials Used</h3>

//         <div className="addpage-material-row">
//           <div>
//             <label>Material Category:</label>
//             <select
//               value={newMaterial.category}
//               onChange={(e) =>
//                 setNewMaterial({
//                   ...newMaterial,
//                   category: e.target.value,
//                   item: '',
//                 })
//               }
//               className="addpage-input"
//             >
//               <option value="">Select</option>
//               {categories.map((c) => (
//                 <option key={c}>{c}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label>Item:</label>
//             <select
//               value={newMaterial.item}
//               onChange={(e) =>
//                 setNewMaterial({ ...newMaterial, item: e.target.value })
//               }
//               className="addpage-input"
//               disabled={!availableItems.length}
//             >
//               <option value="">Select</option>
//               {availableItems.map((i) => (
//                 <option key={i.name}>{i.name}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label>
//               Quantity (
//               {materialCatalog[newMaterial.category]?.find(
//                 (i) => i.name === newMaterial.item
//               )?.unit || ''}
//               ):
//             </label>
//             <input
//               type="number"
//               value={newMaterial.quantity}
//               onChange={(e) =>
//                 setNewMaterial({ ...newMaterial, quantity: e.target.value })
//               }
//               className="addpage-input"
//               disabled={!newMaterial.item}
//             />
//           </div>

//           <button
//             onClick={handleAddMaterial}
//             className="addpage-button addpage-button-small"
//           >
//             Add
//           </button>
//         </div>

//         <ul className="addpage-material-list">
//           {materialsUsed.map((mat, idx) => (
//             <li key={idx} className="addpage-material-item">
//               {mat.quantity} {mat.unit} of {mat.item} ({mat.category})
//             </li>
//           ))}
//         </ul>
//       </div>

//       <button onClick={handleSave} className="addpage-button">
//         Save Ornament
//       </button>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';

export default function AddItemPage() {
  const [pricesData, setPricesData] = useState([]);
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [grossWeight, setGrossWeight] = useState('');
  const [materialsUsed, setMaterialsUsed] = useState([]);
  const [newMaterial, setNewMaterial] = useState({
    category: '',
    item: '',
    quantity: '',
  });

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

  const handleAddMaterial = () => {
    const { category, item, quantity } = newMaterial;
    if (!category || !item || !quantity) return;

    setMaterialsUsed([...materialsUsed, { category, item, quantity }]);
    setNewMaterial({ category: '', item: '', quantity: '' });
  };

  const handleSave = () => {
    if (
      !category ||
      !subcategory ||
      !grossWeight ||
      materialsUsed.length === 0
    ) {
      alert('Please fill all fields and add at least one material.');
      return;
    }

    // Transform materialsUsed into backend format
    const transformedMaterials = [];

    materialsUsed.forEach(({ category, item, quantity }) => {
      if (!category || !item || !quantity) return;

      let existingGroup = transformedMaterials.find(
        (group) => group.docname === category
      );

      if (!existingGroup) {
        existingGroup = { docname: category };
        transformedMaterials.push(existingGroup);
      }

      existingGroup[item] = parseFloat(quantity);
    });

    const newItem = {
      category,
      subcategory,
      grossWeight: parseFloat(grossWeight),
      materialsUsed: transformedMaterials,
    };

    fetch('https://apjapi.vercel.app/addItem', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert('Item saved successfully!');
          // Reset form
          setCategory('');
          setSubcategory('');
          setGrossWeight('');
          setMaterialsUsed([]);
          setNewMaterial({ category: '', item: '', quantity: '' });
        } else {
          alert('Failed to save item.');
        }
      })
      .catch((err) => {
        console.error('Error saving item:', err);
        alert('An error occurred while saving the item.');
      });
  };

  const getItemsForCategory = (categoryName) => {
    const categoryData = pricesData.find((cat) => cat.docname === categoryName);
    if (!categoryData) return [];

    return Object.keys(categoryData).filter(
      (key) => key !== 'docname' && key !== 'MAKING' && key !== 'WASTAGE'
    );
  };

  return (
    <div className="additems-container">
      <h2 className="additems-title">Add New Ornament</h2>

      <div className="additems-field">
        <label className="additems-label">Category:</label>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setNewMaterial({
              ...newMaterial,
              category: e.target.value,
              item: '',
            });
          }}
          className="additems-input"
        >
          <option value="">Select</option>
          {pricesData.map((cat) => (
            <option key={cat.docname} value={cat.docname}>
              {cat.docname}
            </option>
          ))}
        </select>
      </div>

      <div className="additems-field">
        <label className="additems-label">Subcategory:</label>
        <select
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
          className="additems-input"
        >
          <option value="">Select</option>
          {subcategories.map((subcat) => (
            <option key={subcat} value={subcat}>
              {subcat}
            </option>
          ))}
        </select>
      </div>

      <div className="additems-field">
        <label className="additems-label">Gross Weight (gms):</label>
        <input
          type="number"
          value={grossWeight}
          onChange={(e) => setGrossWeight(e.target.value)}
          className="additems-input"
        />
      </div>

      <div className="additems-materials">
        <h3 className="additems-subtitle">Materials Used</h3>

        <div className="additems-material-row">
          <div className="additems-field">
            <label className="additems-label">Material Category:</label>
            <select
              value={newMaterial.category}
              onChange={(e) =>
                setNewMaterial({
                  ...newMaterial,
                  category: e.target.value,
                  item: '',
                })
              }
              className="additems-input"
            >
              <option value="">Select</option>
              {pricesData.map((cat) => (
                <option key={cat.docname} value={cat.docname}>
                  {cat.docname}
                </option>
              ))}
            </select>
          </div>

          <div className="additems-field">
            <label className="additems-label">Item:</label>
            <select
              value={newMaterial.item}
              onChange={(e) =>
                setNewMaterial({ ...newMaterial, item: e.target.value })
              }
              className="additems-input"
              disabled={!newMaterial.category}
            >
              <option value="">Select</option>
              {getItemsForCategory(newMaterial.category).map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="additems-field">
            <label className="additems-label">Quantity:</label>
            <input
              type="number"
              value={newMaterial.quantity}
              onChange={(e) =>
                setNewMaterial({ ...newMaterial, quantity: e.target.value })
              }
              className="additems-input"
              disabled={!newMaterial.item}
            />
          </div>

          <button
            onClick={handleAddMaterial}
            className="additems-button additems-button-small"
          >
            Add
          </button>
        </div>

        <ul className="additems-material-list">
          {materialsUsed.map((mat, idx) => (
            <li key={idx} className="additems-material-item">
              {mat.quantity} units of {mat.item} ({mat.category})
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleSave} className="additems-button">
        Save Ornament
      </button>
    </div>
  );
}
