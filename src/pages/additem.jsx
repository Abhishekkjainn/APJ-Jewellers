import React, { useState, useEffect } from 'react';

const materialCatalog = {
  Gold: [
    { name: '14K', unit: 'gms' },
    { name: '18K', unit: 'gms' },
  ],
  Silver: [{ name: '925', unit: 'gms' }],
  Platinum: [{ name: '950', unit: 'gms' }],
  Gemstone: [
    { name: 'Ruby', unit: 'pieces' },
    { name: 'Diamond', unit: 'pieces' },
  ],
};

const categories = ['Gold', 'Silver', 'Platinum', 'Gemstone'];
const subcategories = ['Necklace', 'Bangles', 'Rings', 'Earrings'];

export default function AddItemPage() {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [grossWeight, setGrossWeight] = useState('');
  const [materialsUsed, setMaterialsUsed] = useState([]);
  const [newMaterial, setNewMaterial] = useState({
    category: '',
    item: '',
    quantity: '',
  });
  const [availableItems, setAvailableItems] = useState([]);

  useEffect(() => {
    if (newMaterial.category && materialCatalog[newMaterial.category]) {
      setAvailableItems(materialCatalog[newMaterial.category]);
    } else {
      setAvailableItems([]);
    }
  }, [newMaterial.category]);

  const handleAddMaterial = () => {
    if (!newMaterial.category || !newMaterial.item || !newMaterial.quantity)
      return;
    const unit = materialCatalog[newMaterial.category].find(
      (i) => i.name === newMaterial.item
    )?.unit;
    setMaterialsUsed([...materialsUsed, { ...newMaterial, unit }]);
    setNewMaterial({ category: '', item: '', quantity: '' });
  };

  const generateID = () => {
    const existing = JSON.parse(localStorage.getItem('ornaments') || '[]');
    const idNum = existing.length + 1;
    return `APJ${idNum.toString().padStart(3, '0')}`;
  };

  const handleSave = () => {
    if (!category || !subcategory || !grossWeight || materialsUsed.length === 0)
      return;
    const newItem = {
      id: generateID(),
      category,
      subcategory,
      grossWeight,
      materialsUsed,
    };
    const existing = JSON.parse(localStorage.getItem('ornaments') || '[]');
    localStorage.setItem('ornaments', JSON.stringify([...existing, newItem]));

    // Reset
    setCategory('');
    setSubcategory('');
    setGrossWeight('');
    setMaterialsUsed([]);
    setNewMaterial({ category: '', item: '', quantity: '' });
    alert('Item saved!');
  };

  return (
    <div className="addpage-container">
      <h2 className="addpage-title">Add New Ornament</h2>

      <div className="addpage-field">
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="addpage-input"
        >
          <option value="">Select</option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="addpage-field">
        <label>Subcategory:</label>
        <select
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
          className="addpage-input"
        >
          <option value="">Select</option>
          {subcategories.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="addpage-field">
        <label>Gross Weight (gms):</label>
        <input
          type="number"
          value={grossWeight}
          onChange={(e) => setGrossWeight(e.target.value)}
          className="addpage-input"
        />
      </div>

      <div className="addpage-materials">
        <h3>Materials Used</h3>

        <div className="addpage-material-row">
          <div>
            <label>Material Category:</label>
            <select
              value={newMaterial.category}
              onChange={(e) =>
                setNewMaterial({
                  ...newMaterial,
                  category: e.target.value,
                  item: '',
                })
              }
              className="addpage-input"
            >
              <option value="">Select</option>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Item:</label>
            <select
              value={newMaterial.item}
              onChange={(e) =>
                setNewMaterial({ ...newMaterial, item: e.target.value })
              }
              className="addpage-input"
              disabled={!availableItems.length}
            >
              <option value="">Select</option>
              {availableItems.map((i) => (
                <option key={i.name}>{i.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label>
              Quantity (
              {materialCatalog[newMaterial.category]?.find(
                (i) => i.name === newMaterial.item
              )?.unit || ''}
              ):
            </label>
            <input
              type="number"
              value={newMaterial.quantity}
              onChange={(e) =>
                setNewMaterial({ ...newMaterial, quantity: e.target.value })
              }
              className="addpage-input"
              disabled={!newMaterial.item}
            />
          </div>

          <button
            onClick={handleAddMaterial}
            className="addpage-button addpage-button-small"
          >
            Add
          </button>
        </div>

        <ul className="addpage-material-list">
          {materialsUsed.map((mat, idx) => (
            <li key={idx} className="addpage-material-item">
              {mat.quantity} {mat.unit} of {mat.item} ({mat.category})
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleSave} className="addpage-button">
        Save Ornament
      </button>
    </div>
  );
}
