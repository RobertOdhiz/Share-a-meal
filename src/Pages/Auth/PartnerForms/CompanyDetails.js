import React, { useState } from 'react';

const CompanyDetails = ({ formData, handleChange }) => {
  const [newProduct, setNewProduct] = useState('');

  const handleProductChange = (e) => {
    setNewProduct(e.target.value);
  };

  const addProduct = () => {
    if (newProduct.trim() !== '') {
      handleChange({ target: { name: 'products', value: [...formData.products, newProduct] } }, 'Partner');
      setNewProduct('');
    }
  };

  const removeProduct = (index) => {
    const updatedProducts = [...formData.products];
    updatedProducts.splice(index, 1);
    handleChange({ target: { name: 'products', value: updatedProducts } }, 'Partner');
  };

  return (
    <div className='form-component'>
      <h1 className='form-sec-title'>Organization Details</h1>
      <select
        name='partnerType'
        value={formData.partnerType}
        onChange={(e) => handleChange(e, 'Partner')}
        required
      >
        <option value=''>Select Partner Type</option>
        <option value='SuperMarket'>SuperMarket</option>
        <option value='Food Vendor'>Food Vendor</option>
        <option value='Farmer'>Farmer</option>
        <option value='Local Producers'>Local Producers</option>
      </select>
      <input
        name='companyName'
        type='text'
        placeholder='Company Name'
        value={formData.companyName}
        onChange={(e) => handleChange(e, 'Partner')}
        required
      />
      <input
        name='website'
        type='text'
        placeholder='Website(optional)'
        value={formData.website}
        onChange={(e) => handleChange(e, 'Partner')}
      />
      <div>
        <input
          type='text'
          placeholder='Products'
          value={newProduct}
          onChange={handleProductChange}
        />
        <button onClick={addProduct}>+</button>
      </div>
      {formData.products.map((product, index) => (
        <div key={index}>
          <span>{product}</span>
          <button onClick={() => removeProduct(index)}>-</button>
        </div>
      ))}
      <input
        name='capacity'
        type='text'
        placeholder='Capacity'
        value={formData.capacity}
        onChange={(e) => handleChange(e, 'Partner')}
        required
      />
    </div>
  );
};

export default CompanyDetails;
