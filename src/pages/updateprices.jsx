import React, { useState, useEffect } from 'react';

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

  return <div className="update-price-container"></div>;
};

export default UpdatePrice;
