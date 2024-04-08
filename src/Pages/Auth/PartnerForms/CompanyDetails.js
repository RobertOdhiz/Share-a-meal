import React, { useState } from 'react';
import './../../css/styles.css';

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
          <option value='Local Producers'>Local Producer</option>
        </select>
        {formData.partnerType && <h5 className='txt'>Name of {formData.partnerType}</h5>}
        <input
          name='companyName'
          type='text'
          placeholder='Company Name'
          value={formData.companyName}
          onChange={(e) => handleChange(e, 'Partner')}
          required
        />
        <h5 className='txt'>Company Website url</h5>
        <input
          name='website'
          type='text'
          placeholder='Website(optional)'
          value={formData.website}
          onChange={(e) => handleChange(e, 'Partner')}
        />
        <h5 className='txt'>Add Products You Can Sell to us</h5>
        <input
          type='text'
          placeholder='Products'
          value={newProduct}
          onChange={handleProductChange}
        />
        <div style={{ width: "100%" }}>
          <button
            className='btn-add'
            onClick={addProduct}
            style={{ padding: "1em 2em", border: "1px solid gray", borderRadius: "0.25em", cursor: "pointer", color: "white", fontSize: "1.05em", background: "gray" }}
          >
            Add Product
          </button>
          <div
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap", maxHeight: "200px", border: "1px dashed gray", marginTop: "1em", overflow: "auto", gap: "2em", justifyContent: "center", width: "100%", flexDirection: "row" }}
          >
            {formData.products.map((product, index) => (
              <div
                key={index}
                className='product-list'
              >
                <div style={{ minWidth: "100px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span className='list-item'>{product}</span>
                  <button
                    className='btn-add'
                    onClick={() => removeProduct(index)}
                    style={{ margin: "0.5em", padding: "0.25em 0.5em", border: "1px solid gray", borderRadius: "0.25em", cursor: "pointer", color: "gray", fontSize: "1.05em" }}
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h5 className='txt'>How Much can you donate averagely</h5>
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
