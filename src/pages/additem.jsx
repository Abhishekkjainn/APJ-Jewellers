import React, { useEffect, useState } from 'react';

export default function Additem() {
  const [categories, setCategories] = useState([]);
  const [materialsUsed, setMaterialsUsed] = useState([]);
  const [ornamentName, setOrnamentName] = useState('');
  const [ornamentId, setOrnamentId] = useState('');
  const [imageData, setImageData] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('categoriesData');
    if (stored) {
      setCategories(JSON.parse(stored));
    }
  }, []);

  const handleAddMaterial = () => {
    setMaterialsUsed([
      ...materialsUsed,
      { category: '', subcategory: '', unit: '', quantity: '' },
    ]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...materialsUsed];
    updated[index][field] = value;

    if (field === 'category') {
      updated[index].subcategory = '';
      updated[index].unit = '';
    }

    if (field === 'subcategory') {
      const sub = categories
        .find((c) => c.name === updated[index].category)
        ?.subcategories.find((s) => s.name === value);
      updated[index].unit = sub?.unit || '';
    }

    setMaterialsUsed(updated);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageData(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const item = {
      id: ornamentId || Date.now().toString(),
      name: ornamentName,
      image: imageData,
      materials: materialsUsed,
    };

    const existing = JSON.parse(localStorage.getItem('jewelryItems') || '[]');
    localStorage.setItem('jewelryItems', JSON.stringify([...existing, item]));

    alert('Item saved successfully!');
    // Reset form
    setOrnamentName('');
    setOrnamentId('');
    setImageData('');
    setMaterialsUsed([]);
  };

  return (
    <div className="additem">
      <h2>Add Item</h2>

      <input
        type="text"
        placeholder="Ornament Name"
        value={ornamentName}
        onChange={(e) => setOrnamentName(e.target.value)}
        className="input-text"
      />

      <input
        type="text"
        placeholder="Custom ID (optional)"
        value={ornamentId}
        onChange={(e) => setOrnamentId(e.target.value)}
        className="input-text"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="input-file"
      />

      {imageData && (
        <img src={imageData} alt="Preview" className="image-preview" />
      )}

      <h3>Materials Used</h3>
      {materialsUsed.map((material, i) => (
        <div key={i} className="material-row">
          <select
            value={material.category}
            onChange={(e) => handleChange(i, 'category', e.target.value)}
            className="input-select"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          <select
            value={material.subcategory}
            onChange={(e) => handleChange(i, 'subcategory', e.target.value)}
            className="input-select"
            disabled={!material.category}
          >
            <option value="">Select Subcategory</option>
            {categories
              .find((cat) => cat.name === material.category)
              ?.subcategories.map((sub) => (
                <option key={sub.name} value={sub.name}>
                  {sub.name}
                </option>
              ))}
          </select>

          <span className="unit-display">{material.unit}</span>

          <input
            type="number"
            placeholder={`Quantity (${material.unit || 'unit'})`}
            value={material.quantity}
            onChange={(e) => handleChange(i, 'quantity', e.target.value)}
            className="input-number"
            disabled={!material.subcategory}
          />
        </div>
      ))}
      <button onClick={handleAddMaterial} className="add-button">
        + Add Material
      </button>

      <button
        onClick={handleSave}
        className="submit-button"
        style={{ marginTop: '20px' }}
      >
        Save Item
      </button>
    </div>
  );
}
