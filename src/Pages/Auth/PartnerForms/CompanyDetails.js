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
      <div className='form-fields' id='fields'>
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
        <button
          classname='btn-add'
          onClick={addProduct}
          style={{width: "3em", marginTop: "1em", fontSize: "1em", cursor: "pointer", alignSelf: "center", fontWeight: "bold", border: "none", outline: "none", background: "#c85103", color: "white", boxShadow: "0px 0.25em 0.5em #c85103", padding:"0.5em", borderRadius: "10em"}}
        >
          +
        </button>
      </div>
      {formData.products.map((product, index) => (
        <div key={index} className='product-list'>
          <span className='list-item'>{product}</span>
          <button
            classname='btn-add'
            onClick={() => removeProduct(index)}
            style={{width: "3em", marginTop: "1em", fontSize: "1em", cursor: "pointer", alignSelf: "center", fontWeight: "bold", border: "none", outline: "none", background: "#5e9918", color: "white", boxShadow: "0px 0.25em 1em #5e9918", padding:"0.5em", borderRadius: "10em"}}
            >
              <i class="bi bi-trash3"></i>
            </button>
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
    </div>
  );
};

export default CompanyDetails;
