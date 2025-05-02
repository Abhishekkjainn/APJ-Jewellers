// import React, { useState, useEffect } from 'react';

// const unitOptions = ['gm', '%', 'ct'];

// const UpdatePrice = () => {
//   const [categories, setCategories] = useState([
//     { name: 'Gold', subcategories: [] },
//     { name: 'Diamond', subcategories: [] },
//     { name: 'Victorian', subcategories: [] },
//     { name: 'Stones', subcategories: [] },
//     { name: 'Pearls', subcategories: [] },
//   ]);

//   const handleAddSubcategory = (categoryIndex, newSubcategory) => {
//     const updatedCategories = [...categories];
//     updatedCategories[categoryIndex].subcategories.push(newSubcategory);
//     setCategories(updatedCategories);
//   };

//   return (
//     <div className="update-price-container">
//       <h1 className="update-price-heading">Update Prices</h1>
//       {categories.map((category, idx) => (
//         <CategoryCard
//           key={idx}
//           category={category}
//           index={idx}
//           onAddSubcategory={handleAddSubcategory}
//         />
//       ))}
//     </div>
//   );
// };

// const CategoryCard = ({ category, index, onAddSubcategory }) => {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <div className="category-card">
//       <div className="category-header">
//         <h2 className="category-name">{category.name}</h2>
//         <button
//           className="add-subcategory-button"
//           onClick={() => setShowForm(!showForm)}
//         >
//           + Add Subcategory
//         </button>
//       </div>

//       {category.subcategories.map((sub, idx) => (
//         <SubcategoryInput key={idx} subcategory={sub} />
//       ))}

//       {showForm && (
//         <SubcategoryForm
//           onSubmit={(sub) => {
//             onAddSubcategory(index, sub);
//             setShowForm(false);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// const SubcategoryForm = ({ onSubmit }) => {
//   const [name, setName] = useState('');
//   const [unit, setUnit] = useState('gm');
//   const [inputs, setInputs] = useState(1);
//   const [values, setValues] = useState(['']);

//   useEffect(() => {
//     setValues(Array(inputs).fill(''));
//   }, [inputs]);

//   const handleChange = (i, val) => {
//     const newVals = [...values];
//     newVals[i] = val;
//     setValues(newVals);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name.trim()) return;
//     onSubmit({ name, unit, inputs, values });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="subcategory-form">
//       <div className="subcategory-form-row">
//         <input
//           type="text"
//           placeholder="Subcategory Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="input-text"
//           required
//         />
//         <select
//           value={unit}
//           onChange={(e) => setUnit(e.target.value)}
//           className="input-select"
//         >
//           {unitOptions.map((u) => (
//             <option key={u} value={u}>
//               {u}
//             </option>
//           ))}
//         </select>
//         <div className="input-radio-group">
//           {[1, 2, 3].map((n) => (
//             <label key={n} className="radio-label">
//               <input
//                 type="radio"
//                 name="inputs"
//                 checked={inputs === n}
//                 onChange={() => setInputs(n)}
//               />{' '}
//               {n}
//             </label>
//           ))}
//         </div>
//         <button type="submit" className="submit-button">
//           Add
//         </button>
//       </div>
//       <div className="subcategory-values">
//         {values.map((val, i) => (
//           <input
//             key={i}
//             type="number"
//             value={val}
//             onChange={(e) => handleChange(i, e.target.value)}
//             className="input-number"
//             required
//           />
//         ))}
//       </div>
//     </form>
//   );
// };

// const SubcategoryInput = ({ subcategory }) => {
//   return (
//     <div className="subcategory-input">
//       <span className="subcategory-label">
//         {subcategory.name} ({subcategory.unit})
//       </span>
//       {Array.from({ length: subcategory.inputs }).map((_, i) => (
//         <input
//           key={i}
//           type="number"
//           value={subcategory.values[i] || ''}
//           readOnly
//           className="input-number readonly"
//         />
//       ))}
//     </div>
//   );
// };

// export default UpdatePrice;

import React, { useState, useEffect } from 'react';
// import './UpdatePrice.css';

const unitOptions = ['gm', '%', 'ct'];

const UpdatePrice = () => {
  const [categories, setCategories] = useState([
    {
      name: 'Gold',
      subcategories: [],
    },
    {
      name: 'Diamond',
      subcategories: [],
    },
    {
      name: 'Victorian',
      subcategories: [],
    },
    {
      name: 'Stones',
      subcategories: [],
    },
    {
      name: 'Pearls',
      subcategories: [],
    },
  ]);

  const [originalCategories, setOriginalCategories] = useState([]);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    setOriginalCategories(JSON.parse(JSON.stringify(categories)));
  }, []);

  useEffect(() => {
    setIsModified(
      JSON.stringify(categories) !== JSON.stringify(originalCategories)
    );
  }, [categories, originalCategories]);

  const handleAddSubcategory = (categoryIndex, newSubcategory) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].subcategories.push(newSubcategory);
    setCategories(updatedCategories);
  };

  const handleSubcategoryChange = (
    categoryIndex,
    subIndex,
    field,
    value,
    valIndex = null
  ) => {
    const updatedCategories = [...categories];
    const sub = updatedCategories[categoryIndex].subcategories[subIndex];
    if (field === 'values') {
      sub.values[valIndex] = value;
    } else {
      sub[field] = value;
    }
    setCategories(updatedCategories);
  };

  const handleSave = () => {
    console.log('Saved categories:', categories);
    setOriginalCategories(JSON.parse(JSON.stringify(categories)));
    setIsModified(false);
  };

  return (
    <div className="update-price-container">
      <div className="update-price-heading">Update Prices</div>
      {isModified && (
        <button className="submit-button" onClick={handleSave}>
          Save Changes
        </button>
      )}
      {categories.map((category, idx) => (
        <CategoryCard
          key={idx}
          category={category}
          index={idx}
          onAddSubcategory={handleAddSubcategory}
          onChange={handleSubcategoryChange}
        />
      ))}
    </div>
  );
};

const CategoryCard = ({ category, index, onAddSubcategory, onChange }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="category-card">
      <div className="category-header">
        <h2 className="category-name">{category.name}</h2>
        <button
          className="add-subcategory-button"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Subcategory
        </button>
      </div>

      {category.subcategories.map((sub, subIdx) => (
        <SubcategoryInput
          key={subIdx}
          subcategory={sub}
          categoryIndex={index}
          subIndex={subIdx}
          onChange={onChange}
        />
      ))}

      {showForm && (
        <SubcategoryForm
          onSubmit={(sub) => {
            onAddSubcategory(index, sub);
            setShowForm(false);
          }}
        />
      )}
    </div>
  );
};

const SubcategoryForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [unit, setUnit] = useState('gm');
  const [inputs, setInputs] = useState(1);
  const [values, setValues] = useState(['']);

  useEffect(() => {
    setValues(Array(inputs).fill(''));
  }, [inputs]);

  const handleChange = (i, val) => {
    const newVals = [...values];
    newVals[i] = val;
    setValues(newVals);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit({ name, unit, inputs, values });
  };

  return (
    <form onSubmit={handleSubmit} className="subcategory-form">
      <div className="subcategory-form-row">
        <input
          type="text"
          placeholder="Subcategory Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-text"
          required
        />
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="input-select"
        >
          {unitOptions.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
        <div className="input-radio-group">
          {[1, 2, 3].map((n) => (
            <label key={n} className="radio-label">
              <input
                type="radio"
                name="inputs"
                checked={inputs === n}
                onChange={() => setInputs(n)}
              />{' '}
              {n}
            </label>
          ))}
        </div>
        <button type="submit" className="submit-button">
          Add
        </button>
      </div>
      <div className="subcategory-values">
        {values.map((val, i) => (
          <input
            key={i}
            type="number"
            value={val}
            onChange={(e) => handleChange(i, e.target.value)}
            className="input-number"
            required
          />
        ))}
      </div>
    </form>
  );
};

const SubcategoryInput = ({
  subcategory,
  categoryIndex,
  subIndex,
  onChange,
}) => {
  return (
    <div className="subcategory-input">
      <input
        type="text"
        className="input-text"
        value={subcategory.name}
        onChange={(e) =>
          onChange(categoryIndex, subIndex, 'name', e.target.value)
        }
      />
      <select
        className="input-select"
        value={subcategory.unit}
        onChange={(e) =>
          onChange(categoryIndex, subIndex, 'unit', e.target.value)
        }
      >
        {unitOptions.map((u) => (
          <option key={u} value={u}>
            {u}
          </option>
        ))}
      </select>
      <div className="subcategory-values">
        {Array.from({ length: subcategory.inputs }).map((_, i) => (
          <input
            key={i}
            type="number"
            value={subcategory.values[i] || ''}
            onChange={(e) =>
              onChange(categoryIndex, subIndex, 'values', e.target.value, i)
            }
            className="input-number"
          />
        ))}
      </div>
    </div>
  );
};

export default UpdatePrice;
