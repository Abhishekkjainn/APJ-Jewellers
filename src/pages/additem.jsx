import React, { useEffect, useState } from 'react';

const ORNAMENT_TYPES = [
  'Necklace',
  'Ring',
  'Earring',
  'Bracelet',
  'Bangle',
  'Pendant',
  'Anklet',
  'KadaKada',
  'Maang Tikka',
  'Chain',
];

export default function AddItemPage() {
  const [categoriesAddItemPage, setCategoriesAddItemPage] = useState([]);
  const [categoryAddItemPage, setCategoryAddItemPage] = useState('');
  const [subcategoryAddItemPage, setSubcategoryAddItemPage] = useState('');
  const [materialsUsedAddItemPage, setMaterialsUsedAddItemPage] = useState([]);
  const [imageDataAddItemPage, setImageDataAddItemPage] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('categoriesData');
    if (stored) {
      setCategoriesAddItemPage(JSON.parse(stored));
    }
  }, []);

  const handleAddMaterialAddItemPage = () => {
    setMaterialsUsedAddItemPage([
      ...materialsUsedAddItemPage,
      { category: '', subcategory: '', unit: '', quantity: '' },
    ]);
  };

  const handleChangeAddItemPage = (index, field, value) => {
    const updated = [...materialsUsedAddItemPage];
    updated[index][field] = value;

    if (field === 'category') {
      updated[index].subcategory = '';
      updated[index].unit = '';
    }

    if (field === 'subcategory') {
      const sub = categoriesAddItemPage
        .find((c) => c.name === updated[index].category)
        ?.subcategories.find((s) => s.name === value);
      updated[index].unit = sub?.unit || '';
    }

    setMaterialsUsedAddItemPage(updated);
  };

  const handleImageUploadAddItemPage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageDataAddItemPage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveAddItemPage = () => {
    if (!categoryAddItemPage || !subcategoryAddItemPage) {
      alert('Please select both category and ornament type.');
      return;
    }

    const item = {
      id: Date.now().toString(),
      category: categoryAddItemPage,
      ornamentType: subcategoryAddItemPage,
      image: imageDataAddItemPage,
      materials: materialsUsedAddItemPage,
    };

    const existing = JSON.parse(localStorage.getItem('jewelryItems') || '[]');
    localStorage.setItem('jewelryItems', JSON.stringify([...existing, item]));

    alert('Item saved successfully!');

    // Reset form
    setCategoryAddItemPage('');
    setSubcategoryAddItemPage('');
    setImageDataAddItemPage('');
    setMaterialsUsedAddItemPage([]);
  };

  return (
    <div className="additempage">
      <h2>Add Item</h2>

      <select
        value={categoryAddItemPage}
        onChange={(e) => setCategoryAddItemPage(e.target.value)}
        className="input-select-additempage"
      >
        <option value="">Select Category (Metal)</option>
        {categoriesAddItemPage.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>

      <select
        value={subcategoryAddItemPage}
        onChange={(e) => setSubcategoryAddItemPage(e.target.value)}
        className="input-select-additempage"
      >
        <option value="">Select Ornament Type</option>
        {ORNAMENT_TYPES.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUploadAddItemPage}
        className="input-file-additempage"
      />

      {imageDataAddItemPage && (
        <img
          src={imageDataAddItemPage}
          alt="Preview"
          className="image-preview-additempage"
        />
      )}

      <h3 className="mat">Materials Used</h3>
      {materialsUsedAddItemPage.map((material, i) => (
        <div key={i} className="material-row-additempage">
          <select
            value={material.category}
            onChange={(e) =>
              handleChangeAddItemPage(i, 'category', e.target.value)
            }
            className="input-select-additempage asd"
          >
            <option value="">Select Category</option>
            {categoriesAddItemPage.map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          <select
            value={material.subcategory}
            onChange={(e) =>
              handleChangeAddItemPage(i, 'subcategory', e.target.value)
            }
            className="input-select-additempage asd"
            disabled={!material.category}
          >
            <option value="">Select Subcategory</option>
            {categoriesAddItemPage
              .find((cat) => cat.name === material.category)
              ?.subcategories.map((sub) => (
                <option key={sub.name} value={sub.name}>
                  {sub.name}
                </option>
              ))}
          </select>

          <span className="unit-display-additempage">{material.unit}</span>

          <input
            type="number"
            placeholder={`Quantity (${material.unit || 'unit'})`}
            value={material.quantity}
            onChange={(e) =>
              handleChangeAddItemPage(i, 'quantity', e.target.value)
            }
            className="input-number-additempage asd asd2"
            disabled={!material.subcategory}
          />
        </div>
      ))}

      <button
        onClick={handleAddMaterialAddItemPage}
        className="add-button-additempage"
      >
        + Add Material
      </button>

      <button
        onClick={handleSaveAddItemPage}
        className="submit-button-additempage"
        style={{ marginTop: '20px' }}
      >
        Save Item
      </button>
    </div>
  );
}
